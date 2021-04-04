import React from 'react';
import  './Home.css';
import background from '../../images/home_bg.jpg';
import Navigation from '../../Components/Navigation/Navigation';
import Header from '../Header/Header';
import Work from '../Work/Work';
import Activities from '../Activities/Activities';
import ActivitiesFotter from '../ActivitiesFotter/ActivitiesFotter';
import About from '../About/About';
import Project from '../Project/Project';
import News from '../News/News';
import Contact from '../Contact/Contact';

const Home = () => {
   
    return (
     <div className="robot_page img-fluid"
      style={{backgroundImage:`url(${background})`}}>
         {
             <Navigation></Navigation>
         }
         {
             <Header></Header>
         }
         {
             <Work></Work>
         }
         <hr/>


        <div style={{height:'100px'}}></div>
        {
            <Activities></Activities>
        }
          <div style={{height:100}}></div>
        {
            <ActivitiesFotter></ActivitiesFotter>
        }
        {
            <About></About>
        }
        {
            <Project></Project>
        }
        <div style={{height:100}}></div>
        {
            <News></News>
        }
        <div style={{height:'50px'}}></div>
        {
            <Contact></Contact>
        }
     </div>
    );
};

export default Home;