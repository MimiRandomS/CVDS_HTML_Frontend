import React from "react";
import styles from "./AuthLayout.module.css";

type Props = {
  readonly leftContent?: React.ReactNode;
  readonly rightContent?: React.ReactNode;
};

function AuthLayout({ leftContent, rightContent }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <div className={styles.left}>{leftContent}</div>
        <div className={styles.right}>{rightContent}</div>
      </div>
    </div>
  );
}

export default AuthLayout;
