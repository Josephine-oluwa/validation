import Image1 from "../../assets/Image1.jpg"

const About = () => {
  return (
    <div>
      <section className="text-gray-600 body-font mt-5">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
    <div className="lg:max-w-3xl lg:max-h-2xl  lg:w-full md:w-1/2 w-[700px] mb-10 md:mb-0 ">
      <img className="object-cover object-center rounded " alt="hero" src={Image1}/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4  text-[#e55809] font-bold">About Our Agency</h1>
      <p className="mb-8 leading-relaxed sm:text-2xl text-[25px] ">
      Welcome to Cyrus, your trusted B2B partner in driving business growth. Our mission is to empower companies to achieve their ultimate goal: sales. We do this by harnessing the power of lead generation and website development to boost business visibility. 
At Cyrus, we understand that every business is unique, with its own distinct challenges and objectives. That's why we take a tailored approach to our services, working closely with our clients to understand their specific needs and goals. Our team of experts uses cutting-edge strategies and technologies to craft innovative solutions that drive real results.

      </p>
     
     <div className="flex">
     <button className="bg-[#e55809]  text-white font-semibold hover:text-black py-3 px-4 border  hover:border-transparent rounded">
 What We Do
</button>
     <button className="bg-[#ffe3cb]  text-[#e55809] font-semibold ml-5 hover:text-black py-3 px-4 border  hover:border-transparent rounded">
Sign Up Now!
</button>
     </div>
     
    </div>
  </div>
</section>
    </div>
  )
}

export default About