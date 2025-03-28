import Image from "./Image";

const comment = () => {
  return (
    <div className="p-4 bg-slate-100 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        <Image
          src="userImg.jpeg"
          className="w-10 h-10 rounded-full object-cover"
          w="40"
        />
        <span className="font-medium">Shahnwaaz</span>
        <span className="text-sm text-gray-500">2 Days ago</span>
      </div>
      <div className="mt-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
          doloremque, saepe nisi voluptatibus deserunt distinctio harum tenetur
          consequuntur.
        </p>
      </div>
    </div>
  );
};
export default comment;
