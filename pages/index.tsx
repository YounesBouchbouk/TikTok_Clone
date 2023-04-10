import axios from "axios";
import type { NextPage } from "next";
import NoResult from "../components/NoResult";
import VideoCard from "../components/VideoCard";
import { Video } from "../types";

interface IProps {
  videos: Video[];
}

const Home: NextPage<IProps> = ({ videos }) => {
  // console.log(videos);

  return (
    <div className="flex flex-col gap-10 videos h-full">
      {videos.length ? (
        videos.map((video: Video) => <VideoCard key={video._id} post={video} />)
      ) : (
        <NoResult text="No result founded" />
      )}
    </div>
  );
};

export const getServerSideProps = async () => {
  const response = await axios.get(`http://localhost:3000/api/post`);
  const { data } = response;

  // console.log(data);

  return {
    props: {
      videos: data,
    },
  };
};

export default Home;
