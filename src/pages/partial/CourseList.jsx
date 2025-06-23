import { Link } from "react-router-dom"

const CourseList = ({ data, handleSearch }) => {
    return (
        <div className="w-full flex justify-center">
            <div className="lg:max-w-screen-lg 2xl:max-w-screen-2xl w-full px-2 lg:px-4 2xl:px-6 lg:py-4 2xl:py-5 border rounded-b-2xl shadow-xl top-0 bg-white">
                <div className="hidden md:flex justify-between">
                    <label className="border pe-2 flex items-center text-gray-400 !outline-transparent rounded-xl overflow-hidden">
                        <input type="text" className="grow outline-none p-2" placeholder="Cari Pelatihan"  onChange={(e) => handleSearch(e.target.value)}/>
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
                </div>
                {
                    data.length === 0 && (
                        <div className="flex justify-center items-center w-full">Belum ada pelatihan yang anda miliki</div>
                    )
                }
                {
                    data && data.length > 0 && data.map((item, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr_1fr] gap-y-2 md:gap-y-0 md:gap-x-4  overflow-hidden p-3 md:p-4 my-4 lg:my-6 rounded-lg text-black border border-gray-300">
                            <div className="rounded-md overflow-hidden">
                                <img src={`http://s3.karismaacademy.com/storage/courses/materials/4056/students/51242/20250621-063703-student-51242-material-4056.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=x22hqKhJJLeAojjGJrkzT8LcXdBYZ5VbrsWSiRDRTI6Cp9FQorAi6YwocT0B480AIYIX2ZavwAQmbcvg%2F20250621%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250621T063703Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=f6d63bdc7ef992eb6eaffc42bb6ec00e689e79346aa9e21538c6c28d9030e3a3`} alt={""} className="w-full h-full object-cover md:shrink-0" />
                            </div>
                            <div
                                className={"flex col-span-3 flex-col  gap-3 md:gap-2 2xl:gap-4 justify-between md:justify-center"}
                            >
                                <div className=" flex flex-col gap-y-2 md:flex-row md:items-stretch md:gap-3">
                                    <div className="flex flex-col gap-1 justify-center md:justify-start bg-blue-900 rounded-md px-3 py-2 md:p-2 w-full">
                                        <div className={"flex flex-row gap-2 items-center justify-between text-base text-white"}>
                                            <p className="font-medium text-xs lg:text-sm">Progress Kelas</p>
                                            <p className="font-medium text-xs lg:text-sm">{item.progress}%</p>
                                        </div>
                                        <div className="w-full bg-gray-200/10 h-[7px] md:h-[5px] lg:h-2 rounded-full overflow-hidden">
                                            <div className="bg-green-600 h-full" style={{ width: `${item.progress}%` }}></div>
                                        </div>

                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h2 className="lg:text-lg 2xl:text-4xl font-semibold tracking-tight line-clamp-2 md:line-clamp-1 leading-snug">
                                        {item.name}
                                    </h2>
                                     <Link to={`/learning/${item.slug}`} className="h-fit w-fit bg-green-600 rounded-md overflow-hidden flex items-center">
                                    <button className="bg-green-600 !px-2 !py-3 md:!py-2 md:!px-4 text-white md:text-sm w-full md:w-fit tracking-tight">
                                        Lanjut
                                    </button>
                                </Link>
                                </div>               
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default CourseList