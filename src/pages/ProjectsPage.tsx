export function ProjectsPage() {
    return (
        <>
            <div id="project-container">
                <div id="project-columns">
                    <div className="project-rows">
                        <a href="https://capstone-project-recipe-app-front-end.onrender.com "><img className="project-image" src="/foodylicious.png" /></a>
                        <div className="project-content">
                            <a className="project-anchor" href="https://capstone-project-recipe-app-front-end.onrender.com ">Foodylicious</a>
                            <p>Developed a full-stack application as part of a Capstone project at Per Scholas, utilizing React for the front end and MongoDB for the back end. The application was designed to help friends collaboratively create and organize a long-envisioned cookbook.</p>
                        </div>
                    </div>
                    <div className="project-rows">
                        <div className="project-content">
                            <a className="project-anchor" href="http://restcountrieswithreactproject.netlify.app">REST Countries API with color theme switcher</a>
                            <p>Front-end application, featuring API rendering from <a className="in-line-anchor" href="https://restcountries.com">https://restcountries.com</a>.  Project created from Front-End Mentor challenge, <a className="in-line-anchor" href="https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca">https://www.frontendmentor.io</a>.</p>
                        </div>
                        <a href="http://restcountrieswithreactproject.netlify.app"><img className="project-image" src="/countries.png" /></a>
                    </div>
                    <div className="project-rows">
                        <a href="http://recipediscoveryapp.netlify.app"><img className="project-image" src="/recipes.png" /></a>
                        <div className="project-content">
                            <a className="project-anchor" href="http://recipediscoveryapp.netlify.app">Recipe Discovery App</a>
                            <p>Front-end application, featuring API rendering from <a className="in-line-anchor" href="https://www.themealdb.com">https://www.themealdb.com</a>.</p>
                        </div>
                    </div>
                    <div className="project-rows">
                        <div className="project-content">
                            <a className="project-anchor" href="https://github.com/NancyBankson/Code-In-Place">Fibonacci Spiral Created in Python for Code-In-Place</a>
                        </div>
                        <a href="https://github.com/NancyBankson/Code-In-Place"><img className="project-image" src="/Fibonacci_spiral.PNG" /></a>
                    </div>
                </div>
            </div>
        </>
    )
}