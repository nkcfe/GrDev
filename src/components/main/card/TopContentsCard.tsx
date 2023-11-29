import { DocumentData, QuerySnapshot } from "firebase/firestore";
import React from "react";
import { InfiniteData } from "react-query";
import styled from "styled-components";

const TopContentsCard: React.FC<{
  contents: InfiniteData<QuerySnapshot<DocumentData, DocumentData>> | undefined;
}> = ({ contents }) => {
  return (
    <Base>
      <HeaderTitle>주간 인기 TOP 10</HeaderTitle>
      <HeaderSubTitle>인기있는 게시물이에요.</HeaderSubTitle>
      <List>
        {contents?.pages
          .flatMap((page) => page.docs.map((doc: DocumentData) => doc.data()))
          .map((content, index) => (
            <Item key={index}>
              <Rank>{index + 1}</Rank>

              <UserProfile></UserProfile>
              <ItemTitle></ItemTitle>
              <UserInfoWrapper>
                <UserName></UserName>
                <UserInfo></UserInfo>
              </UserInfoWrapper>
            </Item>
          ))}
      </List>
    </Base>
  );
};

export default TopContentsCard;

const Base = styled.div`
  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.color.bg};

  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 15px;

  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }
`;

const HeaderTitle = styled.div``;

const HeaderSubTitle = styled.div``;

const List = styled.div``;

const Item = styled.div``;

const Rank = styled.div``;

const UserProfile = styled.div``;

const ItemTitle = styled.div``;

const UserInfoWrapper = styled.div``;

const UserName = styled.div``;

const UserInfo = styled.div``;
