import React from 'react';
import { 
    HeaderContainer, 
    LogoContainer, 
    OptionContainer,
    OptionLink,
    OptionButton
} from './header.styles';

const Header = () => (
    <HeaderContainer>
        <LogoContainer to="/">
            <i className="fas fa-dumbbell" style={{color: "black"}}></i>
        </LogoContainer>
        <OptionContainer>
            <OptionLink to="/shop">
                SHOP
            </OptionLink>
            <OptionLink to="/plans">
                PLANS
            </OptionLink>
        </OptionContainer>
    </HeaderContainer>
);

export default Header;