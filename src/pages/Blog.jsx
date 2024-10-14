import { Link } from "react-router-dom"
const Blog = () => {
  return (
    <div>
       <section>
       <div className=" container flex mx-6 justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">Our Daily Blog`s</h2>
            <Link to="./blog" className="text-red-500 hover:text-red-600">View more</Link>
          </div>
        <div className="flex justify-center items-center ">
        
          <div className="flex justify-center items-center border container w-[700px] p-3  mx-6">
          <img
    src="https://th.bing.com/th/id/OIP.EeK7rle-ElV5a6zrnrvq_QHaE7?rs=1&pid=ImgDetMain"
    alt=""
    height={280}
    width={300}
    className="object-cover p-3"
  />
        <div >
        <h1 className="bold text-3xl p-2">
          This is Dummy Title
        </h1>
        <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut minima nemo asperiores saepe, est quam neque impedit voluptas alias fuga obcaecati esse fugit?</p>
        
        </div>
      </div>
      <div className="flex border container w-[700px] p-3  mx-6">
        <img src="https://th.bing.com/th/id/OIP.EeK7rle-ElV5a6zrnrvq_QHaE7?rs=1&pid=ImgDetMain" alt="" height={280} width={300} className="object-contain p-3"/>
        <div >
        <h1 className="bold text-3xl p-2">
           This is Dummy Title
        </h1>
        <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut minima nemo asperiores saepe, est quam neque impedit voluptas alias fuga obcaecati esse fugit?</p>
        
        </div>
      </div>
      
        </div>
          
      
      
      </section>
    </div>
  )
}

export default Blog