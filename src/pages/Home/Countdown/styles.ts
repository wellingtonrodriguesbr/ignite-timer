import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};
  display: flex;
  align-items: center;

  div {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;

    @media (max-width: 700px) {
      gap: 0;
    }
  }

  span {
    background-color: ${(props) => props.theme['gray-700']};
    border-radius: 8px;
    padding: 4rem 1rem;

    @media (max-width: 700px) {
      margin: 0 4px;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
    font-size: 5rem;
    line-height: 0;
  }
`

export const Separator = styled.section`
  padding: 1rem 0;
  color: ${(props) => props.theme['green-500']};

  @media (max-width: 700px) {
    margin: 2rem 0;
  }
`
