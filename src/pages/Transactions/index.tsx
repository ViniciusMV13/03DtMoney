import { Header } from "../../components/Header";
import { Summary } from "../../components/summary";
import { PriceHighlight, TransactionTable, TransactionsContainer } from "./styles";

export function Transactions() {
  return(
    <div>
      <Header/>
      <Summary/>
      <TransactionsContainer>
      <TransactionTable>
        <tbody>
          <tr>
            <td width='50%'>Desenvolvimento de site</td>
            <td>
            <PriceHighlight variant="income">R$ 12.212,00</PriceHighlight>
            </td>
            <td>Venda</td>
            <td>13/04/2022</td>
          </tr>
          <tr>
            <td width='50%'>Hamburguer</td>
            <td>
            <PriceHighlight variant="outcome">- R$ 12,00</PriceHighlight>
            </td>
            <td>Alimentação</td>
            <td>13/04/2022</td>
          </tr>
        </tbody>
      </TransactionTable>
      </TransactionsContainer>
    </div>
  )
}