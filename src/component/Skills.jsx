import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPhp } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

const skillsArray = [
  {
    name: "HTML",
    percent: "90%",
    icon: <FaHtml5 />,
    iconColor: "#E34F26",
  },
  {
    name: "CSS",
    percent: "85%",
    icon: <FaCss3Alt />,
    iconColor: "#1572B6",
  },
  {
    name: "JavaScript",
    percent: "75%",
    icon: <IoLogoJavascript />,
    iconColor: "#F7DF1E",
  },
  {
    name: "PHP",
    percent: "65%",
    icon: <FaPhp />,
    iconColor: "#777BB4",
  },
  {
    name: "React(学習中)",
    percent: "60%",
    icon: <FaReact />,
    iconColor: "#61DAFB",
  },
];

function Skills() {
  return (
    <>
      <ul className="mt-10 w-full">
        {skillsArray.map((skill) => (
          <li key={skill.name} className="mt-5">
            <h3 className="flex items-center gap-1">
              {skill.name}
              <span style={{ color: skill.iconColor }}>{skill.icon}</span>
            </h3>
            <div className="shadow bg-green-100 mt-2 w-full">
              <div
                className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                style={{ width: skill.percent }}
              >
                {skill.percent}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Skills;
