import PropTypes from 'prop-types';
import './FriendListItem.css';

export const FriendListItem = ({ avatar, name, isOnline}) => {
    const status = () => {
        if (isOnline) {
            return 'green';
        } else {
            return 'red';
        }
    };

return (
    <li key="id" class="item">
      <span class="status" style={{backgroundColor: status() }}></span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
   </li>
  );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  };