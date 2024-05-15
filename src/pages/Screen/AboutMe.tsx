import Image2 from "../../assets/Image2.jpg"

const AboutMe = () => {
  return (
    <div>
              <section className="text-black body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-xl lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src={Image2}/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">Our Founder</h1>
      <p className="mb-8 leading-relaxed text-[20px]">Josephine Oluwafemi is not just a name; it is a symbol of unwavering dedication, visionary leadership, and a relentless pursuit of social change. With a burning passion to bridge the gaps that hinder progress in Africa, Ona Newton has embarked on a remarkable journey, igniting hope and creating employment opportunities for underrepresented communities.

Africa, a land of immense potential, is brimming with untapped talent waiting to be unleashed. Ona Newton saw this untapped potential and recognized the transformative power of digital consultancy.</p>
<button className="bg-[#e55809]  text-white font-semibold  py-3 px-5 border  hover:border-transparent rounded">
 Read More
</button>
  </div>
  </div>
</section>
    </div>
  )
}

export default AboutMe