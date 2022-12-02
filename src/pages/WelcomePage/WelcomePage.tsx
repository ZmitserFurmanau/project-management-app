import React, { FC } from 'react';
import todo from '../../assets/todo.svg';

import './WelcomePage.module.scss';

const WelcomePage: FC = () => {
  return (
    <main className="main">
      <div className="about">
        <h1 className="title">Удобное приложение для списка дел</h1>
        <h3 className="text">
          С помощью данной программы вы сможете планировать свои дела, составлять списки покупок и многое другое. В
          приложении есть возможность добавлять свои заметки и создавать свои списки, например, список покупок или
          список дел на день.
        </h3>
        <a className="sign" href="/">
          <span>Начать</span>
        </a>
      </div>
      <div className="image-todo">
        <img src={todo} alt="todo" />
      </div>
    </main>
  );
};

export default WelcomePage;
