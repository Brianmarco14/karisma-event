import {createContext, useCallback, useContext, useEffect, useState} from "react";
import axios from "@/config/axios/index.js";

const LearningContext = createContext(null);

export const useLearning = () => {
    const context = useContext(LearningContext)
    if (!context) {
        throw new Error('useLearning must be used within a LearningProvider')
    }
    return context
}

export const LearningProvider = ({children}) => {
    const [courseId, setCourseId] = useState(null);
    const [chapterId, setChapterId] = useState(null);
    const [materialId, setMaterialId] = useState(null);
    const [syllabus, setSyllabus] = useState(null);
    const [slug, setSlug] = useState(null); // This slug state is updated by the component using useParams
    const [loadingSyllabus, setLoadingSyllabus] = useState(false);
    const [errorSyllabus, setErrorSyllabus] = useState(null);

    const fetchSyllabus = useCallback(async (currentSlug) => {
        if (!currentSlug) {
            setSyllabus(null);
            return;
        }

        setLoadingSyllabus(true);
        setErrorSyllabus(null);
        try {
            const response = await axios.get(`/course/${currentSlug}`);
            setSyllabus(response.data);
        } catch (err) {
            console.error("Error fetching syllabus:", err);
            setErrorSyllabus(err);
        } finally {
            setLoadingSyllabus(false);
        }
    }, []);

    useEffect(() => {
        if (slug) {
            fetchSyllabus(slug);
        } else {
            setSyllabus(null);
        }
    }, [slug, fetchSyllabus]);

    const value = {
        courseId,
        setCourseId,
        chapterId,
        setChapterId,
        materialId,
        setMaterialId,
        syllabus,
        slug,
        setSlug,
        loadingSyllabus,
        errorSyllabus,
        fetchSyllabus
    };

    return (
        <LearningContext.Provider value={value}>
            {children}
        </LearningContext.Provider>
    );
}
