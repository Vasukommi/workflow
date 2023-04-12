import React from "react";
import Header from "../components/header/Header.jsx"
import Sidebar from "../components/sidebar/Sidebar.jsx"
import Flow from "../components/canvas/Canvas.jsx"
import "./Workflow.css";
import { useState } from "react";
import Popup from "../components/popup/Popup.jsx";

const Workflow = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [popupDetails, setPopupDetails] = useState(null);
    const [showTriggers, setTriggers] = useState(false);

    const triggerPopup = (popupInfo) => {
        setShowPopup(!showPopup)
        setPopupDetails(popupInfo)
    }

    const activateTriggers = () => {
        debugger
        setTriggers(!showTriggers)
    }

    const popupToggle = () => {
        setShowPopup(!showPopup)
    }

    const triggerToggle = () => {
        setTriggers(!showTriggers)
    }

    return (
        <>
            <Header />
            <div className="workflow-page-section">
                <div className="sidebar-canvas-section">
                    <Sidebar triggers={showTriggers} triggerToggle={triggerToggle} />
                </div>
                <div className="workflow-canvas-section">
                    <Flow triggerPopup={triggerPopup} activateTriggers={activateTriggers} />
                    <Popup popupDetails={popupDetails} showPopup={popupToggle} visible={showPopup} />
                </div>
            </div>
        </>
    )
}

export default Workflow