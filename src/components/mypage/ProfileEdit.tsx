import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import Template from '../main/Template';
import { auth } from '../../firebase';
import { db } from '../../firebase';
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import { useForm } from 'react-hook-form';
import AWS from 'aws-sdk';

interface UserInfo {
  userEmail: string;
  userIntroduce: string;
  username: string;
  userImg: string;
  userIsProjectOpen: boolean;
  userCompany: string;
  userPosition: string;
  userSkill: string;
  userCareer: string[];
}

// interface SetUserInfo {
//   setUserEmail: React.Dispatch<React.SetStateAction<string>>;
//   setUserIntroduce: React.Dispatch<React.SetStateAction<string>>;
//   setUsername: React.Dispatch<React.SetStateAction<string>>;
//   setUserImg: React.Dispatch<React.SetStateAction<string>>;
//   setUserIsProjectOpen: React.Dispatch<React.SetStateAction<boolean>>;
//   setUserCompany: React.Dispatch<React.SetStateAction<string>>;
//   setUserPosition: React.Dispatch<React.SetStateAction<string>>;
//   setUserCareerStart: React.Dispatch<React.SetStateAction<string>>;
//   setUserCareerEnd: React.Dispatch<React.SetStateAction<string>>;
//   setUserCareerText: React.Dispatch<React.SetStateAction<string>>;
//   setUserSkill: React.Dispatch<React.SetStateAction<string>>;
//   setUserCareer: React.Dispatch<React.SetStateAction<string[]>>;
// }

type ProfileData = Partial<UserInfo>;

const ProfileEdit: React.FC = () => {
  const { register, handleSubmit } = useForm<ProfileData>();

  const [userEmail, setUserEmail] = useState('');
  const [userIntroduce, setUserIntroduce] = useState('');
  const [username, setUsername] = useState('');
  const [userImg, setUserImg] = useState('');
  const [userIsProjectOpen, setUserIsProjectOpen] = useState(false);
  const [userCompany, setUserCompany] = useState('');
  const [userPosition, setUserPosition] = useState('');
  const [userCareerStart, setUserCareerStart] = useState('');
  const [userCareerEnd, setUserCareerEnd] = useState('');
  const [userCareerText, setUserCareerText] = useState('');
  const [userSkill, setUserSkill] = useState('');
  const [userCareer, setUserCareer] = useState<string[]>([userCareerStart, userCareerEnd, userCareerText]);

  const userInfo = { introduce: userIntroduce, img: userImg, isProjectOpen: userIsProjectOpen, company: userCompany, position: userPosition, skill: userSkill, career: userCareer };

  const navigate = useNavigate();

  const user = auth.currentUser;

  useEffect(() => {
    // console.log(user);
    if (user && user !== null && user.email !== null) {
      const docRef = doc(db, 'users', user.email);

      const fetchUserData = async () => {
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log('Document data -> ', docSnap.data(), 'no function -> ', docSnap.data);
          const { email, img, introduce, username, isProjectOpen, company, position, skill, career } = docSnap.data();
          // console.log(email, introduce, username, img);
          setUserEmail(email);
          setUserIntroduce(introduce);
          setUsername(username);
          setUserImg(img);
          setUserIsProjectOpen(isProjectOpen);
          setUserCompany(company);
          setUserPosition(position);
          setUserSkill(skill);
          setUserCareer(career);
        } else {
          console.log('No such document!');
          alert('로그인 후 이용 가능합니다.');
          navigate('/login');
        }
      };
      fetchUserData();
    }
  }, [user]);

  const onClickImgChangeHandler = async () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();
    input.addEventListener('change', async () => {
      //이미지를 담아 전송할 file을 만든다
      const file = input.files?.[0];
      try {
        //업로드할 파일의 이름으로 Date 사용
        const name = userEmail;
        //생성한 s3 관련 설정들
        AWS.config.update({
          region: process.env.REACT_APP_AWS_S3_BUCKET_REGION,
          accessKeyId: process.env.REACT_APP_AWS_S3_BUCKET_ACCESS_KEY_ID,
          secretAccessKey: process.env.REACT_APP_AWS_S3_BUCKET_SECRET_ACCESS_KEY,
        });
        //앞서 생성한 file을 담아 s3에 업로드하는 객체를 만든다
        const upload = new AWS.S3.ManagedUpload({
          params: {
            ACL: 'public-read',
            Bucket: 'groovy-dev-image', //버킷 이름
            Key: `upload/${name}`,
            Body: file,
          },
        });
        //이미지 업로드 후
        //곧바로 업로드 된 이미지 url을 가져오기
        const res = await upload.promise();
        const IMG_URL = res.Location;
        return setUserImg(IMG_URL);
      } catch (error) {
        console.log(error);
      }
    });
  };

  const onClickUpdateHandler = async () => {
    if (user && user !== null && user.email !== null) {
      const docRef = doc(db, 'users', user.email);
      await updateDoc(docRef, { ...userInfo });
      alert('프로필이 변경되었습니다.');
      navigate('/mypage');
    }
  };

  return (
    <Template>
      <NavBar>
        <FaArrowLeftLong style={{ fontSize: '25', width: '60px', cursor: 'pointer' }} onClick={() => navigate('/mypage')} />
        <Logo onClick={() => navigate('/')}>GroovyDev</Logo>
        <div>
          <CompleteBtn onClick={onClickUpdateHandler}>완료</CompleteBtn>
        </div>
      </NavBar>
      <BG>
        <ProfileHeaderBox>
          <BasicProfile>
            <div>
              <ProfileImg src={userImg} alt='' onClick={onClickImgChangeHandler} />
            </div>
            <h5 style={{ margin: '5px 0 25px 0', opacity: '0.5' }}>프로필 사진을 수정하려면 이미지를 클릭해주세요</h5>
            <h2 style={{ marginBottom: '0' }}>{username}</h2>
            <div style={{ opacity: '0.5', marginBottom: '15px' }}>{userEmail}</div>
            <h4 style={{ margin: '0 0 15px 0', opacity: '0.7' }}>
              <ShortInput type='text' placeholder='소속' value={userCompany} onChange={(e) => setUserCompany(e.target.value)} />
              <ShortInput type='text' placeholder='직무' value={userPosition} onChange={(e) => setUserPosition(e.target.value)} />
            </h4>
            <div>
              <Input type='text' placeholder='소개' value={userIntroduce} onChange={(e) => setUserIntroduce(e.target.value)} />
            </div>
          </BasicProfile>
        </ProfileHeaderBox>
        <ProfileDetailBox>
          <SkillBox>
            <h3>스킬</h3>
            <h5 style={{ margin: '0 0 20px 0', opacity: '0.5' }}>'Java,Spring,Kotlin' 과 같이 작성해주세요</h5>
            <SkillList>
              <Input
                type='text'
                value={userSkill}
                onChange={(e) => {
                  setUserSkill(e.target.value);
                }}
              />
            </SkillList>
          </SkillBox>
          <div>
            <h3>이력</h3>
            <h5 style={{ margin: '0 0 0 0', opacity: '0.5' }}>'2020.03.' ~ '2022.02.'</h5>
            <h5 style={{ margin: '0 0 20px 0', opacity: '0.5' }}>'항해99 17기 React' 와 같이 작성해주세요'</h5>
            <div>
              <form action=''>
                <ShortInput type='text' placeholder='2020.03.' value={userCareerStart} onChange={(e) => setUserCareerStart(e.target.value)} /> ~{' '}
                <ShortInput type='text' placeholder='2022.02.' value={userCareerEnd} onChange={(e) => setUserCareerEnd(e.target.value)} />
                <CareerInput type='text' placeholder='항해99 17기 React' value={userCareerText} onChange={(e) => setUserCareerText(e.target.value)} />
              </form>
            </div>
          </div>
        </ProfileDetailBox>
      </BG>
    </Template>
  );
};

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1280px;
  height: 70px;
  padding: 0 15px;
  transition: all 0.2s ease-in-out;
`;

const Logo = styled.div`
  font-size: 26px;
  font-weight: bold;

  font-family: 'Josefin Sans', sans-serif;
  cursor: pointer;
`;

const CompleteBtn = styled.button`
  width: 60px;
  height: 40px;
  background-color: snow
  color: rgb(51, 65, 85);
  font-weight: 700;
  font-size: 1rem;
  border: solid 1px rgb(100, 116, 139);
  border-radius: 0.25rem;
  padding: 0.75rem, 1rem;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  &:active {
    opacity: 0.7;
  }
`;

const BG = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileHeaderBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 400px;
  padding: 50px;
  background-color: none;
  border-radius: 25px;
  margin: 20px 0px;
`;

const BasicProfile = styled.div``;

const ProfileImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  /* border: 1px solid rgb(221, 221, 221); */
  cursor: pointer;
  /* &:hover {} */
`;

const ProfileDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  padding: 50px;
  background-color: none;
  border-radius: 25px;
  margin: 20px 0px;
`;

const SkillBox = styled.div`
  margin-bottom: 50px;
`;

const SkillList = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Input = styled.input`
  width: 400px;
`;

const ShortInput = styled.input`
  width: 150px;
`;

const CareerInput = styled.input`
  width: 400px;
`;

export default ProfileEdit;
