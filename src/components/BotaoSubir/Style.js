import styled from "styled-components"

const Subir = styled.header`
    font-family: Material Symbols Outline;

    .container_btn_top{
        display: flex;
        justify-content: flex-end;
    }
    
    .btn_topo{
        border-radius: 50%;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        padding: 10px 20px;
        width: 40px;
        height: 40px;
        margin: 0 40px 40px auto;
        text-align: center;
        align-items: center;
        align-content: center;
        display: flex;
        justify-content: center;
        cursor: pointer;

    }

    .material-symbols-outlined {
        font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24
    }
  `
export {Subir}