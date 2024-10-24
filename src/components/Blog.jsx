import PropTypes from "prop-types";
import { useState } from "react";
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({ details, readTimeAdjust, markBook }) => {
  const { id, title, image, author, time, duration, tags } = details;
  const [bookmarked, setBookMarked] = useState(false);

  return (
    <div id={id} className="card bg-base-100 w-11/12 gap-3 mx-auto shadow-xl">
      <figure className="px-5 pt-5">
        <img src={image} alt={id} className="rounded-xl" />
      </figure>
      <div className="card-body gap-5">
        <div className="flex justify-between">
          <div className="badge badge-accent gap-3 h-fit p-2">
            <img
              className="size-10 rounded-full"
              src={author[1]}
              alt={author[0]}
            />
            <div className="flex flex-col">
              <h3 className="font-bold">{author[0]}</h3>
              <small className="font-light">{time}</small>
            </div>
          </div>

          <div className="join">
            <p className="border-2 border-base-300 border-r-0 min-w-12 p-2 px-3 items-center h-12 join-item">{duration} minutes</p>
            <button
              onClick={() => {
                markBook(id, title, bookmarked);
                setBookMarked(!bookmarked);
              }}
              className="btn bg-base-300 border-2 border-base-300 join-item rounded-r-full"
            >
              <FaRegBookmark />
            </button>
          </div>
        </div>
        <h2 className="card-title text-3xl">{title}</h2>
        <div className="card-actions flex-col items-end gap-5">
          <div className="flex gap-3">
            <div className="badge badge-outline">{tags[0]}</div>
            <div className="badge badge-outline">{tags[1]}</div>
          </div>
          <button
            onClick={() => {
              readTimeAdjust(duration);
            }}
            className="btn btn-primary"
          >
            Mark As Read
          </button>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  details: PropTypes.object,
  readTimeAdjust: PropTypes.func,
  markBook: PropTypes.func,
};

export default Blog;
