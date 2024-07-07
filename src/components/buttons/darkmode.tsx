"use client";
import React, { useContext } from 'react';
import styles from '@/components/buttons/toggle.module.css';
import { ThemeContext } from "@/../context/theme-context";

const DarkModeToggle: React.FC = () => {
  const { toggleTheme, mode } = useContext(ThemeContext);

  const handleToggleClick = () => {
    toggleTheme();
  };

  return (
    <div className={styles.container} onClick={handleToggleClick}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={{ left: mode === 'light' ? '2px' : 'auto', right: mode === 'dark' ? '2px' : 'auto' }}
      />
    </div>
  );
};

export default DarkModeToggle;
