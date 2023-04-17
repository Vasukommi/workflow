import React, { useState } from 'react';
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs';
import { MdInventory2, MdGroups3, MdPayments } from 'react-icons/md';
import { ImBoxAdd } from 'react-icons/im';
import { TbTruckDelivery, TbHomeShare } from 'react-icons/tb';
import { IoCloudDownloadSharp, IoBarChart } from 'react-icons/io5';
import { FaFileImport } from 'react-icons/fa';
import "./Triggers.css";

const Trigger = ({ setTriggerStatus }) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const backToIntegrations = () => {
        setTriggerStatus()
    }

    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <>
            <div className={isOpen ? 'sidebar open' : 'sidebar closed'}>
                <div className="header">
                    {isOpen && <TbHomeShare size={30} onClick={backToIntegrations} style={{ color: '#6230A3', cursor: 'pointer' }} />}
                    {isOpen && <BsFillArrowLeftSquareFill size={30} onClick={handleSidebar} style={{ color: '#6230A3', cursor: 'pointer' }} />}
                    {!isOpen && <BsFillArrowRightSquareFill size={30} onClick={handleSidebar} style={{ color: '#6230A3', cursor: 'pointer' }} />}
                </div>
                {isOpen && <div className="content">
                    <div className='sidebar-canvas-options'>
                        <aside>
                            <div className='integration-section'>
                                <h1 className='sidebar-section-heading'>Connect Options Printavo</h1>
                                <div className='integration-dragable-section'>
                                    <div className="integration-dragable-trigers" onDragStart={(event) => onDragStart(event, 'InputOrders')} draggable>
                                        <div className='integration-dragable-icons-trigers'>
                                            <TbTruckDelivery style={{ marginRight: '4px' }} />
                                            Orders
                                        </div>
                                        <FaFileImport />
                                    </div>
                                    <div className="integration-dragable-trigers" onDragStart={(event) => onDragStart(event, 'Import')} draggable>
                                        <div className='integration-dragable-icons-trigers'>
                                            <MdInventory2 style={{ marginRight: '4px' }} />
                                            Inventory
                                        </div>
                                        <FaFileImport />
                                    </div>
                                    <div className="integration-dragable-trigers" onDragStart={(event) => onDragStart(event, 'input')} draggable>
                                        <div className='integration-dragable-icons-trigers'>
                                            <MdGroups3 style={{ marginRight: '4px' }} />
                                            Customers
                                        </div>
                                        <FaFileImport />
                                    </div>
                                    <div className="integration-dragable-trigers" onDragStart={(event) => onDragStart(event, 'input')} draggable>
                                        <div className='integration-dragable-icons-trigers'>
                                            <MdPayments style={{ marginRight: '4px' }} />
                                            Payments
                                        </div>
                                        <FaFileImport />
                                    </div>
                                </div>
                                <h1 className='sidebar-section-heading'>Connect Options SC</h1>
                                <div className='integration-dragable-section'>
                                    <div className="integration-dragable-trigers" onDragStart={(event) => onDragStart(event, 'OutputOrders')} draggable>
                                        <div className='integration-dragable-icons-trigers'>
                                            <TbTruckDelivery style={{ marginRight: '4px' }} />
                                            Orders
                                        </div>
                                        <ImBoxAdd />
                                    </div>
                                    <div className="integration-dragable-trigers" onDragStart={(event) => onDragStart(event, 'Import')} draggable>
                                        <div className='integration-dragable-icons-trigers'>
                                            <MdInventory2 style={{ marginRight: '4px' }} />
                                            Inventory
                                        </div>
                                        <ImBoxAdd />
                                    </div>
                                    <div className="integration-dragable-trigers" onDragStart={(event) => onDragStart(event, 'input')} draggable>
                                        <div className='integration-dragable-icons-trigers'>
                                            <MdGroups3 style={{ marginRight: '4px' }} />
                                            Customers
                                        </div>
                                        <ImBoxAdd />
                                    </div>
                                    <div className="integration-dragable-trigers" onDragStart={(event) => onDragStart(event, 'input')} draggable>
                                        <div className='integration-dragable-icons-trigers'>
                                            <MdPayments style={{ marginRight: '4px' }} />
                                            Payments
                                        </div>
                                        <ImBoxAdd />
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

export default Trigger;