import React from 'react'
import { FaRegCalendarMinus, FaGear, FaBarsStaggered, FaLock, FaRegBookmark, FaXmark, FaRegSquare, FaWindowMinimize, FaCaretLeft, FaCaretRight, FaRotateLeft } from 'react-icons/fa6'
import '../laptop/laptop.css';

const PortfolioWindow = () => {
    return (
        <div className="portfolio">
            <div className="portfolio-topbar">
                <div className="menu">
                    <div className="left">
                        My Portfolio
                        <FaXmark />
                    </div>
                    <div className="right">
                        <FaWindowMinimize />
                        <FaRegSquare />
                        <FaXmark />
                    </div>
                </div>
                <div className="search">
                    <div className="left">
                        <FaCaretLeft />
                        <FaCaretRight />
                        <FaRotateLeft />
                    </div>
                    <div className="middle">
                        <FaRegBookmark />
                        <div>
                            <FaLock />
                            https://portfolio-jerry.vercel.app/
                        </div>
                    </div>
                    <div className="right">
                        <FaRegCalendarMinus />
                        <FaGear />
                        <FaBarsStaggered />
                    </div>
                </div>
            </div>
            <iframe src="https://portfolio-jerry.vercel.app/" title="description" />
        </div>
    )
}

export default PortfolioWindow