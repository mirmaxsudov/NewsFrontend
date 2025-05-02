import {useState} from "react";
import ReactPaginate from "react-paginate";
import {usePaginatedPosts} from "../../../hooks/usePaginatedPosts.ts";
import PostItem from "../../post/item/PostItem.tsx";

const ProfileMarkedSendPosts = () => {
    const [page, setPage] = useState(0);
    const {postResponse, isLoading, error} = usePaginatedPosts(page, 12);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const totalPages = postResponse?.totalPages || 1;

    return (
        <section className="container max-w-container mx-auto my-[45px]">
            <div className="grid grid-cols-4 gap-[24px]">
                {postResponse?.content?.map((post) => (
                    <PostItem
                        key={post.id}
                        postPreview={{post, owner: postResponse.owner}}
                    />
                ))}
            </div>

            <div className="flex justify-start mt-10">
                <ReactPaginate
                    previousLabel={
                        <span className="flex items-center gap-1">
              <span className="text-[16px]">‹</span>
              <span>Prev</span>
            </span>
                    }
                    nextLabel={
                        <span className="flex items-center gap-1">
              <span>Next</span>
              <span className="text-[16px]">›</span>
            </span>
                    }
                    breakLabel={<span className="text-[#3E3232]">...</span>}
                    onPageChange={(selected) => setPage(selected.selected)}
                    pageCount={totalPages}
                    forcePage={page}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={2}
                    containerClassName="flex items-center gap-3"
                    pageClassName="text-[#3E3232]"
                    pageLinkClassName="rounded-[16px] px-[16px] py-[10px] hover:bg-gray-100 cursor-pointer"
                    activeClassName="font-bold"
                    activeLinkClassName="bg-[#F3F3F3] rounded-[16px]"
                    previousClassName="text-[#3E3232]"
                    nextClassName="text-[#3E3232]"
                    previousLinkClassName="rounded-[16px] px-[16px] py-[10px] cursor-pointer"
                    nextLinkClassName="rounded-[16px] px-[16px] py-[10px] cursor-pointer"
                    breakClassName="text-[#3E3232]"
                    disabledClassName="opacity-50 cursor-not-allowed"
                />
            </div>
        </section>
    );
};

export default ProfileMarkedSendPosts;
