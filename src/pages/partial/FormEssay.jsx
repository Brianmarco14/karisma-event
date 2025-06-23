import Button from "@/components/Button"

const FormEssay = () => {
    return (
        <div className="bg-white h-full flex justify-center items-center border-4 rounded-xl overflow-hidden">
            <div className="flex flex-col items-center gap-3 w-full h-[80vh] p-5 overflow-y-auto">
                <div className=" lg:pb-3 border-b-2 border-biru text-start text-sm lg:text-base w-full capitalize text-biru">
                    <p>bobot = 0</p>
                </div>
                <div className="flex-1  w-full">
                    <p className="mb-2 text-biru-dark font-medium text-sm lg:text-base">1. Sebutkan 3 (tiga) pelajaran yang paling berkesan untuk Anda selama mengikuti pelatihan!</p>
                    <textarea placeholder="Jawaban" className="w-full border-2 p-1 border-biru rounded-xl text-biru-dark font-medium h-52 lg:h-48 2xl:h-64 resize-none"></textarea>
                </div>
                <div className="flex-1  w-full">
                    <p className="mb-2 text-biru-dark font-medium text-sm lg:text-base">2. Jelaskan hal yang ingin Anda terapkan setelah mengikuti pelatihan ini</p>
                    <textarea placeholder="Jawaban" className="w-full border-2 p-1 border-biru rounded-xl text-biru-dark font-medium h-52 lg:h-48 2xl:h-64 resize-none"></textarea>
                </div>
                <Button>simpan jawaban</Button>
            </div>
        </div>
    )
}

export default FormEssay