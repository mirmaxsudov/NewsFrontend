type PostCommentImagePropsType = {
    firstname: string;
    image: string;
}

const PostCommentImage = ({firstname, image}: PostCommentImagePropsType) => {
    return (
        <>
            <div className={"size-[60px]"}>
                <img className={"rounded-[12px] object-cover size-full"} alt={firstname} src={image}/>
            </div>
        </>
    )
}

export default PostCommentImage;