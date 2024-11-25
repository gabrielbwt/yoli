import { mockedModels } from "@/utils/mocks";
import Image from "next/image";

interface CardProps {
    model: typeof mockedModels[0];
    isSelected: boolean;
}

export default function Card({ model, isSelected }: CardProps) {
    return (
        <div className="flex items-center justify-between h-24 cursor-pointer hover:bg-gray-200 transition-all duration-300">
            <div className="flex justify-start items-center">
                <div className={`h-24 w-1 ${isSelected ? 'bg-primary-main' : 'bg-inherit'}  mr-4`}></div>
                <Image src={model?.attachment?.link} alt={model?.modelName} width={500} height={500} style={{ width: '5rem', height: '5rem', borderRadius: '50%' }} />

                <div className="ml-4">
                    <div className="font-bold font-sans text-lg max-[1310px]:text-sm">
                        {model?.modelName}
                    </div>
                    <div className="text-sm text-gray-800">
                        {model?.family}
                    </div>
                    <div className="text-xs text-gray-800 mt-[0.125rem]">
                        {model?.brand}
                    </div>
                </div>
            </div>

            <div className="mr-4">
                {model?.numberOfEquipments} uni.
            </div>
        </div>)
}