import { Subir } from "./Style";

const BotaoSubir = () => {
    return(
        <Subir>
            <div className="container_btn_top">
                <button className="btn_topo" 
                    onClick={()=> window.scrollTo(0, 0)}>
                        <span class="material-symbols-outlined">
                            arrow_upward
                        </span>
                </button>
            </div>
        </Subir>
    )
}

export default BotaoSubir;