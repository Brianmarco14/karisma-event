import Button from "../../components/Button"

const ReadingDetail = ({ data }) => {
    return (
        <div className="bg-gradient-to-br from-[#35BAF6] to-[#1C44B0] h-full flex justify-center items-center">
            <div className="flex flex-col items-center gap-y-2 2xl:gap-y-3">
                <img src={"/reading.webp"} className={"w-1/4 self-center"} />
                <div className="flex flex-col items-center">
                    <h3 className="md:text-xl text-center text-white font-bold mt-2 md:mt-5">{data?.name}</h3>
                    <p className="mt-1 text-base text-white text-center w-4/5 lg:w-full"></p>
                </div>
                <a href={`https://media.karismaacademy.com/${data?.detail.pdf}`} download={data?.detail.pdf}>
                    <Button color="kuning">Lihat Dokumen</Button>
                </a>
            </div>
        </div>
    )
}

export default ReadingDetail