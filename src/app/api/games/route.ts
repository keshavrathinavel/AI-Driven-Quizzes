// api/games/route.ts
import {prisma} from "@/lib/db";
import {NextResponse} from "next/server";
import {getAuthSession} from "@/lib/nextauth";

export async function GET(req: Request) {
    try {
        const session = await getAuthSession();
        if (!session?.user) {
            return NextResponse.json(
                {error: "You must be logged in to view quizzes."},
                {status: 401}
            );
        }

        const quizzes = await prisma.game.findMany({
            include: {
                user: true,
                questions: true,
            },
        });

        return NextResponse.json({quizzes}, {status: 200});
    } catch (error) {
        return NextResponse.json(
            {error: "An unexpected error occurred."},
            {status: 500}
        );
    }
}
