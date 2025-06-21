import { FaCloudDownloadAlt, FaFileAlt } from "react-icons/fa"
import Button from "../../components/Button"
import FileUploadCard from "../../components/FileUploadCard"
import { useState } from "react";

const Instruction = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const handleSubmit = async () => {
        if (!selectedFile) {
            alert("Mohon pilih file terlebih dahulu.");
            return;
        }

        if (selectedFile.type !== "application/pdf") {
            alert("Hanya file PDF yang diperbolehkan.");
            return;
        }

        if (selectedFile.size > 2 * 1024 * 1024) {
            alert("Ukuran file melebihi 2MB.");
            return;
        }

        const formData = new FormData();
        formData.append("file", selectedFile);

        // try {
        //   const response = await fetch("/api/upload", {
        //     method: "POST",
        //     body: formData,
        //   });

        //   if (response.ok) {
        //     alert("Berhasil upload!");
        //   } else {
        //     alert("Gagal upload.");
        //   }
        // } catch (error) {
        //   console.error("Upload error:", error);
        // }
    };
    return (
        <div className="bg-gradient-to-br from-[#35BAF6] to-[#1C44B0] h-full flex flex-col lg:flex-row gap-3 lg:gap-10 p-6 overflow-y-auto">
            <div className="flex-1 flex flex-col gap-y-3">
                <div className="bg-white p-5 rounded-xl">
                    <div className="mb-3">
                        <Button color="merah" className={"text-white !py-1 !text-xs mb-1"}>Belum Mengirim Tugas</Button>
                        <div className="bg-blue-200 p-2 rounded-lg">
                            <p className="text-sm">Durasi pengerjaan tugas <span className="font-semibold">30 Menit</span></p>
                            <p className="text-sm">Kumpulkan paling lambat  <span className="font-semibold">1x24 Jam</span></p>

                        </div>
                    </div>
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
                        <a href="https://media.karismaacademy.com/JTkmKLBMboHLuH5cIlZ0hFezEl25Sb3wQg2ktKqY.pdf" download>
                            <FaCloudDownloadAlt className="text-2xl text-biru" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex flex-col gap-y-3">
                <div className="bg-white p-5 rounded-xl">
                    <div className="mb-2">
                        <p className="text-biru font-semibold">Upload Tugas</p>
                        <FileUploadCard onFileChange={setSelectedFile} />

                    </div>
                    <div className="text-center">
                        <p className="text-sm mb-1">Ukuran maksimum file: 2 MB (pdf)</p>
                        {
                            selectedFile && (
                                <Button className={"w-full justify-center"} onClick={handleSubmit}>Upload File Tugas</Button>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Instruction