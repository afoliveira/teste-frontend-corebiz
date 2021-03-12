import styled from 'styled-components';

export const  ContainerFooter = styled.footer`
  background-color: #000;
  padding: 30px;

  & .footer {
    display: flex;
    flex-wrap: wrap;
    max-width: 1250px;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }

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
    margin: 16px 0
  }

  & .footer__info {
    font-size: 0.813rem;
  }

  & .footer__contact {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & .footer__contact__info {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 195px;
    background-color: #fff;
    border-radius: 5px;
  }

  & .email {
    padding: 12px 17px;
    margin-bottom: 30px;
  }

  & .consultor {
    padding: 5px 17px;
  }

  & .footer__contact__info img {
    margin-right: 17px;
  }

  & .footer__contact__info p {
    color: #000;
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 600;
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
