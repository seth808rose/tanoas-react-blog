import React from "react";
import "./create.css";

const Create = () => {
  return (
    <div className='create'>
      <form className='createForm'>
        <div className='createFormGroup'>
          <label htmlFor='fileInput'>
            <i class='createIcon fas fa-folder-plus fa-2x'></i>
          </label>
          <input type='file' id='fileInput' style={{ display: "none" }} />
          <input
            type='text'
            placeholder='Title'
            className='createInput'
            autoFocus={true}
          />
        </div>
        <div className='createFormGroup'>
          <textarea
            rows={20}
            cols={55}
            type='text'
            placeholder='Share your thoughts!'
            className='createInput createText'
          ></textarea>
        </div>
        <button className='createButton'>Publish</button>
      </form>
    </div>
  );
};

export default Create;
