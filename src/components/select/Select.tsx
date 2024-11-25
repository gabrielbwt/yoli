import { useState } from "react"
import arrowDownSVG from "@/assets/svg/icons/arrowDown.svg";
import Image from "next/image";

interface SelectProps {
    list: string[]
}

export default function Select({ list }: SelectProps) {

    const [showSelect, setShowSelect] = useState(false)

    return (
        <>

            {showSelect && (
                <div
                    className="fixed inset-0 z-50"
                    onClick={() => setShowSelect(false)}
                ></div>
            )}
            <div

                className="flex items-center rounded-lg cursor-pointer w-fit pr-[1rem]"
                onClick={() => setShowSelect((prev: boolean) => !prev)}
            >

                <div className="relative flex items-center text-sm h-10 w-46 px-4 rounded-lg mr-[-1rem] border border-gray-300 bg-white text-black focus:outline-none ">
                    Selecione o modelo
                    <Image src={arrowDownSVG} alt="arrow-down" width={500} height={500} style={{ width: '1.2rem', marginLeft: '1rem', marginRight: '-0.5rem' }} />
                    <div
                        className={`absolute z-[55] flex flex-col w-52 bg-white border border-gray-300 rounded-lg left-0 top-11 ${showSelect
                            ? 'opacity-100 visible transition-opacity duration-300'
                            : 'opacity-0 invisible transition-opacity duration-300'
                            }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {list?.map((option) => {
                            return (
                                <div key={option}>
                                    <div className="h-px w-full bg-gray-200"></div>
                                    <div
                                        className="flex items-center justify-start px-4 h-10 cursor-pointer hover:bg-gray-100 text-sm"
                                    // onClick={() => handleSelect('approvedSolomon')}
                                    >
                                        {option}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
