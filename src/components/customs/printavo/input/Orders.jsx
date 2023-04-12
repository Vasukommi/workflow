import React, { useState } from 'react';
import { Handle } from 'reactflow';
import { AiTwotoneTool, AiFillApi } from 'react-icons/ai';
import { CgExtensionAdd } from 'react-icons/cg';
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

const CustomPrintavoOrdersInput = ({ data }) => {
    return (
        <div className='custom-import-node-container-orders'>
            <div className='custom-import-node'>
                <TbTruckDelivery className='custom-node-icons-orders-in' />
                <p className='custom-node-title'>Orders</p>
                <div>
                    <CgExtensionAdd className='configure-node-icon-order-in' value={{ color: 'blue', size: '50px' }} />
                </div>
                <Tooltip className='custom-node-tooltip-orders-in' target=".configure-node-icon-order-in" position="bottom" tooltipOptions={{ position: 'fixed' }}>
                    Triggers when a order is placed.
                </Tooltip>
                <Tooltip className='custom-node-tooltip' target=".connected-node-icon" position="bottom" tooltipOptions={{ position: 'fixed' }}>
                    Printavo Connected.
                </Tooltip>
                <Tooltip className='custom-node-tooltip' target=".handle-output" position="bottom" tooltipOptions={{ position: 'fixed' }}>
                    Output.
                </Tooltip>
            </div>
            <Handle style={handleMode} type="source" position="right" className='handle-output' />
        </div>
    );
};

export default CustomPrintavoOrdersInput;