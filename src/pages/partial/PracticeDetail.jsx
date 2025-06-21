import { useState } from "react"
import Button from "../../components/Button"
import Instruction from "./Instruction"

const PracticeDetail = ({data}) => {
  const [openDetail, setOpenDetail] = useState(false)
  const handleDetail = () => {
    setOpenDetail(!openDetail)
  }

  if (openDetail) {
    return (
      <Instruction />
    )
  } else {   
    return (
      <div className="bg-gradient-to-r p-2 lg:p-6 from-[#182555] to-[#971B1D] h-full flex justify-center items-center">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12">
          <div className=" relative w-2/3 lg:w-1/3">
            <img src={"/practice-detail.webp"} className={""} />
          </div>
          <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start gap-y-5">
            <div className="flex flex-col items-center lg:items-start">
              <Button color="merah" className={"text-white !py-1 !text-xs"}>Belum Mengirim Tugas</Button>
              <h3 className="md:text-xl text-center text-white font-bold mt-2 md:mt-5">{data.name}</h3>
              <p className="mt-1 text-base text-white text-center lg:text-start w-full">Ayo segera kerjakan tugas berikut ini</p>
            </div>
            <Button color="biru" onClick={handleDetail}>Lihat Detail Tugas</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default PracticeDetail