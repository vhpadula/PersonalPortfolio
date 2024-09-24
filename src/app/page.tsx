import Image from "next/image";

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
                            I&apos;ve developed this website to display my
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
                    <p>
                        Links:{" "}
                        <a href="https://linkedin.com/in/vhpadula">LinkedIn</a>{" "}
                        | <a href="https://github.com/vhpadula">GitHub</a>
                    </p>
                </div>
            </main>
        </>
    );
}
