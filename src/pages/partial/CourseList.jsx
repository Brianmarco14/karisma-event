import { RiFileList3Fill } from "react-icons/ri"

const CourseList = () => {
    return (
        <div className="w-full flex justify-center relative">
            <div className=" lg:py-10 bg-gradient-to-br md:bg-gradient-to-r from-blue-900 to-green-700 w-full"></div>
            <div className="lg:max-w-screen-lg 2xl:max-w-screen-2xl w-full px-2 lg:px-4 2xl:px-6 lg:py-4 2xl:py-5 border rounded-2xl shadow-xl lg:absolute top-0 bg-white">
                <div className="hidden md:flex justify-between">
                    <label className="border pe-2 flex items-center text-gray-400 !outline-transparent rounded-xl overflow-hidden">
                        <input type="text" className="grow outline-none p-2" placeholder="Cari Sertifikat" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="w-4 h-4 opacity-70"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </label>
                    <select
                        className="border w-full max-w-xs text-gray-400 !outline-transparent rounded-xl overflow-hidden"
                        defaultValue="urutkan"
                    >
                        <option disabled value="urutkan">
                            Urutkan
                        </option>
                        <option value="asc">Nama Sertifikat: A-Z</option>
                        <option value="desc">Nama Sertifikat: Z-A</option>
                    </select>
                </div>
                {/* Course List */}
                <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr_1fr] gap-y-2 md:gap-y-0 md:gap-x-4  overflow-hidden p-3 md:p-4 my-4 rounded-lg text-black border border-gray-300">
                    <div className="rounded-md overflow-hidden">
                        <img src={"https://media.karismaacademy.com/eOtHkjl538jLBCeEwZzwCuDgrIvKigShqdPAvWxu.webp"} alt={""} className="w-full h-full object-cover md:shrink-0" />
                    </div>
                    <div
                        className={"flex col-span-3 flex-col gap-3 md:gap-2 2xl:gap-4 justify-between md:justify-center"}
                    >
                        <h2 className="lg:text-lg 2xl:text-xl font-semibold tracking-tight line-clamp-2 md:line-clamp-1 leading-snug">
                            Keterampilan Komunikasi Efektif untuk Pemandu Wisata
                        </h2>
                        <div className="flex items-center">
                            <RiFileList3Fill className="size-5 md:size-3 lg:size-6 text-green-600" />
                            <h2 className="font-semibold text-sm lg:text-base mx-4 md:mx-3">
                                Nilai Ujian : -
                            </h2>
                        </div>
                        <div className=" flex flex-col gap-y-2 md:flex-row md:items-stretch md:gap-3">
                            <div className="flex flex-col gap-1 justify-center md:justify-start bg-blue-900 rounded-md px-3 py-2 md:p-2 w-full">
                                <div className={"flex flex-row gap-2 items-center justify-between text-base text-white"}>
                                    <p className="font-medium text-xs lg:text-sm">Progress Kelas</p>
                                    <p className="font-medium text-xs lg:text-sm">100%</p>
                                </div>
                                <div className="w-full bg-gray-200/10 h-[7px] md:h-[5px] lg:h-2 rounded-full overflow-hidden">
                                    <div className="bg-green-600 h-full" style={{ width: "50%" }}></div>
                                </div>

                            </div>
                            <button className="bg-green-600 !h-auto !min-h-0 !px-2 !py-3 md:!py-2 md:!px-4 text-white md:text-sm w-full md:w-fit rounded-md tracking-tight">
                                Lanjut
                            </button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr_1fr] gap-y-2 md:gap-y-0 md:gap-x-4  overflow-hidden p-3 md:p-4 my-4 rounded-lg text-black border border-gray-300">
                    <div className="rounded-md overflow-hidden">
                        <img src={"https://media.karismaacademy.com/eOtHkjl538jLBCeEwZzwCuDgrIvKigShqdPAvWxu.webp"} alt={""} className="w-full h-full object-cover md:shrink-0" />
                    </div>
                    <div
                        className={"flex col-span-3 flex-col gap-3 md:gap-2 2xl:gap-4 justify-between md:justify-center"}
                    >
                        <h2 className="lg:text-lg 2xl:text-xl font-semibold tracking-tight line-clamp-2 md:line-clamp-1 leading-snug">
                            Keterampilan Komunikasi Efektif untuk Pemandu Wisata
                        </h2>
                        <div className="flex items-center">
                            <RiFileList3Fill className="size-5 md:size-3 lg:size-6 text-green-600" />
                            <h2 className="font-semibold text-sm lg:text-base mx-4 md:mx-3">
                                Nilai Ujian : -
                            </h2>
                        </div>
                        <div className=" flex flex-col gap-y-2 md:flex-row md:items-stretch md:gap-3">
                            <div className="flex flex-col gap-1 justify-center md:justify-start bg-blue-900 rounded-md px-3 py-2 md:p-2 w-full">
                                <div className={"flex flex-row gap-2 items-center justify-between text-base text-white"}>
                                    <p className="font-medium text-xs lg:text-sm">Progress Kelas</p>
                                    <p className="font-medium text-xs lg:text-sm">100%</p>
                                </div>
                                <div className="w-full bg-gray-200/10 h-[7px] md:h-[5px] lg:h-2 rounded-full overflow-hidden">
                                    <div className="bg-green-600 h-full" style={{ width: "50%" }}></div>
                                </div>

                            </div>
                            <button className="bg-green-600 !h-auto !min-h-0 !px-2 !py-3 md:!py-2 md:!px-4 text-white md:text-sm w-full md:w-fit rounded-md tracking-tight">
                                Lanjut
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseList