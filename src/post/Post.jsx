import React  from "react";
import "./post.css";

const Post = () => {
  return (
    <React.Fragment>
      <div className='post'>
        <div className='postImg'></div>
        <div className='pInfo'>
          <div className='pCatagories'>
            <span className='postCat'>Music</span>
            <span className='postCat'>Life</span>
          </div>
          <span className='pTitle'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
          <hr />
          <span className='pDate'>1 hour ago</span>
          <p className='postDesc'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
            sit provident. Repellat non magnam consectetur quis minus voluptates
            labore fuga magni praesentium. Blanditiis error voluptatum maiores
            ducimus doloremque consequatur dolorem laudantium dolore adipisci,
            reiciendis corrupti, beatae nemo obcaecati? Sit, est sunt.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Post;
