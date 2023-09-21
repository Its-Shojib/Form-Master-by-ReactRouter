import { useState } from "react"

let useInputState = (defaultValue=null) =>{
    let [value,setValue] = useState(defaultValue);

    // let handleChange = e =>{
    //     setValue(e.target.value);
    // }
    let onChange = e =>{
        setValue(e.target.value);
    }

    // return [value,handleChange];
    return{
        value,onChange
    }
}
    
export default useInputState;
