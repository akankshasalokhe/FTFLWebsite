import { FiSearch, FiPenTool, FiCode, FiLayers, FiCheckCircle } from "react-icons/fi";
import { FaSearch, FaClipboardList, FaVideo, FaCheckCircle } from "react-icons/fa";

export const serviceProcessData = {
  SoftwareDevelopment: {
    ui: "SoftwareDevelopment",
    steps: [
      {
        title: "Discovery",
        icon: <FiSearch className="text-blue-600 text-3xl" />,
        desc: "Understanding your requirements, goals, and project direction.",
      },
      {
        title: "Planning",
        icon: <FiPenTool className="text-purple-600 text-3xl" />,
        desc: "Creating architecture, workflow, and timelines.",
      },
      {
        title: "Design",
        icon: <FiLayers className="text-pink-600 text-3xl" />,
        desc: "Crafting beautiful user-centric UI/UX.",
      },
      {
        title: "Development",
        icon: <FiCode className="text-indigo-600 text-3xl" />,
        desc: "Building scalable applications.",
      },
      {
        title: "Launch",
        icon: <FiCheckCircle className="text-green-600 text-3xl" />,
        desc: "Deployment, optimization, and QA.",
      },
    ],
  },

  VideoProduction: {
    ui: "VideoProduction",
    steps: [
  {
       id: 1,
    title: "Discovery",
    icon: <FaSearch size={20} />,
    description:
        "To determine the project's direction, we conduct user research, competitive analysis, and interviews to learn about the client's objectives, market, and audience."
  },
  {
    id: 2,
    title: "Pre-Production",
    icon: <FaClipboardList size={20} />,
    description: " In order to ensure a seamless execution, we plan by writing screenplays, making storyboards, choosing actors, and setting up sets, props, and locations.  "
  },
  {
    id: 3,
    title: "Production",
    icon: <FaVideo size={20} />,
    description: "In order to ensure continuity and incorporate visual effects as necessary, we set up cameras, lighting, and sound to record. ",
  },
  {
    id: 4,
    title: "Post-Production",
    icon: <FaCheckCircle size={20} />,
    description: " For the final result, we edit the video, mix the sound, apply color grading, add graphics, and complete the music and effects.",
  },
    ],
  },

  Designing: {
    ui: "Designing",
    steps: [
       {
    title: "Research",
    icon: <FiSearch className="text-blue-600 text-3xl" />,
    desc: "Identify the target market and brand, investigate rivals, and establish the visual direction. ",
  },
  {
    title: "Concept Development",
    icon: <FiPenTool className="text-purple-600 text-3xl" />,
    desc: "Generate ideas, produce preliminary Illustrator mockups, and show concepts to clients for their input.",
  },
  {
    title: "Design",
    icon: <FiLayers className="text-pink-600 text-3xl" />,
    desc: "Using Adobe tools, create intricate, scalable designs while upholding sophisticated methods and brand integrity. ",
  },
  {
    title: "Evaluation",
    icon: <FiCode className="text-indigo-600 text-3xl" />,
    desc: "Test designs on various platforms, get input, and improve graphics using A/B testing, alignment, and contrast. ",
  },
  {
    title: "Delivery",
    icon: <FiCheckCircle className="text-green-600 text-3xl" />,
    desc: "Provide final assets in all necessary formats, make sure they are the right size, and offer post-support and brand guidelines.",
  },
    ],
  },
};
