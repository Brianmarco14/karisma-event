import { LuMonitorPlay } from "react-icons/lu";
import Accordion from "../../components/Accordion";

const SidebarNavigation = ({ data, materialId, handleShow, handleSidebar, isOpen,  handleActive }) => {
    return (
        <div className={`absolute lg:static ${isOpen ? 'right-0' : '-right-96'} top-0  duration-300 flex flex-col content-end ease-in-out transition-all opacity-100 lg:w-[30%]`}>
            <div className="shrink">
                <div className="navbar top-0 sticky z-10 bg-gradient-to-r from-biru-dark to-biru/90 flex justify-end">
                    <div className=" py-2 px-4 lg:px-5 lg:py-5 w-full">
                        <div className="flex grow ">
                            <div role="tablist" className="justify-between lg:justify-start w-full flex">
                                <button
                                    type={"button"}
                                    onClick={() => { }}
                                    className={`tab text-white text-lg text-start w-fit active}`}
                                >
                                    <div className={"flex flex-row gap-3 items-center"}>
                                        <LuMonitorPlay className={"text-xl"} />
                                        <div className={"flex flex-col items-center"}>
                                            <h1 className={"font-semibold text-base"}>Konten Kelas</h1>
                                            <span className={"text-xs font-medium"}>{data.chapters?.length} Konten Kelas</span>
                                        </div>
                                    </div>
                                </button>
                                <button onClick={handleSidebar} className="text-white py-3 px-5 block lg:hidden">x</button>
                            </div>
                        </div>
                        <div className="flex xl:hidden">
                            <div className="flex justify-end content-center">
                                <div className=" hidden lg:flex">
                                    <a
                                        href="#"

                                        className=" flex justify-end"
                                    >
                                        <div className="my-auto mx-1 flex content-center text-white">X</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grow bg-white">
                <div className="overflow-y-scroll  scrollbar-universal [&::-webkit-scrollbar]:w-1 h-[90vh] 2xl:h-[92vh]"
                    style={{ direction: "rtl" }}>
                    <div className="px-3 py-3" style={{ direction: "ltr" }}>
                        {data.chapters?.map((chapter, index) => (
                            <Accordion
                                key={index}
                                chapter={chapter}
                                materialId={materialId}
                                handleShow={handleShow}
                                handleActive={handleActive}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarNavigation