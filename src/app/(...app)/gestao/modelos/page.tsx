"use client"

import Card from "@/components/(...app)/gestao/modelos/Card";
import DetailedCard from "@/components/(...app)/gestao/modelos/DetailedCard";
import Modal from "@/components/modal/Modal";
import Select from "@/components/select/Select";
import { mockedModels } from "@/utils/mocks";
import { useState } from "react";

export default function GestaoModelosPage() {

    const [selectedId, setSelectedId] = useState<string>(mockedModels[0]?.modelId)
    const selectedModel = mockedModels.filter((model) => model?.modelId === selectedId)[0]
    const modelsOnSelect = mockedModels.map((model) => model?.modelName)

    const [showModal, setShowModal] = useState(false)


    return (
        <div className="w-full min-h-[calc(100vh-5.5rem)] h-auto pb-[2rem] pt-12">
            {showModal && <Modal show={showModal} setShow={setShowModal}><></></Modal>}
            <div className="mx-auto w-[80rem] max-[1660px]:w-[70rem] max-[1470px]:w-[60rem] max-[1310px]:w-[55rem] max-[1200px]:w-[50rem] max-[840px]:w-[90%]">
                <div className="flex items-center justify-between max-[440px]:flex-col max-[440px]:items-start max-[440px]:gap-4">
                    <div>
                        <div className="w-fit text-2xl font-bold">
                            Gestão de Modelos
                        </div>
                        <div className="w-fit text-sm text-gray-500">
                            Gerencie os modelos disponíveis
                        </div>
                    </div>
                    <div>
                        <button
                            onClick={() => setShowModal(true)}
                            className="inline-block rounded-lg bg-primary-main h-9 px-5 text-sm font-medium font-sans hover:bg-primary-dark transition-all duration-300 text-white"
                        >
                            Adicionar modelo
                        </button>
                    </div>
                </div>
                <div className="min-[841px]:hidden my-4">
                    <Select list={modelsOnSelect} />
                </div>
                <div className="flex max-[1660px]:gap-[3rem] gap-[5rem] max-[1310px]:gap-[2rem] min-[440px]:mt-8">
                    <div className="max-[1660px]:w-[35rem] w-[25rem] h-[35rem] max-[1310px]:w-[28rem] border-2 flex flex-col overflow-scroll rounded-lg shadow-sm max-[840px]:hidden">
                        {mockedModels.map((model) => {
                            return (
                                <div key={model?.modelId} onClick={() => { setSelectedId(model?.modelId) }} className="border-b-2 last:border-b-0">
                                    <Card model={model} isSelected={selectedId === model?.modelId} />
                                </div>
                            )
                        })}
                    </div>
                    <div className="w-[50rem] max-[1660px]:w-full min-h-[20rem] max-[880px]:mx-auto h-fit pb-3 border-2 rounded-lg">
                        <DetailedCard model={selectedModel} />
                    </div>
                </div>
            </div>
        </div>
    );
}