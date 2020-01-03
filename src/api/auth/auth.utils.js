import axios from 'axios';

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export const signUpNewUser = async credentials => {
    const data = credentials.payload;
    console.log(data)
    const newUser = await axios.post('/api/auth/register', data, config);
    if(newUser.status !== 200) return undefined;
    let user = newUser.data.user;
    let token = newUser.data.token;
    localStorage.setItem('token', token);
    return user;
} 

export const signInUser = async credentials => {
    const data = credentials.payload;
    const returnedUser = await axios.post('/api/auth/login', data, config);
    if(returnedUser.status !== 200) return undefined;
    console.log(returnedUser);
    let user = returnedUser.data.user;
    console.log(user, returnedUser.data.user);
    let token = returnedUser.data.token;
    localStorage.setItem('token', token);
    return user;
}