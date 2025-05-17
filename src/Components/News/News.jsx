import React from "react";
import { FeaturedStories, TopStories } from "../../Data/NewsData";
import { Link, useParams } from "react-router-dom";

const News = () => {

  return (
    <div className="p-4">
      <div>
        <h2 className="text-3xl font-bold mb-5 text-center mt-10">
          {TopStories.title}
        </h2>
        <div className="grid grid-cols-1 min-md:grid-cols-2 min-lg:grid-cols-4 gap-5">
          {TopStories.data.map((item, i) => {
            return (
              <Link key={i} to={`/news/${item.id}`} className="hover:shadow-2xl hover:p-3 rounded-2xl duration-200 cursor-pointer p-2">
                <div className="w-full mb-3">
                  <img className="m-auto rounded-2xl" src={item.cover} alt="" />
                </div>
                <h2 className="mb-3 font-bold line-clamp-2 min-sm:text-center min-md:text-left">
                  {item.main_title}
                </h2>
                <span className="text-gray-400 min-sm:flex min-sm:justify-center min-md:justify-start">
                  {item.time}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-5 text-center mt-10">
          {FeaturedStories.title}
        </h2>
        <div className="grid grid-cols-1 min-md:grid-cols-2 min-lg:grid-cols-4 gap-5">
          {FeaturedStories.data.map((item, i) => {
            return (
              <Link key={i} to={`/news/${item.id}`} className="hover:shadow-2xl hover:p-3 rounded-2xl duration-200 cursor-pointer p-2">
                <div className="w-full mb-3">
                  <img className="m-auto rounded-2xl" src={item.cover} alt="" />
                </div>
                <h2 className="mb-3 font-bold line-clamp-2 min-sm:text-center min-md:text-left">
                  {item.main_title}
                </h2>
                <span className="text-gray-400 min-sm:flex min-sm:justify-center min-md:justify-start">
                  {item.time}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default News;
