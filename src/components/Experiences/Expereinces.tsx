import React, { useEffect, useRef, useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { COLORS } from '../../style/colors';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { Fade } from '@mui/material';
import VizSensor from 'react-visibility-sensor';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const Experiences = () => {
  const [value, setValue] = React.useState(0);
  const [visible, setVisible] = useState(false);
  function getStyle (index: number) {
    return index === value ? {color: COLORS.dark} : {color: COLORS.text}
  }
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const selfIntro = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

  return (
    <VizSensor
    partialVisibility
            onChange={(isVisible: any) => {
                setVisible(isVisible);
            }}
        >
    <Fade in={visible} timeout={1000}>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} 
        onChange={handleChange} 
        aria-label="basic tabs example"
        indicatorColor="secondary"
        >
          <Tab label="U of T" {...a11yProps(0)} style={getStyle(0)}/>
          <Tab label="Huya" {...a11yProps(1)} style={getStyle(1)}/>
          <Tab label="Centivizer" {...a11yProps(2)} style={getStyle(2)}/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      
        <Link href="https://www.utoronto.ca/" underline="hover" color={COLORS.dark}>
          <Typography variant="h4">University of Toronto</Typography>
        </Link>
        <Typography color={COLORS.dark}>Sep 2018 - Dec 2022</Typography>
        {selfIntro}
        
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
    </Fade>
    </VizSensor>
  );
}
export default Experiences
