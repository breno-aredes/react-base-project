import styled from "styled-components";

const Section = styled.div`
    overflow: visible;
    .passeios {
        position: relative;
        overflow: visible;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: var(--background);
        padding: 2rem 0;
        .text{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin-top: 2rem;
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
        .section-text {
            color: var(--text);
            text-align: center;
            margin-bottom: 2rem;
        }
        .swiperPasseios {
            width: 75%;
            margin: 0;
            .swiper-button-next, .swiper-button-prev{
            color: var(--secundaria);
            z-index: 999;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            }
            .swiper-button-next{
                right: 0;
            }
            .swiper-button-prev{
                left: 0;
            }
        }
    }
    @media screen and (min-width: 1024px){
        .section-text{
            width: 75%;
        }
    }
    `;

export { Section };