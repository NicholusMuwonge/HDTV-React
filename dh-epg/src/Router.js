import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import TopNavBar from './Nav/NavBar';
import BottomNavBar from './Nav/BottomNav';
import Content from './Content/Contents';


const Routes =() => (
    
    <BrowserRouter >
     <TopNavBar/>
     <BottomNavBar/>
     <Content />
    </BrowserRouter>
    
);


export default Routes;
