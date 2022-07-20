import { NavLink } from 'react-router-dom'
import { Button, NoHistoryContainer } from './styles'

export function NoHistory() {
  return (
    <NoHistoryContainer>
      <h3>Você não tem nenhum histórico</h3>
      <Button>
        <NavLink to="/">Começar um agora mesmo</NavLink>
      </Button>
    </NoHistoryContainer>
  )
}
