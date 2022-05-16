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
import { Link } from '@mui/material';
import logo from '../../lofi_avatar.png';
import './AboutMe.css';
import { Fade } from '@mui/material';
import VizSensor from 'react-visibility-sensor';

const AboutMe = () => {
  const [visible, setVisible] = useState(false);
  const selfIntro = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

  return (
    <VizSensor
    partialVisibility
            onChange={(isVisible: any) => {
                setVisible(isVisible);
            }}
        >
    <Fade in={visible} timeout={1000}>
    <Box sx={{ flexDirection: 'column'}} >
      <Typography variant="h4">Hi, I'm Leo!</Typography>
      <Typography>
      {selfIntro}
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