import Head from 'next/head'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Shopping List</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

        <div className={styles.header}>
          <div className={styles.textHeader}>Empresa</div>
          <div className={styles.textHeader}>Lista</div>
        </div>

        <div className={styles.page}>
          <div className={styles.menu}>
            <Link className={styles.itemMenu} href="/">Cadastrar</Link>
            <Link className={styles.itemMenu} href="/">Listar</Link>
            <Link className={styles.itemMenu} href="/">Imprimir</Link>
            <Link className={styles.itemMenu} href="/">Comprar</Link>
          </div>

          <div className={styles.content}>
            <div className={styles.blockContent}>
              <div className={styles.titleBlockContent}>Baixa Urgência</div>

            </div>
            <div className={styles.blockContent}>
              <div className={styles.titleBlockContent}>Média Urgência</div>
            </div>
            <div className={styles.blockContent}>
              <div className={styles.titleBlockContent}>Alta Urgência</div>
            </div>
          </div>
        </div>

        <div className={styles.footer}>CopyRight :: 2023</div>
      </main>
    </>
  )
}
