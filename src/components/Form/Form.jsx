import style from './From.module.css'
import validate from './validation.js';

import { useState } from 'react';
const Form=(props)=>{
    const [userData, setUserData] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState({username: "", password: "",});
    
    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
    
        setUserData({ ...userData, [property]: value }); 
        validate({ ...userData, [property]: value }, setErrors, errors);
    };
    const submitHandler = (event) => {
        props.login(userData)
        //event.preventDefault();
        alert("LOGIN EXITOSO");
      };
    return(
        <form className={style.container} onSubmit={submitHandler}>
            <label htmlFor="username" >Username: </label>
            <input 
                type="text" 
                name="username" 
                value={userData.username} 
                onChange={handleChange}/>
            <span>{errors.username}</span>
            <label htmlFor="password" >Password: </label>
            <input 
                type="text" 
                name="password" 
                value={userData.password} 
                onChange={handleChange}/>
            <span>{errors.password}</span>
            <button>Login</button>
        </form>  
    );
}
export default Form;