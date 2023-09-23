import images from "../../images";

const About = () => {
  return (
    <section className="mx-auto  flex flex-col items-center p-5 justify-between">
      <div className="relative mb-8">
        <img src={images.idea} alt="Idea" className="w-[400px] mt-10" />
        <img src={images.arrow} alt="arrow" className="mx-auto" />
      </div>
      <div className="text-center">
        <h2 className="font-sans lg:text-3xl font-bold">
          Introduction to getlinked
          <br />
          <span className="font-sans lg:text-3xl text-primary font-bold">
            techHackathon1.0
          </span>
        </h2>
        <br />
        <p className="font-serif text-sm font-normal leading-loose px-8">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
    </section>
  );
};

export default About;
