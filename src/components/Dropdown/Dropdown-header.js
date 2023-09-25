import React, { useState } from 'react'

import Help from './Help';
import Learn from './Learn';

const Dropdownheader = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <div>
            <ul className='Drop-header'>
                <li className='drop-item' >Products<i class="fa fa-angle-down" aria-hidden="true"></i></li>
                <li className='drop-item'>Solutions<i class="fa fa-angle-down" aria-hidden="true"></i></li>
                <li className='drop-item'>Pricing<i class="fa fa-angle-down" aria-hidden="true"></i></li>
                <li className='drop-item' onClick={toggleDropdown}>Resources <i className={`fa ${isDropdownOpen ? 'fa-angle-up' : 'fa-angle-down'}`} aria-hidden='true'></i></li>

            </ul>
            {isDropdownOpen && (
                <ul className='dropdown-menu'>
                    <div className='help'>
                        <Help />
                    </div>
                    <div className='learn'>
                        <Learn />
                    </div>
                </ul>
            )}

        </div>
    )
}

export default Dropdownheader;
