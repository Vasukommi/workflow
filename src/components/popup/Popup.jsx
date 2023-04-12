import React, { useState, useEffect } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import AuthorizePrintavo from 'printavo/AuthorizePrintavo';
import InputOrders from 'printavo/OrdersPrintavo';

import "./Popup.css";

const IntegrationConfigs = {
    Printavo: {
        componentName: AuthorizePrintavo,
        onClickLogin: 'onClickLogin'
    },
    InputOrders: {
        componentName: InputOrders
    }
}

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
    console.log(popupDetails?.data?.label)
    const ComponetToRender = popupDetails?.data?.label ? IntegrationConfigs[popupDetails.data.label].componentName : null
    return (
        <div className="card flex justify-content-center">
            <Dialog visible={visible} style={{ width: '94vw', height: '90vh' }} closable={false} header={footerContent}>
                <div className="popup-content-container">
                    {ComponetToRender && <ComponetToRender />}
                </div>
            </Dialog>
        </div>
    );
}

export default Popup