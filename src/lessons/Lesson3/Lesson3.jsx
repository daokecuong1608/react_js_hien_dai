import { useState } from "react";
import CoolButton from "./CoolButton";

const Lesson3 = (props) => {
    const[name, setName] = useState('');
    return (
        <div>
            <label>Name:</label>
            <input type={'text'} 
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <div>Your name 's ... {name}</div>
            <CoolButton 
            // truyen props cho thang component con
            btnClass={'primary'}
            title={'Click me'}
            />
        </div>
    )
}

export default Lesson3;