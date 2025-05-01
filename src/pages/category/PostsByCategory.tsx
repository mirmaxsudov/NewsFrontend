import GenerateBreadCrumbs from "../../helpers/GenerateBreadCrumbs.tsx";
import {useParams} from "react-router-dom";
import ReactPaginate from "react-paginate";
import {useState} from "react";
import {usePaginatedPosts} from "../../hooks/usePaginatedPosts.ts";

const PostsByCategory = () => {
    const params = useParams();
    const [page, setPage] = useState(0);
    const {postResponse, isLoading, error} = usePaginatedPosts(page, 12);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const totalPages = postResponse?.totalPages || 1;

    return (
        <>
            <section>
                <div className={"container max-w-container mx-auto"}>
                    <GenerateBreadCrumbs
                        values={[
                            {
                                value: "home",
                                link: "/",
                            },
                            {
                                value: params["category"] ?? "",
                                link: `/category/${params["category"]}`,
                            },
                        ]}
                        current={params["category"] ?? ""}
                    />
                    <Top/>
                    <div>
                        <h3
                            className={
                                "red-line text-[#3E3232] text-[22px] font-medium capitalize"
                            }
                        >
                            Category : {params["category"]}
                        </h3>

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
                    </div>
                </div>
            </section>
        </>
    );
};

const Top = () => {
    return (
        <>
            <div
                className={"bg-[#F5F5F5] p-[10px] my-[45px] px-[20px] rounded-[12px]"}
            >
                <div className={"flex justify-between items-center"}>
                    <div className={"flex gap-[20px]"}>
                        <p className={"capitalize text-[#3E3232BF] font-medium"}>new</p>
                        <p className={"capitalize text-[#3E3232BF] font-medium"}>trendy</p>
                        <p className={"capitalize text-[#3E3232BF] font-medium"}>popular</p>
                        <p className={"capitalize text-[#3E3232BF] font-medium"}>top</p>
                    </div>
                    <div className={"flex gap-[10px] items-center"}>
                        <div>
                            <svg
                                width="16"
                                height="14"
                                viewBox="0 0 16 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.5 2C0.5 1.1875 1.15625 0.5 2 0.5C2.8125 0.5 3.5 1.1875 3.5 2C3.5 2.84375 2.8125 3.5 2 3.5C1.15625 3.5 0.5 2.84375 0.5 2ZM15 1C15.5312 1 16 1.46875 16 2C16 2.5625 15.5312 3 15 3H6C5.4375 3 5 2.5625 5 2C5 1.46875 5.4375 1 6 1H15ZM15 6C15.5312 6 16 6.46875 16 7C16 7.5625 15.5312 8 15 8H6C5.4375 8 5 7.5625 5 7C5 6.46875 5.4375 6 6 6H15ZM15 11C15.5312 11 16 11.4688 16 12C16 12.5625 15.5312 13 15 13H6C5.4375 13 5 12.5625 5 12C5 11.4688 5.4375 11 6 11H15ZM0.5 12C0.5 11.1875 1.15625 10.5 2 10.5C2.8125 10.5 3.5 11.1875 3.5 12C3.5 12.8438 2.8125 13.5 2 13.5C1.15625 13.5 0.5 12.8438 0.5 12ZM3.5 7C3.5 7.84375 2.8125 8.5 2 8.5C1.15625 8.5 0.5 7.84375 0.5 7C0.5 6.1875 1.15625 5.5 2 5.5C2.8125 5.5 3.5 6.1875 3.5 7Z"
                                    fill="#3E3232"
                                />
                            </svg>
                        </div>
                        <div className={"bg-[#3E32320D] p-2 rounded-[12px]"}>
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="12" cy="2" r="1.5" fill="#3E3232"/>
                                <circle cx="7" cy="2" r="1.5" fill="#3E3232"/>
                                <circle cx="2" cy="2" r="1.5" fill="#3E3232"/>
                                <circle cx="12" cy="12" r="1.5" fill="#3E3232"/>
                                <circle cx="7" cy="12" r="1.5" fill="#3E3232"/>
                                <circle cx="2" cy="12" r="1.5" fill="#3E3232"/>
                                <circle cx="12" cy="7" r="1.5" fill="#3E3232"/>
                                <circle cx="7" cy="7" r="1.5" fill="#3E3232"/>
                                <circle cx="2" cy="7" r="1.5" fill="#3E3232"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostsByCategory;
