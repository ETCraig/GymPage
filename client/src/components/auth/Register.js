import React, { useContext, useState } from 'react';

import AuthContext from '../../context/auth/authContext';

const Register = props => {
    const authContext = useContext(AuthContext);

    const { register } = authContext;

    const [user, setUser] = useState({
        name: '',
        email: '',
        avatar: 'https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder.jpg',
        password: '',
        password2: ''
    });

    const { name, email, password, password2, avatar, uri } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onFileChange = e => { 
        
    }

    const onSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className="form-container">
            <h1>
                Account <span className="text-primary">Register</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className="form-group text-center">
                    <img src={avatar} value={avatar} alt="user Avatar" class="rounded-circle" style={{ height: "180px", width: "200px" }} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        minLength="6"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password2">Confirm Password</label>
                    <input
                        type="password"
                        name="password2"
                        value={password2}
                        onChange={onChange}
                        minLength="6"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="avatar">Avatar</label>
                    <div className="file-field">
                        <div className="btn btn-primary btn-sm">
                            <span>Choose File</span>
                            <input type="file" onChange={onFileChange} />
                        </div>
                    </div>
                </div>

                <input
                    type="submit"
                    value="register"
                    className="btn btn-primary btn-block"
                />
            </form>
        </div>
    );
}

export default Register;