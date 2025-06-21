import { IoWarningOutline } from "react-icons/io5"
import Button from "../../components/Button"
import Pagination from "../../components/Pagination"

const Question = () => {
    return (
        <div className="bg-white h-full flex flex-col lg:gap-y-5 p-4 border overflow-hidden rounded-2xl">
            <div className="flex justify-between items-center">
                <p>Soal Quiz</p>
                <div className="font-semibold">00:00</div>
                <Pagination currentPage={1} totalPage={10} />
            </div>
            <div className="flex flex-col-reverse lg:flex-row gap-3 pt-3 border-t-2">
                <div className="w-full lg:w-[75%] h-full min-h-[15vh] flex p-2 justify-center items-center text-sm lg:text-base bg-white border mb-3 rounded-xl shadow-sm">
                    <p className="text-center">Saat situasi krisis terjadi, bagaimana pemandu wisata dapat menjaga ketenangan kelompok?</p>
                </div>
                <div className="flex-1">
                    <div className="px-3 py-2 rounded-xl bg-merah/20 mb-3 flex flex-col items-center gap-2">
                        <IoWarningOutline className="text-merah text-lg lg:text-2xl" />
                        <div className="flex flex-col gap-2">
                            <p className="leading-normal text-xs lg:text-sm">Dilarang mendistribusikan soal dan kunci jawaban. Segala bentuk pelanggaran terhadap hal ini akan diproses secara hukum.</p>
                            <div className="text-xs lg:text-sm">
                                <p className="font-semibold">Brian Marco Agustian</p>
                                <p>brianmarco1996@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <Button color="hijau" className={"w-full text-white justify-center "}>submit jawaban</Button>
                </div>
            </div>
            <div className="grid lg:grid-cols-2 lg:grid-rows-3 gap-3 lg:gap-5 ">
                <button className="flex gap-2 rounded-lg bg-abu hover:bg-kuning/40 shadow-sm">
                    <p className="p-2 rounded-lg flex items-center bg-kuning">A</p>
                    <p className="p-2 text-start self-center text-xs md:text-sm lg:text-base">flex justify-center items-center </p>
                </button>
                <button className="flex justify-start item-center gap-2 rounded-lg bg-abu hover:bg-kuning/40 shadow-sm">
                    <p className="p-2 rounded-lg flex items-center bg-kuning">B</p>
                    <p className="p-2 text-start self-center text-xs md:text-sm lg:text-base">Untuk dapat memberikan bantuan awal yang efektif dalam keadaan darurat</p>
                </button>
                <button className="flex gap-2 rounded-lg bg-abu hover:bg-kuning/40 shadow-sm">
                    <p className="p-2 rounded-lg flex items-center bg-kuning">C</p>
                    <p className="p-2 text-start self-center text-xs md:text-sm lg:text-base">Berusaha memahami situasi dan menengahi dengan cara yang adil dan objektif</p>
                </button>
                <button className="flex gap-2 rounded-lg bg-abu hover:bg-kuning/40 shadow-sm">
                    <p className="p-2 rounded-lg flex items-center bg-kuning">D</p>
                    <p className="p-2 text-start self-center text-xs md:text-sm lg:text-base">flex justify-center items-center </p>
                </button>

            </div>
        </div>
    )
}

export default Question
