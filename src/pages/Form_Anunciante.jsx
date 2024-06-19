import Forms from "../components/Anunciante/Forms/Forms"
import Base from "./Base" 
import formulario from "../data/formularios.json"
import Botao from "../components/Botao/Botao";
import { Style } from "../components/Anunciante/Forms/StylePag"
import Banner from "../components/Banner/Banner";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

const ElementosContato = formulario.slice(0, 3);

const ElementosEndereco = formulario.slice(3, 9);


function Form_Anunciante() {
    const { t } = useTranslation();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");

    const [rua, setRua] = useState("");
    const [bairro, setBairro] = useState("");
    const [complemento, setComplemento] = useState("");
    const [cep, setCep] = useState("");
    const [cidade, setCidade] = useState("");

    const [about, setAbout] = useState("");

    function sendEmail(event) {
        event.preventDefault();

        if (name === "" || email === "" || telefone === "" || rua === "" || bairro === "" || complemento === "" || cep === "" || cidade === "" || about === "") {
            alert("Preencha todos os campos");
            return;
        }

        const templateParams = {
            from_name: name,
            email: email,
            telefone: telefone,
            rua: rua,
            bairro: bairro,
            complemento: complemento,
            cep: cep,
            cidade: cidade,
            about: about
        }
        emailjs.send("service_g1ix9gs", "template_18vllwq", templateParams, "IIazc9nfwTktfPvzP")
        .then((result) => {
            console.log(result.text);
            setName("");
            setEmail("");
            setTelefone("");
            setRua("");
            setBairro("");
            setComplemento("");
            setCep("");
            setCidade("");
            setAbout("");
        }, (error) => {
            console.log(error.text);
        });
    }
    
    return (

        
        <Base>
        <Banner titulo={t("Formulário")} imagem={"imagens/heroHome.png"}/>
        <Style>
            <main className="Conteudo">

                <section className="FraseEfeito">
                    <h2>{t("Se interessou? Que tal se juntar a nós e começar a anunciar hoje mesmo?")}</h2>
                </section>
                <form onSubmit={sendEmail}>
                    <section className="Form-Contato">
                        <div className="Form-Contato-Escrito">
                        <h2>{t("Contato")}</h2>
                            <form>
                                <label htmlFor="nome">{t("Nome")}</label><br />
                                <input type="text" id="nome" name="nome" placeholder={t("Insira seu nome")} onChange={(e) => setName(e.target.value)} value={name}/><br />
                                
                                <label htmlFor="email">Email</label><br />
                                <input type="email" id="email" name="email" placeholder={t("Insira o seu Email")} onChange={(e) => setEmail(e.target.value)} value={email}/><br />
                                
                                <label htmlFor="telefone">{t("Telefone")}</label><br />
                                <input type="tel" id="telefone" name="telefone" placeholder={t("Insira o seu telefone")} onChange={(e) => setTelefone(e.target.value)} value={telefone}/><br />
                            </form>
                        </div>
                    </section>

                    <section className="Form-Endereco">
                            <div className="Form-Endereco-Escrito">
                            <h2>{t("Endereço")}</h2>
                            
                                <form>
                                    <label htmlFor="rua">{t("Rua")}</label><br />
                                    <input type="text" id="rua" name="rua" placeholder={t("Insira sua Rua")} onChange={(e) => setRua(e.target.value)} value={rua}/><br />

                                    <label htmlFor="bairro">{t("Bairro")}</label><br />
                                    <input type="text" id="bairro" name="bairro" placeholder={t("Insira seu Bairro")} onChange={(e) => setBairro(e.target.value)} value={bairro}/><br />

                                    <label htmlFor="complemento">{t("Complemento")}</label><br />
                                    <input type="text" id="complemento" name="complemento" placeholder={t("Insira o Complemento")} onChange={(e) => setComplemento(e.target.value)} value={complemento}/><br />

                                    <label htmlFor="cep">CEP</label><br />
                                    <input type="text" id="cep" name="cep" placeholder={t("Insira seu CEP")} onChange={(e) => setCep(e.target.value)} value={cep}/><br />

                                    <label htmlFor="cidade">{t("Cidade")}</label><br />
                                    <input type="text" id="cidade" name="cidade" placeholder={t("Insira sua Cidade")} onChange={(e) => setCidade(e.target.value)} value={cidade}/><br />

                                    <label htmlFor="sobre">{t("Sobre Você")}</label><br />
                                    <textarea id="sobre" name="sobre" rows="4" placeholder={t("Conte um pouco sobre você")} onChange={(e) => setAbout(e.target.value)} value={about}></textarea><br/>
                                </form>

                            </div>
                        </section>
                        <div align='center'>
                            <Botao texto={t("Enviar")}></Botao>
                        </div>
                </form>
                    
            </main> 

        </Style>

        </Base>

    )
 }



export default Form_Anunciante