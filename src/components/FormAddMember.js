import { useState } from "react";

export function FormAddMember({open, onSetOpen, onHandleAddMembers}){

    // set States to controll values

    const [memberName, setMemberName] = useState("");
    const [url, setUrl] = useState("https://i.pravatar.cc/48");
    const [weight, setWeight] = useState("");
    const [calorieRecord, setCalorieRecord] = useState("");

    // function to add a member to the list. The picture is a random-generated picture

    function handleSubmit(e){
        e.preventDefault();
        if(!memberName || !weight || !calorieRecord){onSetOpen(false);}
        else{
            const id = crypto.randomUUID();
            const newMember = {name: memberName, weight: weight, id: id, 
                calorieRecord : calorieRecord, image : `${url}?=${id}`}
            onHandleAddMembers(newMember);
            setMemberName("");
            setUrl("https://i.pravatar.cc/48");
            setWeight("");
            setCalorieRecord("");
        }
    }

    function handleWeight(e){
        if(Number.isInteger(Number(e.target.value)) === false){}
        else {setWeight(e.target.value)}
    }

    function handleCalorieRecord(e){
        if(Number.isInteger(Number(e.target.value)) === false){}
        else {setCalorieRecord(e.target.value)}
    }
    // conditionaly rendering the add-member form
    if(open === false){
        return(
            <button className="button" onClick={onSetOpen}> Add Member</button>
        )
        } else{
            return(
            <>
            <form className="form-add-member" onSubmit={handleSubmit}>
            <label>👤 Member Name</label>
                <input type="text" value={memberName} onChange={(e) => setMemberName(e.target.value)}></input>
                <label>🙆‍♀️ Image URL</label>
                <input type="text" value={url} onChange={(e) => setUrl(e.target.value)}></input> 
                <label>⚖️ Weight in kg</label>
                <input type="text" value={weight} onChange={(e) => handleWeight(e)}></input> 
                <label>🏅 CalorieRecord in kcal</label>
                <input type="text" value={calorieRecord} onChange={(e) => handleCalorieRecord(e)}></input>
                <button className="button">Add</button>  
            </form>
            <button className="button" onClick={onSetOpen}>Close</button>
            </>
          
            )}
}