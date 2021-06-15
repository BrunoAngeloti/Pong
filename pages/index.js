import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Jogo } from '../components/Jogo'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Jogo feito para jogar contra IA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Jogo />
    </div>
  )
}
