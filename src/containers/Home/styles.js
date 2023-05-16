import styled from 'styled-components'
import Background from '../../assets/bg-image-1.png'

export const Container = styled.div`
height: 100%;
align-items: center;
margin: auto;
background: url("${Background}");
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 44.74px;
`;

export const Image = styled.img`
width: 328.92px;
height: 176.26px;
margin-top: 30px;
`;

export const InputLabel = styled.p`
letter-spacing: -0.408px;
color: #EEEEEE;
font-weight: 700;
font-size: 18px;
line-height: 22px;
margin: 0 0 0.25% 5%;
`;

export const Input = styled.input`
width: 342px;
height: 58px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
padding-left: 5%;
font-weight: 400;
font-size: 24px;
line-height: 28px;
color: #FFFFFF;
border: none;
outline: none;
margin-bottom: 34px;
`;

