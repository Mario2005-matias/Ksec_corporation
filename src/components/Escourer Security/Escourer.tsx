import React from "react"
import Image from 'next/image'
export default function EscourerService({icon, title, description, alt}) {

    return (
        <>
            <div className="flex flex-col jusity-center items-center">
                <Image src={icon} alt={alt} />
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-xs">{description}</p>
            </div>
        </>
    )
}