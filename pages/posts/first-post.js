import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";

export default function FirstPost() {
  const Container = styled.div`
    max-width: 36rem;
    padding: 0 1rem;
    margin: 3rem auto 6rem;
  `;
  return (
    <Container>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Container>
  );
}
