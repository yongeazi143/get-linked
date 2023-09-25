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
    <section className="flex flex-col items-center justify-center gap-5 p-5 lg:flex-row lg:mt-60 lg:justify-center">
      <img src={images.throphy} alt="throphy" />
      <div className="flex items-start justify-evenly  mt-28  w-full">
        <div
          className="w-[90px] h-[126px] rounded-lg relative border border-primary lg:w-[212px] lg:h-[296px]"
          style={{
            background: "rgba(212, 52, 254, 0.12)",
          }}
        >
          <img src={images.silver} alt="sliver" className="absolute -top-12" />
          <div className="text-center font text-xs pt-12 font-serif">
            <p>
              2nd <br /> Runner <br />
              <span className="text-primary font-bold">N300,000</span>
            </p>
          </div>
        </div>
        <div
          className="w-[90px] h-[126px] rounded-lg relative border border-primary lg:w-[212px] lg:h-[296px]"
          style={{
            background: "rgba(212, 52, 254, 0.12)",
          }}
        >
          <img
            src={images.gold}
            alt="sliver"
            className="absolute -top-16 scale-150"
          />
          <div className="text-center font text-xs pt-14 font-serif">
            <p>
              1st <br /> Runner <br />
              <span className="text-spot-light font-bold">N400,000</span>
            </p>
          </div>
        </div>
        <div
          className="w-[90px] h-[126px] rounded-lg relative border border-spot-light  lg:w-[212px] lg:h-[296px]"
          style={{
            background: "rgba(212, 52, 254, 0.12)",
          }}
        >
          <img src={images.bronze} alt="sliver" className="absolute -top-12" />
          <div className="text-center font text-xs pt-12 font-serif">
            <p>
              3rd <br /> Runner <br />
              <span className="text-spot-light font-bold">150,000</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
);
export default Rewards;
