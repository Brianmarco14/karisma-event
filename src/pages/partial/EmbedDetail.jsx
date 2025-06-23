import Button from "@/components/Button"
import FormEmbed from "./FormEmbed"
import { useState } from "react"
import { useLearning } from "@/hooks/useLearning"

const EmbedDetail = () => {
    const [openEmbed, setOpenEmbed] = useState(false)
    const {activeMaterial: data} = useLearning()
    const handleOpen = () => {
        setOpenEmbed(!openEmbed)
    }

    {
        if (!openEmbed) {
            return (
                <div className="bg-gradient-to-r from-[#1E3B8A] from-10% to-[#49DD80] h-full flex justify-center items-center">
                    <div className="flex flex-col items-center gap-y-2 2xl:gap-y-3">
                        <img src={"/evaluation.webp"} className={"w-2/4 lg:w-1/4 self-center"} />
                        <div className="flex flex-col items-center">
                            <h3 className="md:text-xl text-center text-white font-bold mt-2 md:mt-5">
                                Instruksi
                            </h3>
                            <p className="mt-1 text-xs lg:text-base text-white text-center w-4/5">Silahkan isi survey kepuasan berikut ini. Isilah sesuai dengan kata hati Anda. Masukan Anda sangat berarti bagi kami.</p>
                        </div>
                        <Button color="biru" onClick={handleOpen}>Lanjut ke Pertanyaan</Button>
                    </div>
                </div>
            )
        } else {
            return (
                <FormEmbed data={data.detail}/>
            )
        }
    }

}

export default EmbedDetail