import { Profile } from "../components/Perfil";
import { ExperienceBar } from '../components/ExperienceBar';
import styles from '../styles/pages/Home.module.css';
import { CompleteChallenge } from "../components/CompleteChallenge";

export default function Home() {
  return (
    <div className={styles.container}>
    <ExperienceBar />

    <section>
      <div>
        <Profile />
        <CompleteChallenge />
      </div>
      <div></div>
    </section>
  </div>
  )
}