import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { TopStories } from "../Data/NewsData";

import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

const NewsPage = () => {
  const { id } = useParams();

  const findData = TopStories.data.filter((myid) => myid.id == id);

  return (
    <div className="mt-5 p-4">
      {
        <div className="grid grid-cols-1 min-md:grid-cols-2 gap-3">
          <div>
            {findData[0].image.slice(12) == ".jpg" ? (
              <img src={findData[0].image} alt="" />
            ) : (
              <video
                className="flex justify-center m-auto"
                src={findData[0].image}
                autoPlay={true}
                width={700}
                height={500}
                controls={true}
                muted
              />
            )}
          </div>
          <div>
            <h2 className="mb-2 font-bold text-2xl">
              {findData[0].main_title}
            </h2>

            <span className="text-sm text-gray-400">{findData[0].time}</span>
            <div className="flex gap-4 items-center *:text-gray-400 my-3 *:cursor-pointer *:hover:text-black *:duration-200">
              <FaTwitter />
              <FaFacebook />
              <FaYoutube />
              <FaInstagram />
              <FaPinterest />
            </div>
            <div className="space-y-4 mt-3">
              <p>{findData[0].firstPara}</p>
              <p>{findData[0].secPara}</p>
              <p>{findData[0].thirdPara}</p>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default NewsPage;
