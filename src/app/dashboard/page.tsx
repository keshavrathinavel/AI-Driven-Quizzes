import DetailsDialog from "@/components/DetailsDialog";
import HistoryCard from "@/components/dashboard/HistoryCard";
import HotTopicsCard from "@/components/dashboard/HotTopicsCard";
import QuizMeCard from "@/components/dashboard/QuizMeCard";
import RecentActivityCard from "@/components/dashboard/RecentActivityCard";
import {getAuthSession} from "@/lib/nextauth";
import {redirect} from "next/navigation";
import React from "react";
import ViewAvailableQuizzes from "@/app/quiz/list/page";

type Props = {};

export const metadata = {
    title: "Dashboard | Saplings.AI",
    description: "Take a quiz on anything!",
};

const Dashboard = async (props: Props) => {
    const session = await getAuthSession();
    if (!session?.user) {
        redirect("/");
    }

    const userRole = session?.user?.role;

    return (
        <main className="p-8 mx-auto max-w-7xl">
            <div className="flex items-center">
                <h2 className="mr-2 text-3xl font-bold tracking-tight">Dashboard</h2>
                <DetailsDialog/>
            </div>

            <div className="grid gap-4 mt-4 md:grid-cols-2">
                <ViewAvailableQuizzes/>
                <HistoryCard/>
            </div>

            {userRole === "TEACHER" && (
                <div className="grid gap-4 mt-4 md:grid-cols-1">
                    <QuizMeCard/>
                </div>
            )}
            <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7">
                <HotTopicsCard/>
                <RecentActivityCard/>
            </div>
        </main>
    );
};

export default Dashboard;
