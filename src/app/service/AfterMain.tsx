import BarraVertical from "@/components/Escourer Security/BarraVertical"
import EscourerService from "@/components/Escourer Security/Escourer"
import React from "react"
import { FaUber, FaAccessibleIcon }  from "react-icons/fa"


export default function AfterMain() {

    return(
        <>
            <section className="w-full flex flex-row justify-around items-center p-4">
                <EscourerService
                    icon={<FaUber/>}
                    title="Suporte Gratis"
                    description="Acima de contratos anuais"
                    alt="meu icon"
                />
                <BarraVertical/>
                <EscourerService
                    icon={<FaAccessibleIcon/>}
                    title="Eficácia Garantida"
                    description="Taxa de 91% na neutralização de ameaças"
                    alt="meu icon"
                />
                <BarraVertical/>
                <EscourerService
                    icon={<FaUber/>}
                    title="Cobertura Nacional"
                    description="Monitoramento 24/7 em toda Angola"
                    alt="meu icon"
                />
                <BarraVertical/>
                <EscourerService
                    icon={<FaUber/>}
                    title="Tecnologia Premiun"
                    description="Ferramentas com certificação internacional"
                    alt="meu icon"
                />
            </section>
        </>
    )
}