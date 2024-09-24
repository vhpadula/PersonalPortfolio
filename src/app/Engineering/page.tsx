import { Curriculum } from "@/components";
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
export default function Engineering() {
    return (
        <>
            <header>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight">
                        Engineering
                    </h1>
                </div>
            </header>
            <main>
                <div className="m-2">
                    <h2 className="text-xl">Projects</h2>
                    <ul className="m-2 list-disc list-inside">
                        <li>
                            <strong>
                                <a
                                    className="hover:underline"
                                    href="https://github.com/vhpadula/miauau-frontend"
                                >
                                    ONGAdmin (Graduation Thesis)
                                </a>
                            </strong>{" "}
                            (2024)
                            <ul className="m-2 list-item">
                                <li>
                                    - Developed UX and system architecture for a
                                    free, open-source administration tool for
                                    NGOs to manage finance and resources
                                </li>
                                <li>- Tools: Next.js, Spring Boot</li>
                            </ul>
                        </li>

                        <li>
                            <strong>
                                <a
                                    className="hover:underline"
                                    href="https://github.com/vhpadula/PersonalPortfolio"
                                >
                                    This Own Website! (Personal Portfolio)
                                </a>
                            </strong>{" "}
                            (2024)
                            <ul className="m-2 list-item">
                                <li>
                                    - Personal Portfolio project developed from
                                    scratch. Includes a CMS backend still in
                                    development for adding dynamic content to
                                    the website - By now just serves static
                                    content
                                </li>
                                <li>
                                    - Tools: Next.js, Node Express, Typescript,
                                    TailwindCSS
                                </li>
                            </ul>
                        </li>

                        <li>
                            <strong>
                                <a
                                    className="hover:underline"
                                    href="https://github.com/vhpadula/PlumaFit-User"
                                >
                                    PlumaFit
                                </a>
                            </strong>{" "}
                            (2024)
                            <ul className="m-2 list-item">
                                <li>
                                    - Developed UX and System Architecture for a
                                    Mobile App designed for Obesity Patients to
                                    better connect them with health
                                    professionals
                                </li>
                                <li>
                                    - The App features a real-time system for
                                    publishing exercises, diets, and mental
                                    health notes. It also includes a web portal
                                    for personal trainers, nutritionists, and
                                    psychiatrists to connect with patients.
                                </li>
                            </ul>
                        </li>

                        <li>
                            <strong>
                                <a
                                    className="hover:underline"
                                    href="https://github.com/vhpadula/VardisTransferSystem"
                                >
                                    Vardis Transfer System
                                </a>
                            </strong>{" "}
                            (2024)
                            <ul className="m-2 list-item">
                                <li>
                                    - Developed a real-time fictional money
                                    transfer system for aiding players in the
                                    Hegemony board game
                                </li>
                                <li>- Tools: Next.js, Node.js, Redis</li>
                            </ul>
                        </li>

                        <li>
                            <strong>
                                <a
                                    className="hover:underline"
                                    href="https://github.com/vhpadula/JingasAI"
                                >
                                    JingasAI
                                </a>
                            </strong>{" "}
                            (2024)
                            <ul className="m-2 list-item">
                                <li>
                                    - Artificial Intelligence project
                                    implementing a homemade &quot;Alexa&quot;
                                    running on a Raspberry Pi, trained using
                                    Brazilian Portuguese NLP models with public
                                    datasets
                                </li>
                                <li>- Tools: PyTorch, Docker</li>
                            </ul>
                        </li>

                        <li>
                            <strong>
                                <a
                                    className="hover:underline"
                                    href="https://github.com/polito-hci-2022/GeoVision"
                                >
                                    GeoVision
                                </a>
                            </strong>{" "}
                            (2023)
                            <ul className="m-2 list-item">
                                <li>
                                    - Mobile application using Virtual Reality
                                    tools and Google&apos;s Cardboard Tech to
                                    facilitate Geology teaching for university
                                    students
                                </li>
                                <li>
                                    - Developed with an international Erasmus
                                    team, applying modern UX concepts, Mobile
                                    App Architecture, and Unity Engine for
                                    creating 3D environments and interactions
                                </li>
                            </ul>
                        </li>

                        <li>
                            <strong>
                                <a
                                    className="hover:underline"
                                    href="https://github.com/orgs/Glicemap/repositories"
                                >
                                    Glicemap
                                </a>
                            </strong>{" "}
                            (2021)
                            <ul className="m-2 list-item">
                                <li>
                                    - Mobile App designed for people with
                                    Diabetes to log glycemic readings and sync
                                    with doctors in real-time
                                </li>
                                <li>
                                    - Includes a notification system and a web
                                    portal integrated with the mobile backend
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="w-full mt-5">
                        <Disclosure as="div" defaultOpen={true}>
                            <DisclosureButton className="group flex w-full items-center justify-between">
                                <span className="text-xl font-medium group-data-[hover]:text-white/80">
                                    Curriculum Vitae
                                </span>
                                <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                            </DisclosureButton>
                            <DisclosurePanel className="mt-2">
                                <Curriculum />
                            </DisclosurePanel>
                        </Disclosure>
                    </div>
                </div>
            </main>
        </>
    );
}
