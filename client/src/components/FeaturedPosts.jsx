import { Link } from "react-router-dom";
import Image from "./Image";

const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* first*/}
      <div className="w-full lg:w-1/2 flex-col gap-4">
        {/* image*/}
        <Image
          src="featured1.jpeg"
          className="rounded-3xl object-cover"
          w="895"
        />
        {/* detials*/}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01</h1>
          <Link className="text-blue-800 lg:text-lg">Web Development</Link>
          <span className="text-gray-500">2 Day ago</span>
        </div>
        {/* Title*/}
        <Link
          to="/text"
          className="text-xl lg:text-3xl font-semibold lg:font-bolf"
        >
          This is demo title of my webpage and nothing
        </Link>
      </div>
      {/* other */}
      <div className="w-full lg:w-1/2 flex-col gap-4">
        {/* Second*/}
        <div className="lg:h-1/3  pb-4 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              src="featured2.jpeg"
              className="rounded-3xl object-cover w-1/3 aspect-video w-full h-full"
              w="298"
            />
          </div>
          {/* Details and title*/}
          <div className="w-2/3">
            {/* details */}
            <div className=" flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-blue-800">Web Development</Link>
              <span className="text-gray-500 text-sm">2 Day ago</span>
            </div>
            {/* title */}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
        {/* third*/}
        <div className="lg:h-1/3 pb-4 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              src="featured3.jpeg"
              className="rounded-3xl object-cover w-1/3 aspect-video  w-full h-full"
              w="298"
            />
          </div>
          {/* Details and title*/}
          <div className="w-2/3">
            {/* details */}
            <div className=" flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-blue-800">Web Development</Link>
              <span className="text-gray-500 text-sm">2 Day ago</span>
            </div>
            {/* title */}
            <Link
              to="/test"
              className="text-base sm:text-lg     md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
        {/* fourth*/}
        <div className="lg:h-1/3 flex pb-4 justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              src="featured4.jpeg"
              className="rounded-3xl object-cover w-1/3 aspect-video  w-full h-full"
              w="298"
            />
          </div>
          {/* Details and title*/}
          <div className="w-2/3">
            {/* details */}
            <div className=" flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-blue-800">Web Development</Link>
              <span className="text-gray-500 text-sm">2 Day ago</span>
            </div>
            {/* title */}
            <Link
              to="/test"
              className="text-base sm:text-lg     md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeaturedPosts;
