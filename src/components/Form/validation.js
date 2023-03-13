const validate = (userData, setErrors, errors) => {
    
    if (!userData.username) setErrors((prevState) => ({ ...prevState, username: "Username Vacio" }));
    else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username)){
        setErrors((prevState) => ({ ...prevState, username: "" }));}
    else setErrors((prevState) => ({ ...prevState, username: "Username Invalido" }));

    if(!userData.password) setErrors((prevState) => ({ ...prevState, password: "Password Vacio" }));
    else{
       if(/^(?=.*\d)(?=.*[a-zA-Z]).{6,10}$/.test(userData.password)) setErrors((prevState) => ({ ...prevState, password: "" }));
         else setErrors((prevState) => ({ ...prevState, password: "Password Invalido" }));
     }

};
export default validate;