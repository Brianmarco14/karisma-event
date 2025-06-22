import {IoWarningOutline} from "react-icons/io5";
import Button from "../../components/Button";
import Pagination from "../../components/Pagination";
import {useLearning} from "@/hooks/useLearning.js";
import {useEffect, useState} from "react";

const Question = () => {
    const {
        activeMaterial: data,
        quizQuestions,
        loadingQuiz,
        errorQuiz,
        fetchQuizQuestions,
        setQuizQuestions,
        answerQuizQuestion,
        finishQuiz,
        currentQuizLog,
    } = useLearning();

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});

    useEffect(() => {
        if (data && data.type === 'quiz' && data.detail && data.detail.id) {
            fetchQuizQuestions(data.detail.id);
        }
        return () => {
            setQuizQuestions(null);
            setCurrentQuestionIndex(0);
            setUserAnswers({});
        };
    }, [data, fetchQuizQuestions, setQuizQuestions]);

    const currentQuestion = quizQuestions ? quizQuestions[currentQuestionIndex] : null;
    const totalQuestions = quizQuestions ? quizQuestions.length : 0;
    const currentQuestionNumber = currentQuestionIndex + 1; // Untuk tampilan 1-based

    const goToNextQuestion = () => {
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        }
    };

    const goToPrevQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prevIndex => prevIndex - 1);
        }
    };

    const handleAnswerClick = (questionId, answerId) => {
        setUserAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionId]: answerId,
        }));
        answerQuizQuestion(questionId, answerId);
    };

    const handleSubmitQuiz = () => {
        finishQuiz();
    };

    if (loadingQuiz) {
        return <div className="p-4 text-center">Loading quiz questions...</div>;
    }

    if (errorQuiz) {
        if (errorQuiz.response.data.code === "QUIZ_EXPIRED") {
            return (
                <div className="p-4 text-center bg-red-100 border border-red-400 text-red-700 rounded-lg shadow-sm">
                    <p className="text-xl font-bold mb-2">Waktu kamu sudah habis!</p>
                    <p className="mb-4">Quiz telah berakhir karena waktu habis atau sudah diselesaikan sebelumnya.</p>
                    <p className="mb-4">Silakan akhiri quiz dengan menekan tombol di bawah ini untuk melihat
                        hasilnya.</p>
                    {!loadingQuiz && (
                        <Button
                            color="hijau"
                            className="w-full text-white justify-center"
                            onClick={handleSubmitQuiz}
                            disabled={loadingQuiz}
                        >
                            Akhiri Quiz
                        </Button>
                    )}
                </div>
            );
        }
        return <div className="p-4 text-red-500 text-center">Error loading quiz: {errorQuiz.message}</div>;
    }

    if (!quizQuestions || quizQuestions.length === 0) {
        return <div className="p-4 text-center">No quiz questions found for this quiz.</div>;
    }

    if (!currentQuestion) {
        return <div className="p-4 text-center">Question not found.</div>;
    }

    return (
        <div className="bg-white h-full flex flex-col lg:gap-y-5 p-4 border overflow-hidden rounded-2xl">
            <div className="flex justify-between items-center">
                <p>Soal Quiz</p>
                <div className="font-semibold">00:00</div>
                <Pagination
                    currentPage={currentQuestionNumber}
                    totalPage={totalQuestions}
                    onPageChange={(page) => setCurrentQuestionIndex(page - 1)}
                />
            </div>

            <div className="flex flex-col-reverse lg:flex-row gap-3 pt-3 border-t-2">
                <div
                    className="w-full lg:w-[75%] h-full min-h-[15vh] flex p-2 justify-center items-center text-sm lg:text-base bg-white border mb-3 rounded-xl shadow-sm">
                    <p className="text-center" dangerouslySetInnerHTML={{__html: currentQuestion.quiz}}></p>
                </div>
                <div className="flex-1">
                    <div className="px-3 py-2 rounded-xl bg-merah/20 mb-3 flex flex-col items-center gap-2">
                        <IoWarningOutline className="text-merah text-lg lg:text-2xl"/>
                        <div className="flex flex-col gap-2">
                            <p className="leading-normal text-xs lg:text-sm">Dilarang mendistribusikan soal dan kunci
                                jawaban. Segala bentuk pelanggaran terhadap hal ini akan diproses secara hukum.</p>
                            <div className="text-xs lg:text-sm">
                                <p className="font-semibold">Brian Marco Agustian</p>
                                <p>brianmarco1996@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    {currentQuestionIndex === totalQuestions - 1 && currentQuizLog?.status !== 'completed' ? (
                        <Button
                            color="hijau"
                            className="w-full text-white justify-center"
                            onClick={handleSubmitQuiz}
                            disabled={loadingQuiz}
                        >
                            Selesaikan Quiz
                        </Button>
                    ) : (
                        <Button
                            color="hijau"
                            className="w-full text-white justify-center"
                            onClick={goToNextQuestion}
                            disabled={currentQuestionIndex === totalQuestions - 1 || loadingQuiz}
                        >
                            Next Question
                        </Button>
                    )}
                    {currentQuestionIndex > 0 && (
                        <Button
                            color="abu"
                            className="w-full text-black justify-center mt-2"
                            onClick={goToPrevQuestion}
                            disabled={loadingQuiz}
                        >
                            Previous Question
                        </Button>
                    )}
                </div>
            </div>

            <div className="grid lg:grid-cols-2 lg:grid-rows-3 gap-3 lg:gap-5 ">
                {
                    currentQuestion.answers.map((answer, index) => (
                        <button
                            key={answer.id}
                            onClick={() => handleAnswerClick(currentQuestion.id, answer.id)}
                            className={`flex gap-2 rounded-lg shadow-sm 
                                ${userAnswers[currentQuestion.id] === answer.id ? 'bg-kuning/70' : 'bg-abu'} 
                                hover:bg-kuning/40
                                ${loadingQuiz ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}
                            `}
                            disabled={loadingQuiz || currentQuizLog?.status === 'completed'}
                        >
                            <p className="p-2 rounded-lg flex items-center bg-kuning">{String.fromCharCode(65 + index)}</p>
                            <p className="p-2 text-start self-center text-xs md:text-sm lg:text-base"
                               dangerouslySetInnerHTML={{__html: answer.answer}}></p>
                        </button>
                    ))
                }
            </div>
        </div>
    );
};

export default Question;