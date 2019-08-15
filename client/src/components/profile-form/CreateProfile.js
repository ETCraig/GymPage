import React, { Fragment, useContext, useState } from 'react';

import ProfileContext from '../../context/profile/profileContext';

import { Link, withRouter } from 'react-router-dom';

const CreateProfile = () => {
    const [formData, setFormData] = useState({
        username: '',
        exp: '',
        bio: '',
        weight: 0,
        feet: 0,
        inches: 0,
        bmi: 0
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
        if (weight && feet && inches) {
            console.log('IN CALC');
            const INCHES_IN_FEET = 12;
            let userHeight = Number(feet);
            userHeight *= INCHES_IN_FEET;
            userHeight += Number(inches);
            let userWeight = weight;
            let userBmi = (userWeight / (userHeight * userHeight)) * 703;
            userBmi = userBmi.toFixed(2);
            setFormData({ bmi: userBmi });
            return userBmi;
        }
    }
    const getBMIResults = (bmiInput) => {
        let bmiResults = {
            label: '',
            alertClass: ''
        };
        if (bmiInput <= 18.5) {
            bmiResults.label = 'Underweight';
            bmiResults.alertClass = 'alert-danger';
        } else if (bmiInput <= 24.9) {
            bmiResults.label = 'Normal Weight';
            bmiResults.alertClass = 'alert-success';
        } else if (bmiInput <= 29.9) {
            bmiResults.label = 'Overweight';
            bmiResults.alertClass = 'alert-warning';
        } else if (bmiInput >= 30) {
            bmiResults.label = 'Obesity';
            bmiResults.alertClass = 'alert-danger';
        } else {
            bmiResults.label = 'BMI';
            bmiResults.alertClass = 'alert-primary'
        }
        return bmiResults;
    }

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
                        type="number"
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
                        placeholder="Feet"
                        name="feet"
                        value={feet}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="number"
                        placeholder="Inches"
                        name="inches"
                        value={inches}
                        onChange={e => onChange(e)}
                    />
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
                </div>
                <button className="btn btn-info" onClick={e => calculatorBMI(e)}>Calculate BMI</button>
                <input type="submit" className="btn btn-primary my-1" />
            </form>
            {/* <div className="col-sm-6">
                <div className={'bmi-result alert' + getBMIResults().alertClass}>
                    <div>{calculatorBMI() || '--.-'}</div>
                    <div>{getBMIResults().label}</div>
                </div>
            </div> */}
        </Fragment>
    );
}

// function BmiDisplay(props) {
//     return (
        
//     );
// }

export default CreateProfile;