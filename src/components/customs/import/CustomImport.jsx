import React, { useState } from 'react';
import { Handle } from 'reactflow';
import { BiImport } from 'react-icons/bi';
import { AiTwotoneTool } from 'react-icons/ai';
import { Tooltip } from 'primereact/tooltip';
import "./CustomImport.css";

const CustomerImport = ({ data }) => {
    const [showEdge, setShowEdge] = useState(false);
    return (
        <div className='custom-import-node-container'>
            <div className='custom-import-node'>
                <BiImport className='custom-node-icons' />
                <p className='custom-node-title'>Import File</p>
                <div><AiTwotoneTool className='configure-node-icon' value={{ color: 'blue', size: '50px' }} /></div>
                <Tooltip className='custom-node-tooltip' target=".configure-node-icon" position="bottom" tooltipOptions={{ position: 'fixed' }}>
                    You need to open and configure this tool in order to execute it.
                </Tooltip>
            </div>
            {showEdge && <Handle type="source" position="right" />}
        </div>
    );
};

export default CustomerImport;