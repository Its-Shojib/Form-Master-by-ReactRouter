import { useState } from "react";


const StatefulForm = () => {
    let [name,setName] = useState(null);
    let [email, setEmail] = useState(null);
    let [password, setPassword] = useState(null);
    let [error,setError] = useState('');
    let handleSubmit = e => {
        e.preventDefault();
        if(password.length < 8){
            setError('Password must be 8 character longer');
        }
        else{
            setError('');
            console.log(name,email,password);
        }
        
    }

    let handleNameChange = (e) =>{
        setName(e.target.value);
    }
    let handleEmailChange = (e) =>{
        setEmail(e.target.value);
    }
    let handlePasswordChange = (e) =>{
        setPassword(e.target.value);
    }
    return (
        <div>
            <div className="text-2xl space-y-3 bg-gray-300">
                <form onSubmit={handleSubmit} className="space-y-2">
                    <input onChange={handleNameChange} type="text" name="name" id="" placeholder="Enter your name" />
                    <br />
                    <input onChange={handleEmailChange} type="email" name="email" id="" placeholder="Enter your email" />
                    <br />
                    <input onChange={handlePasswordChange} type="password" name="password" id="" placeholder="Enter Password" required />
                    <br />
                    <input type="submit" value="Submit" />
                    {
                        error && <p>{error}</p>
                    }
                </form>
            </div>

        </div>
    );
};

export default StatefulForm;