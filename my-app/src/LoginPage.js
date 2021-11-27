import React from 'react';
import {useState} from 'react';

function LoginPage(register) {
    const[usernameReg, setUsernameReg]=useState('');
    const[passwordReg, setPasswordReg]=useState('');
    
    return (
        <>
            <title>Login</title>
            <h3>Welcome to Group Tracker</h3>
            <h4>Login</h4>
            <form action="/accounts/?target=/" method="post"
            enctype="multipart/form-data">
            <label for="username">Username:</label>
            <input type="text" name="username" required onChange={(e)=>{
                setUsernameReg(e.target.value)
            }}/>
            <p>
            <input type="submit" value="Login" onClick={register} class="smallerbutton"/>
            </p>
            <input type="hidden" name="operation" value="login" />
            </form>
        </>
   );
}
export default LoginPage;