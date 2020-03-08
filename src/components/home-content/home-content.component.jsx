import React from 'react';

const HomeContent = () => (
    <>
        <header className="d-flex align-items-center position-relative masthead text-white text-center" style={{ height: "70vh", backgroundImage: "url(https://cdn-ami-drupal.heartyhosting.com/sites/muscleandfitness.com/files/styles/full_node_image_1090x614/public/media/dumbbell-press-bench-man-workout-1109.jpg?itok=ux3_zLyy)" }}>
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 mx-auto">
                        <h1 className="mb-5">Don't just map out your goals, but cursh them!</h1>
                    </div>
                    <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                        <form>
                            <div className="form-row">
                                <div className="col-12 col-md-9 mb-2 mb-md-0">
                                    <input type="email" className="form-control form-control-lg" placeholder="Enter your email..." />
                                </div>
                                <div className="col-12 col-md-3">
                                    <button type="submit" className="btn btn-block btn-lg btn-primary">Sign up!</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </header>

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

        <section className="showcase">
            <div className="container-fluid p-0">
                <div className="row no-gutters">

                    <img className="col-lg-6 order-lg-2 text-white showcase-img" alt="home-showcase" src="https://images.theconversation.com/files/135964/original/image-20160830-28213-1nhm6d8.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip" />
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h2>Fully Responsive Design</h2>
                        <p className="lead mb-0">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
                    </div>
                </div>
                <div className="row no-gutters">
                    <img className="col-lg-6 text-white showcase-img" alt="home-showcase" src="https://images.theconversation.com/files/135964/original/image-20160830-28213-1nhm6d8.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip" />
                    <div className="col-lg-6 my-auto showcase-text">
                        <h2>Updated For Bootstrap 4</h2>
                        <p className="lead mb-0">Newly improved, and full of great utility classNamees, Bootstrap 4 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 4!</p>
                    </div>
                </div>
                <div className="row no-gutters">
                    <img className="col-lg-6 order-lg-2 text-white showcase-img" alt="home-showcase" src="https://images.theconversation.com/files/135964/original/image-20160830-28213-1nhm6d8.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip" />
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h2>Easy to Use &amp; Customize</h2>
                        <p className="lead mb-0">Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="call-to-action text-white text-center">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 mx-auto">
                        <h2 className="mb-4">Ready to get started? Sign up now!</h2>
                    </div>
                    <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                        <form>
                            <div className="form-row">
                                <div className="col-12 col-md-9 mb-2 mb-md-0">
                                    <input type="email" className="form-control form-control-lg" placeholder="Enter your email..." />
                                </div>
                                <div className="col-12 col-md-3">
                                    <button type="submit" className="btn btn-block btn-lg btn-primary">Sign up!</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
);

export default HomeContent;