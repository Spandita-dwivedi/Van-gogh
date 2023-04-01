import Head from 'next/head'
import Maincomp from '../components/Main/Main'
import Navbarcomp from '../components/Navbar/Navbar'
import styles from '../styles/Home.module.scss'



export default function Home() {
  return (
    <>
    <Head>
      <title>Van-Gogh</title>
    </Head>
    <Navbarcomp />
    <Maincomp />
    
    </>
  )
}
