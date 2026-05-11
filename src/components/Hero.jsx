import heroImg from "../assets/heroW.svg";

export default function Hero() {
  return (
    <div className="min-h-svh flex flex-col justify-between gap-10 sm:gap-16 px-4 md:px-6 pt-14 pb-26">
      <img className="flex-1" src={heroImg} alt="hero image" />

      <div className="border-b pb-6">
        <h1 className="text-xl md:text-2xl lg:text-3xl text-white bg-black w-fit p-1">
          Web Developer Student
        </h1>
      </div>
    </div>
  );
}
