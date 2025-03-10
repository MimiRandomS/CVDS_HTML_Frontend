import React from "react";
import styles from "./MainLayout.module.css";

type Props = {
  readonly leftContent: React.ReactNode;
  readonly rightContent: React.ReactNode;
};

function MainLayout({ leftContent, rightContent }: Props) {
  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>{leftContent}</div>
      <div className={styles.main}>{rightContent}</div>
    </div>
  );
}

export default MainLayout;
