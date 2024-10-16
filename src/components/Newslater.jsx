
export const Newslater = () => {
  return (
    <div>
        <div className="  container flex flex-col m-6 p-3 bg-pink-200 justify-center items-center">

        <div className="text-3xl m-3">
            Let`s Stay in Touch
        </div>
        <div className=""> 
            join OUr Newsletter so that we can react out to you with <span> our news and offer</span>
        </div>
        <div className="flex ">
            <input type="text" placeholder="Enter your email" className="rounded-full p-3 w-[600px] m-4 " />
            <button className=" text-white bg-red-500 rounded hover:bg-red-600">Subscribe</button>

        </div>
        </div>
    </div>
  )
}
