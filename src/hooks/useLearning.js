import {useContext} from 'react';
import LearningContextObject from "@/context/LearningContextObject.js";

export const useLearning = () => {
    const context = useContext(LearningContextObject);
    if (!context) {
        throw new Error('useLearning must be used within a LearningProvider');
    }
    return context;
};