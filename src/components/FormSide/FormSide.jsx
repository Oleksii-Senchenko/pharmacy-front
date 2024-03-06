import React, { useContext } from "react";
import { Form, Input, Label } from "./FormSide.style";
import { Context } from "../../context";

const FormSide = () => {
  const { setName, setEmail, setPhone, setAddress } = useContext(Context);
  return (
    <div>
      <Form action="">
        <h1>Delivery data</h1>
        <Label htmlFor="">
          Name:
          <Input
            type="text"
            placeholder="Lex"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Label>
        <Label htmlFor="">
          Email:
          <Input
            type="email"
            placeholder="lex@gmail.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Label>
        <Label htmlFor="">
          Phone:
          <Input
            type="text"
            placeholder="+380937779999"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </Label>
        <Label htmlFor="">
          Address:
          <Input
            type="text"
            placeholder="Lex"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </Label>
      </Form>
    </div>
  );
};

export default FormSide;
