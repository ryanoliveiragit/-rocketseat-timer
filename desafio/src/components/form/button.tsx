import React, { useRef } from "react"

interface ButtonFormProps {
    value: string,
    children: string,
}

export function ButtonForm({ children, value }: ButtonFormProps) {

    const input = useRef<HTMLInputElement>(null)

    console.log(input.current?.checked)

return (
        <div>
            <label>
                {children}
                <input 
                    type="radio"
                    value={value}
                />
            </label>
        </div>
    )
}