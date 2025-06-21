import Button from "../../components/Button"

const StatusQuiz = ({ minimum = 90, score }) => {
    return (
        <div className={`bg-gradient-to-b ${score >= minimum ? " from-[#25B155] to-[#24356E]" : " from-[#F87216] to-[#DC2626]"} h-full flex justify-center items-center`}>
            <div className="flex flex-col lg:flex-row gap-x-8 gap-y-5 lg:gap-y-0 justify-center px-5 lg:px-20 ">
                <div className="w-full lg:w-2/5 flex justify-center items-center">
                    <div className="size-32 lg:size-80 relative flex justify-center items-center">
                        <img src={`${score >= minimum ? "/robot_lulus.webp" : "/robot_tidak_lulus.webp"}`} alt="robot status" className="object-cover"/>
                    </div>
                </div>
                <div className="flex flex-col gap-y-3 w-full lg:w-3/5">
                    <p className="text-white font-bold text-sm lg:text-xl 2xl:text-2xl text-center lg:text-start">Mohon Maaf! Nilai kamu belum cukup untuk lulus dari tes.</p>
                    <p className="text-white text-xs lg:text-base text-center lg:text-start">Untuk memperoleh nilai yang telah ditentukan dan lulus tes, pelajari kembali materi lalu ulangi tes ini, Semangat!</p>
                    <div className="bg-white p-3 rounded-xl flex flex-col items-center gap-3">
                        <div className="flex w-full justify-center gap-x-10">
                            <div className="text-center text-sm lg:text-base">
                                <p>Benar</p>
                                <p className="font-semibold">0</p>
                            </div>
                            <div className="text-center text-sm lg:text-base">
                                <p>Salah</p>
                                <p className="font-semibold">0</p>
                            </div>
                            <div className="text-center text-sm lg:text-base">
                                <p>Nilai</p>
                                <p className={`font-semibold`}>0</p>
                            </div>
                            <div className="text-center text-sm lg:text-base">
                                <p>Status</p>
                                <p className={`font-semibold`}>0</p>
                            </div>
                        </div>
                        <div className="text-xs lg:text-sm 2xl:text-base text-center w-4/5 pt-3 border-t">Catatan: Nilai kamu belum cukup baik, pastikan kamu sudah review materi dengan baik ya!</div>
                        <div>

                        </div>
                        <Button className={"w-full justify-center "}>Ulangi Tes</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatusQuiz