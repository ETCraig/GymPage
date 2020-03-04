import React from 'react';

const SectionTwo = () => (
    <section id="process" className="process">
        <div className="container-fluid container-fluid-max">
            <div className="row text-center py-5">
                <div className="col-12 pb-4">
                    <h2 className="text-red">How It Works</h2>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                    <span className="fa-stack fa-2x">
                        <i className="fas fa-circle fa-stack-2x text-red"></i>
                        <i className="fas fa-user-circle fa-stack-1x text-white"></i>
                    </span>
                    <h3 className="mt-3 text-red h4">Create an Account</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed repudiandae.</p>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                    <span className="fa-stack fa-2x">
                        <i className="fas fa-circle fa-stack-2x text-red"></i>
                        <i className="far fa-address-card fa-stack-1x text-white"></i>
                    </span>
                    <h3 className="mt-3 text-red h4">Add your Profile</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed repudiandae.</p>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                    <span className="fa-stack fa-2x">
                        <i className="fas fa-circle fa-stack-2x text-red"></i>
                        <i className="fas fa-clipboard-list fa-stack-1x text-white"></i>
                    </span>
                    <h3 className="mt-3 text-red h4">Use the Resources</h3>
                    <p>Nor again is there anyone who loves or pursues or desires to obtain pain.</p>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                    <span className="fa-stack fa-2x">
                        <i className="fas fa-circle fa-stack-2x text-red"></i>
                        <i className="fas fa-dumbbell fa-stack-1x text-white"></i>
                    </span>
                    <h3 className="mt-3 text-red h4">Smash your Goals</h3>
                    <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</p>
                </div>
                <div className="col-12 pt-3">
                    <a className="btn bg-red text-white" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Neuschwanstein_Castle" role="button">Learn More →</a>
                </div>
            </div>
        </div>
    </section>
);

export default SectionTwo;