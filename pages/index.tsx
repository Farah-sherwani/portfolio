import styles from '@/styles/Home.module.css'
import Image from 'next/image'
//import faviconImg from '../public/favicon.ico'
import { useRouter } from 'next/router'
import Head from 'next/head'
//import { useSelector} from 'react-redux'
//import { useState, useEffect} from 'react'
import Link from 'next/link'
import {Header} from '@/components'
import { Footer } from '@/components'
import { Navbar } from '@/components'
//import { User} from '../utils/interfaces'


const Home = () => {
  // const user: User  = useSelector((state: any) => state?.authReduceruser)
  //   const router = useRouter()
  // useEffect(() => {
  //   if (!user?.id) {
  //     router.push('/login')
  //   }
  // },[])
  return (
    <>
      <Head>
       <title>Next-js | Home</title>
    </Head>

      <main>
      <Navbar />
        <div className='container'> <Header /></div>
      
      
{/* <h2>Hello{user?.fullName}</h2> */}
      
    <div className="container">
  <div className="row">
    <div className="col-sm p-2">
    <div className="card p-4" >
    <p className="card-text">
    <Image src='/iot.jpg ' className="img-thumbnail" alt ="IOT" title='Internet Of Things' width={350} height={200}/>

There are many variations of passages of Lorem Ipsum available, but the majority have suffered 
alteration in some form, by injected humour, or randomised words which don't look even slightly 
believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't 
anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet
 tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. 
 It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,
  to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free 
  from repetition, injected humour, or non-characteristic words etc.</p>
      
      <Link href="/product/details/p01" className="btn btn-primary">Details</Link>

</div>
    </div>
    <div className="col-sm p-2 ">
    <div className="card p-4" >
    <p className="card-text">
    <Image src='/cloud.jpg ' className="img-thumbnail" alt ="cnc" title='Cloud Computing' width={350} height={200}/>

    It is a long established fact that a reader will be distracted by the readable content
     of a page when looking at its layout. The point of using Lorem Ipsum is that it has a 
     more-or-less normal distribution of letters, as opposed to using 'Content here, 
     content here', making it look like readable English. Many desktop publishing packages 
     and web page editors now use Lorem Ipsum as their default model text, and a search for 
     'lorem ipsum' will uncover many web sites still in their infancy. Various versions 
     have evolved over the years, sometimes by accident, sometimes on purpose (injected 
     humour and the like).</p>
     <Link href="/product/details/p02" className="btn btn-primary">Details</Link>

    </div></div>
    <div className="col-sm p-2 ">
    <div className="card p-4" >
    <p className="card-text">
    <Image src='/ai.jpg' className="img-thumbnail" alt ="AI" title='Artificial Intellegence' width={350} height={200}/>

    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
 release of Letraset sheets containing Lorem Ipsum passages, and
 more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
 </p>
    
 <Link href="/product/details/p03" className="btn btn-primary">Details</Link>
    
  </div>
</div>
  
        </div></div>
        
       
       
        <Footer/>
        </main>
    </>
  )
}
 export default Home

 