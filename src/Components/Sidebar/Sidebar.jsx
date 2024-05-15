import React from 'react';
import './Sidebar.css'
import { Link } from 'react-router-dom';

const Sidebar = () => {

    return (

        <div className='sidebar'>
            <Link to='/' className='side__tittle'>UzLoyalAdmin</Link>
            <ul className="side__list">
                <li className="side__item">
                    <Link className='categori__link' to='./categories'>Categories</Link>
                </li>
                <li className="side__item">
                <Link className='categori__link' to='./faqs'>Faqs</Link>
                </li>
                <li className="side__item">
                <Link className='categori__link' to='./news'>News</Link>
                </li>
            </ul>
          

        </div>
    );
}

export default Sidebar;
