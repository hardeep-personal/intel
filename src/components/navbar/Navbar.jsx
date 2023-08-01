import React from 'react'
import logo from '../../images/logo.png'
import './Navbar.css'
import { BsFillTelephoneInboundFill, BsFillClockFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'



const Navbar = () => {
    return (
        <div className=' p-2 d-flex justify-content-between shadow-sm'>

            <img src={logo} className='img-responsive w-30 img-blur' />

            <div className='d-flex  justify-content-evenly w-50 text-white '>
                <div className="info">
                    <div className='d-flex align-items-center px-3'>
                        <BsFillTelephoneInboundFill size='1.4rem' />
                    </div>
                    <div >

                        <p>Contact Number</p>
                        <p className='small'>+91 90416-90436</p>
                    </div>
                </div>
                <div className="info">
                    <div className='d-flex align-items-center px-3'>
                        <BsFillClockFill size='1.4rem' />
                    </div>
                    <div>

                        <p>Contact Time</p>
                        <p className='small'>Mon-Sat : 9.30 am - 06.30 pm</p>
                    </div>
                </div>
                <div className="info">
                    <div className='d-flex align-items-center px-3'>
                        <MdEmail size='1.6rem' />
                    </div>
                    <div>

                        <p>Mail Us</p>
                        <p className='small'>info@fwic.in</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar