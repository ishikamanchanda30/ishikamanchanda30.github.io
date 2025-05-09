import design from "../data/GraphicDesign"
const MansoryGrid = () => {
  return (
    <div className="flex flex-wrap justify-center gap-2 rounded-xl">
      {design.map((item, index) => (
        <div className="" key = {index}>
          <img src={item.img} key={index} className="h-[200px] md:h-[300px] w-full object-contain"/>
        </div>
     ))}
    </div>
  );
};




export default MansoryGrid;