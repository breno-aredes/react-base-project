import styled from "styled-components";

const Section = styled.section`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 2rem;
    border-bottom: 0.4px solid var(--texto);

    .right {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 100%;
        margin-bottom: 2rem;
    }

    .left {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
        .mapa {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 2rem 0;
            .text{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 100%;
            }
            .section-title{
                    text-align: center;
                    font-size: 2rem;
                    font-weight: 700;
                    color: var(--texto);
                    text-align: center;
                    margin-bottom: 1rem;
                    border-bottom: 0.4px solid var(--secundaria);
            }
            .section-subtitle{
                    font-size: 1.5rem;
                    color: var(--texto);
                    text-align: center;
                    margin-bottom: 2rem;
            }
            .section-text{
                    color: var(--texto);
                    text-align: center;
                    margin-bottom: 2rem;
            }
        }
    }
    .containerMapa {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: fit-content;
        margin: 0;
        margin-bottom: 2rem;
    }

    .PCMapa {
        display: none;
        position: absolute;
        top: -10px;
        left: -15px;
        width: 380px; /* Largura do celular */
        height: 670px; /* Altura do celular */
        pointer-events: none;
        z-index: 999;
    }
    @media screen and (min-width: 1024px){
        flex-direction: row;
        width: 75%;
        .PCMapa {
            display: block;
        }
        .right {
            width: 50%;
            margin-bottom: 2em;
        }

        .left {
            width: 50%;
            align-items: flex-start;
            padding-left: 5rem;
        }
        .mapa{
            flex-direction: row;
        }
        .section-text{
            width: 100%;
        }
    }
`;

export { Section };