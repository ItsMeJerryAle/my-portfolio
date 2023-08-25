import React from 'react';
import './mainmenu.css';
import { FaBars } from 'react-icons/fa';
import { images } from '../../constants';
import { AiOutlineEdit, AiOutlineSetting, AiOutlinePicture, AiOutlineFile,AiOutlineArrowRight } from 'react-icons/ai'

const MainMenu = () => (
    <div className='main_menu-popup slide-bottom'>
        <div className='main_menu-popup-contents'>
            
            <div className='side_menu'>
                <div className='side_menu-popup slide-right'>
                   <h2>START</h2>
                   <div  className='popup-texts'>
                    <p>Jerry Ale</p>
                    <p>Projects</p>
                    <p>Gallery</p>
                    <p>Contacts</p>
                    <p>Hire Me!</p>
                   </div>
                </div>
                <FaBars />
                <div className='side_menu-btmicons '>
                    <a href="google.com"><img src={images.icon} alt="icon" /></a>
                    <AiOutlineFile />
                    <AiOutlinePicture />
                    <AiOutlineSetting />
                    <AiOutlineEdit />
                </div>
            </div>

            <div className='square_menu'>
                <div className='square_menu-container'>
                    <h4>My Profile</h4>
                    <div className='square_menu-container-content'>                     
                        <a href="google.com"><img src={images.icon} style={{width:'100px', height: '100px'}}alt="icon" /></a>
                        <div className='profile_group'>
                            <h2>Jerry S. Ale</h2>
                            <p>Your next Frontend Developer</p>
                            <a href="google.com" className='button-link'><p>See my portfolio</p> 
                                    <AiOutlineArrowRight />
                            </a>
                        </div>
                    </div>
                </div>
               
                <div className='square_menu-container'>
                    <h4>My Tools</h4>
                    <div className='square_menu-container-content-4'>                     
                        <div className='item_icons'>
                            <div className='item_icons-container'>
                            <img src={images.laravel} alt="" />
                            <img src={images.react} alt="" />
                            <img src={images.wordpress} alt="" style={{color:'#fff'}}/>
                            <img src={images.html} alt="" />
                            <img src={images.css} alt="" />
                            <img src={images.javascript} alt="" />
                            <img src={images.bootstrap} alt="" />
                            <img src={images.tailwind} alt="" />
                            <img src={images.mysql} alt="" />
                            <img src={images.firebase} alt="" />
                            <img src={images.mongodb} alt="" />
                            </div>
                            <h4>Web Development Stack</h4>
                        </div>
                        <div className='item_icons-2'>
                            <div  className='item_icons-container'>
                                <img src={images.photoshop} alt="" />
                                <img src={images.figma} alt="" />
                                <img src={images.illustrator} alt="" />
                                <img src={images.xd} alt="" />
                                <img src={images.github} alt="" />
                            </div>
                            <h4>Other Tools</h4>
                        </div >
                    </div>
                </div>

            </div>

        </div>
    </div>
)


export default MainMenu