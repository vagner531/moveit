import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/vagner531.png" alt="Vagner Santos"/>
      <div>
        <strong>Vagner Santos</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Leval 1
          </p>
      </div>
    </div>
  );
}