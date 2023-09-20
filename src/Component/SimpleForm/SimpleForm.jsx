
const SimpleForm = () => {
    let handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log('form Submitted');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" placeholder="input name" />
                <br />
                <input type="email" name="email" id="" placeholder="input email"/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;