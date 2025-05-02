import {useEffect, useState} from "react";
import {postsByCategory} from "../api/requests/post/post.api.ts";
import {SearchEnum} from "../enums/CategoryItemTitle.ts";
import {SendPostPageResponseAll} from "../types/post/PostTypes.ts";

export const usePaginatedPostsByCategory = (page: number, size: number, category: string, search: SearchEnum) => {
    const [postResponse, setPostResponse] = useState<SendPostPageResponseAll>({} as SendPostPageResponseAll);
    const [isLoading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        const fetchPosts = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await postsByCategory(category, page, size, search);

                if (isMounted)
                    setPostResponse(response.data);
            } catch (err) {
                console.error(err);
                if (isMounted)
                    setError("Failed to load posts.");
            } finally {
                if (isMounted)
                    setLoading(false);
            }
        };

        fetchPosts();

        return () => {
            isMounted = false;
        };
    }, [page, size, search, category]);

    return {postResponse, isLoading, error};
};