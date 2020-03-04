import React from 'react';

const SectionThree = () => (
    <section id="featured-destinations" className="featured-destinations bg-lightblue">
        <div className="row no-gutters">
            <div className="col-12 col-md-6 d-flex align-items-center order-1 order-md-0">
                <div className="p-15">
                    <h3>Personalize & Control</h3>
                    <p><strong>Ålesund</strong> is a town and municipality in Møre og Romsdal County, Norway. It is part of the traditional district of Sunnmøre and the centre of the Ålesund Region. It is a sea port and is noted for its concentration of Art Nouveau
                architecture. The town of Ålesund is the administrative centre of Ålesund Municipality, as well as the principal shipping town of the Sunnmøre district. </p>
                    <p>The 99-square-kilometre (38 sq mi) municipality is the 382nd largest by area out of the 422 municipalities in Norway. Ålesund is the 17th most populous municipality in Norway with a population of 47,199. The municipality's population density
                is 506.6 inhabitants per square kilometre (1,312/sq mi) and its population has increased by 14% over the last decade.</p>
                    <a className="btn bg-red text-white" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/%C3%85lesund" role="button">Read More →</a>
                </div>
            </div>
            <div className="col-12 col-md-6 order-0 order-md-1">
                <div className="vh-100 cover" style={{ backgroundImage: "url(https://www.expatica.com/es/wp-content/uploads/sites/2/2014/05/shutterstock_723086014-1200x675.jpg)" }}></div>
            </div>
            <div className="col-12 col-md-6 order-2">
                <div className="vh-100 cover" style={{ backgroundImage: "url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2015/03/efficientexercise-1451662202.jpg)" }}></div>
            </div>
            <div className="col-12 col-md-6 d-flex align-items-center order-3">
                <div className="p-15">
                    <h3>Community & Resources</h3>
                    <p><strong>Neuschwanstein Castle</strong> is a 19th-century Romanesque Revival palace on a rugged hill above the village of Hohenschwangau near Füssen in southwest Bavaria, Germany. The palace was commissioned by Ludwig II of Bavaria as a retreat
                and in honour of Richard Wagner. Ludwig paid for the palace out of his personal fortune and by means of extensive borrowing, rather than Bavarian public funds.</p>
                    <p>The castle was intended as a home for the king, until he died in 1886. It was open to the public shortly after his death. Since then more than 61 million people have visited Neuschwanstein Castle. More than 1.3 million people visit annually,
                with as many as 6,000 per day in the summer.</p>
                    <a className="btn bg-red text-white" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Neuschwanstein_Castle" role="button">Read More →</a>
                </div>
            </div>
        </div>
    </section>
);

export default SectionThree;