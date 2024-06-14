import styled from 'styled-components'

const Style = styled.article`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
  }

  .Conteudo {
    font-size: 100%;
    margin-bottom: 48px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 20px;
    max-width: 800px;
  }

  .FraseEfeito {
    text-align: center;
    margin-bottom: 30px;
    margin-top: 50px;   
  }

  .FraseEfeito h2 {
    font-weight: 400;
    font-size: 20px;
    color: #555;
  }


  .Form-Contato {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top: 48px;
    margin-bottom: 28px;
    border-top: 1px solid #000;
  }

  .Form-Contato-Escrito {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 30px;
  }

  .Form-Contato-Escrito input {
    margin-bottom: 20px; /* Espaçamento entre os inputs */
  }

  .Form-Endereco {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    margin-top: 48px;
    margin-bottom: 28px;
  }

  .Form-Endereco-Escrito {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .Form-Endereco-Escrito input,
  .Form-Endereco-Escrito textarea {
    margin-bottom: 20px; /* Espaçamento entre os inputs e textarea */
  }

  label {
    font-weight: bold;
    margin-bottom: 4px;
  }

  input,
  textarea {
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 450px;
    max-width: 400px;
    height: 50px;
    resize: none;
  }

  #sobre {
    height: 200px;
  }

  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #0056b3;
  }
`;

export {Style}