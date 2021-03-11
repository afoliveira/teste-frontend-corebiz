import styled from 'styled-components'

export const Container = styled.header`
  background-color: #fff;
  height: 80px;
  max-width: 1220px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`; 

export const Logo = styled.img`
  max-width: 170.14px;
  max-height: 41px;
`;

export const ContainerInput = styled.div`
  display: flex;
  width: 718px;
  position: relative;

  & .input__field {
    width: 100%;
    border: none;
    border-bottom: 1px solid #7A7A7A;
    outline: none;
  }

  & .input__icon {
    position: absolute;
    right: 0;
    bottom: 5px;
    padding: 2px 4px;
  }
`;

export const ContainerUser = styled.div`
  display: flex;

  & .account {
    margin-right: 21px;

    & .account__img {
      margin-right: 5px;
    }
    & .account__title {
      color: #7a7a7a;
      font-size: 13px;
      line-height: 17.73px;
    }
  }
`;
