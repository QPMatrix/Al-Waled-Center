import { Button } from "../ui/button";

const GetInTouch = () => {
  return (
    <div
      className="h-screen bg-[#f2f2f3] p-4 md:p-0 bg-cover max-h-[400px] mt-10 bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/img/GetInTouch.svg')" }}
    >
      <div className="flex flex-col items-center justify-center mt-10 text-center md:text-left">
        <h1 className="text-lg md:text-2xl lg:text-3xl">
          Over 2,000 students have learned to ride with us.
        </h1>
        <p className="mt-2 text-sm md:text-base lg:text-lg">
          Trust us with your children's horse riding lessons and enjoy peace of
          mind at work
        </p>
        <Button className="mt-10">Get in Touch</Button>
      </div>
    </div>
  );
};

export default GetInTouch;
