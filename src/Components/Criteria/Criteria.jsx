import images from "../../images";

const Criteria = () => {
  return (
    <section className="flex flex-col items-center justify-between p-8 relative">
      <img src={images.judges} alt="Idea" className="w-[400px] mt-10 z-10" />
      <div className=" text-center z-10 pb-10">
        <h2 className="font-sans lg:text-3xl font-bold">
          Judging Criteria
          <br />
          <span className="font-sans lg:text-3xl text-primary font-bold">
            Key attributes
          </span>
        </h2>
        <br />
        <p className="font-serif text-sm font-normal">
          <span className="font-sans text-sm text-primary-light font-normal">
            Innovation and Creativity:
          </span>{" "}
          Evaluate the uniqueness and creativity of the solution. Consider
          whether it addresses a real-world problem in a novel way or introduces
          innovative features.
        </p>
        <p className="font-serif text-sm font-normal mt-2">
          <span className="font-sans text-sm text-primary-light font-normal">
            Functionality:
          </span>{" "}
          Evaluate the uniqueness and creativity of the Assess how well the
          solution works. Does it perform its intended functions effectively and
          without major issues? Judges would consider the completeness and
          robustness of the solution.
        </p>
        <p className="font-serif text-sm font-normal mt-2">
          <span className="font-sans text-sm text-primary-light font-normal">
            Impact and Relevance:{" "}
          </span>
          Determine the potential impact of the solution in the real world. Does
          it address a significant problem, and is it relevant to the target
          audience? Judges would assess the potential social, economic, or
          environmental benefits.
        </p>
        <p className="font-serif text-sm font-normal mt-2">
          <span className="font-sans text-sm text-primary-light font-normal">
            Technical Complexity:{" "}
          </span>
          Evaluate the technical sophistication of the solution. Judges would
          consider the complexity of the code, the use of advanced technologies
          or algorithms, and the scalability of the solution.
        </p>
        <p className="font-serif text-sm font-normal mt-2 mb-4">
          <span className="font-sans text-sm text-primary-light font-normal">
            Adherence to Hackathon Rules:{" "}
          </span>
          Judges will Ensure that the team adhered to the rules and guidelines
          of the hackathon, including deadlines, use of specific technologies or
          APIs, and any other competition-specific requirements.
        </p>

        <a className=" btn-color px-6 py-2 text-base rounded-md" href="#">
          Read More
        </a>
      </div>
      <img
        src={images.purpleLens1}
        alt="lens"
        className="absolute w-[400px] h-[400px] rounded-full blur-lg mix-blend-hard-light -left-20 top-24"
      />
      <img
        src={images.star4}
        alt="lens"
        className="absolute w-3 top-5 left-36"
      />
      <img
        src={images.star1}
        alt="lens"
        className="absolute w-3 top-52 left-52"
      />
      <img
        src={images.purpleLens2}
        alt="lens"
        className="absolute w-[300px] h-[300px] rounded-full blur-lg mix-blend-hard-light right-0 -bottom-16"
      />
      <img
        src={images.star}
        alt="lens"
        className="absolute w-3 right-10 bottom-24"
      />
    </section>
  );
};
export default Criteria;
