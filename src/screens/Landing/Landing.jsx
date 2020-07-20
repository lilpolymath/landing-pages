import React from 'react';
import { render } from 'react-dom';

import styles from './style.module.css';
import data from './data';

export default function App() {

  return (
    <div
      className={styles.container}
      onClick={() => {
        console.log('clicked');
      }}
    >
      {console.log(data)}
      {data.map(item => {
        console.log(item);
        return (
          <div
            className={styles.item}
            key={item.key}
            style={{ height: 300, background: item.css }}
          />
        );
      })}
    </div>
  );
}

render(<App />, document.getElementById('root'));
