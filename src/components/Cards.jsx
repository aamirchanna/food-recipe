
const Cards = () => {
  return (
    <div>
        <div className="grid grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 

 src="https://s1.1zoom.me/big0/588/The_second_dishes_Shrimp_Tomatoes_White_background_517162_1280x853.jpg"
alt={`Trending recipe ${item}`} 
                  width={300} 
                  height={200} 
                  className="w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold mb-2">Delicious Recipe Title</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
<p>***</p>                      <span className="text-sm text-gray-600">4.5</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img 
                        src="https://th.bing.com/th/id/OIP.x7X2oAehk5M9IvGwO_K0PgHaHa?rs=1&pid=ImgDetMain" 
                        alt="User avatar" 
                        width={24} 
                        height={24} 
                        className="rounded-full"
                      />
                      <span className="text-sm text-gray-600">John Doe</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
    </div>
  )
}

export default Cards