import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About Party Foul
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div>
            <p>
              {" "}
              Have you been home alone and wanted to hang with your friends or
              your friends are far away and you don't get to hang out as much
              and drink. Well, welcome to House Party where the fun follows you
              wherever you are!!{" "}
            </p>
          </div>

          <div>
            <p>
              This game allows users to create "house rules" that whenever
              something happens, users are able to click on that rule which will
              then trigger a notification for all users to drink. Of course, you
              can make up other rules as you play along. However, the object of
              this game and drink in the comfort of your home with your friends
              and have fun while doing so.
            </p>
          </div>

          <div>
            <p>
              {" "}
              Drink up guys!! May the odds be in your favor. Please drink
              responsibly!!
            </p>
          </div>

          <p>- House Party Gaming</p>
        </div>
      </div>
    </div>
  );
};

export default About;
