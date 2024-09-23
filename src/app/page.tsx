import { Curriculum, NavBar } from "@/components";

export default function Home() {
    return (
        <>
            <div className="min-h-full">
                <NavBar />

                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                            About Me
                        </h1>
                    </div>
                </header>
                <main>
                    <Curriculum />
                </main>
            </div>
        </>
    );
}
