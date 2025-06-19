import Button from "../../components/Button"

const VideoDetail = () => {
  return (
    <di className="bg-gradient-to-br from-[#B91C1C] to-[#322D81] h-full flex justify-center items-center">
      <div className="flex flex-col items-center gap-y-2 2xl:gap-y-3">
        <img src={""} className={"w-1/4 self-center"} />
        <div className="flex flex-col items-center">
          <h3 className="md:text-xl text-center text-white font-bold mt-2 md:mt-5">Video Material</h3>
          <p className="mt-1 text-base text-white text-center w-4/5 lg:w-full">Keterampilan Komunikasi Efektif untuk Pemandu Wisata</p>
        </div>
        <Button color="kuning">Buka Tautan Webinar</Button>
      </div>
    </di>
  )
}

export default VideoDetail