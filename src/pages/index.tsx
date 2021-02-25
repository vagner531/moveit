import Head from 'next/head';

import { Profile } from "../components/Perfil";
import { ExperienceBar } from '../components/ExperienceBar';
import styles from '../styles/pages/Home.module.css';
import { CompleteChallenge } from "../components/CompleteChallenge";
import { Countdown } from "../components/Countdown";

import { ChallengeBox } from "../components/ChallengeBox";


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
      <div>
        <ChallengeBox />
      </div>
    </section>
  </div>
  )
}