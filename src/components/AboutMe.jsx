import React, { useEffect, useState } from "react";
import Animation from "./Animation";
import { CodeBlock, tomorrowNightEighties } from "react-code-blocks";

const AboutMe = () => {
  const [isMobile, setisMobile] = useState(true);

  useEffect(() => {
      if(document.documentElement.clientWidth > 500){
        setisMobile(false);
      }

    }, [])
  return (
    <div className=" mt-12 text-white flex h-96 widthscreen">
      <div className={`basis-5/12 mt-12 h-72 animation-bg hidden ${isMobile?'hidden':null}`}>
        <Animation />
      </div>
      <div className="basis-7/12 rounded-6xl m-2 mr-12 ">
        <CodeBlock
          className="rounded-6xl"
          text={`class Me{
            public:
                string name = "Sukrit Sethi";
                string pronouns = "He/Him";
                string email = "sukritsethi18@gmail.com";
                string education = "Bachelors of Engineering";
                string major = "Electronics and Computers";
                string proficientIn[5] = ["javascript", "C++", "React.js", "Node.js", "MongoDB"];
                string learning[5] = ["Three.js", "Graohdql", "DevOps", "Next.js", "Gatsby"];
                string tools[5] = ["Git", "Parcel", "Docker", "Figma", "Postman"];
            private:
                string hobbies[3] = ["music", "basketball", "oilpainting"];
        }`}
          language="cpp"
          showLineNumbers={true}
          theme={tomorrowNightEighties}
        />
      </div>
    </div>
  );
};

export default AboutMe;
