import { Profile } from "../components/Perfil";
import { ExperienceBar } from '../components/ExperienceBar';
import styles from '../styles/pages/Home.module.css';
import { CompleteChallenge } from "../components/CompleteChallenge";
import { Countdown } from "../components/Countdown";

import Head from 'next/head';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>


    <ExperienceBar />

    <section>
      <div>
        <Profile />
        <CompleteChallenge />
        <Countdown />
      </div>
      <div></div>
    </section>
  </div>
  )
}