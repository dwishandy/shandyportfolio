import instagram from "../assets/icons/instagram.webp";
import github from "../assets/icons/github.webp";
import linkedin from "../assets/icons/linkedin.webp";

export default function Footer() {
  return (
    <footer className="bg-blacksoft py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2 text-main">Shandy Dwi.</h3>
            <p className="text-graysoft text-sm">
              Web Programmer | Web Designer
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="#home" text="Home"></Link>
              <Link href="#about" text="About"></Link>
              <Link href="#projects" text="Projects"></Link>
              <Link href="#skills" text="Skills"></Link>
              <Link href="#certifications" text="Certifications"></Link>
              <Link href="#contact" text="Contact"></Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <Connect
                link="https://instagram.com/firshandydwi_"
                icon={instagram}
                txt="Instagram"
              ></Connect>

              <Connect
                link="https://www.linkedin.com/in/firshandy-dwi-cahyo/"
                icon={linkedin}
                txt="LinkedIn"
              ></Connect>

              <Connect
                link="https://github.com/dwishandy"
                icon={github}
                txt="Github"
              ></Connect>
            </div>
          </div>
        </div>

        <div className="border-t border-main mt-8 pt-8 text-center">
          <p className="text-white">
            &copy; 2026 Shandy Dwi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function Link({ href, text }) {
  return (
    <a
      href={href}
      className="block text-graysoft hover:text-white transition-colors"
    >
      {text}
    </a>
  );
}

function Connect({ link, icon, txt }) {
  return (
    <a
      href={link}
      target="_blank"
      className="w-10 h-10 bg-main rounded-full flex items-center justify-center hover-scale transition-all hover:bg-main/70"
    >
      <div className="text-lg">
        <img src={icon} alt={txt} className="w-5 h-5" />
      </div>
    </a>
  );
}
