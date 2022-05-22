import React, { useEffect, useRef, useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Fade } from '@mui/material';
import VizSensor from 'react-visibility-sensor';
import { COLORS } from "../../style/colors";
import HuyaModal from "./HuyaModal";


const FluidProject = () => {
  const [visible, setVisible] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => {
    setOpenModal(true);
  }
  const handleClose = () => {
    setOpenModal(false);
  }
  return (
    <>
    <HuyaModal isOpen={openModal} handleClose={handleClose}/>
    <VizSensor
    partialVisibility
          onChange={(isVisible: any) => {
              setVisible(isVisible);
          }}
      >
    <Fade in={visible} timeout={1000}>
    <Card
    sx={{
      '&:hover': {
        boxShadow: 20, // theme.shadows[20]
      },
      minWidth: 275
    }}
    style={{backgroundColor: COLORS.bold}}
    onClick={handleOpen}
  >
    <CardContent>
    <Typography variant="h5" component="div" color={COLORS.dark}>
      Position-Based Fluid Simulation
      </Typography>
      <Typography >
        •	Toronto, ON (Sep 2020 - Dec 2020)
      </Typography>
      <Typography >
        •	Computer Graphics (Physic-Based Animation) Project 
      </Typography>
      <Typography color={COLORS.dark}>
        •	Python, Taichi 
      </Typography>
     
    </CardContent>
    </Card>
    </Fade>
  </VizSensor>
  </>
  );
};
export default FluidProject