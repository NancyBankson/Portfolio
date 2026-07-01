import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Modal } from "../components/Modal";

export function AboutPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPerScholasCert, setIsPerScholasCert] = useState(false);
    const [isScrimbaCert, setIsScrimbaCert] = useState(false);
    const [isCipCert, setIsCipCert] = useState(false);
    const [isRelationalDatabaseCert, setIsRelationalDatabaseCert] = useState(false);
    const [isCsharpCert, setIsCsharpCert] = useState(false);
    const [isMBCert, setIsMBCert] = useState(false);
    const { theme } = useContext(ThemeContext);

    const OpenPerScholasCert = () => {
        setIsModalOpen(true);
        setIsPerScholasCert(true);
    };

    const OpenScrimbaCert = () => {
        setIsModalOpen(true);
        setIsScrimbaCert(true);
    };

    const OpenCipCert = () => {
        setIsModalOpen(true);
        setIsCipCert(true);
    };

     const OpenRelationalCert = () => {
        setIsModalOpen(true);
        setIsRelationalDatabaseCert(true);
    };

    const OpenCsharpCert = () => {
        setIsModalOpen(true);
        setIsCsharpCert(true);
    }

    const OpenMBCert = () => {
        setIsModalOpen(true);
        setIsMBCert(true);
    }

    const handleModalClose = () => {
        setIsModalOpen(false);
        if (isPerScholasCert) setIsPerScholasCert(false);
        if (isScrimbaCert) setIsScrimbaCert(false);
        if (isCipCert) setIsCipCert(false);
        if (isRelationalDatabaseCert) setIsRelationalDatabaseCert(false);
        if (isCsharpCert) setIsCsharpCert(false);
        if (isMBCert) setIsMBCert(false);
    }

    return (
        <>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            >
                <button onClick={handleModalClose}>X</button>
                {(isPerScholasCert) && <img className="cert" src="Per-Scholas-Certificate.png"></img>}
                {(isScrimbaCert) && <img className="cert" src="Scrimba-HTML-cert.png"></img>}
                {(isCipCert) && <img className="cert" src="Code-in-place-cert.png"></img>}
                {(isRelationalDatabaseCert) && <img className="cert" src="Relational-database-cert.png"></img>}
                {(isCsharpCert) && <img className="cert" src="Csharp-cert.png"></img>}
                {(isMBCert) && <img className="cert" src="MB-ASCP-Cert.png"></img>}
            </Modal>
            <div id="about-body">
                <div>
                    <img id="my-pic" src="/Nancy_20251121b.jpg" />
                </div>
                <div id="bio">
                    <h1>Nancy Bankson</h1>
                    <p>Analytical Software Engineer with laboratory experience in molecular biology, proven success automating workflows through VBA and data-driven problem-solving. Passionate about full-stack web development using the MERN stack to create efficient digital solutions.</p>
                </div>
            </div>
            <div id="bio-2">
                <p>After an intentional career break to focus on family, I spent recent months updating my technical skills, specializing in modern React and TypeScript. I recently completed Foodylicious, a full-stack application that focuses on recipe collaboration with friends. I’m eager to bring my refreshed technical skills and renewed focus to a collaborative development team.</p>
                <h2>Recent skills aquired</h2>
            </div>
            <div id="card-container">
                <div className={(theme === "Light") ? 'skill-card-light-mode' : "skill-card"}>
                    <img className="card-image" src="/MERN-logo.png" alt="C# logo"></img>
                    <div className="card-body">
                        <p className="cert-text" onClick={OpenPerScholasCert}>Per Scholas Software Engineering Certificate</p>
                        <p className="cert-text" onClick={OpenScrimbaCert}>Scrimba "Learn HTML and CSS" Certificate</p>                        
                    </div>
                </div>
                <div className={(theme === "Light") ? 'skill-card-light-mode' : "skill-card"}>
                    <img className="card-image" src="/python-logo-only.png" alt="C# logo"></img>
                    <div className="card-body">
                        <p className="cert-text" onClick={OpenCipCert}>Stanford's Code-In-Place Python Certificate</p>
                    </div>
                </div>
                <div className={(theme === "Light") ? 'skill-card-light-mode' : "skill-card"}>
                    <img className="card-image" src="/azure-sql-database-monitoring.png" alt="C# logo"></img>
                    <div className="card-body">
                        <p className="cert-text" onClick={OpenRelationalCert}>freeCodeCamp Relational Database Certificate</p>
                    </div>
                </div>
                <div className={(theme === "Light") ? 'skill-card-light-mode' : "skill-card"}>
                    <img className="card-image" src="/logo_csharp.png" alt="C# logo"></img>
                    <div className="card-body">
                        <p className="cert-text" onClick={OpenCsharpCert}>Foundational C# with Certification</p>
                    </div>
                </div>
                <div className={(theme === "Light") ? 'skill-card-light-mode' : "skill-card"}>
                    <img className="card-image" src="/mb-ascp.png" alt="molecular biology logo"></img>
                    <div className="card-body">
                        <p className="cert-text" onClick={OpenMBCert}>Scientist in Molecular Biology Certification from ASCP</p>
                    </div>
                </div>
            </div>
        </>
    )
}