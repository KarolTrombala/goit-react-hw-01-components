import {Profile} from './Profile/Profile';


import user from './data/user.json';


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
    </div>
  );
};
