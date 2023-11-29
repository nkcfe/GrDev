// import { FirebaseError } from 'firebase/app';

import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

interface LoginData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<LoginData>();

  const user = auth.currentUser;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // console.log('user -> ', user);
      console.log('auth.currentUser -> ', auth.currentUser);
    });
  }, []);

  const navigate = useNavigate();

  const login = async (data: LoginData) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      // console.log(userCredential);
      // user.getIdToken();
      navigate('/');
    } catch (error) {
      // const err = error as FirebaseError;
      // console.log('로그인 오류', error, '파이어베이스 에러 확인 -> ', err);
      // const errorCode = err.code;
      // const errorMsg = err.message;
      // console.log('error with login', errorCode, errorMsg);
      alert('이메일과 비밀번호를 확인해주세요.');
    }
  };

  return (
    <BG>
      <h2>GroovyDev</h2>
      <LoginBox>
        <LoginTitle>Hello World!</LoginTitle>
        <form onSubmit={handleSubmit(login)}>
          <div>
            <div>
              <h3>아이디</h3>
              <Input type='email' {...register('email')} />
            </div>
            <div>
              <h3>비밀번호</h3>
              <Input type='password' {...register('password')} />
            </div>
          </div>
          <Btns>
            <Btn type='submit'>로그인</Btn>
            <Btn type='button' onClick={() => navigate('/register')}>
              회원가입
            </Btn>
          </Btns>
        </form>
      </LoginBox>
    </BG>
  );
};

export default Login;

const BG = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 800px;
  height: 700px;
  padding: 80px 0px;
  background-color: rgba(0, 0, 0, 0.27);
  border-radius: 25px;
  margin: 30px 0px;
`;

const LoginTitle = styled.h1`
  margin-top: 5px;
`;

const Input = styled.input`
  width: 450px;
  height: 60px;
`;

const Btns = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin: 50px 0;
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
