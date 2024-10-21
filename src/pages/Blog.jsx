// import Link from "next/link"

import { Link } from "react-router-dom"

 export default function Blog() {
   const blogPosts = [
     {
       id: 1,
       title: "Getting Started with React",
       excerpt: "Learn the basics of React and start building your first component-based UI.",
       imageUrl: "https://th.bing.com/th/id/OIP.-4HJ5xiB3ctFO2uIh_f5wAHaE0?rs=1&pid=ImgDetMain?height=200&width=300",
       link: "#",
     },
     {
       id: 2,
       title: "Advanced CSS Techniques",
       excerpt: "Dive deep into CSS and discover advanced styling techniques for modern web design.",
       imageUrl: "https://th.bing.com/th/id/OIP.-4HJ5xiB3ctFO2uIh_f5wAHaE0?rs=1&pid=ImgDetMain?height=200&width=300",
       link: "#",
     },
     {
       id: 3,
       title: "The Future of JavaScript",
       excerpt: "Explore upcoming features and trends in JavaScript that will shape web development.",
       imageUrl: "https://th.bing.com/th/id/OIP.-4HJ5xiB3ctFO2uIh_f5wAHaE0?rs=1&pid=ImgDetMain?height=200&width=300",
       link: "#",
     },
   
   ]
   return (
     <div className="container mx-auto px-4 py-8">
       <h2 className="text-2xl font-semi-bold mb-6 ">Blog Posts</h2>
      <a href="./AddBlog">
        <button> Add blog</button>
        </a> 
      

    <div className=" flex w-full  ">
    <div className="p-0 ">
               <img
                 src='https://th.bing.com/th/id/OIP.-4HJ5xiB3ctFO2uIh_f5wAHaE0?rs=1&pid=ImgDetMain'
                 alt='sa'
                  width={500}
                  height={400}
                 className="w-full object-cover rounded-t-lg"
               />
             </div>
             <div className="w-[500px] m-3 p-4">
               <div></div>
               <div className="text-2xl mb-2 font-serif">The Future of JavaScript</div>
               <p className="text-muted-foreground text-gray-700 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cumque inventore nemo eum consequatur id repellendus quos delectus nostrum corrupti. Consequuntur harum itaque quam! Ipsam magni laudantium earum aperiam cumque libero a ipsa molestiae.</p>
               <button className="text-red-600">read more</button>
             </div>

    </div>

       <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {blogPosts.map((blogPosts) => (
           <div key={blogPosts.id} className="flex border rounded-lg shadow-lg flex-col">
             <div className="p-0 ">
               <img
                 src={blogPosts.imageUrl}
                 alt={blogPosts.title}
                 width={300}
                 height={200}
                 className="w-full h-48 object-cover rounded-t-lg"
               />
             </div>
             <div className="flex-grow p-4">
               <div></div>
               <div className="text-2xl mb-2 font-serif">{blogPosts.title}</div>
               <p className="text-muted-foreground text-gray-700 ">{blogPosts.excerpt}</p>
             </div>
             <div className="p-4">
               <button  className="text-red-600">
                 <Link href={blogPosts.link}>Read More</Link>
               </button>
             </div>
           </div>
         ))}
       </div>
     </div>
   )
 }