import NavBar from "./components/organisms/NavBar";

function App() {
    const links = [
        { href: "#a", text: "Dashboard", ariaCurrent: "page" },
        { href: "#b", text: "Team" },
        { href: "#c", text: "Projects" },
        { href: "#d", text: "Calendar" },
        { href: "#e", text: "Reports" },
    ];
    return (
        <>
            {/* <!--
  This example requires updating your template:

  ```
  <html className="h-full bg-gray-100">
  <body className="h-full">
  ```
--> */}
            <div className="min-h-full">
                <nav className="bg-gray-800">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 text-white font-serif">
                                    Victor Padula
                                </div>

                                <div className="hidden md:block">
                                    <NavBar links={links} />
                                </div>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                <button>aaa</button>
                            </div>
                        </div>
                    </div>
                </nav>

                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                            Titulo
                        </h1>
                    </div>
                </header>
                <main>
                    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                        Conteudo
                    </div>
                </main>
            </div>
        </>
    );
}

export default App;
