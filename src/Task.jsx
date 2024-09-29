import CheckBox from "./CheckBox";

export default function Task({name,done}){
    return(
        <div className="task">
            <CheckBox defaultChecked={done}/>
          {name}
        </div>
    );
}