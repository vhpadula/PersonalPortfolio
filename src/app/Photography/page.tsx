import Image from "next/image";
export default function Home() {
    return (
        <>
            <header>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight ">
                        Photography
                    </h1>
                </div>
            </header>
            <main>
                <div className="flex flex-col items-center justify-center m-10 text-center ">
                    <p className="text-xl">
                        Oops, this page is still in construction due to the
                        Content Manager System not being Online.
                    </p>

                    <p className="mt-3 text-xl">
                        Please come back later to checkout frequent posts on
                        Photography.
                    </p>
                    <p className="my-10">
                        Meanwhile, checkout some of my favorite work on those
                        static images:
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            "amsterdam.jpg",
                            "capri.jpg",
                            "croatia.jpg",
                            "dorival.jpg",
                            "espresso.jpg",
                            "gabu.jpg",
                            "kyoto.JPG",
                            "latte.jpg",
                            "legaulois.jpg",
                            "madrid.jpg",
                            "orangecat.jpg",
                            "racetrack.jpg",
                            "sahara.jpg",
                            "sitnwalk.jpg",
                            "turin.jpg",
                        ].map((image) => (
                            <Image
                                key={image}
                                src={`/images/${image}`}
                                alt={image.split(".")[0]}
                                width={300}
                                height={200}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
}
