import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";
import QuizList from "@/components/QuizList";
import {authOptions} from "@/lib/nextauth";

type Props = {};

const ListAllQuizzes = async (props: Props) => {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
        redirect("/");
    }

    return (
        <main>
            <div>
                <QuizList/>
            </div>
        </main>
    );
};

export default ListAllQuizzes;
