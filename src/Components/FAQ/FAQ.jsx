import images from "../../images";

const FrequntlyAskedQuestions = () => (
  <section className="flex flex-col-reverse lg:flex-row-reverse p-8 lg:p-16 items-center justify-between border-b border-b-[#2c2440] gap-5">
    <div className="relative mt-16">
      <p className="font-tommy absolute left-14 text-[40px] font-medium text-primary -top-2 lg:text-[96px]">
        ?
      </p>
      <p className="font-tommy absolute -top-5 left-24 text-[64px] font-medium text-primary lg:text-[128px] lg:-top-10 lg:left-48">
        ?
      </p>
      <p className="font-tommy absolute right-24 text-[40px] font-medium text-primary -top-2 lg:text-[96px] lg:right-52">
        ?
      </p>
      <img src={images.asked} className="w-[400px]  lg:w-[741px]" alt="faq" />
      <img
        src={images.star}
        alt="star"
        className="w-3 absolute bottom-0 right-16 lg:right-40"
      />
      <img
        src={images.star}
        alt="star"
        className="w-3 absolute bottom-1/2 left-20"
      />
      <img
        src={images.star3}
        alt="star"
        className="w-3 absolute top-0 left-72"
      />
      <img src={images.star1} alt="star" className="w-3 absolute bottom-32" />
      <img
        src={images.star3}
        alt="star"
        className="w-3 absolute top-20 left-16 lg:left-32"
      />
    </div>
    <div className="text-center lg:text-left relative">
      <img
        src={images.star4}
        alt="star"
        className="invisible lg:visible w-6 absolute -left-8 -top-14"
      />
      <header>
        <h2 className="font-sans lg:text-3xl font-bold mb-4">
          Frequently Ask
          <br />
          <span className="font-sans lg:text-3xl text-primary font-bold">
            Question
          </span>
        </h2>
        <p className="font-serif text-sm font-normal leading-loose">
          We got answers to the questions that you might want to ask about
          getlinked Hackathon 1.0
        </p>
      </header>
      <ul className="text-left mt-5">
        <li className="font-serif text-xs font-normal py-3 leading-4 ">
          <div className="flex items-center gap-1 px-2 justify-between border-b border-b-spot-light pb-2">
            <span className=" block pr-3 ">
              Can I work on a project I started before the hackathon?
            </span>
            <span className="float-right font-serif text-xl font-bold text-primary cursor-pointer">
              +
            </span>
          </div>
          <div className="hidden p-2 w-full border-b border-b-spot-light">
            <p className="font-serif text-sm font-normal leading-5 pr-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
              hic.
            </p>
          </div>
        </li>
        <li className="font-serif text-xs font-normal py-3 leading-4">
          <div className="flex items-center gap-1 px-2 justify-between border-b border-b-spot-light pb-2">
            <span className=" block pr-3 ">
              What happens if I need help during the hackathon?
            </span>
            <span className="float-right font-serif text-xl font-bold text-primary cursor-pointer">
              +
            </span>
          </div>
          <div className="hidden p-2 w-full border-b border-b-spot-light">
            <p className="font-serif text-sm font-normal leading-5 pr-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
              hic.
            </p>
          </div>
        </li>
        <li className="font-serif text-xs font-normal py-3 leading-4 ">
          <div className="flex items-center gap-1 px-2 justify-between border-b border-b-spot-light pb-2">
            <span className=" block pr-3 ">
              What happens if I don't have an idea for a project?
            </span>
            <span className="float-right font-serif text-xl font-bold text-primary cursor-pointer">
              +
            </span>
          </div>
          <div className="hidden p-2 w-full border-b border-b-spot-light">
            <p className="font-serif text-sm font-normal leading-5 pr-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
              hic.
            </p>
          </div>
        </li>
        <li className="font-serif text-xs font-normal py-3 leading-4 ">
          <div className="flex items-center gap-1 px-2 justify-between border-b border-b-spot-light pb-2">
            <span className=" block pr-3 ">
              Can I join a team or do I have to come with one?
            </span>
            <span className="float-right font-serif text-xl font-bold text-primary cursor-pointer">
              +
            </span>
          </div>
          <div className="hidden p-2 w-full border-b border-b-spot-light">
            <p className="font-serif text-sm font-normal leading-5 pr-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
              hic.
            </p>
          </div>
        </li>
        <li className="font-serif text-xs font-normal py-3 leading-4 ">
          <div className="flex items-center gap-1 px-2 justify-between border-b border-b-spot-light pb-2">
            <span className=" block pr-3 ">
              What happens after the hackathon ends
            </span>
            <span className="float-right font-serif text-xl font-bold text-primary cursor-pointer">
              +
            </span>
          </div>
          <div className="hidden p-2 w-full border-b border-b-spot-light">
            <p className="font-serif text-sm font-normal leading-5 pr-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
              hic.
            </p>
          </div>
        </li>
        <li className="font-serif text-xs font-normal py-3 leading-4 ">
          <div className="flex items-center gap-1 px-2 justify-between border-b border-b-spot-light pb-2">
            <span className=" block pr-3 ">
              Can I work on a project I started before the hackathon?
            </span>
            <span className="float-right font-serif text-xl font-bold text-primary cursor-pointer">
              +
            </span>
          </div>
          <div className="hidden p-2 w-full border-b border-b-spot-light">
            <p className="font-serif text-sm font-normal leading-5 pr-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
              hic.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
);
export default FrequntlyAskedQuestions;
