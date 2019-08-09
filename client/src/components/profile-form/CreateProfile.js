import React, { Fragment, useContext, useState } from 'react';

import ProfileContext from '../../context/profile/profileContext';

import { Link, withRouter } from 'react-router-dom';

const CreateProfile = () => {
    const [formData, setFormData] = useState({
        username: '',
        exp: '',
        bio: '',
        weight: 0,
        height: 0,
        bmi: 0
    });

    const [displayBmiCalculator, toggleBmiCalculator] = useState(false);

    const {
        username,
        exp,
        bio,
        weight,
        height,
        bmi
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    //     bmi
    return (
        <Fragment>
            <h1 className="large text-primary">Create Your Profile</h1>
            <p className='lead'>
                <i className='fas fa-user' /> Let's get some information to establish your GymPage profile.
            </p>
            <form className="form">
                <div className="form-group">
                    <input 
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={username}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className="form-group">
                    <select name="Experience" value={exp} onChange={e => onChange(e)}>
                        <option value="0">Select Your Gym Experience</option>
                        <option value="Newbee">Newbee</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                        <option value="Strong">Strong</option>
                    </select>
                </div>
                <div className="form-group">
                    <input 
                        type="text"
                        placeholder="Bio"
                        name="bio"
                        value={bio}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="number"
                        placeholder="Weight"
                        name="weight"
                        value={weight}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="number"
                        placeholder="Height"
                        name="height"
                        value={height}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="number"
                        placeholder="BMI"
                        name="bmi"
                        value={bmi}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className='my-2'>
                    <button
                        onClick={() => toggleBmiCalculator(!displayBmiCalculator)}
                        type='button'
                        className='btn btn-light'>
                       BMI Calculator
                    </button>
                    <span>Optional</span>
                </div>
                {displayBmiCalculator && (
                    <Fragment>

                    </Fragment>
                )}
                <input type="submit" className="btn btn-primary my-1" />
            </form>
        </Fragment>
    );
}

export default CreateProfile;