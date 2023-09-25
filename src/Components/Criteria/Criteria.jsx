import images from "../../images";

const Criteria = () => {
  return (
    <section className="flex flex-col items-center justify-between p-8 relative lg:flex-row lg:px-16 lg:justify-center gap-14 border-b border-b-[#2C2440]">
      <div className="lg:w-1/2 relative">
        <div className="invisible lg:visible w-[100px] h-[100px] btn-color rounded-full absolute top-5 left-[68px]" />
        <img
          src={images.judges}
          alt="Idea"
          className="relative w-[400px] lg:w-[710px] mt-10 z-50"
        />
      </div>
      <div className=" text-center z-10 pb-10 lg:w-1/2 lg:text-left">
        <h2 className="font-sans lg:text-3xl font-bold">
          Judging Criteria
          <br />
          <span className="font-sans lg:text-3xl text-primary font-bold">
            Key attributes
          </span>
        </h2>
        <br />
        <p className="font-serif text-sm font-normal">
          <span className="font-sans text-sm text-secondary font-normal lg:font-bold lg:text-base">
            Innovation and Creativity:
          </span>{" "}
          Evaluate the uniqueness and creativity of the solution. Consider
          whether it addresses a real-world problem in a novel way or introduces
          innovative features.
        </p>
        <p className="font-serif text-sm font-normal mt-2">
          <span className="font-sans text-sm text-secondary font-normal lg:font-bold lg:text-base">
            Functionality:
          </span>{" "}
          Evaluate the uniqueness and creativity of the Assess how well the
          solution works. Does it perform its intended functions effectively and
          without major issues? Judges would consider the completeness and
          robustness of the solution.
        </p>
        <p className="font-serif text-sm font-normal mt-2">
          <span className="font-sans text-sm text-secondary font-normal lg:font-bold lg:text-base">
            Impact and Relevance:{" "}
          </span>
          Determine the potential impact of the solution in the real world. Does
          it address a significant problem, and is it relevant to the target
          audience? Judges would assess the potential social, economic, or
          environmental benefits.
        </p>
        <p className="font-serif text-sm font-normal mt-2">
          <span className="font-sans text-sm text-secondary font-normal lg:font-bold lg:text-base">
            Technical Complexity:{" "}
          </span>
          Evaluate the technical sophistication of the solution. Judges would
          consider the complexity of the code, the use of advanced technologies
          or algorithms, and the scalability of the solution.
        </p>
        <p className="font-serif text-sm font-normal mt-2 mb-4">
          <span className="font-sans text-sm text-secondary font-normal lg:font-bold lg:text-base">
            Adherence to Hackathon Rules:{" "}
          </span>
          Judges will Ensure that the team adhered to the rules and guidelines
          of the hackathon, including deadlines, use of specific technologies or
          APIs, and any other competition-specific requirements.
        </p>

        <a
          className="mt-2 btn-color px-6 py-3 text-base z-10 rounded-md"
          href="#"
        >
          Read More
        </a>
      </div>
      <img
        src={images.purpleLens1}
        alt="lens"
        className="absolute w-[400px] lg:w-[500px] h-[400px] rounded-full blur-lg mix-blend-hard-light -left-20 top-24 lg:top-auto lg:bottom-0"
      />
      <img
        src={images.star4}
        alt="lens"
        className="absolute w-3 top-5 left-36 lg:top-10 lg:w-5"
      />
      <img
        src={images.star1}
        alt="lens"
        className="absolute w-3 top-auto left-96"
      />
      <img
        src={images.purpleLens2}
        alt="lens"
        className="absolute w-[300px] h-[300px] rounded-full blur-lg mix-blend-hard-light right-0 -bottom-16 lg:w-[500px] lg:h-[500px] lg:rounded-full  lg:-bottom-36"
      />
      <img
        src={images.star}
        alt="lens"
        className="absolute w-3 right-10 bottom-24 lg:right-auto"
      />
    </section>
  );
};
export default Criteria;
