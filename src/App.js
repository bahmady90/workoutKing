import { FormAddMember } from "./components/FormAddMember";
import MembersList from "./components/MembersList";
import { FormSetCalorie } from "./components/FormSetCalorie";
import {useState} from "react"


export const initialMembers = [{
  name : "Thomas",
  weight : 80,
  id : 1219827,
  calorieRecord : 1000,
  image: "https://i.pravatar.cc/48?u=118836"
},
{
  name : "Mahboob",
  weight : 90,
  id : 1219823,
  calorieRecord: 0,
  image: "https://i.pravatar.cc/48?u=933372"
},
{
  name : "Mikey",
  weight : 80,
  id : 1219836,
  calorieRecord: 500,
  image: "https://i.pravatar.cc/48?u=499476"
}]



function App() {

  //setting states as props

  const [open, setOpen] = useState(false);
  const [members, setMembers] = useState(initialMembers);
  const [selectedMember, setSelectedMember] = useState(null);
  const [recordBroken, setRecordBroken] = useState(true);

  function handleSetWorkout(value){
    setMembers((members) => members.map((member) => {
     //function to conditinally add the new workout-calorie of the selected member
      if((member.id === selectedMember.id)) {
        if(value > member.calorieRecord){
          setRecordBroken(true);
          return({...member, calorieRecord: value})
        } else{
          setRecordBroken(false);
          return(member);
        }
      }
       
       else{
        return (member);
      }
    })
    );

  }

  function handleSelectMember(member){
    setSelectedMember((cur) => (cur?.id === member.id ? null : member));
    setOpen(false);
  }

  function handlesetOpen(){
    setOpen(!open);
  }

  function handleAddMembers(newMember){
    setMembers((members) => [...members, newMember]);
    setOpen(false);
 
  }


  return (
  <div className="app">
    <div className="sidebar">
      <MembersList
        selectedMember={selectedMember}
        onHandleSelected={handleSelectMember}
        members={members}
      />
      <FormAddMember
        open={open}
        onSetOpen={handlesetOpen}
        members={members}
        onHandleAddMembers={handleAddMembers}
      />
      
    </div>
    {selectedMember &&
    <FormSetCalorie
      onSetWorkout={handleSetWorkout}
      selectedMember={selectedMember}
      recordBroken={recordBroken}

      />
    } 
  </div>
  );
}

export default App;
