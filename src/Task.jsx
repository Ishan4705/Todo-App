import CheckBox from "./CheckBox";

export default function Task({name,done,onToggle}){
    return(
        <div className={'task ' + (done ? 'done' : '' )}>
            <CheckBox checked={done} onClick={()=>{onToggle(!done)}}/>
          <span>{name}</span>
        </div>
    );
}