import { useState } from "react"

interface InputWithOptionsProps {
    id: string
    type?: string
    placeholder?: string
    withOptions?: boolean
    listOptions?: string[]
}

export default function InputWithOptions({ id, type = 'text', placeholder = '' }: InputWithOptionsProps) {


    const showSelect = true

    const [isFocused, setIsFocused] = useState(false);

    const [value, setValue] = useState<string>('')
    const list = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'].filter((option) => option.toLowerCase().includes(value))
    // Funções para lidar com o foco e o desfoco do input
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    return (
        <div className="relative">
            <label
                htmlFor={id}
                className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
                <input
                    type={type}
                    id={id}
                    className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 h-12 mx-4 w-[calc(100%-2rem)]"
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onFocus={handleFocus} // Quando o input é focado
                    onBlur={handleBlur}   // Quando o input perde o foco
                />

                <span
                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                >
                    {placeholder}
                </span>
            </label>
            <div
                className={`absolute z-[55] flex flex-col w-52 bg-white ${isFocused && 'border'} border-gray-300 rounded-lg left-0 top-14 ${showSelect
                    ? 'opacity-100 visible transition-opacity duration-300'
                    : 'opacity-0 invisible transition-opacity duration-300'
                    }`}
                onClick={(e) => e.stopPropagation()}
            >
                {isFocused && list?.map((option) => {
                    return (
                        <>
                            <div key={option} className="h-px w-full bg-gray-200"></div>
                            <div
                                className="flex items-center justify-start px-4 h-10 cursor-pointer hover:bg-gray-100 text-sm"
                                onClick={() => alert(option)}
                            >
                                {option}
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}