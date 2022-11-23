import React, { FC } from 'react';
import styles from './WelcomePage.module.scss';
import todo from '~/assets/todo.svg';
import { Button } from '~/components/Button';

const WelcomePage: FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.about}>
        <h1 className={styles.title}>Удобное приложение для списка дел</h1>
        <h3 className={styles.text}>
          С помощью данной программы вы сможете планировать свои дела, составлять списки покупок и многое другое. В
          приложении есть возможность добавлять свои заметки и создавать свои списки, например, список покупок или
          список дел на день.
        </h3>
        <Button name="Get started" signup="/signup" />
      </div>
      <div className={styles.imageTodo}>
        <img src={todo} alt="todo" />
      </div>
    </main>
  );
};

export default WelcomePage;
