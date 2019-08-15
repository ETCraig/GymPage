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
                    <Link to="/exercise-menu/shoulders">
                        <div className="col">
                            <img style={{ border: "1px solid #eee" }} src={Shoulder} />
                            <div class="caption">
                                <p>Shoulders</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="thumbnail m-1 muscle-link">
                    <Link to="/exercise-menu/back">
                        <div className="col">
                            <img style={{ border: "1px solid #eee" }} src={Back} />
                            <div class="caption">
                                <p>Back</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="thumbnail m-1 muscle-link">
                    <Link to="/exercise-menu/arms">
                        <div className="col">
                            <img style={{ border: "1px solid #eee" }} src={Arm} />
                            <div class="caption">
                                <p>Arms</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="thumbnail m-1 muscle-link">
                    <Link to="/exercise-menu/chest">
                        <div className="col">
                            <img style={{ border: "1px solid #eee" }} src={Chest} />
                            <div class="caption">
                                <p>Chest</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="row d-flex justify-content-center m-5">
                <div className="thumbnail m-1 muscle-link">
                    <Link to="/exercise-menu/core">
                        <div className="col">
                            <img style={{ border: "1px solid #eee" }} src={Core} />
                            <div class="caption">
                                <p>Core</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="thumbnail m-1 muscle-link">
                    <Link to="/exercise-menu/legs">
                        <div className="col">
                            <img style={{ border: "1px solid #eee" }} src={Legs} />
                            <div class="caption">
                                <p>Legs</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="thumbnail m-1 muscle-link">
                    <Link to="/exercise-menu/cardio">
                        <div className="col">
                            <img style={{ border: "1px solid #eee" }} src={Cardio} />
                            <div class="caption">
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