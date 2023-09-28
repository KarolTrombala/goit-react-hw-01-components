import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

// export const FriendListItem = ({ avatar, name, isOnline }) => {
//   const status = () => {
//     if (isOnline) {
//       return 'green';
//     } else {
//       return 'red';
//     }
//   };

//   return (
//     <li key="id" className={css.item}>
//       <span className={css.status} style={{ backgroundColor: status() }}></span>
//       <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
//       <p className={css.name}>{name}</p>
//     </li>
//   );
// };

export const FriendListItem = ({ friend }) => {
  return (
    <li className={css.item}>
      <span
        className={friend.isOnline ? css.statusOnline : css.statusOffline}
      ></span>
      <img
        className={css.avatar}
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className={css.name}>{friend.name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
