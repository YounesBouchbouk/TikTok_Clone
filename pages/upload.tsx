import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useAuthStore from "../store/authStore";
import { client } from "../utils/client";
import { MdDelete } from "react-icons/md";
import { FaCloudUploadAlt } from "react-icons/fa";
import { topics } from "../utils/constants";
import { SanityAssetDocument } from "@sanity/client";

const Upload = () => {
  console.log(process.env.NEXT_GOOGLE_API_TOKEN);
  const [videoUploaded, setVideo] = useState<SanityAssetDocument | undefined>(undefined);
  const [Loading, setLoading] = useState(false);

  const uploadVideo = (e: any) => {
    // console.log(e);
    // setVideo(e.target.files[0]);

    console.log("I");
    

    const selectedFile = e.target.files[0];
    const fileTypes = ['video/mp4', 'video/webm', 'video/ogg'];

    client.assets
        .upload('file', selectedFile, {
          contentType: selectedFile.type,
          filename: selectedFile.name,
        })
        .then((data) => {
          setVideo(data);
          setLoading(false);
        });

    console.log(selectedFile.url);
    

    // console.log(videoUploaded);
  };

  return (
    <div className="w-full flex-col flex justify-start item-center ">
      <div className="mt-4 mb-6">
        <p className="font-bold text-2xl">Upload Video</p>
        <p className="text-gray-400 text-xl">Post a video to your account</p>
      </div>

      <div className="flex  flex-col md:flex-row item-center justify-start gap-2 w-full">
        <div
          className="w-[260px] h-[460px] border-4  relative
          border-dashed border-ray-400 flex item-center justify-center hover:bg-gray-200"
        >
          <div className="w-full h-full p-4 flex flex-col item-center justify-center cursor-pointer">
            {!videoUploaded ? (
              <div>
                <label className="cursor-pointer">
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="flex flex-col justify-center items-center">
                      <p className="font-bold text-xl">
                        <FaCloudUploadAlt className="text-gray-300 text-6xl" />
                      </p>
                      <p className="text-xl font-semibold">
                        Select video to upload
                      </p>
                    </div>

                    <p className="text-gray-400 text-center mt-10 text-sm leading-10">
                      MP4 or WebM or ogg <br />
                      720x1280 resolution or higher <br />
                      Up to 10 minutes <br />
                      Less than 2 GB
                    </p>
                    <p className="bg-[#F51997] text-center mt-8 rounded text-white text-md font-medium p-2 w-52 outline-none">
                      Select file
                    </p>
                  </div>
                  <input
                    type="file"
                    name="upload-video"
                    onChange={uploadVideo}
                    className="w-0 h-0"
                  />
                </label>
              </div>
            ) : (
              <video
                      className='rounded-xl h-[462px] mt-16 bg-black'
                      controls
                      loop
                      src={videoUploaded?.url}
                    />
            )}
          </div>
        </div>

        {/* Forms */}

        <div
          className="flex w-[600px]  h-[460px] flex-col
            items-start justify-center "
        >
          <div className="flex flex-col  w-full p-4">
            <label className="text-base mb-2 font-bold">Caption</label>
            <input
              type="text"
              name=""
              className="
            rounded py-2 px-3 outline-none border-2 border-gray-400"
            />
          </div>

          <div className=" flex flex-col  w-full p-4">
            <label className="text-base mb-2 font-bold">Categorie</label>
            <select
              name="categorie"
              className=" py-2 px-3 border-2 border-gray-400 "
            >
              {topics.map((item) => (
                <option
                  className="
                  py-2 px-3"
                  key={item.name}
                  value={item.name}
                >
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex  flex-row justify-end items-center  w-full p-4">
            <button className="text-center w-[150px] py-3 px-2 border-2 border-gray-400 hover:bg-gray-100">
              Discard
            </button>

            <button className="text-center w-[150px] py-3 px-2 border-2 border-gray-400 ml-4 bg-[#F51997] hover:text-[#F51997] text-white  hover:bg-gray-100 font-bold">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
