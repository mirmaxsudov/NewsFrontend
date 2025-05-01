// usePaginatedPosts.ts
import { useEffect, useState } from "react";
import { SendPostPageResponseOwn } from "../types/post/PostTypes.ts";
import { fetchSendPostsByPage } from "../api/requests/post/post.api.ts";

export const usePaginatedPosts = (page: number, size: number) => {
  const [postResponse, setPostResponse] =
    useState<SendPostPageResponseOwn | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true; // To prevent setting state on unmounted component

    const fetchPosts = async () => {
      try {
        // Reset the loading state for each new fetch
        setLoading(true);
        setError(null);

        const response = await fetchSendPostsByPage(page, size);
        if (isMounted) {
          setPostResponse(response.data);
        }
      } catch (err) {
        console.error(err);
        if (isMounted) {
          setError("Failed to load posts.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchPosts();

    return () => {
      isMounted = false;
    };
  }, [page, size]);

  return { postResponse, isLoading, error };
};
