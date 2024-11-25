import { mockedModels } from "@/utils/mocks";
import Image from "next/image";

interface DetailedCardProps {
    model: typeof mockedModels[0];
}

export default function DetailedCard({ model }: DetailedCardProps) {
    return (
        <div>
            <div className="flex justify-between mt-6 max-[545px]:flex-col max-[545px]:items-start max-[545px]:ml-8 gap-4">
                <div className="flex items-center ml-6 max-[545px]:ml-0">
                    <div>
                        <Image src={model?.attachment?.link} alt={model?.modelName} width={500} height={500} style={{ width: '8rem', height: '8rem', borderRadius: '50%' }} />
                    </div>
                    <div className="flex flex-col gap-2 ml-4">
                        <div className="font-bold font-sans text-lg max-[1310px]:text-md">
                            {model?.modelName}
                        </div>
                        <div className="text-sm text-gray-800">
                            {model?.family}
                        </div>
                        <div className="text-xs text-gray-800 mt-1">
                            {model?.brand}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-end justify-center gap-4 mr-6 max-[545px]:items-start max-[545px]:mr-0">
                    <div className="flex">
                        <span className="font-bold font-sans text-md max-[1310px]:text-sm">N. de Máquinas</span>: <div className="ml-1 min-w-[1rem] w-auto mx-auto flex justify-center max-[1310px]:text-sm">{model?.numberOfEquipments}</div>
                    </div>
                    <div className="flex">
                        <span className="font-bold font-sans text-md max-[1310px]:text-sm">N. máquinas alugadas</span>: <div className="ml-1 min-w-[1rem] w-auto flex justify-center max-[1310px]:text-sm">{model?.numberOfRentedOutEquipments}</div>
                    </div>
                    <div className="flex">
                        <span className="font-bold font-sans text-md max-[1310px]:text-sm">N. máquinas disponíveis</span>: <div className="ml-1 min-w-[1rem] w-auto flex justify-center max-[1310px]:text-sm">{model?.numberOfAvailableEquipments}</div>
                    </div>
                </div>
            </div>
            <div className="h-[1px] w-[95%] mx-auto bg-gray-200 my-6" />
            {/* <div className="flex items-center justify-start">
                <div className="flex flex-col gap-4 ml-6 w-[13rem]">
                    <div><span className="font-bold font-sans text-md">Preço</span> R$ {model?.price.toLocaleString('pt-br', { maximumFractionDigits: 2, minimumFractionDigits: 2 })}</div>
                    <div><span className="font-bold font-sans text-md">Seguro</span>: {model?.insurance}</div>
                    <div><span className="font-bold font-sans text-md">Altura de trabalho</span>: {model?.workHeight}</div>
                    <div><span className="font-bold font-sans text-md">Altura da plataforma</span>: {model?.platformHeight}</div>
                    <div><span className="font-bold font-sans text-md">Tipo</span>: {model?.type}</div>
                </div>
                <div className="flex flex-col gap-4 ml-[4rem] w-[13rem]">
                    <div><span className="font-bold font-sans text-md">Alcance horizontal</span>: {model?.horizontalRange}</div>
                    <div><span className="font-bold font-sans text-md">Altura do mastro</span>: {model?.spearHeight}</div>
                    <div><span className="font-bold font-sans text-md">Capacidade</span>: {model?.capacity}</div>
                    <div><span className="font-bold font-sans text-md">Dimensões</span>: [{model?.dimensionWidth}, {model?.dimensionLength}, {model?.dimensionHeight}]</div>
                    <div><span className="font-bold font-sans text-md">Peso</span>: {model?.weight} kg</div>
                </div>
            </div> */}
            <div>
                <dl className="-my-3 divide-y divide-gray-100 text-sm flex flex-col justify-center">

                    <div className="grid grid-cols-2 gap-1 py-3 sm:grid-cols-3 sm:gap-4 even:bg-gray-50 ">
                        <dt className="font-medium max-[1310px]:text-sm ml-8 font-sans text-gray-900">Preço</dt>
                        <dd className="text-gray-700 sm:col-span-2 max-[1310px]:text-sm max-[840px]:w-fit">R$ {model?.price.toLocaleString('pt-br', { maximumFractionDigits: 2, minimumFractionDigits: 2 })}</dd>
                    </div>

                    <div className="grid grid-cols-2 gap-1 py-3 sm:grid-cols-3 sm:gap-4 even:bg-gray-50 ">
                        <dt className="font-medium max-[1310px]:text-sm ml-8 text-gray-900">Seguro</dt>
                        <dd className="text-gray-700 sm:col-span-2 max-[1310px]:text-sm max-[840px]:w-fit">{model?.insurance}</dd>
                    </div>

                    <div className="grid grid-cols-2 gap-1 py-3 sm:grid-cols-3 sm:gap-4 even:bg-gray-50 ">
                        <dt className="font-medium max-[1310px]:text-sm ml-8 text-gray-900">Altura de trabalho</dt>
                        <dd className="text-gray-700 sm:col-span-2 max-[1310px]:text-sm max-[840px]:w-fit">{model?.workHeight}</dd>
                    </div>

                    <div className="grid grid-cols-2 gap-1 py-3 sm:grid-cols-3 sm:gap-4 even:bg-gray-50 ">
                        <dt className="font-medium max-[1310px]:text-sm ml-8 text-gray-900">Altura da plataforma</dt>
                        <dd className="text-gray-700 sm:col-span-2 max-[1310px]:text-sm max-[840px]:w-fit">{model?.platformHeight}</dd>
                    </div>

                    <div className="grid grid-cols-2 gap-1 py-3 sm:grid-cols-3 sm:gap-4 even:bg-gray-50 ">
                        <dt className="font-medium max-[1310px]:text-sm ml-8 text-gray-900">Tipo</dt>
                        <dd className="text-gray-700 sm:col-span-2 max-[1310px]:text-sm max-[840px]:w-fit">
                            {model?.type}
                        </dd>
                    </div>
                    <div className="grid grid-cols-2 gap-1 py-3 sm:grid-cols-3 sm:gap-4 even:bg-gray-50 ">
                        <dt className="font-medium max-[1310px]:text-sm ml-8 font-sans text-gray-900">Alcance Horizontal</dt>
                        <dd className="text-gray-700 sm:col-span-2 max-[1310px]:text-sm max-[840px]:w-fit">{model?.horizontalRange}</dd>
                    </div>

                    <div className="grid grid-cols-2 gap-1 py-3 sm:grid-cols-3 sm:gap-4 even:bg-gray-50 ">
                        <dt className="font-medium max-[1310px]:text-sm ml-8 text-gray-900">Altura do mastro</dt>
                        <dd className="text-gray-700 sm:col-span-2 max-[1310px]:text-sm max-[840px]:w-fit">{model?.spearHeight}</dd>
                    </div>

                    <div className="grid grid-cols-2 gap-1 py-3 sm:grid-cols-3 sm:gap-4 even:bg-gray-50 ">
                        <dt className="font-medium max-[1310px]:text-sm ml-8 text-gray-900">Capacidade</dt>
                        <dd className="text-gray-700 sm:col-span-2 max-[1310px]:text-sm max-[840px]:w-fit">{model?.capacity}</dd>
                    </div>

                    <div className="grid grid-cols-2 gap-1 py-3 sm:grid-cols-3 sm:gap-4 even:bg-gray-50 ">
                        <dt className="font-medium max-[1310px]:text-sm ml-8 text-gray-900">Dimensões</dt>
                        <dd className="text-gray-700 sm:col-span-2 max-[1310px]:text-sm max-[840px]:w-fit">Comprimento: {model?.dimensionWidth} m, Largura: {model?.dimensionLength} m e Altura: {model?.dimensionHeight} m</dd>
                    </div>

                    <div className="grid grid-cols-2 gap-1 py-3 sm:grid-cols-3 sm:gap-4 even:bg-gray-50 rounded-b-lg">
                        <dt className="font-medium max-[1310px]:text-sm ml-8 text-gray-900">Peso</dt>
                        <dd className="text-gray-700 sm:col-span-2 max-[1310px]:text-sm max-[840px]:w-fit">
                            {model?.weight} kg
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}


