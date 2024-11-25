import MenuNavbar from "./MenuNavbar";

interface NavbarProps {
    showSidebar: boolean;
    showMenuOptions: boolean;
    setShowSidebar: (showNavbar: boolean) => void;
    setShowMenuOptions: (showMenuOptions: boolean) => void;
}

export default function Navbar({ showSidebar, showMenuOptions, setShowSidebar, setShowMenuOptions }: NavbarProps) {
    return (
        <header className="h-[3.5rem] flex-1 border-b flex items-center justify-between lg:justify-end px-[1.5rem]">
            <nav className="flex basis-full items-center w-full mx-auto">

                <div className="w-full flex items-center justify-end  max-[1110px]:justify-between min-[1110px]:justify-end">

                    <div className=" text-black min-[1110px]:hidden transition cursor-pointer" onClick={() => setShowSidebar(!showSidebar)}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </div>

                    <div className="flex flex-row items-center justify-end gap-1">

                        <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
                            {/* <button onClick={() => setShowMenuOptions(true)} id="hs-dropdown-account" type="button" className="size-[38px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 focus:outline-none disabled:opacity-50 disabled:pointer-events-none " aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <img className="shrink-0 size-[38px] rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                            </button> */}
                            <div onClick={() => setShowMenuOptions(true)} id="hs-dropdown-account" className="rounded-full cursor-pointer bg-primary-main w-10 h-10 text-white flex items-center justify-center text-xl font-bold ml-6">
                                J
                            </div>
                            <MenuNavbar showMenuOptions={showMenuOptions} />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}


