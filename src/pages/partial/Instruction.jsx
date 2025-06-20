import { FaCloudDownloadAlt, FaFileAlt } from "react-icons/fa"
import Button from "../../components/Button"

const Instruction = () => {
    return (
        <div className="bg-gradient-to-br from-[#35BAF6] to-[#1C44B0] h-full flex gap-10 p-6">
            <div className="flex-1 flex flex-col gap-y-3">
                <div className="bg-white p-5 rounded-xl">
                    <div className="mb-3">asdsad</div>
                    <div className="mb-3">
                        <p className="text-biru font-semibold">Instruksi</p>
                        <p className="text-sm">Selesaikan membuat 1 page menggunakan React JS</p>
                    </div>
                    <div>
                        <p className="text-biru font-semibold">Tutorial Mengerjakan Tugas</p>
                        <a href="https://youtu.be/S_BDIYc57UU" className="text-sm underline text-biru-dark font-medium">Lihat Tutorial Pengerjaan</a>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-xl">
                    <div>
                        <p className="text-biru font-semibold">Tujuan Tugas</p>
                        <p className="text-sm">Selesaikan membuat 1 page menggunakan React JS</p>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-xl">
                    <div className="mb-2">
                        <p className="text-biru font-semibold">File Asset Tugas</p>
                        <p className="text-sm">Silahkan download file dibawah ini untuk membantu kamu menyelesaikan tugas.</p>
                    </div>
                    <div className="bg-blue-200 flex justify-between items-center p-1 pe-3 rounded-lg">
                        <div className="flex gap-2">
                            <div className="mb-2">
                                <p className="text-biru font-semibold">Aset TPM</p>
                                <p className="text-sm">Ukuran file : Tidak diketahui</p>
                            </div>
                        </div>
                        <button>
                            <FaCloudDownloadAlt className="text-2xl text-biru" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex flex-col gap-y-3">
                <div className="bg-white p-5 rounded-xl">
                    <div className="mb-2">
                        <p className="text-biru font-semibold">Upload Tugas</p>
                        <div className="bg-blue-200 flex justify-between items-center p-1 pe-3 rounded-lg">
                            <div className="flex items-center gap-2">
                                <FaFileAlt className="text-2xl text-biru" />
                                <div className="mb-2">
                                    <p className="text-biru font-semibold">TPM</p>
                                    <p className="text-sm">Ukuran file : 3.98 KB</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="text-center">
                        <p className="text-sm mb-1">Ukuran maksimum file: 2 MB (pdf)</p>
                        <Button className={"w-full justify-center"}>Upload File Tugas</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Instruction