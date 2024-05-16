

const Header = () => {
  return (
    <div>
      <header className="text-black body-font font-San Francisco ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center h-[150px]">
    <a className="flex title-font font-medium items-center text-[#e55809] mb-4 md:mb-0 ">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-[#FD7E14] rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-4xl font-medium">Cyrus</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center  text-base text-[20px] justify-center">
      <a href="../../pages/Page.tsx" className="mr-10 hover:text-[#e55809] " >About us</a>
      <a className="mr-10 hover:text-[#e55809]">What we do</a>
      <a className="mr-10 hover:text-[#e55809]">Portfolio</a>
      <a className="mr-10 hover:text-[#e55809]">Blogs</a>
      <a className="mr-10 hover:text-[#e55809]">Contact us</a>
    </nav>
    <button className="bg-transparent hover:bg-[#FD7E14] text-[#e55809] font-semibold hover:text-white py-3 px-4 border border-[#FD7E14] hover:border-transparent rounded">
 Start A Project
</button>
  </div>
</header>
</div>
 
  )
}

export default Header