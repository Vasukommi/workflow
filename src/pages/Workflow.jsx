import Header from "../components/header/Header"
import Sidebar from "../components/sidebar/Sidebar"
import Flow from "../components/canvas/Canvas"
import "./Workflow.css";

const Workflow = () => {
    return (
        <>
            <Header />
            <div className="workflow-page-section">
                <div className="sidebar-canvas-section">
                    <Sidebar />
                </div>
                <div className="workflow-canvas-section">
                    <Flow />
                </div>
            </div>
        </>
    )
}

export default Workflow