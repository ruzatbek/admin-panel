import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './HomePage.css'
import Categories from '../Categories/Categories';
import Header from '../Header/Header';

const HomePage = () => {

    return (

        <div className='body'>
            <Sidebar/>
            <Header/>
        </div>
    );
}

export default HomePage;
