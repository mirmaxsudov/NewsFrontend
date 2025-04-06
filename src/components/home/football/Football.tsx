import "./Football.css"
import Calendar from "./Calendar.tsx";
import Club from "./Club.tsx";
import Final from "./Final.tsx";

const Football = () => {
    return (
        <>
            <section className={"football__section py-[65px]"}>
                <div className={"container max-w-container mx-auto"}>
                    <div className={"flex gap-[24px]"}>
                        <Calendar/>
                        <Club/>
                        <Final/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Football;