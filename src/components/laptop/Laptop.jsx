import React, { useEffect, useState } from 'react'
import { images } from '../../constants';
import './laptop.css';
import { FaWindows, FaWifi, FaAngleUp, FaAngleDown } from 'react-icons/fa'
import { HiVolumeUp } from 'react-icons/hi'
import MainMenu from '../mainMenu/MainMenu';



const getDate = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
}

const getHours = () => {
    const today = new Date();
    const hour = today.getHours();
    const minutes = today.getMinutes();
    const timer = hour >= 12 ? 'PM' : 'AM';
    return `${hour}:${minutes} ${" "} ${timer}`;
}


const Laptop = () => {
    const [time, setTime] = useState(new Date());

    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleWindow, setToggleWindow] = useState(false);

    const today = new Date();
    const hour = today.getHours();
    const timer = hour >= 12 ? 'PM' : 'AM';

    useEffect(() => {
        setInterval(() =>
            setTime(new Date()), 60000)
    }, [])


    const [currentDate, setCurrentDate] = useState(getDate());

    return (
        <div className='laptop_container'>
            <img src={images.laptop} alt="Laptop Img" className='laptop' />
            <img src={images.mobile} alt="Mobile Img" className='mobile' />

            <div className={'laptop_content'} style={{ backgroundImage: 'url(/windows.png)' }}>
                <div className='laptop_content-area '>
                    {toggleWindow && (
                        <MainMenu />
                    )}
                    {toggleMenu && (
                        <div className='notification-popup'>
                            asd
                        </div>
                    )}
                </div>
                <div className='laptop_taskbar'>
                    <div style={{ display: 'flex' }}>
                        <FaWindows onClick={() => {
                            toggleWindow
                                ? setToggleWindow(false)
                                : setToggleWindow(true)
                        }
                        } className='window-button' />
                    </div>
                    <div className='laptop_taskbar-notif'>
                        <div style={{ display: 'flex' }}>
                            {
                                toggleMenu
                                    ? <FaAngleDown style={{ marginRight: '5px' }} onClick={() => setToggleMenu(false)} />
                                    : <FaAngleUp style={{ marginRight: '5px' }} onClick={() => setToggleMenu(true)} />
                            }
                            <FaWifi />
                            <HiVolumeUp />

                        </div>
                        <div className='laptop_taskbar-notif-content'>
                            <div className='dateTime'>
                                <p>{time.getHours() > 12 ? (time.getHours() - 12) : time.getHours()}{":"}{('0' + (time.getMinutes())).slice(-2)}{timer}</p>
                                <p>{currentDate}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Laptop