import { Link } from "react-router-dom";
import Image from "../components/Image";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* detials */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, id
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Writen by</span>
            <Link className="text-blue-500">Author</Link>
            <span>on</span>
            <Link className="text-blue-500">Web Development</Link>
            <span>2 Day ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            pariatur repudiandae, quia facilis tenetur autem quas ipsum officia,
            odio a voluptas saepe. Nemo iusto debitis eius quaerat optio sequi
            voluptate!
          </p>
        </div>
        <div className="hidden lg:block w-2/3">
          <Image src="postImg.jpeg" w="600" className="rounded-2xl" />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi esse
            modi fugit distinctio veniam laborum consequuntur obcaecati
            voluptatem labore in, error provident voluptatibus eveniet enim
            reiciendis ut perspiciatis? Veniam explicabo dolores quam! Minus
            aliquam sapiente aspernatur, aliquid reprehenderit saepe magni vel
            molestiae. Nobis dolor, nihil odit debitis tenetur, animi quis nulla
            maiores aspernatur possimus dolores est tempora perspiciatis hic
            corporis numquam nemo cumque, necessitatibus ea pariatur soluta
            magnam ab? Inventore sapiente labore amet, veritatis dolorum aut,
            quibusdam obcaecati quo eveniet possimus velit? Itaque eaque, odio
            suscipit accusamus laudantium officiis, quam deleniti soluta ab
            fugiat ducimus non nostrum assumenda culpa quas!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi esse
            modi fugit distinctio veniam laborum consequuntur obcaecati
            voluptatem labore in, error provident voluptatibus eveniet enim
            reiciendis ut perspiciatis? Veniam explicabo dolores quam! Minus
            aliquam sapiente aspernatur, aliquid reprehenderit saepe magni vel
            molestiae. Nobis dolor, nihil odit debitis tenetur, animi quis nulla
            maiores aspernatur possimus dolores est tempora perspiciatis hic
            corporis numquam nemo cumque, necessitatibus ea pariatur soluta
            magnam ab? Inventore sapiente labore amet, veritatis dolorum aut,
            quibusdam obcaecati quo eveniet possimus velit? Itaque eaque, odio
            suscipit accusamus laudantium officiis, quam deleniti soluta ab
            fugiat ducimus non nostrum assumenda culpa quas!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi esse
            modi fugit distinctio veniam laborum consequuntur obcaecati
            voluptatem labore in, error provident voluptatibus eveniet enim
            reiciendis ut perspiciatis? Veniam explicabo dolores quam! Minus
            aliquam sapiente aspernatur, aliquid reprehenderit saepe magni vel
            molestiae. Nobis dolor, nihil odit debitis tenetur, animi quis nulla
            maiores aspernatur possimus dolores est tempora perspiciatis hic
            corporis numquam nemo cumque, necessitatibus ea pariatur soluta
            magnam ab? Inventore sapiente labore amet, veritatis dolorum aut,
            quibusdam obcaecati quo eveniet possimus velit? Itaque eaque, odio
            suscipit accusamus laudantium officiis, quam deleniti soluta ab
            fugiat ducimus non nostrum assumenda culpa quas!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi esse
            modi fugit distinctio veniam laborum consequuntur obcaecati
            voluptatem labore in, error provident voluptatibus eveniet enim
            reiciendis ut perspiciatis? Veniam explicabo dolores quam! Minus
            aliquam sapiente aspernatur, aliquid reprehenderit saepe magni vel
            molestiae. Nobis dolor, nihil odit debitis tenetur, animi quis nulla
            maiores aspernatur possimus dolores est tempora perspiciatis hic
            corporis numquam nemo cumque, necessitatibus ea pariatur soluta
            magnam ab? Inventore sapiente labore amet, veritatis dolorum aut,
            quibusdam obcaecati quo eveniet possimus velit? Itaque eaque, odio
            suscipit accusamus laudantium officiis, quam deleniti soluta ab
            fugiat ducimus non nostrum assumenda culpa quas!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi esse
            modi fugit distinctio veniam laborum consequuntur obcaecati
            voluptatem labore in, error provident voluptatibus eveniet enim
            reiciendis ut perspiciatis? Veniam explicabo dolores quam! Minus
            aliquam sapiente aspernatur, aliquid reprehenderit saepe magni vel
            molestiae. Nobis dolor, nihil odit debitis tenetur, animi quis nulla
            maiores aspernatur possimus dolores est tempora perspiciatis hic
            corporis numquam nemo cumque, necessitatibus ea pariatur soluta
            magnam ab? Inventore sapiente labore amet, veritatis dolorum aut,
            quibusdam obcaecati quo eveniet possimus velit? Itaque eaque, odio
            suscipit accusamus laudantium officiis, quam deleniti soluta ab
            fugiat ducimus non nostrum assumenda culpa quas!
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <Image
                src="userImg.jpeg"
                className="w-12 h-12 rounded-full object-cover"
                w="48"
                h="48"
              />
              <Link>John Doe</Link>
            </div>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>
          <PostMenuActions />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">
              Web Design
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              Databases
            </Link>
            <Link className="underline" to="/">
              Search Engines
            </Link>
            <Link className="underline" to="/">
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default SinglePostPage;
