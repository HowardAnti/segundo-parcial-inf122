import React from "react";
import { useState } from "react";
import Goal from "./Goal";
import "../styles/ListGoal.css"


function ListGoal(){

    const[question,setQuestion]=useState(false);
    const[completed,setCompleted]=useState(0);
    const[ondue,setOndue]=useState(0);
    const[text,setText]=useState('');
    const[goals,setGoals]=useState([]);
    const[nrogoals,setNrogoals]=useState(0);

    const addGoal =()=>{
        setGoals([...goals,{id: nrogoals,text, question}])
        console.log(goals);
        setText('');
        setNrogoals(nrogoals+1);
        setOndue(ondue+1);
    }

    const finished =()=>{
        setOndue(ondue-1);
        setCompleted(completed+1);
    }

    const delate =(id)=>{
        setGoals((prevgoals)=>prevgoals.filter((goal)=>goal.id!==id))
        setOndue(ondue-1);
    }

    return(
        <div className="principal-container">
            <p className="title">Mis metas</p>
            <div className="add-container">
                <input  className="inputInfo"
                        type="text"
                        value={text}
                        onChange={(e)=>setText(e.target.value)}
                        placeholder="Nueva meta..."
                ></input>
                <button className="add" onClick={addGoal}>Agregar</button>
            </div>
            <div className="show-container">
                <input className="showInfo1" type="text" value={'Completadas: '+completed}></input>
                <input className="showInfo2" type="text" value={'Pendiente: '+ondue}></input>
            </div>
            {goals.map((goal)=><Goal key={goal.id} text={goal.text} onclick1={()=>delate(goal.id)} onclick2={()=>finished(setQuestion(goal.question=true)) } stateq={goal.question}/>)}
        </div>
    )
}

export default ListGoal;