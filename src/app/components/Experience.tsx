export default function Experience() {
  return (
    <div className="flex flex-col my-6 text-gray-200">
      <h1 className="w-max font-bold border-b-4 border-gray-600 mb-4">
        Experience
      </h1>
      <div className="font-light text-justify w-full grid grid-cols-2 gap-2">
        <div className="text-xs sm:text-base text-start">
          Sept 2022 to Present
        </div>
        <div>
          <h1 className="font-bold text-sm sm:text-base">
            Fullstack Developer
          </h1>
          <p className="text-xs sm:text-sm">Tokenminds </p>
        </div>
        <div className="text-xs sm:text-base text-start">
          Jan 2022 to Sept 2022
        </div>
        <div>
          <h1 className="font-bold text-sm sm:text-base">
            Fullstack Developer
          </h1>
          <p className="text-xs sm:text-sm">Shiftleft Co. Ltd</p>
        </div>
        <div className="text-xs sm:text-base text-start">
          Dec 2020 to Dec 2021{" "}
        </div>
        <div>
          <h1 className="font-bold text-sm sm:text-base">
            Fullstack Developer
          </h1>
          <p className="text-xs sm:text-sm ">
            Genius Giants Web Development and QA Services
          </p>
        </div>
      </div>
    </div>
  );
}
