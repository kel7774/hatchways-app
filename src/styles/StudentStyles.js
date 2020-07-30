import styled from "styled-components";

const Styles = styled.section`
  text-align: left;
  padding: 2rem;
  .student-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 3rem 0;
    h1 {
      font-size: 3rem;
    }
    img {
      height: 12rem;
      width: 13rem;
      border-radius: 50%;
      border: 0.1rem solid grey;
    }
    .student-details {
      padding-left: 3rem;
    }
  }
`;

export default Styles;
