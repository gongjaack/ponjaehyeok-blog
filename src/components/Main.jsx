import { useRouter } from "next/router";
import styled from "styled-components";

import SectionHeader from "../../@shared/components/SectionHeader";
import PostCell from "./PostCell";
import PageConsole from "./PageConsole";

function Main({ posts, hasPrevPage, hasNextPage }) {
  const {
    query: { pageIndex },
  } = useRouter();

  return (
    <MainContainer>
      <SectionHeader>
        {pageIndex ? `page ${pageIndex}` : "latest"}
      </SectionHeader>
      <PostList>
        {posts.map(({ title, description, tags, date }) => (
          <PostCell
            title={title}
            description={description}
            tags={tags}
            published={date}
            key={title}
          />
        ))}
      </PostList>
      <PageConsole hasPrevPage={hasPrevPage} hasNextPage={hasNextPage} />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 40rem;
  padding: 1rem 3rem;

  @media screen and (max-width: 56rem) {
    gap: 3rem;
    width: 100%;
    padding: 0;
  }
`;

const PostList = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2.3rem;

  @media screen and (max-width: 56rem) {
    gap: 3.4rem;
  }
`;

export default Main;