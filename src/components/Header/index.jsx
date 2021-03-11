import {React} from 'react';
import {Container, Logo, ContainerInput, ContainerUser} from './styles';
import logo from '../../assets/logo.svg'
import search from '../../assets/icons/search.svg'
import user from '../../assets/icons/user.svg'
import cart from '../../assets/icons/cart.svg'


export default function Header () {
  return (
    <Container>
      <Logo src={logo}/>
      <ContainerInput>
        <input 
          className='input__field'
          type= 'text'
          defaultValue= ''
          placeholder= 'O que está procurando?'
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