import styled from 'styled-components';

export const Container = styled.div`
  span {
    display: flex;
    background-color: #d74761;
    margin: 0 10px;
    padding: 10px 25px;
    cursor: pointer;
    border-radius: 8px;

    font-weight: 600;

    &:hover {
      background-color: #D83150;
    }
  }
`;

export const ColumnArea = styled.div`
  border-radius: 8px;
  width: 250px;
  background-color: #212529;
  margin: 10px;
  padding: 25px;

  .taskTitle {
    display: flex;

    div {
      margin-right: 5px;
    }
  }

  .newTaskWrapper {
    justify-content: center;
    input {
      margin-top: 15px;
      padding: 5px;
      border-radius: 4px;
      width: 95%;
      background: #f2f2f2;
      color: #212529;
    }
  }
  
`;