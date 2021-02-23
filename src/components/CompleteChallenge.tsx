import styles from '../styles/components/CompleteChallenge.module.css';

export function CompleteChallenge() {
  return (
    <div className={styles.CompleteChallengeContainer}>
      <span>Desafio completos</span>
      <span>5</span>
    </div>
  );
}