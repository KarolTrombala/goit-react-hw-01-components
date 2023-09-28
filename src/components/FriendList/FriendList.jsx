import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem/FriendListItem';
import './FriendList.css';

export const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">{friends.map(friend => FriendListItem(friend))}</ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number})
  )
};