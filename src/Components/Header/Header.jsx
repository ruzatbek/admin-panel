import React from 'react';
import Logo from '../../assets/user-regular.svg'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {

    return (

        <div className='header'>
            <button className='header__btn'></button>
            <Link><img src={Logo} alt="" width={20}/></Link>
        </div>
    );
}

export default Header;
