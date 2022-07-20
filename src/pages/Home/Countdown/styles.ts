import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    background-color: ${(props) => props.theme['gray-700']};
    border-radius: 8px;
    padding: 4rem 1rem;

    @media (max-width: 700px) {
      padding: 3rem 1rem;
    }
  }

  @media (max-width: 700px) {
    font-size: 3rem;
    line-height: 0;
    gap: 0.2rem;
  }
`

export const Separator = styled.section`
  padding: 1rem 0;
  color: ${(props) => props.theme['green-500']};

  @media (max-width: 700px) {
    margin: 2rem 0;
  }
`
