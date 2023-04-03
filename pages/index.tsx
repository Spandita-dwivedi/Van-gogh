import Head from 'next/head'
import Maincomp from '../components/Main/Main'
import Navcomp from '../components/Nav/Nav'
import Searchcomp from '../components/Search/Search'
import Bestsellercomp from '../components/Bestseller/Bestseller'
import styles from '../styles/Home.module.scss'
import Advertisecomp from '../components/Advertise/Advertise'



export default function Home() {
  return (
    <>
    <Head>
      <title>Van-Gogh</title>
    </Head>
    
    
    <Maincomp />
    <Bestsellercomp/>
    <Advertisecomp/>
    
    
    
    
    
    
    </>
  )
}
