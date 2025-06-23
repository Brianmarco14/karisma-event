import Button from "../../components/Button"
import Question from "./Question"
import StatusQuiz from "./StatusQuiz"
import {useLearning} from "@/hooks/useLearning.js";

const QuizDetail = () => {
    const {
        activeMaterial: data,
        openQuestion,
        setOpenQuestion
    } = useLearning()

    const handleQuestion = () => {
        setOpenQuestion(!openQuestion)
    }

  const selesai = true
  const nilai = 80

    if (!openQuestion) {
        if (data.is_complete) {
            return (
                <StatusQuiz/>
            )
        } else {
            return (
                <div className="bg-gradient-to-br from-[#6A22A7] to-[#322D81] h-full flex justify-center items-center">
                    <div className="flex flex-col items-center gap-y-2 2xl:gap-y-3">
                        <img src={""} className={"w-1/4 self-center"} alt={''}/>
                        <div className="flex flex-col items-center">
                            <h3 className="md:text-xl text-center text-white font-bold mt-2 md:mt-5">Quiz Material</h3>
                            <p className="mt-1 text-base text-white text-center w-4/5 lg:w-full">Keterampilan Komunikasi
                                Efektif untuk Pemandu Wisata</p>
                        </div>
                        <Button color="kuning" onClick={handleQuestion}>Mulai Quiz</Button>
                    </div>
                </div>
            )
        }
    } else {
        return (
            <Question/>
        )
    }
}

export default QuizDetail