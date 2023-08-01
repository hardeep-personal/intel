import React from 'react'
import './nav.css'

const Nav = () => {
    return (
        <>
            <div className="container my-1 orange myNav">
                <ul className='d-flex justify-content-center justify-content-evenly py-3 list text-white '>
                    <li>HOME</li>
                    <li class="dropdown">ABOUT FWIC
                        <div class="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </li>
                    <li class="dropdown">STUDY
                        <div class="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>

                    </li>
                    <li class="dropdown">VISIT

                    <div class="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                        </div>
                    </li>
                    <li>BUSINESS-INVESTOR</li>
                    <li>SUCCESS STORIES</li>
                    <li>BLOG</li>
                    <li>CONTACT US</li>
                </ul>
            </div>
        </>
    )
}

export default Nav