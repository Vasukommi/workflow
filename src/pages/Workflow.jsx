import Header from "../components/header/Header"
import Sidebar from "../components/sidebar/Sidebar"
import Flow from "../components/canvas/Canvas"
import "./Workflow.css";
import { useState } from "react";
import Popup from "../components/popup/Popup";

const Workflow = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [popupDetails, setPopupDetails] = useState(null);

    const triggerPopup = (popupInfo) => {
        setShowPopup(!showPopup)
        setPopupDetails(popupInfo)
    }

    const popupToggle = () => {
        setShowPopup(!showPopup)
    }

    return (
        <>
            <Header />
            <div className="workflow-page-section">
                <div className="sidebar-canvas-section">
                    <Sidebar />
                </div>
                <div className="workflow-canvas-section">
                    <Flow triggerPopup={triggerPopup} />
                    <Popup popupDetails={popupDetails} showPopup={popupToggle} visible={showPopup} />
                </div>
            </div>
        </>
    )
}

export default Workflow