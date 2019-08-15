import React from 'react';

import Arm from '../../utils/img/arms.png';
import Back from '../../utils/img/back.png';
import Bicep from '../../utils/img/bicep.png';
import Cardio from '../../utils/img/cardio.png';
import Chest from '../../utils/img/chest.png';
import Core from '../../utils/img/core.png';
import Legs from '../../utils/img/legs.png';
import Shoulder from '../../utils/img/shoulder.png';

const ExerciseMenu = () => {
    return (
        <div>
            <div className="row d-flex justify-content-center m-5">
                <div className="thumbnail m-1">
                    <div className="col">
                        <img style={{border: "1px solid #eee"}} src={Shoulder} />
                        <div class="caption">
                            <p>Lorem ipsum...</p>
                        </div>
                    </div>
                </div>
                <div className="thumbnail m-1">
                    <div className="col">
                        <img style={{border: "1px solid #eee"}} src={Back} />
                        <div class="caption">
                            <p>Lorem ipsum...</p>
                        </div>
                    </div>
                </div>
                <div className="thumbnail m-1">
                    <div className="col">
                        <img style={{border: "1px solid #eee"}} src={Arm} />
                        <div class="caption">
                            <p>Lorem ipsum...</p>
                        </div>
                    </div>
                </div>
                <div className="thumbnail m-1">
                    <div className="col">
                        <img style={{border: "1px solid #eee"}} src={Chest} />
                        <div class="caption">
                            <p>Lorem ipsum...</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center m-5">
                <div className="thumbnail m-1">
                    <div className="col">
                        <img style={{border: "1px solid #eee"}} src={Core} />
                        <div class="caption">
                            <p>Lorem ipsum...</p>
                        </div>
                    </div>
                </div>
                <div className="thumbnail m-1">
                    <div className="col">
                        <img style={{border: "1px solid #eee"}} src={Legs} />
                        <div class="caption">
                            <p>Lorem ipsum...</p>
                        </div>
                    </div>
                </div>
                <div className="thumbnail m-1">
                    <div className="col">
                        <img style={{border: "1px solid #eee"}} src={Cardio} />
                        <div class="caption">
                            <p>Lorem ipsum...</p>
                        </div>
                    </div>
                </div>
                {/* <div className="thumbnail m-1">
                    <div className="col">
                        <img style={{border: "1px solid #eee"}} src={Arm} />
                        <div class="caption">
                            <p>Lorem ipsum...</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default ExerciseMenu;