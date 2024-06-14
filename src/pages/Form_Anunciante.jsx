import Forms from "../components/Anunciante/Forms/Forms"
import Base from "./Base" 
import formulario from "../data/formularios.json"
import Botao from "../components/Botao/Botao";
import { Style } from "../components/Anunciante/Forms/StylePag"
import Banner from "../components/Banner/Banner";

const ElementosContato = formulario.slice(0, 3);

const ElementosEndereco = formulario.slice(3, 9);


function Form_Anunciante() {
    
    return (

        
        <Base>
        <Banner titulo="Formulário" imagem={"imagens/heroHome.png"}/>
        <Style>
            <main className="Conteudo">

                <section className="FraseEfeito">
                    <h2> Se interessou? Que tal se juntar a nós e começar a anunciar hoje mesmo?</h2>
                </section>

                <section className="Form-Contato">
                    <div className="Form-Contato-Escrito">
                    <h2>Contato:</h2>
                        <form>
                            <label htmlFor="nome">Nome:</label><br />
                            <input type="text" id="nome" name="nome" placeholder="Insira seu Nome"/><br />
                            
                            <label htmlFor="email">Email:</label><br />
                            <input type="email" id="email" name="email" placeholder="Insira o seu Email" /><br />
                            
                            <label htmlFor="telefone">Telefone:</label><br />
                            <input type="tel" id="telefone" name="telefone" placeholder="Insira o seu Telefone" /><br />
                        </form>
                    </div>
                </section>

                <section className="Form-Endereco">
                        <div className="Form-Endereco-Escrito">
                        <h2>Endereço:</h2>
                        
                            <form>
                                <label htmlFor="rua">Rua:</label><br />
                                <input type="text" id="rua" name="rua" placeholder="Insira sua Rua" /><br />

                                <label htmlFor="bairro">Bairro:</label><br />
                                <input type="text" id="bairro" name="bairro" placeholder="Insira seu Bairro" /><br />

                                <label htmlFor="complemento">Complemento:</label><br />
                                <input type="text" id="complemento" name="complemento" placeholder="Insira o Complemento" /><br />

                                <label htmlFor="cep">CEP:</label><br />
                                <input type="text" id="cep" name="cep" placeholder="Insira seu CEP" /><br />

                                <label htmlFor="cidade">Cidade:</label><br />
                                <input type="text" id="cidade" name="cidade" placeholder="Insira sua Cidade" /><br />

                                <label htmlFor="sobre">Sobre Você:</label><br />
                                <textarea id="sobre" name="sobre" rows="4" placeholder="Conte um pouco sobre você"></textarea><br />
                            </form>

                        </div>
                    </section>

                    <div align='center'>

                        <Botao texto="Enviar"></Botao>

                    </div>
                    
            </main> 

        </Style>

        </Base>

    )
 }



export default Form_Anunciante