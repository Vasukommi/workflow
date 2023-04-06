import React, { useState, useEffect } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import "./Popup.css";

const Popup = ({ popupDetails, showPopup, visible }) => {

    const togglePopup = () => {
        showPopup()
    }

    const footerContent = (
        <div className="popup-footer-button-container" style={{ position: 'sticky', top: 0 }}>
            <h1 className="popup-heading">{popupDetails?.data?.label ? popupDetails.data.label : ''}</h1>
            <div>
                <Button label="Cancel" onClick={() => togglePopup(false)} className="popup-main-cancel-button" />
                <Button label="Save" onClick={() => togglePopup(false)} className="popup-main-save-button" />
            </div>
        </div>
    );

    return (
        <div className="card flex justify-content-center">
            <Dialog visible={visible} style={{ width: '94vw', height: '90vh' }} closable={false} header={footerContent}>
                <div className="popup-content-container">
                  new
                </div>
            </Dialog>
        </div>
    );
}

export default Popup