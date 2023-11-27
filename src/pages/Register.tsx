import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
// import { FirebaseError } from 'firebase/app';
import { useForm } from 'react-hook-form';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

interface RegisterData {
  email: string;
  username: string;
  password: string;
  pwConfirm: string;
  introduce?: string;
  isChecked: boolean;
}

const Register: React.FC = () => {
  const { register, handleSubmit } = useForm<RegisterData>();

  useEffect(() => {
    // 인증 정보 가져오기
    onAuthStateChanged(auth, (user) => {
      console.log('user -> ', user);
      // user == auth.currentUser;
      console.log('auth.currentUser -> ', auth.currentUser);
    });
  }, []);

  const navigate = useNavigate();

  const onClickSubmit = async (data: RegisterData): Promise<void> => {
    try {
      if (data.password === data.pwConfirm) {
        const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
        const { email, username, introduce } = data;
        const newUserInfo = {
          email,
          username,
          introduce,
        };
        addDoc(collection(db, 'users'), newUserInfo);
        // console.log('user -> ', userCredential.user);
        // console.log('userCredential -> ', userCredential);
        alert('회원가입을 완료하였습니다.');
        navigate('/login');
      } else {
        alert('비밀번호를 확인해주세요.');
      }
    } catch (error) {
      // const err = error as FirebaseError;
      // console.log('회원가입 오류', error, '파이어베이스 에러 확인 -> ', err);
      // const errorCode = err.code;
      // const errorMessage = err.message;
      // console.log('error code: ', errorCode, 'error message: ', errorMessage);
      // console.log(error);
      alert('회원가입 실패! 조건에 맞게 입력해주세요.');
    }
  };

  return (
    <>
      <Title>GroovyDev</Title>
      <BG>
        <RegisterBox>
          <RegisterTitle>환영합니다!</RegisterTitle>
          <div>
            <form onSubmit={handleSubmit(onClickSubmit)}>
              <div>
                {/* form 태그를 이용해서 묶어보자 - react-hook-form 참고 또는 사용, required */}

                <h3>이메일 (아이디) *</h3>
                <Input type='email' {...register('email')} placeholder=' 이메일을 입력해주세요' required />
              </div>
              <div>
                <h3>별명 *</h3>
                <Input type='text' {...register('username')} placeholder=' 사용하실 이름을 입력해주세요' required />
              </div>
              <div>
                <h3>비밀번호 *</h3>
                <Input type='password' {...register('password')} placeholder=' 8자리 이상 입력해주세요' required minLength={8} />
              </div>
              <div>
                <h3>비밀번호 확인 *</h3>
                <Input type='password' {...register('pwConfirm')} placeholder=' 동일한 비밀번호를 입력해주세요' required minLength={8} />
              </div>
              <div>
                <h3>프로필 소개</h3>
                <Input type='text' {...register('introduce')} placeholder=' 간단한 소개를 입력해주세요' />
              </div>
              <div>* 은 필수 입력 항목입니다.</div>
              <Check>
                <input type='checkbox' {...register('isChecked')} id='personalInfoAgree' name='personalInfoAgree' required />
                <label>이용약관 개인 정보 수집 및 이용에 동의합니다.</label>
              </Check>
              <div>
                <Btn>가입하기</Btn>
              </div>
            </form>
          </div>
        </RegisterBox>
      </BG>
    </>
  );
};

export default Register;

const Title = styled.h2`
  padding-left: 20px;
`;

const BG = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RegisterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 800px;
  height: 1000px;
  padding: 30px 0 60px 0;
  background-color: rgba(0, 0, 0, 0.27);
  border-radius: 25px;
  margin: 20px 0px;
`;

const RegisterTitle = styled.h1`
  margin-bottom: 40px;
`;

const Input = styled.input`
  width: 450px;
  height: 60px;
`;

const Check = styled.div`
  height: 60px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Btn = styled.button`
  width: 450px;
  height: 75px;
  background-color: rgba(0, 0, 0, 0.3);
  color: snow;
  font-weight: 600;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;
