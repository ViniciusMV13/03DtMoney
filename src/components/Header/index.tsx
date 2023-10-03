import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import DTMoneyLogo from '../../assets/DTMoneyLogo.svg'

export function Header() {
  return(
    <HeaderContainer>
      <HeaderContent>
        <img src={DTMoneyLogo} alt="" />

        <NewTransactionButton>Nova Transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}