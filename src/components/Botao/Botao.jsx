import CenteredButton from "./Style";
import { criarWhatsAppLink } from "../../utils/utils.js";

const Botao = ({ texto, rota, isWhatsApp, numeroCelular, mensagem, isFinal }) => {
  const href = isWhatsApp ? criarWhatsAppLink(numeroCelular, mensagem) : rota;
  // Se não for WhatsApp, o link é o que foi passado como parâmetro. Se for, o link é criado automaticamente com a função createWhatsAppLink
  // Botões antigos funcionarão normalmente sem precisar alterar o código.
  return (
    <>
      <a href={ href } target="_blank" rel="noopener noreferrer">
        <CenteredButton isFinal={ isFinal }>
          { texto }
        </CenteredButton>
      </a>
    </>
  );
};
  
  export default Botao;