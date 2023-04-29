//import styles from '@/styles/Home.module.css'
//const inter = Inter({ subsets: ['latin'] })

import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import {Header , Navbar ,Footer} from '../components'

// import {useRouter} from 'next/router';

import Link from 'next/link'

//import Footer from '@/components/Footer';
      const Blog = () => {
            return (
                  <>
<Head>
       <title>Next-js | BLOG Page</title>
     
      </Head>

                  < Header />
<Navbar/>
<div className={styles.card}>
      <h1>Hello from Blog</h1>
      <Link href="/">Home</Link>
      <ul><li>
      <Link href="/blog/product/nest">Blog</Link>
      </li>
      </ul>
      </div>
      <Footer/>
                  </>
            )
      }

   


 export default Blog