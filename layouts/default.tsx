import React from 'react';
import styles from './default.module.scss'

const Layout: React.FunctionComponent<{}> = ({ children }) => {
  return <div className={styles.container}>
    <div>header</div>
    <div>{children}</div>
  </div>
};
export default Layout
