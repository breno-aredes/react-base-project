import styled from "styled-components"

const PasseioDestaque = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: fit-content;
  gap: 5px;
  width: fit-content;
  margin: 4px;
  .text{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    gap: 0;
  }
`;

const CardPasseio = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 1;
  height: 300px;
  width: 100%;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    box-shadow: 2px 11px 26px -17px rgba(0,0,0,0.75);
  }
`;

const Titulo = styled.h3`
    display : flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    color: var(--primaria);
    font-size: 1.5rem;
    position: absolute;
    text-align: center;
    top: 25px;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--destaque);
    width: 100%;
    height: fit-content;
    padding: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    margin: 0 auto;
    border-radius: 0 0 30px 30px;
`;

const Local = styled.h4`
    display : flex;
    color: var(--texto);
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    margin: 0 auto;
    font-size: 1.2rem;
    background-color: var(--destaque);
    padding: 10px;
`;

const Descricao = styled.p`
    display : flex;
    justify-content: center;
    align-items: flex-end;
    color: var(--texto);
    z-index: 999;
    text-align: center;
    background: none;
    width: 75%;
    height: fit-content;
    padding: 0;
    margin: 0 auto;
`;

export { PasseioDestaque, CardPasseio, Titulo, Local, Descricao };