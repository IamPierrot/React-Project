import { FormEvent, useState } from "react";
import keyData from "../assets/data/data_module.json";
import printData from "../assets/data/data_print.json";

const findVerb = (value: string): string[] => {
  const findKey = (verb: string): string => {
    return Object.entries(keyData).reduce((key, [keys, arr]) => {
      if (arr.includes(verb)) key = keys;
      return key;
    }, "");
  };
  if (!findKey(value)) return ["Non existed"];
  return printData[findKey(value) as keyof object];
};

export const SearchVerb = () => {
  const [showMore, setShowMore] = useState(false);
  const [textInput, setTextInput] = useState("");

  const handleText = (event: FormEvent<HTMLInputElement>): void => {
    setTextInput(event.currentTarget.value);
  };

  const handleClick = (): void => {
    setShowMore(!showMore);
  };
  const makeListVerbs = (): JSX.Element | undefined => {
    const input = document.getElementById("userInput");
    function isInputElement(
      elem: HTMLElement | null,
    ): elem is HTMLInputElement {
      if (!elem) {
        return false;
      }

      return elem.tagName === "INPUT";
    }
    if (!input || !isInputElement(input)) return <h1>Không tìm thấy từ</h1>;
    const data = findVerb(input.value.toLowerCase());
    const [verb1, verb2, verb3, meaning] = [data[0], data[1], data[2], data[3]];

    return (
      <div className="grid h-10 grid-cols-4 items-center justify-center space-x-3 bg-[#fff]">
        <ul>{verb1}</ul>
        <ul>{verb2}</ul>
        <ul>{verb3}</ul>
        <ul>{meaning}</ul>
      </div>
    );
  };

  return (
    <div className="flex w-[32rem] items-center justify-center gap-x-4 bg-[#fff]">
      {!showMore && (
        <div className="space-y-7">
          <div className="">
            <h1 className="mb-3 text-center text-4xl font-bold">Verb form</h1>
            <input
              id="userInput"
              type="text"
              className="flex w-64 items-center rounded-lg border-[3px] border-[#3939f7]"
              onChange={handleText}
              value={textInput}
            />
          </div>

          <div className="flex items-center justify-center pb-3">
            <button
              className="items-center rounded-full border-[1px] border-[#F0F0F6] bg-[#F4F5FA]  px-6 py-2 font-bold transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
              type="button"
              onClick={handleClick}
            >
              Search
            </button>
          </div>
        </div>
      )}
      {showMore && (
        <div className="flex items-center justify-center gap-x-4 space-y-4 bg-[#fff]">
          {showMore && (
            <div className="flex items-center justify-center gap-x-4 bg-[#fff]">
              <div>Hello</div>
              <button
                className="flex items-center rounded-full border-[1px] border-[#F0F0F6] bg-[#F4F5FA]  px-6 py-2 font-bold transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
                type="button"
                onClick={handleClick}
              >
                New Search
              </button>
              {makeListVerbs()}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
