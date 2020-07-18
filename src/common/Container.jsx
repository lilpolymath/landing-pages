import * as React from 'react'

import styles from './style.module.css'

export default function Container({ children, as = 'div', ...props }) {
  const Component = as;
  const css = {
    backgroundImage: `url(${props.backgroundImage})`,
    backgroundColor: props.bgColor,
    color: props.color
  }
  return (
    <Component className={styles.container} {...props}
      style={css}>
      <div class={styles.wrapper}>
        {children}
      </div>
    </Component>
  )
}