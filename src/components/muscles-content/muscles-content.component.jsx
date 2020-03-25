import React from 'react';

import Shoulders from '../../assets/shoulders.jpg';
import Arms from '../../assets/biceps.jpg';
import Chest from '../../assets/chest.jpg';
import Back from '../../assets/back.jpg';
import Abs from '../../assets/abs.jpg';
import Forearms from '../../assets/forearms.jpg';
import UpperLegs from '../../assets/upper-legs.jpg';
import LowerLegs from '../../assets/lower-legs.jpg';

import { Link } from 'react-router-dom';

const MusclesContent = () => {
    return (
        <div className="card-deck mt-4">
            <div className="card mb-4">
                <Link to="/muscles/shoulders">
                    <img className="card-img-top img-thumbnail img-fluid" src={Shoulders} style={{ width: "322", height: "326" }} alt="Muscle Card " />
                    <div className="card-body">
                        <h4 className="card-title">Shoulders</h4>
                    </div>
                </Link>
            </div>
            <div className="card mb-4">
                <Link to="/muscles/arms">
                    <img className="card-img-top img-thumbnail img-fluid" src={Arms} style={{ width: "322", height: "326" }} alt="Muscle Card " />
                    <div className="card-body">
                        <h4 className="card-title">Arms</h4>
                    </div>
                </Link>
            </div>
            <div className="w-100 d-none d-sm-block d-md-none"></div>
            <div className="card mb-4">
                <Link to="/muscles/chest">
                    <img className="card-img-top img-thumbnail img-fluid" src={Chest} style={{ width: "322", height: "326" }} alt="Muscle Card " />
                    <div className="card-body">
                        <h4 className="card-title">Chest</h4>
                    </div>
                </Link>
            </div>
            <div className="w-100 d-none d-md-block d-lg-none"></div>
            <div className="card mb-4">
                <Link to="/muscles/back">
                    <img className="card-img-top img-thumbnail img-fluid" src={Back} style={{ width: "322", height: "326" }} alt="Muscle Card " />
                    <div className="card-body">
                        <h4 className="card-title">Back</h4>
                    </div>
                </Link>
            </div>
            <div className="w-100 d-none d-sm-block d-md-none"></div>
            <div className="w-100 d-none d-lg-block d-xl-none"></div>
            <div className="card mb-4">
                <Link to="/muscles/abs">
                    <img className="card-img-top img-thumbnail img-fluid" src={Abs} style={{ width: "322", height: "326" }} alt="Muscle Card " />
                    <div className="card-body">
                        <h4 className="card-title">Abs</h4>
                    </div>
                </Link>
            </div>
            <div className="w-100 d-none d-xl-block"></div>
            <div className="card mb-4">
                <Link to="/muscles/forearms">
                    <img className="card-img-top img-thumbnail img-fluid" src={Forearms} style={{ width: "322", height: "326" }} alt="Muscle Card " />
                    <div className="card-body">
                        <h4 className="card-title">Forearms</h4>
                    </div>
                </Link>
            </div>
            <div className="w-100 d-none d-sm-block d-md-none"></div>
            <div className="w-100 d-none d-md-block d-lg-none"></div>
            <div className="card mb-4">
                <Link to="/muscles/upper-legs">
                    <img className="card-img-top img-thumbnail img-fluid" src={UpperLegs} style={{ width: "322", height: "326" }} alt="Muscle Card " />
                    <div className="card-body">
                        <h4 className="card-title">Upper Legs</h4>
                    </div>
                </Link>
            </div>
            <div className="card mb-4">
                <Link to="/muscles/lower-legs">
                    <img className="card-img-top img-thumbnail img-fluid" src={LowerLegs} style={{ width: "322", height: "326" }} alt="Muscle Card " />
                    <div className="card-body">
                        <h4 className="card-title">Lower Legs</h4>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default MusclesContent;