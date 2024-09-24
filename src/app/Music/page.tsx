export default function Home() {
    return (
        <>
            <header>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight ">
                        Music
                    </h1>
                </div>
            </header>
            <main>
                <div className="flex flex-col items-center justify-center m-10 text-center ">
                    <p className=" mb-3 text-xl">
                        Checkout my Spotify Page and Albums:
                    </p>
                    <iframe
                        src="https://open.spotify.com/embed/artist/3owqu7Lnlb1lgArhv2hXoB?utm_source=generator&theme=0"
                        width="100%"
                        height="352"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    ></iframe>

                    <iframe
                        className="mt-10"
                        src="https://open.spotify.com/embed/album/1KG7kjk17W8Nypn2JkRRi8?utm_source=generator"
                        width="100%"
                        height="352"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    ></iframe>

                    <iframe
                        className="mt-10"
                        src="https://open.spotify.com/embed/album/5jQ43s4OlcqH5UChOcoPdo?utm_source=generator"
                        width="100%"
                        height="352"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    ></iframe>
                </div>
            </main>
        </>
    );
}
