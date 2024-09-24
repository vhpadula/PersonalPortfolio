import { Curriculum } from "@/components";

export default function Engineering() {
    return (
        <>
            <header>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight ">
                        Engineering
                    </h1>
                </div>
            </header>
            <main>
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
                <Curriculum />
            </main>
        </>
    );
}
