import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'


const Navbar = () => {
    return (
      
         <div className='container'>
         <nav className="nav" >
    
         <Link className="nav-link" href="/">Home</Link>

  <Link className="nav-link" href="/about">About</Link>
</nav>
</div>
  



        

        
       
      
    )
  }
   export default Navbar