import styled from "styled-components";

const Styles = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
  padding: 2rem;
  .student-container {
    display: flex;
    flex-direction: row;
    padding: 3rem 0;
    width: 100%;
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
      .grades-list {
        list-style-type: none;
        padding-left: 0;
        margin-top: 1rem;
      }
    }
  }
  button {
    height: 5rem;
    width: 6rem;
    border-radius: 50%;
    border: 0.1rem;
    background-color: transparent;
    font-size: 4rem;
  }
`;

export default Styles;
