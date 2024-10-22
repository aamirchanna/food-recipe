import Button from './Button'; // Adjust the import path as necessary

export const Newslater = () => {
  return (
    <div className="flex justify-center items-center py-6">
      <div className="container flex flex-col m-6 p-6 bg-pink-100 rounded-lg shadow-md">
        <h2 className="text-3xl my-3 text-center">Let`s Stay in Touch</h2>
        <p className="text-center mb-4">
          Join our newsletter so that we can reach out to you with <span>our news and offers</span>.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <input 
            type="text" 
            placeholder="Enter your email" 
            className="rounded-full p-3 w-full sm:w-80 my-2 sm:my-0 sm:mr-2"
          />
          <Button text="Subscribe" color="" />
        </div>
      </div>
    </div>
  );
};
