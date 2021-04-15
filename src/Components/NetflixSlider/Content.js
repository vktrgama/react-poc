import React from 'react';
import IconCross from './../Icons/IconCross';
import './Content.scss';

//TODO: move to config file 
const IMAGE_URI = "https://www.themoviedb.org/t/p/w220_and_h330_face/";

const Content = ({ movie, onClose }) => (
  <div className="content">
    <div className="content__background">
      <div className="content__background__shadow" />
      <div
        className="content__background__image"
        style={{ 'background-image': `url(${IMAGE_URI + movie.poster_path})` }}
      />
    </div>
    <div className="content__area">
      <div className="content__area__container">
        <div className="content__title">{movie.original_title}</div>
        <div className="content__description">
          {movie.overview}
        </div>
      </div>
      <button className="content__close" onClick={onClose}>
        <IconCross />
      </button>
    </div>
  </div>
);

export default Content;
