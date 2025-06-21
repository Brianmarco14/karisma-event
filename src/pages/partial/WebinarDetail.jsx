import Button from "../../components/Button"

const WebinarDetail = () => {
  return (
    <div className="bg-gradient-to-b from-[#25B155] to-[#24356E] h-full flex justify-center items-center">
      <div className="flex flex-col items-center gap-y-2 2xl:gap-y-3">
        <img src={"/webinar.webp"} className={"w-1/4 self-center"} />
        <div className="flex flex-col items-center">
          <h3 className="md:text-xl text-center text-white font-bold mt-2 md:mt-5">Webinar Material</h3>
          <p className="mt-1 text-base text-white text-center w-4/5 lg:w-full"></p>
        </div>
        <Button color="biru">Buka Tautan Webinar</Button>
      </div>
    </div>
  )
}

export default WebinarDetail