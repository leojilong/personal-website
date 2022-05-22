import React, { useEffect, useRef, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Paper } from "@mui/material";
import { styled } from '@mui/material/styles';
import MyDivider from '../MyDivider/MyDivider';
import { COLORS } from '../../style/colors';
import logo from '../../static/lofi_avatar.png';
import './AboutMe.css';
import { Fade } from '@mui/material';
import VizSensor from 'react-visibility-sensor';
import Link from '@mui/material/Link';

const AboutMe = () => {
  const [visible, setVisible] = useState(false);
  const selfIntro = "I am a software developer located in Canada. I have a huge passion for full-stack development, system design, and building fast and reliable applications."
  const person = "Detail-oriented person, problem solver, independent worker with strong communication and presentation skills. Fan of Lo-fi, Rock Music, Esports, Anime, Talk Show, and Variety Show. Used to be an active member of the school Swimming team for 6 years, Tennis team for 3 years, and Royal Canadian Air Cadets for 5 years."
  const interest = "Interested in new technologies, FinTech, and Web 3.0"
  return (
    <VizSensor
    partialVisibility
            onChange={(isVisible: any) => {
                setVisible(isVisible);
            }}
        >
    <Fade in={visible} timeout={1000}>
    <Box sx={{ flexDirection: 'column'}} >
      <Link href="https://docs.google.com/document/d/1YcPzcf5JXFOUxC4HddXeV6NwunMNQPiJ/edit?usp=sharing&ouid=109976699635638579701&rtpof=true&sd=true" underline="hover" color={COLORS.dark}>
        <Typography variant="h4" >Hi, I'm Leo!</Typography>
      </Link>
      <Typography variant="inherit">
      {selfIntro}
      </Typography>
      <br/>
      <Typography variant="inherit">
      {person}
      </Typography>
      <br/>
      <Typography variant="inherit">
      {interest}
      </Typography>
      <Box sx={{ display: { xs: 'none', md: 'flex' }}}>
        <img src={logo} width="471" height="265" style={{borderRadius: 15, marginTop: 20}}/>
      </Box>
    </Box>
    </Fade>
    </VizSensor>
    
    
  );
};
export default AboutMe