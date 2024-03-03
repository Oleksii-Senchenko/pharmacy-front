import React from "react";
import {
  Footers,
  Containers,
  Item,
  List,
  Btn,
  SubmitContainer,
  Price,
  Advertising,
} from "./Footer.styled";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Notiflix from "notiflix";
import { takeValue } from "../../redux/medick/operations";

const Footer = () => {
  const location = useLocation();
  const total = useSelector((state) => state.medick.total);
  const isOnBucketPage = location.pathname === "/basket";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (total === 0) {
      Notiflix.Notify.warning("Cart is empty🤔");
      navigate(-1);
      return;
    }
    Notiflix.Notify.success("Thank you for your attention ❤️");
    dispatch(takeValue(0));
    navigate(-1);
  };
  return (
    <Footers>
      <Containers>
        <List>
          <Item>
            <Advertising href="https://oleksii-senchenko.github.io/my-cv/">
              CV
            </Advertising>
          </Item>
          <Item>
            <Advertising href="https://github.com/Oleksii-Senchenko">
              GitHub
            </Advertising>
          </Item>
          <Item>
            <Advertising href="https://oleksii-senchenko.github.io/my-cv/">
              Linkidin
            </Advertising>
          </Item>
          <Item>
            <Advertising href="https://www.linkedin.com/in/oleksii-senchenko-601759292/">
              Telegram
            </Advertising>
          </Item>
        </List>
      </Containers>
      {isOnBucketPage && (
        <SubmitContainer>
          <Price>Total: {total}$</Price>
          <Btn
            onClick={() => {
              handleSubmit()
            }}
          >
            Submit
          </Btn>
        </SubmitContainer>
      )}
    </Footers>
  );
};
export default Footer;
