import React from 'react';
import ReactDOM from 'react-dom';

// https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-256.png

function formatName(user) {
    return `${user.firstName} ${user.lastName}`;
}

function getGreeting(user) {
    if (user) {
      return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }

const user = {
    firstName: 'Paulo',
    lastName: 'Guzmán',
    avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-256.png'
};
const elemet = (
    <div tabIndex="0">
        {getGreeting(user)}
        <img src={user.avatar} alt="User avatar"></img>
    </div>
);
const container = document.getElementById('root');

ReactDOM.render(elemet, container);
