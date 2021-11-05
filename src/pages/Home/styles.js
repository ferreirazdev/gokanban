import styled from 'styled-components';

export const Container = styled.div`
  width: 100Vw;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 50px;
  overflow: auto;
  white-space: nowrap;

  @media(max-width: 760px) {
    padding: 50px 20px;
  }

  .newColumnWrapper {
    display: flex;
  }

  .newColumn{
    width: 95%;
    margin: 0 10px;
    margin-top: 10px;
    justify-content: center;
    input {
      margin-top: 20px;
      padding: 5px;
      border-radius: 4px;
      width: 100%;
      background: #f2f2f2;
      color: #212529;
    }

    
  }

  .addNewColumnWrapper {
    margin: 10px;
    width: 250px;
    span {
      width: 95%;
      display: flex;
      background-color: #d74761;
      margin: 0 10px;
      padding: 8px 25px;
      cursor: pointer;
      border-radius: 8px;

      font-weight: 600;

      &:hover {
        background-color: #D83150;
      }
    }
  }

  
`;