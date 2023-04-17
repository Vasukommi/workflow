import React, { useState } from 'react';
import { Handle } from 'reactflow';
import useStore from '../../../app/store';
import { AiTwotoneTool, AiFillApi } from 'react-icons/ai';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { Tooltip } from 'primereact/tooltip';
import "./Printavo.css";

const handleMode = {
    width: '8px',
    height: '8px',
    backgroundColor: '#A2B9C0',
    color: '#A2B9C0',
    border: '1px solid #FFFFFF'
}

const CustomPrintavo = ({ data }) => {
    const [showEdge, setShowEdge] = useState(true);
    const [isConnected, setConnected] = useState(true);
    return (
        <div className='custom-import-node-container'>
            {showEdge && <Handle style={handleMode} type="target" position="left" className='handle-input' />}
            <div className='custom-import-node'>
                <AiFillApi className='custom-node-icons' />
                <p className='custom-node-title'>Printavo</p>
                <div>
                    {!isConnected && <AiTwotoneTool className='configure-node-icon' value={{ color: 'blue', size: '50px' }} />}
                    {isConnected && <BsFillCheckCircleFill className='connected-node-icon' value={{ color: 'blue', size: '50px' }} />}
                </div>
                <Tooltip className='custom-node-tooltip' target=".configure-node-icon" position="bottom" tooltipOptions={{ position: 'fixed' }}>
                    You need to open and configure this tool in order to execute it.
                </Tooltip>
                <Tooltip className='custom-node-tooltip' target=".connected-node-icon" position="bottom" tooltipOptions={{ position: 'fixed' }}>
                    Printavo Connected.
                </Tooltip>
                <Tooltip className='custom-node-tooltip' target=".handle-input" position="bottom" tooltipOptions={{ position: 'fixed' }}>
                    Input.
                </Tooltip>
                <Tooltip className='custom-node-tooltip' target=".handle-output" position="bottom" tooltipOptions={{ position: 'fixed' }}>
                    Output.
                </Tooltip>
            </div>
            {showEdge && <Handle style={handleMode} type="source" position="right" className='handle-output' />}
        </div>
    );
};

export default CustomPrintavo;