import React, { useEffect, useState } from "react";
import styled from "styled-components";
import UserProfileCard from "./card/UserProfileCard";
import PostCard from "./card/PostCard";
import ContentCard from "./content/ContentCard";
import { Contents } from "../../interface/interface";
import { useInfiniteQuery, useQuery } from "react-query";
import { firstLimitedContents, nextLimitedContents } from "../../fetch/fetch";
import UserProfileCardSkeleton from "./skeleton/UserProfileCardSkeleton";
import PostCardSkeleton from "./skeleton/PostCardSkeleton";
import ContentCardSkeleton from "./skeleton/ContentCardSkeleton";
import { DocumentData } from "firebase/firestore";
import TopContentsCard from "./card/TopContentsCard";

const Main: React.FC<{
  contents: Contents[];
  setContents: React.Dispatch<React.SetStateAction<Contents[]>>;
}> = ({ setContents }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    data: contents,
    isSuccess,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    "contents",
    ({ pageParam }) => {
      return pageParam
        ? nextLimitedContents(pageParam)
        : firstLimitedContents();
    },
    {
      getNextPageParam: (querySnapshots) => {
        if (querySnapshots.size < 5) return undefined;
        else return querySnapshots.docs[querySnapshots.docs.length - 1];
      },
    }
  );

  const handleModalToggle = () => setIsModalOpen(!isModalOpen);

  useEffect(() => {
    let fetching = false;
    const handleScroll = async (e: any) => {
      const { scrollHeight, scrollTop, clientHeight } =
        e.target.scrollingElement;
      if (!fetching && scrollHeight - scrollTop - clientHeight === 0) {
        fetching = true;
        if (hasNextPage) await fetchNextPage();
        fetching = false;
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [fetchNextPage, hasNextPage]);

  return (
    <Base>
      <LeftSideBarContainer>
        {isLoading ? <UserProfileCardSkeleton /> : <UserProfileCard />}
      </LeftSideBarContainer>
      <CenterContainer>
        {isLoading ? <PostCardSkeleton /> : <PostCard />}

        <ContentsList onClick={handleModalToggle}>
          {isLoading ? (
            <>
              <ContentCardSkeleton />
              <ContentCardSkeleton />
              <ContentCardSkeleton />
            </>
          ) : (
            contents?.pages
              .flatMap((page) =>
                page.docs.map((doc: DocumentData) => doc.data())
              )
              .map((content) => (
                <ContentCard
                  key={content.id}
                  content={content}
                  setContents={setContents}
                />
              ))
          )}
          {isFetchingNextPage && (
            <>
              <ContentCardSkeleton />
              <ContentCardSkeleton />
              <ContentCardSkeleton />
            </>
          )}
        </ContentsList>
      </CenterContainer>
      <RightSideBarContainer>
        <TopContentsCard contents={contents}/>
      </RightSideBarContainer>
    </Base>
  );
};

export default Main;

const Base = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;

  gap: 30px;

  margin: 0 auto;

  max-width: 1280px;
  min-height: 90%;

  padding: 15px 0 50px 0;
  margin-top: 20px;

  position: relative;
  padding-bottom: 200px;
`;

const LeftSideBarContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;

  position: sticky;
  top: 90px;

  flex: 1;
`;

const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 20px;

  height: 100%;
  flex: 2;
`;

const RightSideBarContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;

  position: sticky;
  top: 90px;

  flex: 1;
`;

const ContentsList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 25px;
`;
