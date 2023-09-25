const Timeline = () => (
  <>
    <header className="mx-auto text-base font-bold text-center my-16">
      <h1 className="font-sans text-xl">Timeline</h1>
      <p className="font-serif text-[16px] font-normal mt-3 w-80 leading-normal mx-auto">
        Here is the breakdown of the time we anticipate using for the upcoming
        event.
      </p>
    </header>
    <section className="font-serif text-base font-bold flex flex-col items-start justify-around w-full px-5 gap-5 md:items-center lg:hidden">
      <div className="w-full p-5 flex items-center justify-center gap-2 md:w-1/2">
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="w-[2px] h-28 bg-primary" />
          <p className="w-6 h-6 text-center bg-primary rounded-full">1</p>
        </div>
        <div className="flex flex-col items-start gap-1 justify-evenly flex-1">
          <p className="text-primary font-serif text-xs font-bold leading-normal">
            Hackathon Announcement
          </p>
          <p className="font-serif text-xs font-normal leading-5 pb-4">
            The getlinked tech hackathon 1.0 is formally announced to the
            general public and teams begin to get ready to register
          </p>
          <p className="font-bold font-serif text-xs leading-normal text-primary">
            November 18, 2023
          </p>
        </div>
      </div>
      <div className="w-full p-5 flex items-center justify-center gap-2  md:w-1/2">
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="w-[2px] h-28 bg-primary" />
          <p className="w-6 h-6 text-center bg-primary rounded-full">2</p>
        </div>
        <div className="flex flex-col gap-1 items-start justify-evenly flex-1">
          <p className="text-primary font-serif text-xs font-bold leading-normal">
            Teams Registration begins
          </p>
          <p className="font-serif text-xs font-normal leading-5 pb-4">
            Interested teams can now show their interest in the getlinked tech
            hackathon 1.0 2023 by proceeding to register
          </p>
          <p className="font-bold font-serif text-xs leading-normal text-primary">
            November 18, 2023
          </p>
        </div>
      </div>
      <div className="w-full p-5 flex items-center justify-center gap-2  md:w-1/2">
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="w-[2px] h-28 bg-primary" />
          <p className="w-6 h-6 text-center bg-primary rounded-full">3</p>
        </div>
        <div className="flex flex-col gap-1 items-start justify-evenly flex-1 min-h-[160px]">
          <p className="text-primary font-serif text-xs font-bold leading-normal">
            Teams Registration ends
          </p>
          <p className="font-serif text-xs font-normal leading-5 pb-4`">
            Interested Participants are no longer Allowed to register
          </p>
          <p className="font-bold font-serif text-xs leading-normal text-primary">
            November 18, 2023
          </p>
        </div>
      </div>
      <div className="w-full p-5 flex items-center justify-center gap-2 md:w-1/2">
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="w-[2px] h-32 bg-primary" />
          <p className="w-6 h-6 text-center bg-primary rounded-full">4</p>
        </div>
        <div className="flex flex-col gap-1 items-start justify-evenly flex-1">
          <p className="text-primary font-serif text-xs font-bold leading-normal">
            Announcement of the accepted teams and ideas
          </p>
          <p className="font-serif text-xs font-normal leading-5 pb-4">
            All teams whom idea has been accepted into getlinked tech hackathon
            1.0 2023 are formally announced
          </p>
          <p className="font-bold font-serif text-xs leading-normal text-primary">
            November 18, 2023
          </p>
        </div>
      </div>
      <div className="w-full p-5 flex items-center justify-center gap-2  md:w-1/2">
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="w-[2px] h-28 bg-primary" />
          <p className="w-6 h-6 text-center bg-primary rounded-full">5</p>
        </div>
        <div className="flex flex-col gap-1 items-start justify-evenly flex-1">
          <p className="text-primary font-serif text-xs font-bold leading-normal">
            Getlinked Hackathon 1.0 Offically Begins
          </p>
          <p className="font-serif text-xs font-normal leading-5 pb-4">
            Accepted teams can now proceed to build their ground breaking skill
            driven solutions
          </p>
          <p className="font-bold font-serif text-xs leading-normal text-primary">
            November 18, 2023
          </p>
        </div>
      </div>
      <div className="w-full p-5 flex items-center justify-center gap-2 md:w-1/2">
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="w-[2px] h-28 bg-primary" />
          <p className="w-6 h-6 text-center bg-primary rounded-full">6</p>
        </div>
        <div className="flex flex-col gap-1 items-start justify-evenly flex-1">
          <p className="text-primary font-serif text-xs font-bold leading-normal">
            Demo Day
          </p>
          <p className="font-serif text-xs font-normal leading-5 pb-4">
            Teams get the opportunity to pitch their projects to judges. The
            winner of the hackathon will also be announced on this day
          </p>
          <p className="font-bold font-serif text-xs leading-normal text-primary">
            November 18, 2023
          </p>
        </div>
      </div>
    </section>
    {/* desktop */}
    <section className="hidden w-full lg:flex flex-col items-center justify-start gap-5 ">
      <div className="flex justify-start items-end gap-10 w-[850px]">
        <div className="text-end flex-1">
          <p className="text-primary font-serif text-2xl font-bold leading-normal mb-2">
            Hackathon Announcement
          </p>
          <p className="font-serif text-xs font-normal leading-5 max-w-[23rem] p-1">
            The getlinked tech hackathon 1.0 is formally announced to the
            general public and teams begin to get ready to register
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="w-[3px] h-24 bg-primary" />
          <p className="w-8 h-8 text-center bg-primary rounded-full">1</p>
        </div>
        <p className="font-bold font-serif text-2xl leading-normal text-primary self-end flex-1 ">
          November 18, 2023
        </p>
      </div>
      {/* 2 */}
      <div className="flex justify-start items-end gap-10 w-[850px]">
        <p className="font-bold font-serif text-2xl leading-normal text-right text-primary self-end flex-1">
          November 18, 2023
        </p>
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="w-[3px] h-24 bg-primary" />
          <p className="w-8 h-8 text-center bg-primary rounded-full">2</p>
        </div>
        <div className="text-start flex-1">
          <p className="text-primary font-serif text-2xl font-bold leading-normal mb-2">
            Teams Registration begins
          </p>
          <p className="font-serif text-xs font-normal leading-5 max-w-[23rem] p-1">
            Interested teams can now show their interest in the getlinked tech
            hackathon 1.0 2023 by proceeding to register
          </p>
        </div>
      </div>
      {/* 3 */}
      <div className="flex justify-start items-end gap-10 w-[850px]">
        <div className="text-end flex-1">
          <p className="text-primary font-serif text-2xl font-bold leading-normal mb-2">
            Teams Registration ends
          </p>
          <p className="font-serif text-xs font-normal leading-5 max-w-[23rem] p-1">
            Interested Participants are no longer Allowed to register
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="w-[3px] h-24 bg-primary" />
          <p className="w-8 h-8 text-center bg-primary rounded-full">3</p>
        </div>
        <p className="font-bold font-serif text-2xl leading-normal text-primary self-end flex-1">
          November 18, 2023
        </p>
      </div>
      {/* 4 */}
      <div className="flex justify-start items-end gap-10 w-[850px]">
        <p className="font-bold font-serif text-2xl text-right leading-normal text-primary self-end flex-1">
          November 18, 2023
        </p>
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="w-[3px] h-24 bg-primary" />
          <p className="w-8 h-8 text-center bg-primary rounded-full">4</p>
        </div>
        <div className="text-start flex-1">
          <p className="text-primary font-serif text-2xl font-bold leading-normal mb-2 max-w-md">
            Announcement of the accepted teams and ideas
          </p>
          <p className="font-serif text-xs font-normal leading-5 max-w-[23rem] p-1">
            All teams whom idea has been accepted into getlinked tech hackathon
            1.0 2023 are formally announced
          </p>
        </div>
      </div>
      {/* 5 */}
      <div className="flex justify-start items-end gap-10 w-[850px]">
        <div className="text-end flex-1">
          <p className="text-primary font-serif text-2xl font-bold leading-normal mb-2">
            Getlinked Hackathon 1.0 Offically Begins
          </p>
          <p className="font-serif text-xs font-normal leading-5 max-w-[23rem] p-1">
            Accepted teams can now proceed to build their ground breaking skill
            driven solutions
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="w-[3px] h-24 bg-primary" />
          <p className="w-8 h-8 text-center bg-primary rounded-full">5</p>
        </div>
        <p className="font-bold font-serif text-2xl leading-normal text-primary self-end flex-1">
          November 18, 2023
        </p>
      </div>
      {/* 6 */}
      <div className="flex justify-start items-end gap-10 w-[850px]">
        <p className="font-bold font-serif text-2xl text-right leading-normal text-primary self-end flex-1">
          November 18, 2023
        </p>
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="w-[3px] h-24 bg-primary" />
          <p className="w-8 h-8 text-center bg-primary rounded-full">6</p>
        </div>
        <div className="text-start flex-1">
          <p className="text-primary font-serif text-2xl font-bold leading-normal mb-2">
            Demo Day
          </p>
          <p className="font-serif text-xs font-normal leading-5 max-w-[23rem] p-1">
            Teams get the opportunity to pitch their projects to judges. The
            winner of the hackathon will also be announced on this day
          </p>
        </div>
      </div>
    </section>
  </>
);
export default Timeline;
