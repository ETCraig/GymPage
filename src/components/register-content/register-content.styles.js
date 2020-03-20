import styled from 'styled-components';

export const RegisterCard = styled.div`
    height: 500px;
    width: 305px;
    margin-top: auto;
    margin-bottom: auto;
    background: #4E5D6C;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
`;

export const RegisterLogoContainer = styled.div`
    position: absolute;
    height: 170px;
    width: 170px;
    top: -75px;
    border-radius: 50%;
    background: #2B3E50;
    padding: 10px;
    text-align: center;
`;

export const RegisterLogo = styled.img`
    height: 150px;
    width: 150px;
    border-radius: 50%;
    border: 2px solid white;
`;

export const RegisterCardContainer = styled.div`
    margin-top: 100px;
`;

export const RegisterBtnContainer = styled.div`
    padding: 0 2rem;
`;

export const RegisterBtn = styled.button`
    width: 100%;
`;