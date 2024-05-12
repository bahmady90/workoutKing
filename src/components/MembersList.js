
import Member from "./Member";

export default function membersList({members, selectedMember, onHandleSelected}){

    // sorting the members-list wich returns the member with the highest calories-value at beginning
    let sortedMembers;
    sortedMembers = members
    .sort((a,b) => (Number(b.calorieRecord)) - (Number(a.calorieRecord)))
    



    return(
        <ul>{
            
           sortedMembers.map((member, index) =>
           <Member
            selectedMember={selectedMember}
            onHandleSelected={onHandleSelected}
            sortedMembers={sortedMembers}
            member={member}
            key={index}
           />
        )} 
        </ul>
    )
}