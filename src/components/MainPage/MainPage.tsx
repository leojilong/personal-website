import React, { useEffect, useRef, useState } from "react";
import AboutMe from '../AboutMe/AboutMe';
import TopBar from '../TopBar/TopBar';
import MyDivider from '../MyDivider/MyDivider';
import Experiences from '../Experiences/Expereinces';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Skills from '../Skills/Skills';
import BluBookProject from '../Project/BluBookProject';
import CentivizerProject from '../Project/CentivizerProject';
import FluidProject from '../Project/FluidProject';
import FrontierProject from '../Project/FrontierProject';
import HuyaProject from '../Project/HuyaProject';
import DistributedProject from '../Project/DistributedProject';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '../../style/theme';
import Contact from '../Contact/Contact';
import './MainPage.css'

const MainPage = () => {
  
  return (
      <>
      
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
    <TopBar/>
    
    <Container maxWidth="lg" style={{ marginTop: 30 }}>
      <Grid container 
            rowSpacing={1} 
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} >
            <div id="About">
            <MyDivider text="About Me" />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <AboutMe />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Skills />
          </Grid>
          <Grid item xs={12} >
            <div id="Experiences">
            <MyDivider text="Experiences"/>
            </div>
          </Grid>
          <Grid item xs={12} >
            <Experiences/>
          </Grid>
          <Grid item xs={12} >
            <div id="Projects">
            <MyDivider text="Projects" />
            </div>
          </Grid>
          <Grid item xs={12} md={6} >
            <CentivizerProject />
          </Grid>
          <Grid item xs={12} md={6} >
            <DistributedProject />
          </Grid>
          <Grid item xs={12} md={6}>
            <FrontierProject  />
          </Grid>
          <Grid item xs={12} md={6}>
            <HuyaProject />
          </Grid>
          <Grid item xs={12} md={6} >
            <BluBookProject />
          </Grid>
          <Grid item xs={12} md={6} >
            <FluidProject  />
          </Grid>
         
          <Grid item xs={12} >
            <div id="Contact">
            <MyDivider text="Contact Me" />
            </div>
          </Grid>
          <Grid item xs={12} >
            <Contact/>
          </Grid>
      </Grid>
        
    </Container>
    </ThemeProvider>

    </>
  );
};
export default MainPage;
