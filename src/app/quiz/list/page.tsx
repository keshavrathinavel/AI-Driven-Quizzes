"use client";
import {useRouter} from "next/navigation";
import React from "react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {BookCopy} from "lucide-react";

const ViewAvailableQuizzes = () => {

    const router = useRouter();

    return (
        <Card
            className="hover:cursor-pointer w-full hover:opacity-75"
            onClick={() => {
                router.push("/quiz/list/all");
            }}
        >
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-2xl font-bold">View available quizzes</CardTitle>
                <BookCopy size={28}/>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">
                    Take any of the available quizzes.
                </p>
            </CardContent>
        </Card>

    );
};

export default ViewAvailableQuizzes;