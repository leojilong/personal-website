import AboutMe from '../AboutMe/AboutMe';
import TopBar from '../TopBar/TopBar';
import MyDivider from '../MyDivider/MyDivider';
import Experiences from '../Experiences/Expereinces';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Skills from '../Skills/Skills';
import Project from '../Project/Project';
const MainPage = () => {

  return (
      <>
    <TopBar/>
    
    <Container maxWidth="lg" style={{ marginTop: 30 }}>
      <Grid container sx={{ bgcolor: '#cfe8fc', height: '150vh' }} 
            rowSpacing={1} 
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} >
            <MyDivider text="About Me"/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <AboutMe />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Skills />
          </Grid>
          <Grid item xs={12} >
            <MyDivider text="Experiences"/>
          </Grid>
          <Grid item xs={12} >
            <Experiences/>
          </Grid>
          <Grid item xs={12} >
            <div id="abc">
            <MyDivider text="Projects" />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Project title="tt" content="asd"/>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Project title="tt" content="asd"/>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Project title="tt" content="asd"/>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Project title="tt" content="asd"/>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Project title="tt" content="asd"/>
          </Grid>
      </Grid>
        
    </Container>
    
    
    </>
  );
};
export default MainPage;
