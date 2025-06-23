import Button from "@/components/Button"
import { useState } from "react"
import FormEssay from "./FormEssay"

const EssayDetail = () => {
    const [openReflective, setOpenReflective] = useState(false)
    const handleOpen = () => {
        setOpenReflective(!openReflective)
    }
    {
        if (!openReflective) {
            return (
                <div className="bg-gradient-to-br from-[#1E3B8A] from-10% to-[#22C060] h-full flex justify-center items-center">
                    <div className="flex flex-col items-center gap-y-2 2xl:gap-y-3 px-3 lg:px-0">
                        <img src={"/evaluation.webp"} className={"w-1/4 self-center hidden lg:block"} />
                        <div className="flex flex-col items-center gap-2 lg:gap-0">
                            <h3 className="text-3xl md:text-xl text-center text-white font-bold mt-2 md:mt-5">
                                Instruksi
                            </h3>
                            <p className="mt-1 text-sm lg:text-base text-white text-center w-4/5 lg:w-full">Silahkan kerjakan Reflective Journal berikut ini. Isilah sesuai dengan kata hati Anda.</p>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-around gap-y-3 lg:gap-y-0 w-full lg:w-4/5 rounded-xl p-3 border-2 border-black bg-white">
                            <div className="text-center">
                                <p className="font-medium text-xs lg:text-base">Jumlah Soal</p>
                                <p className="text-biru-dark text-sm lg:text-base font-semibold">2</p>
                            </div>
                            <div className="text-center">
                                <p className="font-medium text-xs lg:text-base">Kesempatan Mengerjakan</p>
                                <p className="text-biru-dark text-sm lg:text-base font-semibold">1 Kali Kesempatan</p>
                            </div>
                            <div className="text-center">
                                <p className="font-medium text-xs lg:text-base">Bobot Nilai</p>
                                <p className="text-biru-dark text-sm lg:text-base font-semibold">0%</p>
                            </div>
                        </div>
                        <Button color="biru" onClick={handleOpen} className={"w-full justify-center py-2 lg:w-fit"}>Lanjut ke Pertanyaan</Button>
                    </div>
                </div>
            )
        } else {
            return(
                <FormEssay />
            )
        }
    }

}

export default EssayDetail