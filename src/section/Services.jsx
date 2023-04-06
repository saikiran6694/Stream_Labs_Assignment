import frameEnd from "../assets/component.png";
import darkFrame from "../assets/Bg-Field.png";
import First from "../assets/First.png";
import Second from "../assets/Second.png";
import Third from "../assets/Third.png";

const Services = () => {
  return (
    <div className="mx-10">
      <div className="flex flex-row gap-4 p-10">
        <div className="w-[0.35rem] bg-green-600" />
        <h2 className="text-3xl font-extrabold">
          Food Lab Food Safety Services
        </h2>
      </div>
      <div className="ml-10 w-full flex flex-row justify-start gap-10 items-center">
        <div className="w-5/12">
          <div className="relative">
            <img src={frameEnd} alt="below" width={400} height={550} />
            <img
              src={darkFrame}
              alt="above"
              width={400}
              height={550}
              className="absolute top-20 left-3"
            />
            <div className="flex flex-row absolute top-[7rem] left-14 gap-2">
              <div className="">
                <img
                  src={First}
                  alt="first"
                  className="mb-5"
                  width={180}
                  height={120}
                />
                <img src={Third} alt="third" width={180} height={120} />
              </div>
              <img
                src={Second}
                alt="second"
                width={180}
                height={50}
                className="h-[17rem]"
              />
            </div>
          </div>
        </div>
        <div className="w-5/12">
          <p className="px-5 py-10 text-xl font-bold">
            Aperiam quia sapiente vel consequatur consequatur omnis sed autem
            quae. Ipsa et minus consequatur vero et doloribus. Ex error illum
            consequatur amet ea occaecati odit. Quia similique dolorum officiis
            distinctio magnam ut facilis. Et dolore est inventore ea et
            molestiae earum.
          </p>
        </div>
      </div>
      <div className="w-72 h-[2px] -mt-10 ml-[35rem] bg-green-500" />
    </div>
  );
};

export default Services;
