import styled from "styled-components";

const Head = styled.div`
  height: 98vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Raleway", sans-serif;

  h1 {
    font-size: 4rem;
    text-transform: uppercase;
    letter-spacing: 1.5rem;
    text-align: center;
    @media (max-width: 1022px) {
      font-size: 4rem;
      letter-spacing: 0.4rem;
    }
    @media (max-width: 768px) {
      font-size: 3.5rem;
      letter-spacing: 0.4rem;
    }
    @media (max-width: 576px) {
      font-size: 2.5rem;
      letter-spacing: 0.1rem;
    }
  }

  p {
    width: 80%;
    text-align: center;
    margin: 0 auto;
    color: #adb5bd;
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

const Title = () => {
  return (
    <Head>
      <h1>Virtual Hugs, Stop the Bugs</h1>
      <p>
        Help fight corona by joining the biggest vaccination drive of the world.
      </p>
      <p>Get Vaccinated Today </p>
    </Head>
  );
};

export default Title;
