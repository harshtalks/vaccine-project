import styled from "styled-components";

const Main = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  h2 {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 3em;
  }

  form {
    display: flex;
    flex-direction: column;
    input {
      font-size: 2rem;
      padding: 0.2em 3em;
      outline: none;
      background: #6c757d;
      border: none;
      margin-bottom: 1em;
      border-radius: 1em;

      &::placeholder {
        color: white;
        font-weight: 400;
      }
    }
    button {
      font-size: 2.3rem;
      margin-bottom: 2em;
      background: #606c88; /* fallback for old browsers */
      background: -webkit-linear-gradient(
        to right,
        #3f4c6b,
        #606c88
      ); /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(
        to right,
        #3f4c6b,
        #606c88
      ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      color: white;
      border: none;
      outline: none;
      padding: 0.3em 2em;
      border-radius: 1em;
    }
  }
`;

const Comp = () => {
  return (
    <Main>
      <h2>Check Vaccine Availability Nearby</h2>
      <form>
        <input type="text" placeholder="Enter Your pincode" />
        <button>Find</button>
      </form>
    </Main>
  );
};

export default Comp;
