import React from "react";
import "./singlePost.css";

const SinglePost = () => {
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img className='singlePostImg' />
        <h1 className='singlePostTitle'>
          Lorem ipsum dolor sit
          <div className='singlePostEdit'>
            <i className='singlePostIcon far fa-edit'></i>
            <i className='singlePostIcon far fa-trash-alt'></i>
          </div>
        </h1>
        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>
            {" "}
            Author: <b>S.R.</b>{" "}
          </span>
          <span className='singlePostDate'>
            {" "}
            Date: <b>1/18/21</b>{" "}
          </span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          molestiae, aliquam magnam est architecto perferendis ipsam, doloremque
          impedit dolores nostrum nulla dignissimos facilis eum libero. Nulla
          accusamus cupiditate at maiores voluptas, quis recusandae non
          molestias quae est neque dolores ad ut debitis maxime nostrum ullam!
          Cumque non, et eos distinctio ut cum, iure nemo, aperiam esse quo
          autem at ipsum sapiente quis reprehenderit corporis. Quidem accusamus
          earum sequi illum provident adipisci, quod officia nisi, fuga
          asperiores quia iusto necessitatibus nostrum exercitationem, totam aut
          expedita? Magni, expedita! Fugit, cupiditate deserunt! Accusantium
          necessitatibus quibusdam voluptatibus. Omnis perferendis nisi esse
          reprehenderit voluptas quas.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
