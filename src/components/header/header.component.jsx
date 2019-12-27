import React from 'react';
import {
    HeaderContainer,
    LogoContainer,
    OptionContainer,
    OptionLink,
    OptionButton
} from './header.styles';

import { selectCurrentUser } from '../../redux/auth/auth.selector';
import { signOutStart } from '../../redux/auth/auth.actions';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const Header = ({ currentUser, signOutStart }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <i className="fas fa-dumbbell" style={{ color: "black" }}></i>
        </LogoContainer>
        <OptionContainer>
            <OptionLink to="/shop">
                SHOP
            </OptionLink>
            <OptionLink to="/plans">
                PLANS
            </OptionLink>
            {
                currentUser ?
                    <OptionButton as="div" onClick={signOutStart}>
                        SIGN OUT
                    </OptionButton>
                    :
                    <OptionLink to="/signin">
                        SIGN IN
                    </OptionLink>
            }
        </OptionContainer>
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);