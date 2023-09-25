import images from "../../images";

const Rules = () => {
  return (
    <section className=" mx-auto w-full flex flex-col-reverse items-center justify-between relative lg:flex-row lg:justify-around pb-5 lg:px-16 border-b border-b-[#2C2440]">
      <div className="text-center px-8 my-auto  lg:w-1/2  lg:text-left z-10">
        <h2 className="font-sans lg:text-3xl font-bold z-10">
          Rules and
          <br />
          <span className="font-sans lg:text-3xl text-primary font-bold">
            Guidelines
          </span>
        </h2>
        <p className="font-serif text-sm font-normal leading-loose mt-2 z-20">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
      <div className="w-full lg:w-1/2 z-10 relative">
        <img
          src={images.guidelines}
          alt="woman sitting down"
          className="w-[664px] lg:mx-auto"
        />
        <img
          src={images.star}
          alt="star"
          className="absolute top-44 w-3 left-5"
        />
      </div>
      <img
        src={images.purpleLens1}
        alt="purple lens"
        className="absolute  w-[350px] h-[350px]  mix-blend-hard-light blur-lg rounded-full -top-12 -left-20 lg:w-[500px] lg:h-[500px]"
      />
      <img
        src={images.purpleLens2}
        alt="purple lens"
        className="absolute w-[250px] h-[250px]  blur-xl mix-blend-hard-light bottom-36 lg:bottom-0 right-4 lg:w-[500px] lg:h-[500px]"
      />
      <img
        src={images.star}
        alt="star"
        className="absolute bottom-60 w-3 right-5"
      />
      <img
        src={images.star}
        alt="star"
        className="absolute bottom-4 w-3 left-20"
      />
    </section>
  );
};
export default Rules;
