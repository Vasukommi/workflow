import { useState } from 'react';
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs';
import "./Sidebar.css";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={isOpen ? 'sidebar open' : 'sidebar closed'}>
                <div className="header">
                    {isOpen && <BsFillArrowLeftSquareFill size={30} onClick={handleSidebar} style={{ color: '#6230A3', cursor: 'pointer' }} />}
                    {!isOpen && <BsFillArrowRightSquareFill size={30} onClick={handleSidebar} style={{ color: '#6230A3', cursor: 'pointer' }} />}
                </div>
                {isOpen && <div className="content">Sidebar content goes here</div>}
            </div>
        </>
    );
};

export default Sidebar;
