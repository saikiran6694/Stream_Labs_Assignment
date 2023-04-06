import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="mt-10 text-black bg-white w-full shadow-slate-50">
      <div className="flex flex-row bg-white">
        <div className="w-4/12 p-10">
          <img src={logo} alt="logo" width={300} height={200} />
          <div className="text-justify text-lg text-bold ml-2">
            <h2 className="mb-2">203, Abc road, xyz</h2>
            <h3 className="mb-2">
              <span className="text-lg font-extrabold">Phone : </span>+91 444
              333 8483
            </h3>
            <h3>
              <span className="text-lg font-extrabold">Email : </span>
              abcxyz@gmail.com
            </h3>
          </div>
        </div>
        <div className=" bg-[#F4EEA9] w-8/12 px-10 py-5">
          <div className="flex flex-row justify-evenly items-center">
            <div>
              <div className="w-[4.5rem] h-[2px] rounded-lg bg-green-900" />
              <h3 className="text-lg font-extrabold mb-2">Useful Links</h3>
              <p>Home</p>
              <p>Services</p>
              <p>Training Registration</p>
              <p>Home</p>
              <p>Services</p>
            </div>
            <div>
              <p>Support</p>
              <p>Contact Us</p>
            </div>
            <div className="mt-2">
              <div className="w-[4.5rem] h-[2px] rounded-lg bg-green-900" />
              <h3 className="text-lg font-extrabold mb-2">Site Map</h3>
              <p>Home</p>
              <p>Services</p>
              <p>Training Registration</p>
              <p>Home</p>
              <p>Services</p>
              <p>Training Registration</p>
            </div>
          </div>
          <p className="mt-5 text-center">
            Food Labs Inc. © Copyright 2022. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
