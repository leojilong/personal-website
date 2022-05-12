import React, { useEffect, useRef, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Margin } from "@mui/icons-material";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Paper } from "@mui/material";
import { styled } from '@mui/material/styles';
import MyDivider from '../MyDivider/MyDivider';
import { COLORS } from '../../style/colors';
import { Link } from '@mui/material';
import logo from '../../lofi_avatar.png';
import './AboutMe.css'
const AboutMe = () => {
 
const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
const selfIntro = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

  return (
    
    <Box sx={{ flexDirection: 'column'}} >
      <Typography>
      {selfIntro}
      </Typography>
      <Box sx={{ display: { xs: 'none', md: 'flex' }}}>
        <img src={logo} width="471" height="265" style={{borderRadius: 15, marginTop: 20}}/>
      </Box>
    </Box>
    // <Grid container 
    // rowSpacing={9} 
    // >
    //     <Grid item xs={12} >
    //       <Box sx={{ display: 'flex' }} onClick={preventDefault}>
    //         <Typography>
    //         {selfIntro}
    //         </Typography>
    //       </Box>
    //     </Grid>
    //     <Grid item xs={12} >
    //     <Box sx={{ display: 'flex' }} onClick={preventDefault}>
    //       <img src={logo} alt="Logo" width="533" height="300" style={{borderRadius: 15}}/>
    //       </Box>
        
    //         {/* <Box  sx={{ height: '95%' }}/> */}
    //     </Grid>
    // </Grid>
    
    
  );
};
export default AboutMe