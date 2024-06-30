import PropTypes from 'prop-types';

export const ProfileCard = ({image, title, userName}) => {
  return (
    <div>
      <img src={image} alt='pda logo'/>
    <div>My name is {title}</div>
    <div>My user is {userName}</div>
    </div>
  )
}
ProfileCard.propTypes = {
    title: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    image:PropTypes.string,
  };
