import React from 'react';
import { LandingContainer } from './landing.styles';

import LandingContent from '../../components/landing-content/landing-content.component';

const Landing = () => (
    <LandingContainer>
        <div data-spy="scroll" data-offset="72" className="position-relative">
            <main>
                <LandingContent />
            </main>
        </div>
    </LandingContainer>
);

export default Landing;