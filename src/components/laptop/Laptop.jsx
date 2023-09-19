import React, { useEffect, useState } from 'react'
import { images } from '../../constants';
import './laptop.css';
import { FaWindows, FaWifi, FaAngleUp, FaAngleDown } from 'react-icons/fa'
import { HiVolumeUp } from 'react-icons/hi'
import MainMenu from '../mainMenu/MainMenu';
import MainMenuContent from '../mainMenuContent/MainMenuContent';
import PortfolioWindow from '../portfolio/PortfolioWindow';



const getDate = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
}

const Laptop = () => {
    const [time, setTime] = useState(new Date());

    const [togglePortfolio, settogglePortfolio] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleWindow, setToggleWindow] = useState(false);

    const today = new Date();
    const hour = today.getHours();
    const timer = hour >= 12 ? 'PM' : 'AM';

    const toggleWindowClick = () => {
        settogglePortfolio(false)

        toggleWindow
            ? setToggleWindow(false)
            : setToggleWindow(true)
    }

    const togglePortfolioClick = () => {
        togglePortfolio
            ? settogglePortfolio(false)
            : settogglePortfolio(true)
        setToggleWindow(false)
        setToggleMenu(false)
    }

    const toggleNavigation = () => {
        settogglePortfolio(false)
        toggleMenu ? setToggleMenu(false) : setToggleMenu(true)
    }

    useEffect(() => {
        setInterval(() =>
            setTime(new Date()), 60000)
    }, [])


    const currentDate = getDate();

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
                        <MainMenuContent />
                    )}
                </div>

                <div className='laptop_taskbar'>

                    <div className='taskbar-icons'>

                        <FaWindows onClick={() => {
                            toggleWindowClick()
                        }
                        } className='window-button' />
                        <div className='taskbar-icons-app'>
                            <img src={images.portfolio} alt="vscode" onClick={() => {
                                togglePortfolioClick()
                            }
                            } />

                            
                           <img src={images.edge} alt="vscode" />
                        </div>


                    </div>
                    <div className='laptop_taskbar-notif'>
                        <div style={{ display: 'flex' }}>
                            {
                                toggleMenu
                                    ? <FaAngleDown style={{ marginRight: '5px' }} onClick={() => toggleNavigation()} />
                                    : <FaAngleUp style={{ marginRight: '5px' }} onClick={() => toggleNavigation()} />
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

            {togglePortfolio && (
                <PortfolioWindow />
            )}
        </div>
    )
}

export default Laptop