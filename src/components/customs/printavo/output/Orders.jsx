import React, { useState } from 'react';
import { Handle } from 'reactflow';
import { AiOutlineDatabase } from 'react-icons/ai';
import { BsFillDatabaseFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { Tooltip } from 'primereact/tooltip';
import "./Input.css";

const handleMode = {
    width: '8px',
    height: '8px',
    backgroundColor: '#A2B9C0',
    color: '#A2B9C0',
    border: '1px solid #FFFFFF'
}

const CustomPrintavoOrdersOutput = ({ data }) => {
    return (
        <div className='custom-export-node-container-orders'>
            <Handle style={handleMode} type="target" position="left" className='handle-output' />
            <div className='custom-import-node'>
                <BsFillDatabaseFill className='custom-node-icons-orders-in' />
                <p className='custom-node-title'>Orders</p>
                <div>
                    <AiOutlineDatabase className='configure-node-icon-order-out' value={{ color: 'blue', size: '50px' }} />
                </div>
                <Tooltip className='custom-node-tooltip-orders-in' target=".configure-node-icon-order-in" position="bottom" tooltipOptions={{ position: 'fixed' }}>
                    Saves the order in SC Database.
                </Tooltip>
                <Tooltip className='custom-node-tooltip' target=".connected-node-icon" position="bottom" tooltipOptions={{ position: 'fixed' }}>
                    Printavo Connected.
                </Tooltip>
                <Tooltip className='custom-node-tooltip' target=".handle-output" position="bottom" tooltipOptions={{ position: 'fixed' }}>
                    Output.
                </Tooltip>
            </div>
        </div>
    );
};

export default CustomPrintavoOrdersOutput;