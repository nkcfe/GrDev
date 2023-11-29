import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
// import { onAuthStateChanged } from 'firebase/auth';
import styled from 'styled-components';
import { db } from '../firebase';
import { getDoc, doc } from 'firebase/firestore';
import Template from '../components/main/Template';
import Navbar from '../components/main/Navbar';

// interface UserInfo {
//   userEmail: string;
//   userIntroduce: string;
//   username: string;
//   userImg: string;
//   userIsProjectOpen: boolean;
//   userCompany: string;
//   userPosition: string;
//   userSkill: [];
//   userCareer: [];
// }

const MyPage = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userIntroduce, setUserIntroduce] = useState('');
  const [username, setUsername] = useState('');
  const [userImg, setUserImg] = useState('');
  const [userIsProjectOpen, setUserIsProjectOpen] = useState(false);
  const [userCompany, setUserCompany] = useState('');
  const [userPosition, setUserPosition] = useState('');
  const [userSkill, setUserSkill] = useState<string>('');
  const [userCareer, setUserCareer] = useState<string[]>([]);

  const navigate = useNavigate();

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     console.log('auth.currentUser -> ', auth.currentUser);
  //   });
  // }, []);

  const user = auth.currentUser;

  useEffect(() => {
    if (user && user !== null && user.email !== null) {
      const docRef = doc(db, 'users', user.email);

      const fetchUserData = async () => {
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log('Document data -> ', docSnap.data(), 'no function -> ', docSnap.data);
          const { email, img, introduce, username, isProjectOpen, company, position, skill, career } = docSnap.data();

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

  // console.log(userEmail, userIntroduce, username, userImg, userIsProjectOpen, userCompany, userPosition, userSkill, userCareer);

  return (
    <Template>
      <Navbar />
      <BG>
        <ProfileHeaderBox>
          <BasicProfile>
            <ProfileImg src={userImg} alt='' />
            <h2 style={{ marginBottom: '0' }}>{username}</h2>
            <div style={{ opacity: '0.5', marginBottom: '5px' }}>{userEmail}</div>
            <h4 style={{ margin: '0 0 15px 0', opacity: '0.7' }}>
              {userCompany} {userPosition}
            </h4>
            <div>{userIntroduce}</div>
          </BasicProfile>
          <EditBtnBox>
            <Btn onClick={() => navigate('/mypage/edit')}>프로필 편집</Btn>
          </EditBtnBox>
        </ProfileHeaderBox>
        <ProfileDetailBox>
          <SkillBox>
            <h3>스킬</h3>
            <SkillList>
              {userSkill &&
                userSkill.split(',').map((skill) => {
                  return <SkillDiv key={skill}>{skill}</SkillDiv>;
                })}
            </SkillList>
          </SkillBox>
          <div>
            <h3>이력</h3>
          </div>
        </ProfileDetailBox>
      </BG>
    </Template>
  );
};

export default MyPage;

const BG = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileHeaderBox = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: flex-start;
  justify-content: space-between;
  width: 800px;
  /* height: 1000px; */
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
`;

const EditBtnBox = styled.div`
  margin-top: 50px;
`;

const Btn = styled.button`
  width: 120px;
  height: 50px;
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

const ProfileDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 800px;
  height: 1000px;
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

const SkillDiv = styled.div`
  background-color: snow;
  color: #ff8800;
  border: 1px solid #ff8800;
  border-radius: 0.25rem;
  padding: 2px 6px;
  text-align: center;
  font-size: 0.9rem;
`;

const CareerBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
