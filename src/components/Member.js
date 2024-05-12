export default function Member({member, sortedMembers, selectedMember, onHandleSelected}){
    
    const isSelected = selectedMember?.id === member.id
    
    // conditionally rendering the members depending if they have the highest bourned calories value or not
    if(sortedMembers.indexOf(member) === 0){
        return(
            <li>
            <img className="crown" src="crown.svg" alt="crown"></img>
            <h3 className="h3-king"><span>💪{member.name}</span></h3>
            <img className="img-king" src={member.image} alt={member.image}></img>
            <p className="pWeight"><span style={{fontWeight: "bold"}}>weight:</span> {member.weight}</p>
            <p className="pcR"><span style={{fontWeight: "bold"}}>Exercise:</span> {member.calorieRecord}</p>
            <button className="button" onClick={() => onHandleSelected(member)}>{isSelected ? "Close" : "Select"}</button>
        </li>
        )
    }
    else{
    return(
        <li>
            <h3>{member.name}</h3>
            <img src={member.image} alt={member.image}></img>
            <p className="pWeight"><span style={{fontWeight: "bold"}}>weight:</span> {member.weight}</p>
            <p className="pcR"><span style={{fontWeight: "bold"}}>Exercise:</span> {member.calorieRecord}</p>
            <button className="button" onClick={() => onHandleSelected(member)}>{isSelected ? "Close" : "Select"}</button>
        </li>
    )
}
}