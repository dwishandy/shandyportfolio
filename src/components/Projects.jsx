import project1 from "../assets/projects/project1.webp";
import project2 from "../assets/projects/project2.webp";
import project3 from "../assets/projects/project3.webp";
import project4 from "../assets/projects/project4.webp";
import project5 from "../assets/projects/project5.webp";
import project6 from "../assets/projects/project6.webp";

export default function Projects() {
  const projects = [
    {
      title: "Semua Berhak Bisa's Website",
      image: project1,
      description:
        "A static website for community that provides free IT learning. Built using React + TailwindCSS.",
      tech: ["React", "TailwindCSS"],
      links: [
        {
          label: "Live Demo",
          url: "https://semuaberhakbisa.vercel.app/",
        },
        {
          label: "Link Figma",
          url: "https://www.figma.com/design/dbhqpSoi1SHpQI4HpFKhch/SBB-APP?node-id=1-117&t=ZfvyxjauwjZzmjuf-1",
        },
      ],
    },

    {
      title: "Redesign Kasir Pintar's Transaction Page",
      image: project2,
      description:
        "Final project for the Weekly Class UI/UX at UIN Jakarta, the challenge of solving User Experience issues on the Kasir transaction page.",
      tech: ["Figma"],
      links: [
        {
          label: "Link Figma",
          url: "https://www.figma.com/design/xGmGsdJflPdONcxMFDnZbd/WM-5?node-id=224-1025&t=9F6QnbxmXJN4JYCN-1",
        },
      ],
    },

    {
      title: "Cooperative Profile of Citra Nusantara Maju",
      image: project3,
      description:
        "A static website for the profile of a cooperative that sells goods and services. Created using WordPress and Elementor. Sales are directed to Shopee using links.",
      tech: ["WordPress", "Elementor", "Figma"],
      links: [
        { label: "Live Demo", url: "https://citamapedia.com/" },
        {
          label: "Link Figma",
          url: "https://www.figma.com/design/d8sUjJTrYdD53shx30pW3f/Project---CITAMA?node-id=0-1&t=lTvSebvWQrjTWY33-1",
        },
      ],
    },

    {
      title: "Ivory Blush Wedding",
      image: project4,
      description:
        "A landing page to invite wedding guests. I created this using WordPress and tried out the Bricks builder.",
      tech: ["WordPress", "Bricks"],
    },

    {
      title: "IT Club Nedukabta's Website",
      image: project5,
      description:
        "Responsive website for the Information Technology Organization. Built using TailwindCSS and JavaScript, as well as PHP and MySQL to store member data.",
      tech: ["PHP", "TailwindCSS", "JavaScript", "MySql"],
      links: [
        {
          label: "Live Demo",
          url: "https://www.itclubnedukabta.or.id/",
        },
      ],
    },

    {
      title: "Movie Trailer Web",
      image: project6,
      description:
        "A full-featured Movie Trailer Web App for school work, build with PHP and MySql featuring searchbar and smooth animations.",
      tech: ["PHP", "TailwindCSS", "JavaScript", "MySql"],
    },
  ];

  const techColors = {
    TailwindCSS: "bg-sky-100 text-sky-400",
    JavaScript: "bg-yellow-100 text-yellow-600",
    PHP: "bg-purple-100 text-purple-600",
    MySql: "bg-orange-100 text-orange-600",
    React: "bg-blue-100 text-blue-600",
    WordPress: "bg-blue-200 text-blue-400",
    Elementor: "bg-pink-100 text-pink-600",
    Bricks: "bg-yellow-100 text-yellow-600",
    Figma: "bg-red-100 text-red-600",
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-blacksoft mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-main mx-auto mb-4"></div>
          <p className="text-blacksoft/70 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience in web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay="100"
              className="bg-white rounded-xl shadow-lg overflow-hidden hover-scale transition-all duration-300 hover:shadow-xl"
            >
              <div className="h-64 bg-main flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover bg-sky"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className={`px-4 py-0.5 rounded-full text-xs ${
                        techColors[item] || "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-main mb-1">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-6 text-justify">
                  {project.description}
                </p>

                {project.links && (
                  <div className="flex space-x-4">
                    {project.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-main/80 hover:text-main transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
