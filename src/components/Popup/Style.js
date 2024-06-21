import styled from 'styled-components';

const PopUpStyle = styled.div` 
    .popup-container{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgba(0,0,0,0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
    }
    
    .popup-inner{
        position: relative;
        padding: 32px;
        width: 50%;
        height: 300px;
        max-width: 300px;
        border-radius: 10px;
        border: 2px solid var(--destaque);
        backdrop-filter: blur(5px);
        z-index: 999;
    }

    .logo{
        display: block;
        align-items: center;
        justify-content: center;
        width: 150px;
        height: auto;
        margin: 0 auto;
    }

    .close-btn{
        position: absolute;
        right: 16px;
        top: 16px;
        width: 32px;
        height: auto;
        background: none;
        color: var(--destaque);
        border: none;
        border-radius: 30px;
        cursor: pointer;
    }

    .popup-text{
        margin-top: 32px;
        width: auto;
        font-size: 0.5rem;
        text-align: center;
        justify-content: center;
        color: var(--destaque);
    }

    .botoesPlataformas{
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: center;
        gap: 16px;
        margin: 0 auto;
    }

    .botao{
        display: flex;
        overflow: hidden;
        height: auto;
        justify-content: space-between;
        align-items: center;
        font-family: 'Poppins', sans-serif;
        background-color: var(--destaque);
        color: var(--texto);
        border: none;
        padding: 0.5rem;
        font-size: 0.5rem;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.2s;
        &:hover{
            transform: scale(1.05);
        }
    }

    @media screen and (min-width: 1024px){
        .popup-inner{
            width: 90%;
            max-width: 400px;
            height: auto;
            padding: 0;
        }

        .logo{
            width: 250px;
            height: auto;
        }
        
        .botoesPlataformas{
            flex-direction: row;
            margin: 32px 0;
        }

        .botao{
            font-size: 0.8rem;
        }

        .popup-text{
            font-size: 1rem;
            margin-top: 0;
        }
    }
`;

export default PopUpStyle;