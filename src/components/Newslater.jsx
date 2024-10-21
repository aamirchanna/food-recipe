import Button from './Button'; // Adjust the import path as necessary

export const Newslater = () => {
  return (
    <div>
      <div className="container flex flex-col m-6 p-3 bg-pink-100 justify-center  items-center">
        <div className="text-3xl my-3">
          Let`s Stay in Touch
        </div>
        <div>
          Join our newsletter so that we can reach out to you with <span>our news and offers</span>
        </div>
        <div className="flex my-3">
          <input type="text" placeholder="Enter your email" className="rounded-full p-3 w-[600px] my-2" />
          <Button text="Subscribe" color="" />
        </div>
      </div>
    </div>
  );
};
