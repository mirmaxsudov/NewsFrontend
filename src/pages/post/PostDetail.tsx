import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {SendPostResponse} from "../../types/post/PostTypes.ts";
import {fetchById, viewed} from "../../api/requests/post/post.api.ts";
import GenerateBreadCrumbs from "../../helpers/GenerateBreadCrumbs.tsx";
import Left from "../../components/post/postDetails/Left.tsx";
import Right from "../../components/post/postDetails/right/Right.tsx";
import PostComments from "../../components/post/postDetails/PostComments.tsx";

const BREAD_CRUMBS_VALUES = [
    {
        value: "home",
        link: "/"
    }
]

const PostDetail = () => {
    const {id} = useParams();
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();
    const [post, setPost] = useState<SendPostResponse>({} as SendPostResponse);

    useEffect(() => {
        const sendPostViewed = async () => {
            try {
                setPost({...post, views: post.views + 1});
                await viewed(id as string);
            } catch (e) {
                console.log(e);
            }
        }
        sendPostViewed();
    }, []);

    useEffect(() => {
        const fetchSendPost = async () => {
            try {
                const apiResponse = await fetchById(id as string);
                console.log(apiResponse);
                setPost(apiResponse.data);
            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
            }
        }

        if (!id) {
            navigate(-1);
            return;
        }

        fetchSendPost();
    }, [id, navigate]);

    if (loading) {
        return (
            <>
                <h1 className={"text-center"}>
                    Loading
                </h1>
            </>
        )
    }

    return (
        <>
            <section className={"post__detail-section my-[25px]"}>
                <div className={"container max-w-container mx-auto"}>
                    <GenerateBreadCrumbs values={[
                        ...BREAD_CRUMBS_VALUES, {
                            value: post.title,
                            link: `/post/${post.id}`
                        }
                    ]} current={post.title}/>
                    <div className={"grid grid-cols-12 my-[50px] gap-[23px]"}>
                        <Left post={post}/>
                        <Right post={post}/>
                    </div>

                    <PostComments/>
                </div>
            </section>
        </>
    )
}

export default PostDetail;