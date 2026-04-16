export function AboutPage() {
    return (
        <>
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
                <p>After an intentional career break to focus on family, I spent the last six months updating my technical skills, specializing in modern React and TypeScript. I have recently completed Foodylicious, a full-stack application that focuses on recipe collaboration with friends. I’m eager to bring my refreshed technical skills and renewed focus to a collaborative development team.</p>
                <h2>Recent skills aquired</h2>
            </div>
            <div id="card-container">
                <div className="skill-card">
                    <img className="card-image" src="/MERN-logo.png" alt="C# logo"></img>
                    <div className="card-body">
                        <p><span className="text">Per Scholas</span> Software Engineering Program</p>
                        <p><span className="text">Scrimba</span> "Learn HTML and CSS", "Learn JavaScript", "Learn Accessible Web Design"</p>
                        <p><span className="text">FreeCodeCamp</span> "Responsive Web Design"</p>
                    </div>
                </div>
                <div className="skill-card">
                    <img className="card-image" src="/python-logo-only.png" alt="C# logo"></img>
                    <div className="card-body">
                        <p><span className="text">Stanford's </span>Code-In-Place</p>
                    </div>
                </div>
                <div className="skill-card">
                    <img className="card-image" src="/azure-sql-database-monitoring.png" alt="C# logo"></img>
                    <div className="card-body">
                        <p>Practicing queries with <span className="text">Hackerrank</span>, <span className="text">FreeCodeCamp</span> "SQL and Databases", <span className="text">Scrimba</span> "Learn SQL"</p>
                    </div>
                </div>
                <div className="skill-card">
                    <img className="card-image" src="/logo_csharp.png" alt="C# logo"></img>
                    <div className="card-body">
                        <p><span className="text">FreeCodeCamp </span>Foundational C# with <span className="text">Microsoft</span> Certification</p>
                    </div>
                </div>
            </div>
        </>
    )
}