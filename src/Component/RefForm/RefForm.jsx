import { useEffect, useRef } from "react";

const RefForm = () => {
    let handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }
    let nameRef = useRef(null);
    let emailRef = useRef(null);
    let passwordRef = useRef(null);

    useEffect(()=>{
        nameRef.current.focus();
    },[])
    return (
        <div>
            <div className="text-2xl space-y-3 bg-gray-300">
                <form onSubmit={handleSubmit}>
                    <input ref={nameRef} className=" border-red-200" type="text" name="name" id="" placeholder="input name" />
                    <br />
                    <input ref={emailRef} defaultValue={'mdshojib922@gmail.com'} type="email" name="email" id="" placeholder="input email" />
                    <br />
                    <input ref={passwordRef} type="submit" value="Submit" />
                </form>
            </div>

        </div>
    );
};

export default RefForm;