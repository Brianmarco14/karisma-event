import {useCallback, useEffect, useState} from "react";
import axios from "@/config/axios/index.js";
import LearningContextObject from "./LearningContextObject";

export const LearningProvider = ({children}) => {
    const [courseId, setCourseId] = useState(null);
    const [chapterId, setChapterId] = useState(null);
    const [materialId, setMaterialId] = useState(null);
    const [quizMaterialId, setQuizMaterialId] = useState(null);
    const [quizLogId, setQuizLogId] = useState(null)
    const [quizLog, setQuizLog] = useState(null)
    const [activity, setActivity] = useState(null);
    const [slug, setSlug] = useState(null);
    const [loadingActivity, setLoadingActivity] = useState(false);
    const [errorActivity, setErrorActivity] = useState(null);
    const [chapters, setChapters] = useState(null);
    const [activeMaterial, setActiveMaterial] = useState(null);
    const [isFirstMaterial, setIsFirstMaterial] = useState(true);
    const [isLastMaterial, setIsLastMaterial] = useState(true);
    const [openQuestion, setOpenQuestion] = useState(false)

    const [quizQuestions, setQuizQuestions] = useState(null);
    const [currentQuizLog, setCurrentQuizLog] = useState(null);
    const [loadingQuiz, setLoadingQuiz] = useState(false);
    const [errorQuiz, setErrorQuiz] = useState(null);


    const fetchMaterialActive = useCallback(async () => {
        if (!courseId || !chapterId || !materialId) {
            setActiveMaterial(null);
            return;
        }
        setLoadingActivity(true);
        setErrorActivity(null);
        try {
            const response = await axios.post(`/course/material`, {
                course_id: courseId,
                chapter_id: chapterId,
                material_id: materialId,
            });
            setActiveMaterial(response.data.data);

            if (response.data.data.type === 'quiz') {
                setQuizMaterialId(response.data.data.detail.id)
                setQuizLog(response.data.data.detail.log)
            } else {
                setOpenQuestion(false)
            }
        } catch (err) {
            console.error("Error fetching material:", err);
            setErrorActivity(err);
        } finally {
            setLoadingActivity(false);
        }
    }, [courseId, chapterId, materialId]);

    const fetchActivity = useCallback(async (currentSlug) => {
        if (!currentSlug) {
            setActivity(null);
            setChapters(null);
            return;
        }
        setLoadingActivity(true);
        setErrorActivity(null);
        try {
            const response = await axios.get(`/course/${currentSlug}/activity`);
            setActivity(response.data.data);
            setChapters(response.data.data.chapters)

            const initialCourseId = response.data.data.course_id;
            const initialChapterId = response.data.data.chapters?.[0]?.chapter_id;
            const initialMaterialId = response.data.data.chapters?.[0]?.materials?.[0]?.material_id;

            setCourseId(initialCourseId || null);
            setChapterId(initialChapterId || null);
            setMaterialId(initialMaterialId || null);
        } catch (err) {
            console.error("Error fetching activity:", err);
            setErrorActivity(err);
        } finally {
            setLoadingActivity(false);
        }
    }, []);

    const fetchCompleteMaterial = useCallback(async () => {
        await axios.post(`/course/material/complete`, {
            course_id: courseId,
            chapter_id: chapterId,
            material_id: materialId,
        });
    }, [chapterId, courseId, materialId]);

    const goToNextMaterial = useCallback(async () => {
        if (!chapters || !chapterId || !materialId) return;

        if (courseId && chapterId && materialId && activeMaterial?.is_complete === 0) {
            try {
                await fetchCompleteMaterial();
                console.log("Current material marked as complete upon Next click:", activeMaterial.title);
                setActiveMaterial(prev => prev ? {...prev, is_complete: 1} : null);
            } catch (completeErr) {
                console.error("Error marking current material as complete:", completeErr);
            }
        }

        const currentChapterIndex = chapters.findIndex(c => c.chapter_id === chapterId);
        const currentChapter = chapters[currentChapterIndex];
        if (!currentChapter || !currentChapter.materials) return;

        const currentMaterialIndex = currentChapter.materials.findIndex(m => m.material_id === materialId);
        if (currentMaterialIndex < currentChapter.materials.length - 1) {
            const nextMaterial = currentChapter.materials[currentMaterialIndex + 1];
            setMaterialId(nextMaterial.material_id);
        } else {
            const nextChapterIndex = currentChapterIndex + 1;
            if (nextChapterIndex < chapters.length) {
                const nextChapter = chapters[nextChapterIndex];
                if (nextChapter.materials && nextChapter.materials.length > 0) {
                    setChapterId(nextChapter.chapter_id);
                    setMaterialId(nextChapter.materials[0].material_id);
                }
            } else {
                console.log("No more materials (end of course).");
            }
        }
    }, [chapters, chapterId, materialId, courseId, activeMaterial, fetchCompleteMaterial]);

    const goToPrevMaterial = useCallback(() => {
        if (!chapters || !chapterId || !materialId) return;

        const currentChapterIndex = chapters.findIndex(c => c.chapter_id === chapterId);
        const currentChapter = chapters[currentChapterIndex];
        if (!currentChapter || !currentChapter.materials) return;

        const currentMaterialIndex = currentChapter.materials.findIndex(m => m.material_id === materialId);
        if (currentMaterialIndex > 0) {
            const prevMaterial = currentChapter.materials[currentMaterialIndex - 1];
            setMaterialId(prevMaterial.material_id);
        } else {
            const prevChapterIndex = currentChapterIndex - 1;
            if (prevChapterIndex >= 0) {
                const prevChapter = chapters[prevChapterIndex];
                if (prevChapter.materials && prevChapter.materials.length > 0) {
                    setChapterId(prevChapter.chapter_id);
                    setMaterialId(prevChapter.materials[prevChapter.materials.length - 1].material_id);
                }
            } else {
                console.log("No more previous materials (start of course).");
            }
        }
    }, [chapters, chapterId, materialId, setChapterId, setMaterialId]);

    useEffect(() => {
        if (chapters && chapterId && materialId) {
            const currentChapterIndex = chapters.findIndex(c => c.chapter_id === chapterId);
            const currentChapter = chapters[currentChapterIndex];
            if (currentChapter && currentChapter.materials) {
                const currentMaterialIndex = currentChapter.materials.findIndex(m => m.material_id === materialId);
                const isCurrentFirstMaterial = currentMaterialIndex === 0 && currentChapterIndex === 0;
                setIsFirstMaterial(isCurrentFirstMaterial);
                const isCurrentLastMaterial =
                    currentMaterialIndex === currentChapter.materials.length - 1 &&
                    currentChapterIndex === chapters.length - 1;
                setIsLastMaterial(isCurrentLastMaterial);
            }
        } else {
            setIsFirstMaterial(true);
            setIsLastMaterial(true);
        }
    }, [chapters, chapterId, materialId]);

    useEffect(() => {
        if (slug) {
            (async () => {
                await fetchActivity(slug);
            })();
        } else {
            setActivity(null);
            setChapters(null);
            setCourseId(null);
            setChapterId(null);
            setMaterialId(null);
        }
    }, [slug, fetchActivity]);

    useEffect(() => {
        if (courseId && chapterId && materialId) {
            (async () => {
                await fetchMaterialActive();
            })();
        } else {
            setActiveMaterial(null);
        }
    }, [courseId, chapterId, materialId, fetchMaterialActive]);

    const fetchQuizQuestions = useCallback(async (quizMaterialId) => {
        if (!materialId || !quizMaterialId) {
            setErrorQuiz("Material ID or Quiz Material ID is missing.");
            return;
        }
        setLoadingQuiz(true);
        setErrorQuiz(null);
        try {
            const response = await axios.post(`/course/quiz/question`, {
                material_id: materialId,
                quiz_material_id: quizMaterialId,
            });
            setQuizQuestions(response.data.data.quizzes);
            setCurrentQuizLog(response.data.data.log);
            setQuizLogId(response.data.data.log_id)
        } catch (err) {
            console.error("Error fetching quiz questions:", err);
            setErrorQuiz(err);
        } finally {
            setLoadingQuiz(false);
        }
    }, [materialId]);

    const answerQuizQuestion = useCallback(async (quizId, answerId) => {
        if (!quizLogId || !quizId || !answerId) {
            setErrorQuiz("Quiz log ID, quiz ID, or answer ID is missing.");
            return;
        }
        try {
            const response = await axios.post(`/course/quiz/answer`, {
                log_id: quizLogId,
                quiz_id: quizId,
                answer_id: answerId,
            });
            console.log("Quiz answer submitted:", response.data);
        } catch (err) {
            console.error("Error submitting quiz answer:", err);
            setErrorQuiz(err);
        }
    }, [quizLogId]);

    const finishQuiz = useCallback(async () => {
        if (!quizLogId) {
            setErrorQuiz("Quiz log ID is missing to finish quiz.");
            return;
        }
        setLoadingQuiz(true);
        setErrorQuiz(null);
        try {
            const response = await axios.post(`/course/quiz/finish`, {
                log_id: quizLogId,
            });
            console.log("Quiz finished:", response.data);
            setQuizQuestions(null);
            setCurrentQuizLog(null);
            setOpenQuestion(false)
            await fetchCompleteMaterial()
            await fetchActivity()
        } catch (err) {
            console.error("Error finishing quiz:", err);
            setErrorQuiz(err);
        } finally {
            setLoadingQuiz(false);
        }
    }, [fetchActivity, fetchCompleteMaterial, quizLogId]);

    const value = {
        courseId,
        setCourseId,
        chapterId,
        setChapterId,
        materialId,
        setMaterialId,
        activity,
        chapters,
        slug,
        setSlug,
        activeMaterial,
        loadingActivity,
        errorActivity,
        fetchActivity,
        goToNextMaterial,
        goToPrevMaterial,
        isFirstMaterial,
        isLastMaterial,
        quizQuestions,
        currentQuizLog,
        loadingQuiz,
        errorQuiz,
        fetchQuizQuestions,
        answerQuizQuestion,
        finishQuiz,
        quizLog,
        openQuestion,
        setOpenQuestion,
        setQuizQuestions
    };

    return (
        <LearningContextObject.Provider value={value}> {/* Gunakan LearningContextObject di sini */}
            {children}
        </LearningContextObject.Provider>
    );
};