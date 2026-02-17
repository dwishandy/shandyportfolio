import html from "../assets/icons/html.webp";
import tailwind from "../assets/icons/tailwindcss.webp";
import javascript from "../assets/icons/javascript.webp";
import wordpress from "../assets/icons/wordpress.webp";
import mysql from "../assets/icons/mysql.webp";
import php from "../assets/icons/php.webp";
import figma from "../assets/icons/figma.webp";
import reactjs from "../assets/icons/react.webp";
import git from "../assets/icons/git.webp";

export default function Skills() {
  return (
    <section id="skills" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-4xl font-bold text-blacksoft mb-4">
            Skills & Technologies
          </h2>
          <div class="w-20 h-1 bg-main mx-auto mb-4"></div>
          <p class="text-blacksoft/70 max-w-2xl mx-auto">
            I work with a variety of technologies and tools to create amazing
            web experiences.
          </p>
        </div>

        <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mx-auto">
          <LogoSkill
            delay="100"
            img={html}
            title="HTML5"
            bg="bg-orange-100"
          ></LogoSkill>

          <LogoSkill
            delay="150"
            img={tailwind}
            title="TailwindCSS"
            bg="bg-blue-100"
          ></LogoSkill>

          <LogoSkill
            delay="200"
            img={javascript}
            title="JavaScript"
            bg="bg-yellow-100"
          ></LogoSkill>

          <LogoSkill
            delay="250"
            img={wordpress}
            title="Wordpress"
            bg="bg-blue-100"
          ></LogoSkill>

          <LogoSkill
            delay="300"
            img={mysql}
            title="MySql"
            bg="bg-orange-100"
          ></LogoSkill>

          <LogoSkill
            delay="350"
            img={php}
            title="PHP"
            bg="bg-purple-100"
          ></LogoSkill>

          <LogoSkill
            delay="400"
            img={figma}
            title="Figma"
            bg="bg-red-100"
          ></LogoSkill>

          <LogoSkill
            delay="450"
            img={reactjs}
            title="React"
            bg="bg-blue-100"
          ></LogoSkill>

          <LogoSkill
            delay="500"
            img={git}
            title="Git"
            bg="bg-orange-100"
          ></LogoSkill>
        </div>
      </div>
    </section>
  );
}

function LogoSkill({ delay, img, title, bg }) {
  return (
    <div
      data-aos="zoom-in"
      data-aos-delay={delay}
      class="text-center group cursor-pointer"
    >
      <div
        class={`w-16 h-16 mx-auto mb-4 ${bg} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
      >
        <div class="text-2xl">
          <img src={img} alt={title} className="w-10 h-10" />
        </div>
      </div>
      <h3 class="font-semibold text-blacksoft">{title}</h3>
    </div>
  );
}
