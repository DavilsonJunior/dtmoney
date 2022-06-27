import { useTransactions } from "../../hooks/useTransactions";
import { formatValueToBRL } from "../../utils/formatValueToBRL";
import { Container } from "./styles";

export function TransactionTable() {
  const { transactions } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>{formatValueToBRL(transaction.amount)}</td>
              <td>Desenvolvimento</td>
              <td>
              {new Intl.DateTimeFormat('pt-BR').format(
                new Date(transaction.createdAt)
              )}
              </td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </Container>
  );
}