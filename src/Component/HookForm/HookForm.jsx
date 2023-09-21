
// import useInputState from './../../Hooks/useInputState';
const HookForm = () => {
    // let [name,handleNameCHange] = useInputState('Rojoni Hooks');
    // let nameState = useInputState('Rojoni Hooks');
    let handleSubmit = e => {
        e.preventDefault();
        console.log('form data', name);
    }
    return (
        <div>
            <div className="text-2xl space-y-3 bg-gray-300">
                <form onSubmit={handleSubmit}>
                    {/* <input value={name} onChange={handleNameCHange} className=" border-red-200" type="text" name="name" id="" placeholder="input name" /> */}
                    <br />
                    <input type="email" name="email" id="" placeholder="input email" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>

        </div>
    );
};

export default HookForm;