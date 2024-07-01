import PropTypes from "prop-types";

export const ProfileCard = ({ image, title, handle,description }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is 1by1"></figure>
        <img src={image} alt="pda logo" />
      </div>
      <div className="card-content">
        <div className="media-content"></div>
        <p className="title is-4">{title}</p>
        <p className="subtitle is-6">{handle}</p>
      </div>
      <div className="content">{description}</div>
    </div>
  );
};
ProfileCard.propTypes = {
  title: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
  image: PropTypes.string,
  description:PropTypes.string,
};
