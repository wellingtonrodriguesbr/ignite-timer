import styled from 'styled-components'

export const HomeContainer = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 0 3rem 0;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }

  @media (max-width: 700px) {
    justify-content: start;
    margin-top: 4rem;
  }
`

const BaseButtonCountdown = styled.button`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  cursor: pointer;
  transition: 0.2s ease;
  font-weight: bold;
`

export const StartCountdownButton = styled(BaseButtonCountdown)`
  background-color: ${(props) => props.theme['green-500']};
  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['green-700']};
  }

  &:disabled {
    background-color: ${(props) => props.theme['green-700']};
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StopCountdownButton = styled(BaseButtonCountdown)`
  background-color: ${(props) => props.theme['red-500']};
  &:hover {
    background-color: ${(props) => props.theme['red-700']};
  }
`
