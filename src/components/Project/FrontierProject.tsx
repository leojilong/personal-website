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


const FrontierProject = () => {
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
      Book Tracker Mobile Application
      </Typography>
      <Typography >
        •	Toronto, ON (Sep 2021 - Dec 2021)
      </Typography>
      <Typography >
        •	Hybrid App Development Project
      </Typography>
      <Typography color={COLORS.dark}>
        •	Vue, Ionic (Capacitor), Spring Boot, Vuex, Sass
      </Typography>
     
    </CardContent>
    </Card>
    </Fade>
  </VizSensor>
  </>
  );
};
export default FrontierProject