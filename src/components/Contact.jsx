import instagram from "../assets/icons/instagram.webp";
import github from "../assets/icons/github.webp";
import linkedin from "../assets/icons/linkedin.webp";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-blacksoft mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-main mx-auto mb-4"></div>
          <p className="text-blacksoft/70 max-w-2xl mx-auto">
            I'm always interested in new opportunities and interesting projects.
            Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div data-aos="fade-up">
            <div className="space-y-8">
              <GetInTouch
                icon="📧"
                bg="bg-blue-100"
                title="Email"
                text="firshandydwi@gmail.com"
              ></GetInTouch>

              <GetInTouch
                icon="📍"
                bg="bg-green-100"
                title="Location"
                text="Tangerang, Banten"
              ></GetInTouch>

              <div className="flex space-x-4 pt-4">
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

          <div data-aos="fade-up">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              id="contact-form"
              className="space-y-6"
            >
              <div>
                <input
                  type="hidden"
                  name="access_key"
                  value="d37026be-85ec-4615-b88b-e3a18df1878d"
                />
              </div>
              <div>
                <label
                  for="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label
                  for="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label
                  for="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-main text-white py-3 px-6 rounded-lg font-semibold hover-scale transition-all shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function GetInTouch({ icon, bg, title, text }) {
  return (
    <div className="flex items-center space-x-4">
      <div
        className={`w-12 h-12 ${bg} rounded-full flex items-center justify-center`}
      >
        <div className="text-xl">{icon}</div>
      </div>
      <div>
        <h3 className="font-semibold text-blacksoft">{title}</h3>
        <p className="text-blacksoft/70">{text}</p>
      </div>
    </div>
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
