


 const Button = ({text , color}) => {
  return (
    <div>
      <button className= {`bg-red-500 hover:bg-red-400 p-2 m-1 text-white rounded-lg ` }  >
        {text}
      </button>
    </div>
  )
}
export default Button