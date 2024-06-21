import styled from 'styled-components'

const StyleAnun = styled.article`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        font-family: 'Roboto', serif;
    }

    .conteudo-anuncie {
        display: flex;
        flex-direction: column;
        font-size: 100%;
        margin-bottom: 48px;
        justify-content: center;
        align-items: center;
        margin: 0;
        width: 75vw; 
        margin: 0 auto; 

    }

    .Conteudo-Atrativo {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin: 6em;
        margin-top: 60px;
        margin-bottom: 20px;
    }

    .Conteudo-Atrativo-Escrito {
        display: flex;
        flex-direction: column;
        gap: 32px;
        align-items: center;
    }

    .Conteudo-Atrativo-Escrito-Title {
        font-weight: 600;
        font-size: 34px;
    }

    .Conteudo-Atrativo-Escrito-SubTitle {
        font-weight: 300;
        font-size: 20px;
    }

    .Conteudo-Principal {
        display: block;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        gap: 20px;
        margin: 2em;
        margin-top: 60px;
        margin-bottom: 28px;
    }

    .Conteudo-Principal-Escrito {
        border-top: 0.4px solid black;
        padding-top: 30px;
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    span{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .title{
        width: fit-content;
        padding: 10px;
        border-radius: 20px;
        border: 1px solid var(--cinza);
    }

    #title-bronze {
        font-weight: 600;
        color: var(--bronze);
    }

    #title-prata {
        font-weight: 600;
        color: var(--prata);
    }

    #title-ouro {
        font-weight: 600;
        color: var(--ouro);
    }

    #title-diamante {
        font-weight: 600;
        color: var(--diamante);
    }

    .Title_Anunciante {
        font-weight: 400;
        font-size: 24px;
    }

    .BotaoAnun {
        display: flex;
        justify-content: center;
        align-items: center;
        /* margin: 10px; */
        /* margin: 2rem 0 0 0; */
    }

    .Textinho {
        /* margin-top: 30px; */
        font-size: 20px;
        display: flex;
        justify-content: center;
        margin: 0 auto;
    }

    .botao {
        /* padding: 2rem; */
    }
        
    .BlocoImg {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: center;
    }

    .Imagem {
        display: none;
        height: auto;
        width: 500px;
    }

    @media screen and (min-width: 1024px){
        .Conteudo-Principal{
            display: flex;
        }
        .Imagem {
            display: flex;
        }
    }

`

export {StyleAnun}