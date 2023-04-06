import React, { useState } from 'react';
import { Handle } from 'reactflow';
import { AiTwotoneTool, AiFillApi } from 'react-icons/ai';
import { Tooltip } from 'primereact/tooltip';
import "./Printavo.css";

const CustomPrintavo = ({ data }) => {
    const [showEdge, setShowEdge] = useState(false);
    return (
        <div className='custom-import-node-container'>
            <div className='custom-import-node'>
                <AiFillApi className='custom-node-icons' />
                <p className='custom-node-title'>Printavo</p>
                <div><AiTwotoneTool className='configure-node-icon' value={{ color: 'blue', size: '50px' }} /></div>
                <Tooltip className='custom-node-tooltip' target=".configure-node-icon" position="bottom" tooltipOptions={{ position: 'fixed' }}>
                    You need to open and configure this tool in order to execute it.
                </Tooltip>
            </div>
            {showEdge && <Handle type="source" position="right" />}
        </div>
    );
};

export default CustomPrintavo;