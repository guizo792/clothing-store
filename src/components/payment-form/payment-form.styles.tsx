import styled from 'styled-components';

import Button from '../button/button.component';

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 660px) {
    font-size: 12px;
    padding: 100px 40px;
  }
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;

  @media (max-width: 660px) {
    display: flex;
    flex-direction: column;
  }
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;
