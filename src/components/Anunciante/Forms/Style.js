import styled from 'styled-components'

const Input = styled.article`

    label {
        display: block;
        margin-bottom: 5px;
    }

    input {
        width: 100%;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        margin-bottom: 10px
    }

    input[name="sobre voce"] {
        width: 300px;
        margin: 0 auto;
        height: 200px;
        padding-bottom: 170px;
      }

      input[name="telefone"] {
        width: 300px;
        margin: 0 auto;
      }

`

export {Input}
