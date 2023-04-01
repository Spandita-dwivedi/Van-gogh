import Head from 'next/head'
import Maincomp from '../components/Main/Main'
import Navcomp from '../components/Nav/Nav'
import styles from '../styles/Home.module.scss'



export default function Home() {
  return (
    <>
    <Head>
      <title>Van-Gogh</title>
    </Head>
    <Navcomp />
    <Maincomp />
    
    </>
  )
}
