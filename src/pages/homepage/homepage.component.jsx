import React from 'react';
import { HomePageContainer } from './homepage.styles';

import HomeContent from '../../components/home-content/home-content.component';

const HomePage = () => (
    <HomePageContainer>
        <div data-spy="scroll" data-offset="72" className="position-relative">
            <main>
                <HomeContent />
            </main>
        </div>
    </HomePageContainer>
);

export default HomePage;