import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 35px;
  border: 1px solid #ccc;
  padding-left:35px;
  padding-right:35px;
  padding-top: 40px;
  padding-bottom: 180px;
  border-radius: 10px;
  margin-top: auto;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
export const Label = styled.label`
  display: flex;
  justify-content: center;
  text-align: start;
  flex-direction: column;
`;
export const Input = styled.input`
  width: 500px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;

  &::placeholder {
  }
  &:focus {
    outline: none;
     border: 2px solid rgba(233, 235, 117, 0.5);
    transition-duration: 400ms;
  }
`;
