import images from "../../images";
const Rewards = () => (
  <>
    <header className="my-10 text-center font-sans text-xl leading-normal font-bold lg:w-1/2 lg:float-right lg:text-left lg:text-[32px]">
      <h1>
        Prices and <br /> <span className="text-primary">Rewards</span>
      </h1>
      <p className="font-serif font-normal text-xs leading-5 w-72 mx-auto mt-3 lg:mx-0 lg:text-base">
        Highlight of the prizes or rewards for winners and for participants.
      </p>
    </header>
    <section className="relative flex flex-col items-center justify-center gap-2   lg:flex-row lg:mt-60 lg:justify-center lg:px-2">
      <img
        src={images.throphy}
        alt="throphy"
        className="z-10 w-[300px] lg:w-[540px]"
      />
      <div className="flex items-start justify-center  mt-28  w-full  z-10 lg:self-end gap-2 lg:gap-5  lg:mr-10">
        <div
          className="w-[90px] h-[126px] rounded-lg relative border border-primary lg:w-[212px] lg:h-[296px]"
          style={{
            background: "rgba(212, 52, 254, 0.12)",
          }}
        >
          <img
            src={images.silver}
            alt="sliver"
            className="absolute -top-12 lg:-top-20 lg:left-5"
          />
          <div className="text-center font-medium text-xs pt-12 font-serif lg:text-lg lg:pt-36">
            <p>
              2nd <br /> Runner <br />
              <span className="text-primary font-bold">N300,000</span>
            </p>
          </div>
        </div>
        <div
          className="w-[90px] h-[126px] rounded-lg relative border border-spot-light lg:w-[212px] lg:h-[296px] top-5"
          style={{
            background: "rgba(212, 52, 254, 0.12)",
          }}
        >
          <img
            src={images.gold}
            alt="sliver"
            className="absolute -top-16 scale-125 lg:-top-28
            "
          />
          <div className="text-center font text-xs pt-14 font-serif lg:text-lg lg:pt-40">
            <p>
              1st <br /> Runner <br />
              <span className="text-spot-light font-bold">N400,000</span>
            </p>
          </div>
        </div>
        <div
          className="w-[90px] h-[126px] rounded-lg relative border border-primary  lg:w-[212px] lg:h-[296px]"
          style={{
            background: "rgba(212, 52, 254, 0.12)",
          }}
        >
          <img
            src={images.bronze}
            alt="sliver"
            className="absolute -top-12 lg:-top-20 lg:left-5
            "
          />
          <div className="text-center font text-xs pt-12 font-serif lg:text-lg lg:pt-36">
            <p>
              3rd <br /> Runner <br />
              <span className="text-primary font-bold">150,000</span>
            </p>
          </div>
        </div>
      </div>
      <img
        src={images.purpleLens1}
        alt="lens"
        className="absolute -top-32 -left-20 w-[350px] h-[350px] rounded-full blur-lg mix-blend-hard-light"
      />
      <img
        src={images.purpleLens2}
        alt="lens"
        className="absolute bottom-0 right-0 w-[350px] h-[350px]  blur-lg mix-blend-hard-light"
      />
      <i className="bx bxs-star text-xs text-primary bx-burst absolute w-3 -top-44 left-10 "></i>
      <i className="bx bxs-star text-xs text-primary bx-spin absolute w-3 -top-32 right-24 "></i>
      <i className="bx bxs-star absolute  bottom-60 left-12 text-xs text-white bx-tada"></i>
      <i className="bx bxs-star absolute bottom-48 right-10 text-xs text-white bx-flashing"></i>
      {/* <img
        src={images.star}
        alt="lens"
        className="absolute w-3 right-10 bottom-24 lg:right-auto"
      /> */}
    </section>
  </>
);
export default Rewards;
