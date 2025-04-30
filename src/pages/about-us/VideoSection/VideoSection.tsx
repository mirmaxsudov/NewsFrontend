import VideoThumbnail from "../../../assets/images/aboutUs/videoThumbnail.png";

const VideoSection = () => {
  return (
    <div className="container max-w-container mx-auto my-[50px]">
      <section className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-[36px] font-normal mb-4">
          We pay attention to your needs and do the best design.
        </h2>
        <div className="flex flex-col md:flex-row gap-[50px] items-center">
          <div className="flex-1">
            <p className="text-gray-600 text-[18px] text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
              imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
              senectus et netus. Mattis pellentesque id nibh tortor id aliquet
              lectus proin. Sapien faucibus et molestie ac feugiat sed lectus
              vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt
              ornare massa eget. Dictum varius duis at consectetur lorem. Nisi
              vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut
              tortor pretium viverra suspendisse potenti nullam. Et molestie ac
              feugiat sed lectus. Non nisi est sit amet facilisis magna.
              Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut
              enim blandit volutpat maecenas volutpat. Ornare lectus sit amet
              est placerat in egestas erat.
            </p>
          </div>

          <div className="flex-1">
            <div className="relative">
              <img
                src={VideoThumbnail}
                alt="Video Thumbnail"
                className="rounded-lg shadow-lg w-full"
              />
              <button className="absolute inset-0 flex justify-center items-center">
                <div className="bg-[#FFFFFFBF] rounded-full shadow-md flex items-center justify-center p-5">
                  <svg
                    className="p-0"
                    width="44"
                    height="44"
                    viewBox="0 0 36 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M33.8438 18.1562C35.1562 19 36 20.5 36 22C36 23.5938 35.1562 25.0938 33.8438 25.8438L6.84375 42.3438C5.4375 43.1875 3.65625 43.2812 2.25 42.4375C0.84375 41.6875 0 40.1875 0 38.5V5.5C0 3.90625 0.84375 2.40625 2.25 1.65625C3.65625 0.8125 5.4375 0.8125 6.84375 1.75L33.8438 18.1562Z"
                      fill="#F81539"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoSection;
