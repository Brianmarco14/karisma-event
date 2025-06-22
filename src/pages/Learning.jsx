import {FiChevronRight} from "react-icons/fi"
import {TiArrowBack} from "react-icons/ti"
import {Link, useParams} from "react-router-dom"
import SidebarNavigation from "./partial/SidebarNavigation"
import {useEffect, useState} from "react"
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io"
import {useLearning} from "@/context/LearningContext.jsx";
import QuizDetail from "@/pages/partial/QuizDetail.jsx";
import ReadingDetail from "@/pages/partial/ReadingDetail.jsx";
import WebinarDetail from "@/pages/partial/WebinarDetail.jsx";
import TextDetail from "@/pages/partial/TextDetail.jsx";
import VideoDetail from "@/pages/partial/VideoDetail.jsx";
import PracticeDetail from "@/pages/partial/PracticeDetail.jsx";
import Button from "@/components/ui/Button.jsx";


const Learning = () => {
    const {slug} = useParams();

    const {
        activity,
        setSlug,
        setCourseId,
        activeMaterial,
        goToNextMaterial,
        goToPrevMaterial,
        isFirstMaterial,
        isLastMaterial
    } = useLearning();
    const [openSidebar, setOpenSidebar] = useState(false)

    const handleSidebar = () => {
        setOpenSidebar(!openSidebar)
    }

    const renderMaterialDetail = () => {
        if (!activeMaterial) return null;

        switch (activeMaterial.type) {
            case 'quiz':
                return <QuizDetail data={activeMaterial}/>;
            case 'reading':
                return <ReadingDetail data={activeMaterial}/>;
            case 'webinar':
                return <WebinarDetail data={activeMaterial}/>;
            case 'text':
                return <TextDetail data={activeMaterial}/>;
            case 'video':
                return <VideoDetail data={activeMaterial}/>;
            case 'practice':
                return <PracticeDetail data={activeMaterial}/>;
            default:
                return <p className="text-white">Tipe materi tidak dikenali.</p>;
        }
    };

    useEffect(() => {
        if (slug) {
            setSlug(slug);
        }
    }, [slug, setSlug]);

    useEffect(() => {
        if (activity) {
            setCourseId(activity.course_id);
        }
    }, [activity, setCourseId]);

    return (
        <div className="relative flex h-[100svh] w-screen overflow-x-hidden overflow-y-auto lg:overflow-hidden">
            <div className='flex flex-col grow lg:w-[70%] lg:overflow-y-auto'>
                <div className='top-0 md:px-1 sticky z-10 w-full'>
                    <div className="flex items-center gap-4 w-full px-4 md:px-5 bg-white">
                        <div className="flex items-center justify-center shrink w-fit md:w-1/6 p-0 md:py-2 ">
                            <Link to="/" className="hidden md:block">
                                <img className="2xl:w-40 lg:w-full" src={'/logokarisma.webp'}
                                     alt="Karisma Academy"/>
                            </Link>
                            <Link to="/program" className="block md:hidden">
                                <TiArrowBack className={"text-xl text-[#24356E]"}/>
                            </Link>
                        </div>
                        <div
                            className="grow w-full lg:flex flex-col justify-center items-start md:border-l-2 p-0 md:py-2 md:px-4 gap-1 ">
                            <span
                                className="text-xs md:text-base hidden md:block font-bold uppercase">{activity?.course_name}</span>
                            <div className="flex flex-col items-start gap-1 w-full mb-3 md:mb-0 ">
                                <h2 className="text-xs md:text-base w-full flex justify-between">
                                    <div className={"font-semibold text-[11px] xs:text-xs md:text-sm"}>Progress
                                        Kelas
                                    </div>
                                    <div
                                        className={"font-semibold text-[11px] xs:text-xs md:text-sm"}>{activity?.progress}%
                                    </div>
                                </h2>
                                <h2 className="text-xs hidden">
                                    <b>Progress : {activity?.progress}% </b>
                                </h2>
                                <div className={"w-full h-3 md:h-3 bg-gray-100 rounded-full overflow-hidden"}>
                                    <div className={"bg-green-500 h-full"}
                                         style={{width: `${activity?.progress}%`}}>
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
                                        <FiChevronRight className={"self-center md:text-2xl"}/>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="relative flex flex-col items-center gap-y-5 py-5 min-h-[94vh] lg:min-h-[90vh] 2xl:min-h-[91vh]">
                    <div className="w-[95%] rounded-2xl overflow-hidden h-full">
                        {activeMaterial && renderMaterialDetail()}
                    </div>
                    <div className="flex justify-between items-center w-[95%]">
                        <Link to={'/'}>
                            <Button color="abu" className={"hidden lg:flex"}><IoIosArrowBack/>Kembali</Button>
                        </Link>
                        <div className="flex gap-0 lg:gap-3 justify-between w-full lg:w-fit">
                            {!isFirstMaterial && (
                                <Button onClick={goToPrevMaterial}
                                        color="abu"><IoIosArrowBack/>Sebelumnya</Button>
                            )}
                            {!isLastMaterial && (
                                <Button onClick={goToNextMaterial}
                                >Selanjutnya<IoIosArrowForward/></Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {
                activity && (
                    <SidebarNavigation
                        handleSidebar={handleSidebar}
                        isOpen={openSidebar}
                    />
                )
            }
        </div>
    )
}

export default Learning