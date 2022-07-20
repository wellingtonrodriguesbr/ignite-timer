import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100% - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;
  background-color: ${(props) => props.theme['gray-800']};
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  @media (max-width: 700px) {
    max-width: 100%;
    height: 100vh;
    margin: 15px;
  }
`
