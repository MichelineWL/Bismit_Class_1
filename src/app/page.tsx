import Image from 'next/image'

export default function Home() {
  return (
    <main className = 'flex min-h-screen flex-col items-center justify-between bg-white'> 
    <nav className = 'flex w-full h-15 bg-white cursor-pointer text-slate-500 shadow-md'>
      <button className = 'ml-60 mr-10 my-7 hover:text-blue-600'> Homepage </button>
      <button className = 'mx-10 my-7  hover:text-blue-600'> Friends </button>
      <button className = 'mx-10 my-7  hover:text-blue-600'> Tasks </button>
      <button className = 'mx-10 my-7  hover:text-blue-600'> Events </button>
      <button className = 'mx-10 my-7  hover:text-blue-600'> About Fasilkom/UI </button>
      <p className = 'mx-20 my-7'> Welcome, micheline.wijaya </p>
    </nav>
    <div className = 'container min-h-screen bg-white h-20 w-20'>
      <img className = 'h-20 w-20' src='https://th.bing.com/th?id=OIP.GHGGLYe7gDfZUzF_tElxiQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=2.1&pid=3.1&rm=2'></img>
    </div>
  </main>
  )
}
