import {React} from 'react';
import {Container, Logo, ContainerInput, ContainerUser, MenuHamburguer} from './styles';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../../assets/logo.svg'
import logoResponsivo from '../../assets/logo-responsiva.svg'
import search from '../../assets/icons/search.svg'
import user from '../../assets/icons/user.svg'
import cart from '../../assets/icons/cart.svg'


export default function Header () {
  return (
    <Container>
      <Logo src={window.innerWidth > 800 ? logo : logoResponsivo}/>
      <MenuHamburguer>
        <GiHamburgerMenu />
      </MenuHamburguer>
      <ContainerInput>
        <input
          className='input__field'
          type= 'text'
          defaultValue= ''
          placeholder= 'O que está procurando?'
          id='search'
        />
        <img className='input__icon' src={search}/>
      </ContainerInput>
      <ContainerUser>
        <div className='account'>
          <img className='account__img' src={user}></img>
          <span className='account__title'>Minha Conta</span>
        </div>
        <div className='cart'>
          <img src={cart} />
        </div>
      </ContainerUser>
    </Container>
  )
}
