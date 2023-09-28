import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendlist}>{friends.map(friend => FriendListItem(friend))}</ul>
  );
};

// export const FriendList = ({ friends }) => {
//   return (
//     <ul className={css.friendlist}>
//       {friends.map(item => (
//         <FriendListItem key={item.id} friend={item} />
//       ))}
//     </ul>
//   );
// };

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number})
  )
};