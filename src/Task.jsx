import CheckBox from "./CheckBox";

export default function Task({name,done,onToggle}){
    return(
        <div className="task">
            <CheckBox checked={done} onClick={()=>{onToggle(!done)}}/>
          {name}
        </div>
    );
}