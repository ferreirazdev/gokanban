import styled from "styled-components";

import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

export const Container = styled.div`
  background-color: #2e323a;
  color: #f2f2f2;
  border-radius: 8px;
  padding: 0 10px;
  margin-top: 15px;

  .taskInfoWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > img {
      cursor: pointer;
      justify-self: center;
      
    }
  }

  .tagsWrapper {

    .react-tag-input {
      display: flex;
      background: none;
      border: none;
      color: #fff;
    }
    .react-tag-input__input::placeholder {
        color: #CCC;
        opacity: 0;

        @media(max-width: 760px) {
          opacity: 1;
        }
    }
    .react-tag-input__input:hover::placeholder {
        opacity: 1;
    }

    .react-tag-input__input {
      margin: 10px;
      color: #fff;
      font-size: 13px;
    }

    .react-tag-input__tag {
      
      background-color: #d74761;
      border-radius: 4px;
      color: #fff;
    }

    .react-tag-input__tag__content {
      font-size: 12px;
      font-weight: 700;
    }

    .react-tag-input__tag__remove {
      color: #fff;
      background: none;
      opacity: 0;

    }

    .react-tag-input__tag:hover .react-tag-input__tag__remove {
        opacity: 1;
        color: #fff;
    }

    .react-tag-input__tag__remove:before, .react-tag-input__tag__remove:after {
      background: #fff; /* X icon in remove button */
    }

    
  }
`;

export const Tags = styled(ReactTagInput)`
  border: 0;
`;