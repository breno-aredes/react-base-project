import styled from 'styled-components';

const HomePageHead = styled.div`
  background:
        linear-gradient(
          rgba(0, 0, 0, 0.1), 
          rgba(0, 0, 0, 0.8)
        ),
        url(imagens/passeios/mar3.jpg);
  background-size: cover;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.7); /* black transparent overlay */
  padding: 1rem;
  z-index: -1;
  top: -15rem;
  height: 45rem;


  .overlay {
    position: relative;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .text-container {
    text-align: center;
    max-width: 100%;
    /* padding: 1rem; */
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    top: 15rem;
  }

  .text-container * {
    margin: 0;
    padding-left: 0;
    padding-right: 0;
  }

  h1{
    text-align: center;
  }

  .subtitulo {
    text-align: center;
    color: white;
    /* margin: 1rem; */
  }
  
  .titulo{
    color: white;
  }

  .img-container {
    display: none;
  
  }

  .textoplataformas{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--destaque);
    color: var(--texto);
    border-radius: 15px;
    margin: 1rem;
    padding: 0.5rem;
    width: fit-content;
    h5{
      padding: 0;
    }
  }

  .botoesPlataformas{
    color: var(--texto);
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    gap: 16px;
    margin: 32px;
  }

  .botao{
    display: flex;
    height: auto;
    justify-content: space-between;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    background-color: transparent;
    color: var(--destaque);
    border: 2px solid var(--destaque);;
    padding: 0.5rem;
    font-size: 0.8rem;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s;
    &:hover{
        transform: scale(1.05);
    }
  }

  @media screen and (min-width: 1024px){
    height: 40rem;
    .titulo {
      padding-left: 0;
      padding-right: 0;

    }
    .img-container {
      display: flex;
      width: auto;
      margin: 0;
      height: 30rem;
      position: relative;
      top: 9rem;
    }
    .container{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 6rem;
    }
    .text-container{
      text-align: justify;
      flex-wrap: nowrap;
      top: 9rem;
    }
  }
`;

export { HomePageHead };