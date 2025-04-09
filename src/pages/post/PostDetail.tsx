import {useParams} from "react-router-dom";

const PostDetail = () => {
    const {id} = useParams();

    console.log(id);

    return (
        <>
            <section className={"post__detail-section"}>
                <div className={"container max-w-container mx-auto"}>
                    af
                </div>
            </section>
        </>
    )
}

export default PostDetail;