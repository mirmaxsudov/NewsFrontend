import "./Football.css"
import Calendar from "./Calendar.tsx";

const Football = () => {
    return (
        <>
            <section className={"football__section py-[65px]"}>
                <div className={"container max-w-container mx-auto"}>
                    <Calendar/>
                </div>
            </section>
        </>
    )
}

export default Football;