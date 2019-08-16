import React from 'react';
import '../styles/Exercise.css';

import Arm from '../../utils/img/arms.png';
import Back from '../../utils/img/back.png';
import Cardio from '../../utils/img/cardio.png';
import Chest from '../../utils/img/chest.png';
import Core from '../../utils/img/core.png';
import Legs from '../../utils/img/legs.png';
import Shoulder from '../../utils/img/shoulder.png';

import { Link } from 'react-router-dom';

const ExerciseMenu = () => {
    return (
        <div>
            <div className="row d-flex justify-content-center m-5">
                <div className="thumbnail m-1 muscle-link">
                    <Link to="/exercise-menu/Shoulders">
                        <div className="col">
                            <img style={{ border: "1px solid #eee" }} src={Shoulder} />
                            <div className="caption">
                                <p>Shoulders</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="thumbnail m-1 muscle-link">
                    <Link to="/exercise-menu/Back">
                        <div className="col">
                            <img style={{ border: "1px solid #eee" }} src={Back} />
                            <div className="caption">
                                <p>Back</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="thumbnail m-1 muscle-link">
                    <Link to="/exercise-menu/Arms">
                        <div className="col">
                            <img style={{ border: "1px solid #eee" }} src={Arm} />
                            <div className="caption">
                                <p>Arms</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="thumbnail m-1 muscle-link">
                    <Link to="/exercise-menu/Chest">
                        <div className="col">
                            <img style={{ border: "1px solid #eee" }} src={Chest} />
                            <div className="caption">
                                <p>Chest</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="row d-flex justify-content-center m-5">
                <div className="thumbnail m-1 muscle-link">
                    <Link to="/exercise-menu/Core">
                        <div className="col">
                            <img style={{ border: "1px solid #eee" }} src={Core} />
                            <div className="caption">
                                <p>Core</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="thumbnail m-1 muscle-link">
                    <Link to="/exercise-menu/Legs">
                        <div className="col">
                            <img style={{ border: "1px solid #eee" }} src={Legs} />
                            <div className="caption">
                                <p>Legs</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="thumbnail m-1 muscle-link">
                    <Link to="/exercise-menu/Cardio">
                        <div className="col">
                            <img style={{ border: "1px solid #eee" }} src={Cardio} />
                            <div className="caption">
                                <p>Cardio</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ExerciseMenu;