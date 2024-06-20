import styled from 'styled-components';

const PasseioInfoStyle = styled.article`
    
    .card_descricao_passeio{
        display: flex;
        background-color: #ffffff;
        padding: 20px;
        max-width: 800px;
        height: fit-content;
        justify-content: space-between;
        margin: 50px auto;
        overflow: hidden;
        border: 1px solid #000000;
        border-radius: 10px;
        box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
        align-items: center;
    }
    
    .infos_passeio_container{
        display: flex;
        flex: 1;
        padding: 20px;
        flex-direction: column;
    }

    .img_container{
        flex-basis: 40%;
    }

    .neg{
        font-weight: bold;
        font-style: italic;
    }

    .btn_voltar{
        align-self: center;
        padding: 10px 30px;
        background-color: var(--background);
        border-radius: 10px;
    }

  img {
    border-radius: 5px;
    margin-bottom: 20px;
    width: 100% ;
  }

  h2 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 10px;
  }

  @media screen and (max-width:768px) {
    .card_descricao_passeio{
        flex-direction: column;
    }
  }

  @media screen and (min-width:769px) and (max-width: 1024px) {
    .card_descricao_passeio{
        flex-direction: column;
    }
  }

`;

export {PasseioInfoStyle};