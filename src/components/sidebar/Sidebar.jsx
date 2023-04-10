import React, { useState } from 'react';
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs';
import { BiImport } from 'react-icons/bi';
import { SiMongodb } from 'react-icons/si';
import { AiFillApi } from 'react-icons/ai';
import { RiMailSendFill } from 'react-icons/ri';
import { IoCloudDownloadSharp, IoBarChart } from 'react-icons/io5';
import { FaFilter, FaSortAmountDownAlt } from 'react-icons/fa';


import "./Sidebar.css";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <>
            <div className={isOpen ? 'sidebar open' : 'sidebar closed'}>
                <div className="header">
                    {isOpen && <BsFillArrowLeftSquareFill size={30} onClick={handleSidebar} style={{ color: '#6230A3', cursor: 'pointer' }} />}
                    {!isOpen && <BsFillArrowRightSquareFill size={30} onClick={handleSidebar} style={{ color: '#6230A3', cursor: 'pointer' }} />}
                </div>
                {isOpen && <div className="content">
                    <div className='sidebar-canvas-options'>
                        <aside>
                            <div className='integration-section'>
                                <h1 className='sidebar-section-heading'>Integrations</h1>
                                <div className='integration-dragable-section'>
                                    <div className="integration-dragable" onDragStart={(event) => onDragStart(event, 'Printavo')} draggable>
                                        <AiFillApi />
                                        Printavo
                                    </div>
                                    <div className="integration-dragable" onDragStart={(event) => onDragStart(event, 'Import')} draggable>
                                        <BiImport />
                                        Import file
                                    </div>
                                    <div className="integration-dragable" onDragStart={(event) => onDragStart(event, 'input')} draggable>
                                        <SiMongodb />
                                        MongoDB
                                    </div>
                                    <div className="integration-dragable" onDragStart={(event) => onDragStart(event, 'input')} draggable>
                                        <AiFillApi />
                                        API
                                    </div>
                                </div>
                                <h1 className='sidebar-section-heading'>Transform</h1>
                                <div className='integration-dragable-section'>
                                    <div className="integration-dragable" onDragStart={(event) => onDragStart(event, 'input')} draggable>
                                        <FaFilter />
                                        Filter
                                    </div>
                                    <div className="integration-dragable" onDragStart={(event) => onDragStart(event, 'input')} draggable>
                                        <FaSortAmountDownAlt />
                                        Sort
                                    </div>
                                </div>
                                <h1 className='sidebar-section-heading'>Output</h1>
                                <div className='integration-dragable-section'>
                                    <div className="integration-dragable" onDragStart={(event) => onDragStart(event, 'input')} draggable>
                                        <IoCloudDownloadSharp />
                                        Export
                                    </div>
                                    <div className="integration-dragable" onDragStart={(event) => onDragStart(event, 'input')} draggable>
                                        <RiMailSendFill />
                                        Send via email
                                    </div>
                                    <div className="integration-dragable" onDragStart={(event) => onDragStart(event, 'input')} draggable>
                                        <IoBarChart />
                                        Chart
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>}
            </div>
        </>
    );
};

export default Sidebar;
