import { useState } from "react";

interface User {
  name: string;
  job: string;
  image: string;
  reviewers: number;
  stars: number;
}

const user: User[] = [
  {
    name: "cá",
    job: "Front-End Developer",
    image: "https://avatars.githubusercontent.com/u/117553015?v=4",
    stars: 4.5,
    reviewers: 444,
  },
];

export const UserProfile = () => {
  const [showMore, setShowMore] = useState(false);
  const handleClick = (): void => {
    setShowMore(!showMore);
  };
  return (
    <div className="flex w-[32rem] items-center gap-x-4 rounded-lg bg-white p-12 shadow-[-1.5rem_-1.5rem_0_0_#38BDF8]">
      {user.map((user) => (
        <div className="flex w-[20rem] items-center justify-center">
          <img
            src={user.image}
            alt=""
            className="mr-3 w-32 self-start rounded-full border-[11px] border-[#E6EFFA]"
          />
          <div className="space-y-7">
            <div>
              <h1 className="text-3xl font-bold text-[#1C2B62]">{user.name}</h1>
              <h2 className="mt-1">{user.job}</h2>
            </div>

            <div className="items-center">
              <p className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mr-1 inline-block h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
                {user.stars} stars review
              </p>

              <p className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mr-1 inline-block h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                {user.reviewers} reviewers
              </p>
            </div>

            <p className="text-lg">Yeu duong vo van</p>
            <div className="max-height-10">
              {showMore && (
                <div className="transition-all delay-1000 duration-1000 ease-in-out">
                  Cá là 1 loài lưỡng cư vl và hàu rất đẹp trai mặc dù rất simp
                  gái
                </div>
              )}
            </div>

            <button
              className="rounded-full border-[1px] border-[#F0F0F6] bg-[#F4F5FA]  px-6 py-2 font-bold transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
              onClick={handleClick}
            >
              {!showMore ? "Show More" : "Show Less"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
