import mypict from "../assets/img/mypict.webp";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-blacksoft mb-4">About Me</h2>
          <div className="w-20 h-1 bg-main mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-up">
            <div className="relative">
              <div className="w-91 h-91 mx-auto bg-linear-to-br from-main/10 to-main/50 rounded-full flex items-center justify-center">
                <div className="relative w-80 h-80 bg-linear-to-br from-main/20 to-main/60 rounded-full flex items-center justify-center">
                  <img
                    src={mypict}
                    alt="My Picture"
                    className="w-72 h-72 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-up">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                Web Programmer & Designer specializing in responsive,
                high-performance websites
              </h3>

              <Paragraph text="I am a Web Programmer and Web Designer focused on building modern, responsive, and high-performance websites. In frontend development, I use React and TailwindCSS to create dynamic, well-structured, and scalable user interfaces. I am also passionate about WordPress and its plugin ecosystem, from theme customization to optimizing website features and performance."></Paragraph>

              <Paragraph text="On the design side, I create UI and UX using Figma with a user-centered approach. I believe a great website is not only visually appealing but also easy to use, fast, and capable of delivering clear solutions. I continuously improve my skills to deliver professional, functional, and valuable digital products."></Paragraph>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Paragraph({ text }) {
  return <p className="text-gray-600 leading-relaxed text-justify">{text}</p>;
}
