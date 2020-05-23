import React,{useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import Layout from './hoc/Layout/Layout' ;
import GoalSheet from './containers/GoalSheet/GoalSheet' ;
import AOS from "aos" ;
import MainComponent from '../src/containers/mainContainer'

const App=(props)=> {
  useEffect(() => {
 
    
    AOS.init({
      duration:1200,
      startEvent:'load',
      once:false,
    });
  }, []);

  return (
    <div>
    
    <Layout>
    <MainComponent></MainComponent>
  </Layout>

    </div>
  );
}

export default App;
