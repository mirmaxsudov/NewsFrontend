import Football from "../components/home/football/Football.tsx";
import Category from "../components/category/Category.tsx";
import PopularPosts from "../components/post/home/popular/PopularPosts.tsx";
import NewPosts from "../components/post/home/news/NewPosts.tsx";
import LatestVideos from "../components/video/home/LatestVideos.tsx";
import TrendyPosts from "../components/post/home/trendy/TrendyPosts.tsx";
import TopPosts from "../components/post/top/TopPosts.tsx";
import Weather from "../components/weather/Weather.tsx";

const Home = () => {
    return <>
        <div>
            <Category/>
            <PopularPosts/>
            <Football/>
            <NewPosts/>
            <LatestVideos/>
            <TrendyPosts/>
            <Weather/>
            <TopPosts/>
        </div>
    </>
};

export default Home;