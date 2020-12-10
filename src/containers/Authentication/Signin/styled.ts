import Styled from "styled-components";

const AuthWrapper = Styled.div`
  box-shadow: 0 0.75rem 1.5rem rgba(18,38,63,.03);
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid #f6f6f6;
    border-radius: .25rem;

    .text-center {
      text-align: center;
    }

    .auth-header {
      background-color: rgba(85,110,230,.25);
      padding: 1.5rem 2rem;
          border-radius: .25rem;

    }

    form {
      padding: 2rem;
      padding-top: 4rem;

      .auth-form-action {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.2rem;

        a {
          margin-left: 1rem
        }
      }

      button {
        width: 100%;
      }
    }
`;

const ColStyled = Styled.div`
  max-width: 500px;
  width: 100%
`;

export { AuthWrapper, ColStyled };
