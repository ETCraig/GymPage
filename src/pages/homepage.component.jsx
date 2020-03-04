import React from 'react';
import { HomePageContainer } from './homepage.styles';

import SectionOne from '../components/home-sections/sectionOne/sectionOne.component';
import SectionTwo from '../components/home-sections/sectionTwo/sectionTwo.component';
import SectionThree from '../components/home-sections/sectionThree/sectionThree.component';

const HomePage = () => (
    <HomePageContainer>
        <div data-spy="scroll" data-offset="72" className="position-relative">
            <main>
                <SectionOne />
                <SectionTwo />
                <SectionThree />
            </main>
        </div>
    </HomePageContainer>
);

export default HomePage;