import design from "../data/GraphicDesign"
const MansoryGrid = () => {
  return (
    <div className="flex flex-wrap justify-start-safe gap-2 rounded-xl">
      {design.map((item) => (
        <div className="">
          <img src={item.img} className="h-[200px] md:h-[300px] w-full object-contain"/>
        </div>
     ))}
    </div>
  );
};




export default MansoryGrid;