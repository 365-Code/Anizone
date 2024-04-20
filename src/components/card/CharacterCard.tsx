"use client";
import { charDetails } from "@/utils";
import React, { useState } from "react";

const CharacterCard = ({ character }: { character: charDetails }) => {
  const [about, setAbout] = useState("");
  const [show, setShow] = useState(false);

  const fetchAbout = async () => {
    try {
      const data = await fetch(
        process.env.NEXT_PUBLIC_JIKANAPI + "/characters/" + character.malId,
      );
      const res = await data.json();
      if (res) {
        const { data } = res;
        setAbout(data.about);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAbout = () => {
    character.role.toLowerCase() == "main" && setShow(true);
    !about && fetchAbout();
  };

  return (
    <>
      <div
        onClick={handleAbout}
        title={
          character.name +
          (character.role.toLowerCase() == "main"
            ? "- Click for More Info"
            : "")
        }
        className="h-auto rounded-lg p-4 text-center text-white transition-all backdrop:blur-sm hover:scale-105"
      >
        <div className="max-h-[102px] max-w-[102px] overflow-hidden rounded-full sm:max-h-[172px] sm:max-w-[172px]">
          <img
            src={character.image}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div>
          <p className="text-lg font-medium">{character.name}</p>
          <p className="text-base">{character.role}</p>
        </div>
      </div>
      {show && (
        <div
          onClick={() => setShow(false)}
          className="fixed left-0 top-0 z-40 flex h-full w-full items-center justify-center bg-black/50 backdrop-blur-sm"
        >
          <div className="mx-auto flex max-h-[95vh] w-fit max-w-full flex-col items-center justify-center gap-4 rounded-lg text-white sm:max-w-[80%] sm:flex-row md:max-h-[300px]">
            <div className="w-[250px]">
              <img
                src={character.image}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="max-h-full max-w-[60%] flex-1 text-start">
              <p className="text-lg">
                <span>Name:</span>
                <span className="font-medium">{character.name}</span>
              </p>
              <p className="text-lg">
                <span>Role:</span>
                <span className="font-normal">{character.role}</span>
              </p>
              <p className="no-scrollbar max-h-[150px] overflow-y-scroll sm:h-auto md:max-h-[300px]">
                {about}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CharacterCard;
