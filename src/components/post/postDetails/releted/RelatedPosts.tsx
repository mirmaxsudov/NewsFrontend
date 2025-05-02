import React, {useEffect, useRef, useState} from "react";
import Slider from "react-slick";

import {SendPostPageResponseAll} from "../../../../types/post/PostTypes";
import {relatedPosts} from "../../../../api/requests/post/post.api";
import {toast} from "react-toastify";
import RelatedPostsLoading from "./RelatedPostsLoading";
import PostItemForAll from "../../item/PostItemForAll";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface RelatedPostsProps {
    sendPostId: string | number;
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({sendPostId}) => {
    const [loading, setLoading] = useState(true);
    const [response, setResponse] = useState<SendPostPageResponseAll>(
        {} as SendPostPageResponseAll
    );

    const sliderRef = useRef<Slider>(null);

    useEffect(() => {
        const fetchRelatedPosts = async () => {
            setLoading(true);
            try {
                const apiResponse = await relatedPosts(sendPostId, 0, 10);
                setResponse(apiResponse.data);
            } catch (e) {
                console.error(e);
                toast.error("Something went wrong fetching related posts");
            } finally {
                setLoading(false);
            }
        };

        fetchRelatedPosts();
    }, [sendPostId]);

    if (loading) return <RelatedPostsLoading/>;

    const settings = {
        dots: false,
        infinite: false,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {breakpoint: 1280, settings: {slidesToShow: 4}},
            {breakpoint: 1024, settings: {slidesToShow: 3}},
            {breakpoint: 768, settings: {slidesToShow: 2}},
            {breakpoint: 480, settings: {slidesToShow: 1}},
        ],
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h2 className="capitalize red-line text-[#3E3232] text-[20px] font-medium">
                    Related Posts
                </h2>
                <div className="flex items-center gap-[20px]">
                    <button
                        onClick={() => sliderRef.current?.slickPrev()}
                        className="bg-[#F5F5F5] w-[40px] h-[40px] flex items-center justify-center rounded-[12px] cursor-pointer"
                    >
                        <svg
                            width="9"
                            height="13"
                            viewBox="0 0 9 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7 13C6.71875 13 6.46875 12.9062 6.28125 12.7188L1.28125 7.71875C0.875 7.34375 0.875 6.6875 1.28125 6.3125L6.28125 1.3125C6.65625 0.90625 7.3125 0.90625 7.6875 1.3125C8.09375 1.6875 8.09375 2.34375 7.6875 2.71875L3.40625 7L7.6875 11.3125C8.09375 11.6875 8.09375 12.3438 7.6875 12.7188C7.5 12.9062 7.25 13 7 13Z"
                                fill="#3E3232"
                                fillOpacity="0.5"
                            />
                        </svg>
                    </button>

                    <button
                        onClick={() => sliderRef.current?.slickNext()}
                        className="bg-[#F5F5F5] w-[40px] h-[40px] flex items-center justify-center rounded-[12px] cursor-pointer"
                    >
                        <svg
                            width="9"
                            height="13"
                            viewBox="0 0 9 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 13C1.71875 13 1.46875 12.9062 1.28125 12.7188C0.875 12.3438 0.875 11.6875 1.28125 11.3125L5.5625 7L1.28125 2.71875C0.875 2.34375 0.875 1.6875 1.28125 1.3125C1.65625 0.90625 2.3125 0.90625 2.6875 1.3125L7.6875 6.3125C8.09375 6.6875 8.09375 7.34375 7.6875 7.71875L2.6875 12.7188C2.5 12.9062 2.25 13 2 13Z"
                                fill="#3E3232"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <Slider ref={sliderRef} {...settings}>
                {response.content.map((item) => (
                    <div key={item.id} className="px-2">
                        <PostItemForAll post={item}/>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default RelatedPosts;