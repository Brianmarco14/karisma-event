import Button from "../../components/Button"

const Question = () => {
  return (
      <div className="bg-white h-full flex flex-col p-4 border overflow-hidden rounded-2xl">
        <div className="flex justify-between">
            <p>Soal Quiz</p>
            <div>00:00</div>
            <div>pagination</div>
        </div>
        <div className="flex">
            <div className="w-4/5">
                <div>soal</div>
                <div>jawaban</div>
            </div>
            <div className="flex-1">
                <div>peringatan</div>
                <Button color="hijau" className={"w-full text-white"}>submit jawaban</Button>
            </div>
        </div>
    </div>
  )
}

export default Question