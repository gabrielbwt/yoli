import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from 'next/image';
import logoSVG from '../../assets/svg/logo_full_yoli.svg';
import manufacturingSVG from '../../assets/svg/icons/manufacturing.svg';
import precisionManufacturingSVG from '../../assets/svg/icons/precisionManufacturing.svg';
import pasteSearchSVG from '../../assets/svg/icons/pasteSearch.svg';
import inventorySVG from '../../assets/svg/icons/inventory.svg';
import inventory2SVG from '../../assets/svg/icons/inventory2.svg';
import shoppingCartSVG from '../../assets/svg/icons/shoppingCart.svg';
import groupSVG from '../../assets/svg/icons/group.svg';

interface SideBarProps {
    showSidebar: boolean;
}

interface DropdownsState {
    [key: string]: boolean;
};


export default function Sidebar({ showSidebar }: SideBarProps) {

    const router = usePathname();

    const [dropdowns, setDropdowns] = useState<DropdownsState>({
        machine: (router === '/gestao/modelos') ? true : false,
        stock: false,
        option3: false,
        option4: false,
        option5: false,
        option6: false,
    });

    const toggleDropdown = (option: string) => {
        setDropdowns((prevState) => ({
            ...prevState,
            [option]: !prevState[option],
        }));
    };

    return (
        <>
            <div
                className={`fixed top-0 left-0 h-full w-[16rem] bg-white border-r text-white transform ${showSidebar ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out min-[1110px]:translate-x-0 z-50`}>
                <div className="relative flex flex-col h-full max-h-full">
                    <div className="px-6 pt-4 items-center justify-center my-4">
                        <Image priority src={logoSVG} alt="Logo da Yoli" width={500} height={500} style={{ width: '10rem', height: 'auto', margin: '0 auto' }} />
                        <div className="bg-gray-100 rounded-md w-auto h-24 mt-8 flex items-center justify-start">
                            <div className="rounded-full bg-primary-main w-10 h-10 text-white flex items-center justify-center text-xl font-bold ml-6">
                                J
                            </div>
                            <div className="text-black flex flex-col gap-[0.1rem] ml-4">
                                <div className="font-extrabold text-sm">João Silva</div>
                                <div className="text-sm text-gray-600">gilson@yoli.com</div>
                                <div className="text-sm text-gray-600">Mecânico</div>
                            </div>
                        </div>
                    </div>

                    <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300  ">

                        <nav className="hs-accordion-group p-3 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>

                            <ul className="flex flex-col space-y-1">

                                <li className="hs-accordion" id="machine-accordion">
                                    <button type="button" onClick={() => toggleDropdown('machine')} className={`hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100`} aria-expanded="true" aria-controls="machine-accordion-child">
                                        <Image priority src={manufacturingSVG} alt="SVG Manufacturing" width={500} height={500} style={{ width: '1.3rem', height: 'auto' }} />
                                        Máquinas
                                        <svg className={`hs-accordion-active:hidden ms-auto block size-4 transition-transform duration-300 ${dropdowns['machine'] ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    </button>

                                    <div
                                        id="machine-accordion-child"
                                        className={`hs-accordion-content w-full overflow-hidden transition-[max-height] duration-300 ${dropdowns['machine'] ? 'max-h-[12rem]' : 'max-h-0'}`} role="region" aria-labelledby="machine-accordion"
                                    >
                                        <ul className="hs-accordion-group ps-2 pt-1 space-y-1" data-hs-accordion-always-open>
                                            <li className="hs-accordion" id="machine-accordion-sub-1">
                                                <button type="button" className={`hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100`} aria-expanded="true" aria-controls="machine-accordion-sub-1-child">
                                                    <Image priority src={precisionManufacturingSVG} alt="Precision Manufacturing SVG" width={500} height={500} style={{ width: '1.3rem', height: 'auto' }} />
                                                    Listagem de Máquinas
                                                </button>
                                            </li>
                                            <li className="hs-accordion" id="machine-accordion-sub-2">
                                                <a className={`hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 ${router === '/gestao/modelos' ? 'bg-primary-main bg-opacity-20' : 'hover:bg-gray-100'}`} aria-expanded="true" aria-controls="machine-accordion-sub-2-child" href="/gestao/modelos">
                                                    <Image priority src={pasteSearchSVG} alt="Paste Search SVG" width={500} height={500} style={{ width: '1.3rem', height: 'auto' }} />
                                                    Gestão de Modelos
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <li className="hs-accordion" id="stock-accordion">
                                    <button type="button" onClick={() => toggleDropdown('stock')} className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100" aria-expanded="true" aria-controls="stock-accordion-child">
                                        <Image priority src={inventorySVG} alt="Inventory SVG" width={500} height={500} style={{ width: '1.3rem', height: 'auto' }} />
                                        Estoque
                                        <svg className={`hs-accordion-active:hidden ms-auto block size-4 transition-transform duration-300 ${dropdowns['stock'] ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    </button>

                                    <div
                                        id="stock-accordion-child"
                                        className={`hs-accordion-content w-full overflow-hidden transition-[max-height] duration-300 ${dropdowns['stock'] ? 'max-h-[10rem]' : 'max-h-0'}`} role="region" aria-labelledby="stock-accordion"
                                    >
                                        <ul className="hs-accordion-group ps-2 pt-1 space-y-1" data-hs-accordion-always-open>
                                            <li className="hs-accordion" id="stock-accordion-sub-1">
                                                <button type="button" className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100   " aria-expanded="true" aria-controls="stock-accordion-sub-1-child">
                                                    <Image priority src={inventory2SVG} alt="Inventory2 SVG" width={500} height={500} style={{ width: '1.3rem', height: 'auto' }} /> Gestão de Estoque
                                                </button>
                                            </li>
                                            <li className="hs-accordion" id="stock-accordion-sub-2">
                                                <button type="button" className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100   " aria-expanded="true" aria-controls="stock-accordion-sub-2-child">
                                                    <Image priority src={shoppingCartSVG} alt="Shopping Cart SVG" width={500} height={500} style={{ width: '1.3rem', height: 'auto' }} /> Ordens de Compra
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg  focus:outline-none ${router === '/usuarios' ? 'bg-primary-main bg-opacity-20' : 'hover:bg-gray-100'} focus:bg-gray-100`} href="/home">
                                        <Image priority src={groupSVG} alt="Group SVG" width={500} height={500} style={{ width: '1.3rem', height: 'auto' }} />Usuários
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}