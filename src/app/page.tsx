import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <header>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight ">
                        About Me
                    </h1>
                </div>
            </header>
            <main>
                <div className="flex items-center justify-center text-center m-10">
                    <div className="rounded-full overflow-hidden w-128 h-128">
                        <Image
                            src="/images/myself.jpg"
                            alt="Picture of the author"
                            width={512}
                            height={512}
                        />
                    </div>
                    <div>
                        <p className="m-5 text-lg">
                            {" "}
                            I&apos;m a 24 years old Brazilian Software Engineer
                            and also a Photography and Music Enthusiast.
                        </p>
                        <p className="m-5 text-lg">
                            I&apos;ve developed this website to share my
                            personal projects and thoughts.{" "}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center mx-auto my-1">
                    <p>São Paulo - SP - Brazil</p>
                    <p>
                        Email:{" "}
                        <a href="mailto:victorhpadula@gmail.com">
                            victorhpadula@gmail.com
                        </a>{" "}
                    </p>
                    <div className="flex items-center mt-1">
                        <p>Links: </p>
                        <Link
                            className="ml-2 mr-1"
                            href="https://linkedin.com/in/vhpadula"
                        >
                            <Image
                                src="/icons/linkedin.svg"
                                alt="Linkedin"
                                width={36}
                                height={36}
                            />
                        </Link>
                        <Link
                            className="mx-1"
                            href="https://github.com/vhpadula"
                        >
                            <Image
                                className="invert-colors"
                                src="/icons/github.svg"
                                alt="Github"
                                width={36}
                                height={36}
                            />
                        </Link>
                        <Link
                            className="mx-1"
                            href="https://www.youtube.com/@canalfluctus8599"
                        >
                            <Image
                                className="invert-colors"
                                src="/icons/youtube.svg"
                                alt="Youtube"
                                width={36}
                                height={36}
                            />
                        </Link>
                        <Link
                            className="mx-1"
                            href="https://open.spotify.com/intl-pt/artist/3owqu7Lnlb1lgArhv2hXoB?si=kZqTDiP1SC-OM31fn1L-FA"
                        >
                            <Image
                                className="invert-colors"
                                src="/icons/spotify.svg"
                                alt="potify"
                                width={36}
                                height={36}
                            />
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
}
