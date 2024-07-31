import React from 'react'
import '../Header/Header.css'

function Header() {
    return (
        <div className='header'>
            <div>
                <img src="src/assets/Logo (2).svg" alt="logo" />
            </div>
            <div >
                <img src="src/assets/Btn 01.svg" alt="" />
                <select >
                    <option value="Bruce Lee">Bruce Lee</option>
                    <option value="Jackie chan">Jackie chan</option>
                    <option value="Jet Li">Jet Li</option>
                </select>
            </div>
            <div>
        <img src="src/assets/icon.svg" alt="" />
        <img src="src/assets/icon2.svg" alt="" />
            </div>
        </div>
    )
}

export default Header