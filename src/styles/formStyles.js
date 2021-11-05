import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin-top: 50px;
  @media(max-width: 760px) {
    padding: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
    width: 300px;
    background: #17191e;
    padding: 50px;
    border-radius: 10px;

    @media(max-width: 760px) {
      width: 200px;
    }
  }
  input {
    background: #2e323a;
    width: 95%;
    padding: 8px 12px;
    border-radius: 8px;
    color: #fff;
  }

  .buttonWrapper {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;


    .login_singInButton {
      color: #fff;
      padding: 5px;
      border-radius: 8px;
      background: #d74761;
      cursor: pointer;

      &:hover {
        background-color: #D83150;
      }
    }

    .register_Button {
      color: #fff;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 40px;

  button {
    
  }

  > div {
    display: flex;
    align-items: center;
    
    img {
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }
  }
`;

export const SignOut = styled.button`
  color: #fff;
  padding: 4px 5px;
  border-radius: 8px;
  background: #d74761;
  cursor: pointer;
  font-weight: 600px;
  
  &:hover {
    background-color: #D83150;
  }
`;

