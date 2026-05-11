import SectionHeader from "./SectionTitle";
import profileImg from "../assets/images/hanna.webp";

export default function About() {
  return (
    <section id="about" className="mb-20 pr-8 scroll-mt-14 w-full min-w-xs lg:pl-22">
      <div className="bg-black p-4 min-w-xs max-w-2xl lg:max-w-4xl">
        <SectionHeader title="About" />
        
          
        <div className="flex flex-wrap justify-center items-center lg:items-start gap-6 p-4 w-fit">

          <p className="font-bold p-2 bg-white text-black text-xl md:max-w-2xl lg:max-w-3xl">
              "I'm{" "}
              <span className="bg-black text-white px-1 text-nowrap">
                looking for a LIA
              </span>{" "}
              placement in web development starting in November, based in{" "}
              <span className="bg-black text-white px-1">Gothenburg.</span>
          </p>

          <img
            src={profileImg}
            alt="Hanna Johansson"
            className="aspect-3/4 object-scale-down w-full max-w-sm"
          />
          <article className="flex flex-col gap-4 text-white w-full px-4 sm:text-center md:max-w-xl lg:text-left lg:max-w-sm lg:gap-8">
            <p>
              I'm Hanna, a{" "}
              <span className="font-bold text-lg">web development student</span>{" "}
              at <span className="font-bold text-lg">Yrgo</span> in Gothenburg,
              currently finishing my first year of a two-year program.
            </p>
            <p>
              I've always been drawn to how visual decisions shape the way
              people experience things. Why the same thing can feel completely
              different to different people, and what it takes to deliberately
              create a specific feeling.
            </p>
            <p className="font-bold text-lg">
              I enjoy when that meets the technical side, writing code that
              produces something that feels considered.
            </p>
            <p className="pb-6">
              A lot of what drives me is{" "}
              <span className="font-bold text-lg">
                understanding how and why something works,
              </span>{" "}
              and exploring different ways to make it work."
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
