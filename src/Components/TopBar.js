import styled from "styled-components";

const Bar = styled.div`
  width: 100%;
  height: 2vh;
  background: #fbd3e9; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #bb377d,
    #fbd3e9
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #bb377d,
    #fbd3e9
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const TopBar = () => {
  return <Bar></Bar>;
};

export default TopBar;
