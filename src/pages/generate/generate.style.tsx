import styled from '@emotion/styled'

export const QuantityContainer = styled.div`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
`
QuantityContainer.displayName = 'QuantityContainer'

export const QuantityWrapper = styled.div`
  padding 5px;
`
QuantityWrapper.displayName = 'QuantityWrapper'

export const QuantityCustomWrapper = styled.span`
  padding 5px;
`
QuantityCustomWrapper.displayName = 'QuantityCustomWrapper'
