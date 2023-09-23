import images from "../../images";

const Rules = () => {
  return (
    <section className="overflow-hidden mx-auto w-full flex flex-col-reverse items-center justify-between relative">
      <div className="text-center p-8 relative">
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
        <img
          src={images.purpleLens2}
          alt="purple lens"
          className="absolute w-[400px] h-[400px] rounded-full blur-xl mix-blend-hard-light -top-32 -right-20"
        />
        <img
          src={images.star}
          alt="star"
          className="absolute top-24 w-3 right-5"
        />
        <img
          src={images.star}
          alt="star"
          className="absolute bottom-4 w-3 left-20"
        />
      </div>
      <div className="w-full z-10 relative">
        <img src={images.guidelines} alt="woman sitting down" className="" />
        <img
          src={images.star}
          alt="star"
          className="absolute top-44 w-3 left-5"
        />
      </div>
      <img
        src={images.purpleLens1}
        alt="purple lens"
        className="absolute w-[350px] h-[350px] rounded-full blur-lg mix-blend-hard-light -top-12 -left-20"
      />
    </section>
  );
};
export default Rules;
