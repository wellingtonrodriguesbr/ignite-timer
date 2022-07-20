import styled from 'styled-components'

export const NoHistoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  h3 {
    font-size: 1.5rem;
    opacity: 0.7;
    text-align: center;
    font-weight: 400;
  }
`

export const Button = styled.button`
  width: 100%;
  max-width: 16rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  background-color: ${(props) => props.theme['green-500']};
  cursor: pointer;
  transition: 0.2s ease;
  font-weight: bold;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: inherit;
    height: 100%;
    width: 100%;
  }
`
