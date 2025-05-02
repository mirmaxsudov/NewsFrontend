import {useEffect, useState} from "react";
import {useParams, useSearchParams} from "react-router-dom";
import ReactPaginate from "react-paginate";
import classNames from "classnames";
import {LayoutGroup, motion, AnimatePresence} from "framer-motion";

import Top from "./Top";
import GenerateBreadCrumbs from "../../helpers/GenerateBreadCrumbs";
import {GridType, SearchEnum} from "../../enums/CategoryItemTitle";
import {usePaginatedPostsByCategory} from "../../hooks/usePaginatedPostsByCategory";
import PostItemForAll from "../../components/post/item/PostItemForAll";
import PostItemForAllTypeList from "../../components/post/item/PostItemForAllTypeList";
import {SendPostPageResponseAll} from "../../types/post/PostTypes";

const PostsByCategory = () => {
    const {category = ""} = useParams<{ category: string }>();
    const [searchParams, setSearchParams] = useSearchParams();

    const paramSearch = (searchParams.get("search") ?? SearchEnum.NEW) as SearchEnum;
    const initialSearch: SearchEnum = Object.values(SearchEnum).includes(paramSearch)
        ? paramSearch
        : SearchEnum.NEW;

    const paramGrid = (searchParams.get("grid") ?? GridType.GRID) as GridType;
    const initialGrid: GridType = Object.values(GridType).includes(paramGrid)
        ? paramGrid
        : GridType.GRID;

    const initialPage = Number(searchParams.get("page")) >= 0
        ? Number(searchParams.get("page"))
        : 0;

    const initialSize = Number(searchParams.get("size")) > 0
        ? Number(searchParams.get("size"))
        : initialGrid === GridType.GRID
            ? 12
            : 6;

    const [search, setSearch] = useState<SearchEnum>(initialSearch);
    const [gridType, setGridType] = useState<GridType>(initialGrid);
    const [page, setPage] = useState<number>(initialPage);
    const [size, setSize] = useState<number>(initialSize);

    const {postResponse, isLoading, error} = usePaginatedPostsByCategory(
        page, size, category, search
    );

    useEffect(() => {
        setPage(0);
        setSize(gridType === GridType.GRID ? 12 : 6);
    }, [gridType]);

    useEffect(() => {
        setPage(0);
    }, [search]);

    useEffect(() => {
        setSearchParams({
            page: String(page),
            size: String(size),
            search: search.toString(),
            grid: gridType.toString(),
        });
    }, [page, size, search, gridType, setSearchParams]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div className="text-red-500">{error}</div>;

    return (
        <section>
            <div className="container max-w-container mx-auto">
                <GenerateBreadCrumbs
                    values={[
                        {value: "home", link: "/"},
                        {value: category, link: `/category/${category}`},
                    ]}
                    current={category}
                />

                <Top
                    search={search}
                    setSearch={setSearch}
                    setGridType={setGridType}
                    gridType={gridType}
                />

                <h1 className="capitalize text-[20px] red-line text-[#3E3232] font-medium mb-[20px]">
                    Category: {category}
                </h1>

                {postResponse.content.length > 0 ? (
                    <Body
                        postResponse={postResponse}
                        page={page}
                        setPage={setPage}
                        size={size}
                        gridType={gridType}
                    />
                ) : (
                    <div className="text-center mt-20 text-[#3E3232]">
                        <h2 className="text-[40px] font-medium tracking-wider">
                            No posts found
                        </h2>
                    </div>
                )}
            </div>
        </section>
    );
};

type BodyProps = {
    postResponse: SendPostPageResponseAll;
    page: number;
    setPage: (page: number) => void;
    size: number;
    gridType: GridType;
};

const Body = ({
                  postResponse,
                  page,
                  setPage,
                  size,
                  gridType,
              }: BodyProps) => (
    <>
        <LayoutGroup>
            <motion.div
                layout
                className={classNames("grid gap-[24px]", {
                    "grid-cols-4": gridType === GridType.GRID,
                    "grid-cols-2": gridType === GridType.LIST,
                })}
            >
                <AnimatePresence>
                    {postResponse.content.map((post) => (
                        <motion.div
                            key={post.id}
                            layout
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: -20}}
                            transition={{duration: 0.3}}
                        >
                            {gridType === GridType.GRID ? (
                                <PostItemForAll post={post}/>
                            ) : (
                                <PostItemForAllTypeList post={post}/>
                            )}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </LayoutGroup>

        <div className="flex justify-start mt-10">
            <ReactPaginate
                previousLabel={
                    <span className="flex items-center gap-1">
            <span className="text-[16px]">‹</span> Prev
          </span>
                }
                nextLabel={
                    <span className="flex items-center gap-1">
            Next <span className="text-[16px]">›</span>
          </span>
                }
                breakLabel={<span className="text-[#3E3232]">...</span>}
                onPageChange={(sel) => setPage(sel.selected)}
                pageCount={Math.ceil(postResponse.totalElements / size)}
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
    </>
);

export default PostsByCategory;