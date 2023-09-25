import {Profile} from './Profile/Profile';
import {Statistics} from './Statistics/Statistics';
import {FriendList} from './FriendList/FriendList';

import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';



export const App = () => {
  const { username, tag, location, avatar, stats } = user;

  
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
     <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
        className="profile"
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
    </div>
  );
};