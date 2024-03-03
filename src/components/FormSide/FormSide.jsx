import React from "react";
import { Form, Input, Label } from "./FormSide.style";

const FormSide = () => {
  return (
    <div>
      <Form action="">
      <h1>Delivery data</h1>
        <Label htmlFor="">
          Name:
          <Input type="text" placeholder="Lex" />
        </Label>
        <Label htmlFor="">
          Email:
          <Input type="email" placeholder="lex@gmail.com"/>
        </Label>
        <Label htmlFor="">
          Phone:
          <Input type="text" placeholder="+380937779999"/>
        </Label>
        <Label htmlFor="">
          Address:
          <Input type="text" placeholder="Lex"/>
        </Label>
      </Form>
    </div>
  );
};

export default FormSide;
