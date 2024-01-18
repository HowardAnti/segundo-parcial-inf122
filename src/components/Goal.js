import React from "react";
import "../styles/Goal.css"


function Goal({text ,onclick1, onclick2, stateq}){

    //lice no me carga los svgs
    return(
        <div className="goal">
            <input className={stateq? "goalInfo":"b"} type="text" value={text}></input>
            <div className="button-container">
                <button onClick={onclick1}> <img className="card-image" src={require("../imagenes/trash.png")} alt="trash"/>  </button>
                <button onClick={onclick2}> <img className="card-image" src={require("../imagenes/circle.png")} alt="circle"/>    </button>
            </div>
           
        </div>
    )
}

export default Goal;