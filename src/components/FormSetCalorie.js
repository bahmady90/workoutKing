import { useState } from "react";

export function FormSetCalorie({selectedMember, onSetWorkout, recordBroken}){

    // set States to controll values

    const [exercise, setExercise] = useState("jogging");
    const [time, setTime] = useState("");

    function handleTime(e){
        if(Number.isInteger(Number(e.target.value)) === false){}
        else {setTime(e.target.value)}
    }
    
    // function to calculate the calories
    let faktor = 0;
    switch (exercise) {
        default: break;
        case "resistance training":
            faktor = 3.5
            break;
        case "calisthenics":
            faktor = 3.8
            break;
        case "swimming":
            faktor = 2.5
            break;
        case "bicycling":
            faktor = 3
            break;
        case "jogging":
            faktor = 7
            break;
        case "climbing":
            faktor = 8
            break;     
    }
    
    const newWorkoutCalorie  = Math.round((faktor * Number(selectedMember.weight) * Number(time)) / 60);

    
    function handleSubmit(e){
        e.preventDefault();
        onSetWorkout(newWorkoutCalorie);
    }
    
    return(
        <form className="form-add-member" onSubmit={handleSubmit}>
            <h3> Exercise of {selectedMember.name}</h3>
            <label>🏃 Set Exercise</label>
            <select value={exercise} onChange={(e) => setExercise(e.target.value)}>
                <option value="resistance training">resistance training</option>
                <option value="calisthenics">calisthenics</option>
                <option value="swimming">swimming</option>
                <option value="bicycling">bicycling</option>
                <option value="jogging">jogging</option>
                <option value="climbing">climbing</option>
            </select>
            <label>⏲️ Duration (min)</label>
            <input type="text" value={time} onChange={(e) => handleTime(e)}></input> 
            <label>⚖️ Bodyweight (kg)</label>
            <input type="text" disabled value={selectedMember.weight}></input> 
            <label>🏅 Calorie burned (kcal)</label>
            <input type="text" disabled value={newWorkoutCalorie.toString()}></input>  
            <button className="button">Add Workout</button>
            {(recordBroken === false) &&
            <div style={{color: "red"}}>Record not broken! Try harder next time 💪</div>
            }
        </form>
    )
}