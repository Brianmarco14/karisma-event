import { FiAlertTriangle } from "react-icons/fi";
import { LuMonitorPlay } from "react-icons/lu"
import { RiYoutubeLine } from "react-icons/ri";
import Accordion from "../../components/Accordion";
import { Link } from "react-router-dom";

const SidebarNavigation = ({ data, materialId, onClickMaterial }) => {
    return (
        <div className="hidden flex-col content-end duration-700 ease-in-out transition-all opacity-100 lg:flex lg:w-[30%]">
            <div className="shrink">
                <div className="navbar top-0 sticky z-10 bg-gradient-to-r from-blue-900 to-green-600 flex justify-end">
                    <div className="p-5 w-full">
                        <div className="flex grow ">
                            <div role="tablist" className="tabs content-start justify-start w-full flex">
                                <button
                                    type={"button"}
                                    onClick={() => { }}
                                    role="tab"
                                    className={`tab text-white text-lg text-start w-fit active}`}
                                >
                                    <div className={"flex flex-row gap-3 items-center"}>
                                        <LuMonitorPlay className={"text-xl"} />
                                        <div className={"flex flex-col items-center"}>
                                            <h1 className={"font-semibold text-base"}>Konten Kelas</h1>
                                            <span className={"text-xs font-medium"}>22 Konten Kelas</span>
                                        </div>
                                    </div>
                                </button>
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
                <div className="overflow-y-scroll  scrollbar-universal [&::-webkit-scrollbar]:w-1 lg:h-[90vh] 2xl:h-[92vh]"
                    style={{ direction: "rtl" }}>
                    <div className="px-3 py-3" style={{ direction: "ltr" }}>
                        {data.map((chapter) => (
                            <Accordion
                                key={chapter.id}
                                chapter={chapter}
                                materialId={materialId}
                                onClickMaterial={onClickMaterial}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarNavigation