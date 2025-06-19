import { FiChevronRight } from "react-icons/fi"
import { LuMonitorPlay } from "react-icons/lu"
import { TiArrowBack } from "react-icons/ti"
import { Link } from "react-router-dom"
import SidebarNavigation from "./partial/SidebarNavigation"
import QuizDetail from "./partial/QuizDetail"
import WebinarDetail from "./partial/WebinarDetail"
import TextDetail from "./partial/TextDetail"
import VideoDetail from "./partial/VideoDetail"
import ReadingDetail from "./partial/ReadingDetail"
import PracticeDetail from "./partial/PracticeDetail"
import { useEffect, useState } from "react"
import Button from "../components/Button"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

const chapters = [
    {
        id: 1,
        name: "Sesi Pembuka",
        sequence: 1,
        is_lock: false,
        materials: [
            {
                id: 1,
                name: "Selamat Datang",
                type: "text",
                sequence: 1,
                is_complete: false,
                is_verification: false,
                status: false,
                chapter_id: 1,
            },
            {
                id: 2,
                name: "Video Perkenalan Lembaga",
                type: "video",
                sequence: 2,
                is_complete: true,
                is_verification: false,
                status: false,
                chapter_id: 1,
            },
        ],
    },
    {
        id: 2,
        name: "Pre-test",
        sequence: 2,
        is_lock: false,
        materials: [
            {
                id: 3,
                name: "Pre-test",
                type: "quiz",
                sequence: 1,
                is_complete: true,
                is_verification: false,
                status: false,
                chapter_id: 2,
            },
        ],
    },
    {
        id: 3,
        name: "Sesi 1 - Pengenalan",
        sequence: 3,
        is_lock: false,
        materials: [
            {
                id: 4,
                name: "Reading Material",
                type: "reading",
                sequence: 1,
                is_complete: true,
                is_verification: false,
                status: false,
                chapter_id: 3,
            },
            {
                id: 5,
                name: "Webinar: Pengenalan",
                type: "webinar",
                sequence: 2,
                is_complete: true,
                is_verification: false,
                status: false,
                chapter_id: 3,
            },
            {
                id: 6,
                name: "Formative Test Sesi 1",
                type: "quiz",
                sequence: 3,
                is_complete: true,
                is_verification: false,
                status: false,
                chapter_id: 3,
            },
            {
                id: 7,
                name: "Tugas Mandiri Sesi 1",
                type: "practice",
                sequence: 4,
                is_complete: true,
                is_verification: false,
                status: false,
                chapter_id: 3,
            },
        ],
    },
    {
        id: 4,
        name: "Sesi 2 - Pengenalan",
        sequence: 4,
        is_lock: false,
        materials: [
            {
                id: 8,
                name: "Reading Material",
                type: "reading",
                sequence: 1,
                is_complete: true,
                is_verification: false,
                status: false,
                chapter_id: 4,
            },
            {
                id: 9,
                name: "Webinar: Pengenalan",
                type: "webinar",
                sequence: 2,
                is_complete: true,
                is_verification: false,
                status: false,
                chapter_id: 4,
            },
            {
                id: 10,
                name: "Formative Test Sesi 2",
                type: "quiz",
                sequence: 3,
                is_complete: true,
                is_verification: false,
                status: false,
                chapter_id: 4,
            },
            {
                id: 11,
                name: "Tugas Mandiri Sesi 2",
                type: "practice",
                sequence: 4,
                is_complete: true,
                is_verification: false,
                status: false,
                chapter_id: 4,
            },
        ],
    },
    {
        id: 5,
        name: "Sesi 3 - Pengenalan",
        sequence: 5,
        is_lock: false,
        materials: [
            {
                id: 12,
                name: "Reading Material",
                type: "reading",
                sequence: 1,
                is_complete: true,
                is_verification: false,
                status: false,
                chapter_id: 5,
            },
            {
                id: 13,
                name: "Webinar: Pengenalan",
                type: "webinar",
                sequence: 2,
                is_complete: true,
                is_verification: false,
                status: false,
                chapter_id: 5,
            },
            {
                id: 14,
                name: "Formative Test Sesi 3",
                type: "quiz",
                sequence: 3,
                is_complete: true,
                is_verification: false,
                status: false,
                chapter_id: 5,
            },
            {
                id: 15,
                name: "Tugas Mandiri Sesi 3",
                type: "practice",
                sequence: 4,
                is_complete: true,
                is_verification: false,
                status: false,
                chapter_id: 5,
            },
        ],
    },
    {
        id: 6,
        name: "Sesi 4 - Pengenalan",
        sequence: 6,
        is_lock: false,
        materials: [
            {
                id: 16,
                name: "Reading Material",
                type: "reading",
                sequence: 1,
                is_complete: true,
                is_verification: false,
                status: false,
                chapter_id: 6,
            },
            {
                id: 17,
                name: "Webinar: Pengenalan",
                type: "webinar",
                sequence: 2,
                is_complete: true,
                is_verification: false,
                status: false,
                chapter_id: 6,
            },
            {
                id: 18,
                name: "Formative Test Sesi 4",
                type: "quiz",
                sequence: 3,
                is_complete: true,
                is_verification: false,
                status: false,
                chapter_id: 6,
            },
            {
                id: 19,
                name: "Tugas Mandiri Sesi 4",
                type: "practice",
                sequence: 4,
                is_complete: true,
                is_verification: false,
                status: false,
                chapter_id: 6,
            },
        ],
    },
    {
        id: 7,
        name: "Evaluasi",
        sequence: 7,
        is_lock: false,
        materials: [
            {
                id: 20,
                name: "Evaluasi Akhir",
                type: "embed",
                sequence: 1,
                is_complete: false,
                is_verification: false,
                status: false,
                chapter_id: 7,
            },
        ],
    },
    {
        id: 8,
        name: "Post-test",
        sequence: 8,
        is_lock: false,
        materials: [
            {
                id: 21,
                name: "Soal Post Test",
                type: "quiz",
                sequence: 1,
                is_complete: true,
                is_verification: true,
                status: false,
                chapter_id: 8,
            },
        ],
    },
    {
        id: 9,
        name: "Unjuk Keterampilan",
        sequence: 9,
        is_lock: false,
        materials: [
            {
                id: 22,
                name: "Unjuk Keterampilan",
                type: "practice",
                sequence: 1,
                is_complete: true,
                is_verification: false,
                status: false,
                chapter_id: 9,
            },
        ],
    },
    {
        id: 10,
        name: "Reflective Journal",
        sequence: 10,
        is_lock: false,
        materials: [
            {
                id: 23,
                name: "Reflective Journal",
                type: "essay",
                sequence: 1,
                is_complete: false,
                is_verification: false,
                status: false,
                chapter_id: 10,
            },
        ],
    },
];



const Learning = () => {
    const [activeMaterial, setActiveMaterial] = useState("")
    const [openSidebar, setOpenSidebar] = useState(false)

    useEffect(() => {
        setActiveMaterial(chapters[0].materials[0])
    }, [])

    const handleSidebar = () => {
        setOpenSidebar(!openSidebar)
    }

    const renderMaterialContent = () => {
        switch (activeMaterial.type) {
            case 'quiz':
                return <QuizDetail data={activeMaterial} />;
            case 'reading':
                return <ReadingDetail data={activeMaterial} />;
            case 'webinar':
                return <WebinarDetail data={activeMaterial} />;
            case 'text':
                return <TextDetail data={activeMaterial} />;
            case 'video':
                return <VideoDetail data={activeMaterial} />;
            case 'practice':
                return <PracticeDetail data={activeMaterial} />;
            default:
                return <p className="text-white">Tipe materi tidak dikenali.</p>;
        }
    };

    const handleShowMaterial = (material) => {
        setActiveMaterial(material)
    }
    return (
        <div className="relative flex h-[100svh] w-screen overflow-x-hidden overflow-y-auto lg:overflow-hidden">
            <div className='flex flex-col grow lg:w-[70%] lg:overflow-y-auto'>
                <div className='top-0 md:px-1 sticky z-10 w-full'>
                    <div className="flex items-center gap-4 w-full px-4 md:px-5 bg-white">
                        <div className="flex items-center justify-center shrink w-fit md:w-1/6 p-0 md:py-2 ">
                            <Link to="/" className="hidden md:block">
                                <img className="2xl:w-40 lg:w-full" src={'/logokarisma.webp'} alt="Karisma Academy" />
                            </Link>
                            <Link to="/program" className="block md:hidden">
                                <TiArrowBack className={"text-xl text-[#24356E]"} />
                            </Link>
                        </div>
                        <div className="grow w-full lg:flex flex-col justify-center items-start md:border-l-2 p-0 md:py-2 md:px-4 gap-1 ">
                            <span className="text-xs md:text-base hidden md:block font-bold uppercase">Keterampilan Komunikasi Efektif untuk Pemandu Wisata</span>
                            <div className="flex flex-col items-start gap-1 w-full mb-3 md:mb-0 ">
                                <h2 className="text-xs md:text-base w-full flex justify-between">
                                    <div className={"font-semibold text-[11px] xs:text-xs md:text-sm"}>Progress Kelas </div>
                                    <div className={"font-semibold text-[11px] xs:text-xs md:text-sm"}>100%</div>
                                </h2>
                                <h2 className="text-xs hidden">
                                    <b>Progress : 100% </b>
                                </h2>
                                <div className={"w-full h-3 md:h-3 bg-gray-100 rounded-full overflow-hidden"}>
                                    <div className={"bg-green-500 h-full"} style={{ width: `${100}%` }}>
                                        {"\u00A0"}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center content-center">
                            <div className="py-2  flex lg:hidden w-full h-full">
                                <button onClick={handleSidebar}
                                    className=" flex content-center"
                                >
                                    <div
                                        className="my-auto flex content-center text-xs md:text-base whitespace-nowrap bg-[#1E3A89] text-white py-2 px-2 rounded-md font-semibold">
                                        {" "}
                                        Daftar Aktivitas
                                        <FiChevronRight className={"self-center md:text-2xl"} />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative flex flex-col items-center gap-y-5 py-5 min-h-[94vh] lg:min-h-[90vh] 2xl:min-h-[91vh]">
                    <div className="w-[95%] rounded-2xl overflow-hidden h-full">{renderMaterialContent()}</div>
                    <div className="flex justify-between items-center w-[95%]">
                        <Button color="abu" className={"hidden lg:flex"}><IoIosArrowBack /> kembali</Button>
                        <div className="flex gap-0 lg:gap-3 justify-between w-full lg:w-fit">
                            <Button color="abu"><IoIosArrowBack /> sebelumnya</Button>
                            <Button>selanjutnya <IoIosArrowForward /></Button>
                        </div>
                    </div>
                </div>
            </div>
            <SidebarNavigation
                data={chapters}
                materialId={activeMaterial.id}
                handleShow={handleShowMaterial}
                handleSidebar={handleSidebar}
                isOpen={openSidebar}
            />
        </div>
    )
}

export default Learning