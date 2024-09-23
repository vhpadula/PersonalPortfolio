export default function Curriculum() {
    return (
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="text-justify">
                <div className="flex flex-col justify-center items-center mb-1">
                    <h1 className="text-3xl">Victor Padula</h1>
                    <h1 className="text-2xl">Software Engineer</h1>
                </div>
                <div className="flex flex-col justify-center items-center mb-2">
                    <p>São Paulo - SP - Brazil</p>
                    <p>
                        Email:{" "}
                        <a href="mailto:victorhpadula@gmail.com">
                            victorhpadula@gmail.com
                        </a>{" "}
                        | Phone:{" "}
                        <a href="tel:+5515991462145">+55 (15) 99146-2145</a>
                    </p>
                    <p>
                        Links:{" "}
                        <a href="https://linktr.ee/vhpadula">Portfolio</a> |{" "}
                        <a href="https://linkedin.com/in/vhpadula">LinkedIn</a>{" "}
                        | <a href="https://github.com/vhpadula">GitHub</a>
                    </p>
                </div>
                <div className="m-2">
                    <h2 className="text-xl">Education</h2>
                    <ul className=" mx-1 list-disc list-inside">
                        <li>
                            University of Sao Paulo, Bachelor in Computer
                            Engineering (2019 – 2024)
                        </li>
                        <li>
                            Politecnico di Torino, Master’s Degree Erasmus in
                            Software Engineering (2022 - 2023)
                        </li>
                    </ul>
                </div>
                <div className="m-2">
                    <h2 className="text-xl">Experience</h2>
                    <ul className="mx-1 list-disc list-inside">
                        <li>
                            <strong>
                                XR & Data Engineer Intern, Virtualisurg
                            </strong>{" "}
                            - Paris, Montreal and Sao Paulo (May 2024 - Sep
                            2024)
                            <ul>
                                <li>
                                    Developed internal tools and PoC projects
                                    for XR experiences applied to health and
                                    medicine using Unity Engine
                                </li>
                                <li>
                                    Worked on backend infrastructure for license
                                    control and data collection
                                </li>
                            </ul>
                        </li>
                        <li>
                            <strong>
                                Fullstack Software Developer, REAG Investimentos
                            </strong>{" "}
                            - Sao Paulo, SP (Sep 2023 – Dec 2023)
                            <ul>
                                <li>
                                    Developed internal tools for data analysis
                                    and connection to finance market APIs
                                </li>
                                <li>
                                    Designed UX and Cloud Architecture with
                                    Django framework
                                </li>
                            </ul>
                        </li>
                        <li>
                            <strong>Data Scientist Intern</strong> - Sao Paulo,
                            SP (Jan 2022 – Apr 2022)
                            <ul>
                                <li>
                                    Worked in data engineering, experimenting
                                    with AI models
                                </li>
                                <li>
                                    Developed data analytics modules with GCP
                                    and machine learning in Python and SQL
                                </li>
                            </ul>
                        </li>
                        <li>
                            <strong>Mobile Developer Intern</strong> - Sao
                            Paulo, SP (May 2021 - Aug 2021)
                            <ul>
                                <li>
                                    Developed Android mobile applications with
                                    Kotlin in Android Studio
                                </li>
                                <li>
                                    Worked on production-scale systems in a
                                    Scrum team
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="m-2">
                    <h2 className="text-xl">Projects</h2>
                    <ul className=" mx-1 list-disc list-inside">
                        <li>
                            <strong>ONGAdmin (Graduation Thesis)</strong> (2024)
                            <ul>
                                <li>
                                    Developed UX and system architecture for
                                    open-source NGO administration tool
                                </li>
                                <li>Tools: Next.js, Spring Boot</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Vardis Transfer System</strong> (2024)
                            <ul>
                                <li>
                                    Developed a real-time money transfer system
                                    for board game players
                                </li>
                                <li>Tools: Next.js, Node.js, Redis</li>
                            </ul>
                        </li>
                        <li>
                            <strong>JingasAI</strong> (2024)
                            <ul>
                                <li>
                                    AI project implementing a Brazilian
                                    Portuguese &quot;Alexa&quot; with NLP models
                                </li>
                                <li>Tools: Pytorch, Docker</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="m-2">
                    <h2 className="text-xl">Skills</h2>
                    <ul className=" mx-1 list-disc list-inside">
                        <li>
                            <strong>Languages:</strong> Python, Java, Kotlin,
                            C#, SQL, HTML, CSS, JavaScript, TypeScript
                        </li>
                        <li>
                            <strong>Technologies:</strong> Django, Pandas,
                            Pytorch, Spring Boot, Android Studio, React,
                            Next.js, Node.js, Unity3D, Figma, Docker, Linux, GCP
                        </li>
                        <li>
                            <strong>Proficiencies:</strong> Software
                            Engineering, Cloud Computing, System Architecture,
                            Machine Learning, International Team Communication
                        </li>
                        <li>
                            <strong>Idioms: </strong>Native Portuguese, English
                            C1, Italian A2
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
