import { FiChevronRight } from "react-icons/fi"
import { LuMonitorPlay } from "react-icons/lu"
import { TiArrowBack } from "react-icons/ti"
import { Link, useParams } from "react-router-dom"
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
import axios from "@/config/axios/index.js";


const Learning = () => {
    const [activeMaterial, setActiveMaterial] = useState("")
    const [openSidebar, setOpenSidebar] = useState(false)
    const [activities, setActivities] = useState("")
    const [input, setInput] = useState({
        course_id: 0,
        material_id: 0,
        chapter_id: 0,
    });
    const { slug } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/course/${slug}/activity`);
                const data = res.data.data;
                setActivities(data);

                if (data.chapters.length > 0 && data.chapters[0].materials.length > 0) {
                    setInput({
                        course_id: data.course_id,
                        material_id: data.chapters[0].materials[0].material_id,
                        chapter_id: data.chapters[0].chapter_id,
                    });
                }
            } catch (error) {
                console.error(error);
                throw error;
            }
        };

        fetchData();
    }, [slug]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.post("/course/material", input);
                setActiveMaterial(result.data.data)
            } catch (error) {
                console.error(error);
                throw error;
            }
        }

        fetchData()
    }, [input])

    const handleActiveMaterial = (materialId, chapterId) => {
        setInput({
            course_id: activities.course_id,
            material_id: materialId,
            chapter_id: chapterId,
        });
    }


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
                            <span className="text-xs md:text-base hidden md:block font-bold uppercase">{activities.course_name}</span>
                            <div className="flex flex-col items-start gap-1 w-full mb-3 md:mb-0 ">
                                <h2 className="text-xs md:text-base w-full flex justify-between">
                                    <div className={"font-semibold text-[11px] xs:text-xs md:text-sm"}>Progress Kelas </div>
                                    <div className={"font-semibold text-[11px] xs:text-xs md:text-sm"}>{activities.progress}%</div>
                                </h2>
                                <h2 className="text-xs hidden">
                                    <b>Progress : {activities.progress}% </b>
                                </h2>
                                <div className={"w-full h-3 md:h-3 bg-gray-100 rounded-full overflow-hidden"}>
                                    <div className={"bg-green-500 h-full"} style={{ width: `${activities.progress}%` }}>
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
            {
                activities && (
                    <SidebarNavigation
                        data={activities}
                        materialId={activeMaterial.id}
                        handleShow={handleShowMaterial}
                        handleSidebar={handleSidebar}
                        handleActive={handleActiveMaterial}
                        isOpen={openSidebar}
                    />
                )
            }
        </div>
    )
}

export default Learning