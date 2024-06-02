"use client";

import {useEffect, useState} from "react";
import axios from "axios";
import {useRouter} from "next/navigation";

interface Quiz {
    id: string;
    topic: string;
    gameType: string;
    user: {
        name: string;
    };
    questions: Array<{
        id: string;
        question: string;
    }>;
}

const QuizList: React.FC = () => {
    const [quizzes, setQuizzes] = useState<Quiz[]>([]);
    const router = useRouter();

    useEffect(() => {
        const fetchQuizzes = async () => {
            const response = await axios.get("/api/games");
            setQuizzes(response.data.quizzes);
        };

        fetchQuizzes();
    }, []);

    const handleTakeQuiz = (quizId: string) => {
        router.push(`/play/mcq/${quizId}`);
    };

    return (
        <main className="p-8 mx-auto max-w-7xl">
            <h1 className="p-6 text-4xl font-bold">Available Quizzes</h1>
            <table className="min-w-full divide-y divide-gray-200 table-fixed w-full">
                <thead>
                <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Topic</th>
                    <th className="px-20 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-20 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {quizzes.map((quiz) => (
                    <tr key={quiz.id}>
                        <td className="px-6 py-4 whitespace-nowrap font-semibold">{quiz.topic}</td>
                        <td className="px-20 py-4 whitespace-nowrap uppercase font-bold">{quiz.gameType}</td>
                        <td className="px-20 py-4 whitespace-nowrap">
                            <button
                                className="text-indigo-600 hover:text-indigo-900"
                                onClick={() => handleTakeQuiz(quiz.id)}
                            >
                                Take Quiz
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </main>
    );
};

export default QuizList;
