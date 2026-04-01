export function ProjectsPage() {
    return (
        <>
            <div id="project-container">
                <div id="project-columns">
                    <div className="project-rows">
                        <img className="project-image" src="/foodylicious.png" />
                        <div className="project-content">
                            <a href="https://capstone-project-recipe-app-front-end.onrender.com ">Foodylicious</a>
                        </div>
                    </div>
                    <div className="project-rows">
                        <div className="project-content">
                            <a href="http://restcountrieswithreactproject.netlify.app">REST Countries API with color theme switcher</a>
                        </div>
                        <img className="project-image" src="/countries.png" />
                    </div>
                    <div className="project-rows">
                        <img className="project-image" src="/recipes.png" />
                        <div className="project-content">Some content</div>
                    </div>
                </div>
            </div>
        </>
    )
}