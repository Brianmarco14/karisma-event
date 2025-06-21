import { Link } from "react-router-dom"
import CourseList from "./partial/CourseList"
import { useEffect, useState } from "react"
import axios from "@/config/axios/index.js";

const Program = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('/course')
                setCourses(res.data.data)
            } catch (error) {
                console.error(error)
                throw error
            }
        }

        fetchData()
    }, [])

    return (
        <div>
            <div className="2xl:mt-20 py-24 bg-gradient-to-br md:bg-gradient-to-r from-blue-900 to-green-700  text-xl flex justify-center items-center relative">
                <div className="px-3 pt-10 md:pt-0 lg:max-w-screen-lg 2xl:max-w-screen-2xl text-start flex flex-col -mt-16 md:mt-0 md:flex-row md:items-center w-full ">
                    <div className="flex flex-col gap-5 text-white mb-3 h-[inherit]">
                        <Link to={"/"}>
                        </Link>
                        <div className="flex flex-col gap-[3px] md:gap-5">
                            <h1 className="text-xl md:text-6xl font-semibold">Programmu</h1>
                            <p className="w-4/5 text-sm">Setiap langkah kecil adalah bagian dari perjalanan besar. Yuk pantau terus progres belajarmu di sini</p>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex absolute bottom-0 right-40 2xl:right-56 lg:w-64 2xl:w-80">
                    <img src="/robot.webp" alt="" className="transform scale-x-[-1]" />
                </div>
            </div>
            <CourseList data={courses}/>
        </div>
    )
}

export default Program