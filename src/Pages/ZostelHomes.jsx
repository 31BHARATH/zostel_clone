import React from "react";
import { Link } from "react-router-dom";
import { stays } from "../homes";
export default function ZostelHomes() {
  return (
    <>
      <div className="relative h-[90vh] w-full">
        <div
          style={{
            backgroundImage:
              'url("https://img.cdn.zostel.com/zostel/gallery/images/VW2zC-HwQbKiyaqFdr7SYw/bhor-20230223105851.png")',
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="absolute  -top-20  h-full w-full left-0 z-[-1] flex items-center justify-center"
        >
          <h1 className="text-5xl font-bold text-white">BHOR</h1>
        </div>
      </div>
      <div className="-mt-16 px-10 mb-10">
        <Link to={"/"}>Home</Link>
        <span>&rarr;</span>
        <Link to={"/destinations"}>Destinations</Link>
        <span>&rarr;</span>
        <Link>Bhor</Link>
      </div>
      <div>
        <h1>
          Stays at <span>Bhor</span>
        </h1>
        <div>
          {stays.map((home) => {
            return (
              <div key={home.id}>
                <div>
                  <img src={home.img} alt="" />
                </div>
                <div>
                  <h2>{home.tooltip}</h2>
                  <h1>{home.title}</h1>
                  <p>{home.desc}</p>
                  <div>
                    <p>Starts from &#8377;{home.price}</p>
                    <button>View &rarr;</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
