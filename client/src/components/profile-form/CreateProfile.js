import React, { Fragment, useContext, useState } from 'react';

import ProfileContext from '../../context/profile/profileContext';

const CreateProfile = (props) => {
    const profileContext = useContext(ProfileContext);

    const { updateProfile } = profileContext;

    const [formData, setFormData] = useState({
        username: '',
        exp: '',
        bio: '',
        weight: '',
        feet: '',
        inches: '',
        bmi: ''
    });

    const {
        username,
        exp,
        bio,
        weight,
        feet,
        inches,
        bmi
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const calculatorBMI = (e) => {
        e.preventDefault();
        let w = Number(weight);
        let f = Number(feet);
        let i = Number(inches);
        if (w && f && i) {
            const INCHES_IN_FEET = 12;
            let userHeight = Number(f);
            userHeight *= INCHES_IN_FEET;
            userHeight += Number(i);
            let userWeight = w;
            let userBmi = (userWeight / (userHeight * userHeight)) * 703;
            userBmi = userBmi.toFixed(2);
            userBmi.toString();
            setFormData({ ...formData, bmi: userBmi });
        }
    }

    const onSubmit = async e => {
        e.preventDefault();
        if (username === '' || exp === '' || bio === '') {
            console.log('Empty', username, exp, bio);
        } else {
           await updateProfile({
                username,
                exp,
                bio,
                weight,
                feet,
                inches,
                bmi
            });
            props.history.push('/');
        }
    }

    return (
        <Fragment>
            <h1 className="large text-primary">Create Your Profile</h1>
            <p className='lead'>
                <i className='fas fa-user' /> Let's get some information to establish your GymPage profile.
            </p>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={username}
                        onChange={e => onChange(e)}
                    />
                    <small className='form-text'>
                        The Name You'll be Seen By
                    </small>
                </div>
                <div className="form-group">
                    <select name="exp" value={exp} onChange={e => onChange(e)}>
                        <option value="0">Select Your Gym Experience</option>
                        <option value="Newbee">Newbee</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                        <option value="Strong">Strong</option>
                    </select>
                    <small className='form-text'>
                        Your Fitness Experience
                    </small>
                </div>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        rows="5"
                        name="bio"
                        value={bio}
                        onChange={e => onChange(e)}>
                    </textarea>
                    <small className='form-text'>
                        Bio
                    </small>
                </div>
                <div className="form-inline d-flex justify-content-between">
                    <div className="form-group input-group">
                        <input
                            type="text"
                            placeholder="0"
                            name="weight"
                            value={weight}
                            onChange={e => onChange(e)}
                        />
                        <small className='form-text'>
                            Weight
                    </small>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="0"
                            name="feet"
                            value={feet}
                            onChange={e => onChange(e)}
                        />
                        <small className='form-text'>
                            Feet
                    </small>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="0"
                            name="inches"
                            value={inches}
                            onChange={e => onChange(e)}
                        />
                        <small className='form-text'>
                            Inches
                    </small>
                    </div>
                    <button className="btn btn-info" onClick={e => calculatorBMI(e)}>Calculate BMI</button>
                </div>
                <div className="form-group">
                    <input
                        readOnly
                        type="text"
                        placeholder="BMI"
                        name="bmi"
                        value={bmi}
                        onChange={e => onChange(e)}
                    />
                    <small className='form-text'>
                        BMI
                    </small>
                </div>
                <input type="submit" className="btn btn-primary my-1" />
            </form>
        </Fragment>
    );
}

export default CreateProfile;