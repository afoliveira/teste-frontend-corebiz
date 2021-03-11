import styled from 'styled-components';

export const  ContainerFooter = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  background-color: #000;
  padding: 30px;

  & .footer__item {
    color: #fff;
  }

  & .footer__header {
    font-weight: 700;
    font-size: 20px;
    line-height: 27.28px;
    font-style: normal;
  }

  .footer__header::after {
    display: block;
    content: '';
    background-color: #fff;
    height: 5px;
    width: 44.94px;
  }

  & .footer__info {
    font-size: 13px;
  }

  & .footer__contact__info {
    display: flex;
    justify-content: center;
    background-color: #fff;
    padding: 12px 17px;
    border-radius: 5px;
    margin-bottom: 30px;
  }

  & .footer__contact__info img {
    margin-right: 17px;
  }

  & .footer__contact__info p {
    color: #000;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 16.37px;
  }

  & .footer__brand {
    display: flex;
  }

  & .footer__brand__item {
    display: flex;
    flex-direction: column;
    color: #fff;
    font-size: 11px;
  }

  & .footer__brand :first-child {
    margin-right: 25px
  }
`;
