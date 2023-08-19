import React from 'react';
import './mainmenu.css';
import { FaBars } from 'react-icons/fa';
import { images } from '../../constants';
import { AiOutlinePoweroff, AiOutlineSetting, AiOutlinePicture, AiOutlineFile, AiOutlineMore } from 'react-icons/ai'

const MainMenu = () => (
    <div className='main_menu-popup slide-bottom'>
        <div className='main_menu-popup-contents'>
            <div className='side_menu'>
                <FaBars />
                <div className='side_menu-btmicons'>
                    <a href=""><img src={images.icon} alt="icon" /></a>
                    <AiOutlineFile />
                    <AiOutlinePicture />
                    <AiOutlineSetting />
                    <AiOutlinePoweroff />
                </div>
            </div>

            <div className='square_menu'>
                <div className='square_menu-container'>
                    <h4>My Profile</h4>
                    <div className='square_menu-container-content'>                     
                        <a href="#"><img src={images.icon} style={{width:'100px', height: '100px'}}alt="icon" /></a>
                        <div className='profile_group'>
                            <h2>Jerry S. Ale</h2>
                            <p>FrontEnd Developer</p>
                            <a href="#">Click here to open my portfolio</a>
                        </div>
                    </div>
                </div>
               
                <div className='square_menu-container'>
                    <h4>My Tools</h4>
                    <div className='square_menu-container-content-4'>                     
                        <div className='item_icons'>
                            <img src={images.html} alt="" />
                            <img src={images.css} alt="" />
                            <img src={images.javascript} alt="" />
                            <img src={images.bootstrap} alt="" />
                            <img src={images.tailwind} alt="" />
                            <img src={images.react} alt="" />
                            <img src={images.html} alt="" />
                            <img src={images.css} alt="" />
                            <img src={images.javascript} alt="" />
                            <img src={images.bootstrap} alt="" />
                            <img src={images.tailwind} alt="" />
                            <img src={images.react} alt="" />
                            <h4>Web Development Stack</h4>
                        </div>
                        <div className='item_icons-2'>
                            <img src={images.photoshop} alt="" />
                            <img src={images.figma} alt="" />
                            <img src={images.illustrator} alt="" />
                            <img src={images.xd} alt="" />
                            <img src={images.github} alt="" />
                            <h4>Other Tools</h4>
                        </div >
                     
                    </div>
                    <div className='square_menu-container'>
                    <h4>Contact Details</h4>
                </div>
                </div>
            </div>

        </div>
    </div>
)


export default MainMenu