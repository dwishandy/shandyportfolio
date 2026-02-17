export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-linear-to-br from-main/10 to-purple-50 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div data-aos="fade-up" data-aos-delay="100">
          <h1 className="text-5xl md:text-7xl font-bold text-blacksoft mb-6">
            Hi, I'm <span className="text-main">Shandy Dwi</span>
          </h1>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <p className="text-xl md:text-2xl font-bold text-blacksoft/70 mb-4 max-w-3xl mx-auto">
            Web Programmer | Web Designer
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="300">
          <p className="text-lg text-blacksoft/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Creating professional and visually appealing websites with high
            performance, responsive design, and seamless user experience across
            all modern devices.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="bg-main text-white px-8 py-4 rounded-lg font-semibold hover:scale-95 transition-all shadow-sm shadow-graysoft"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border-2 border-graysoft text-blacksoft/70 px-8 py-4 rounded-lg font-semibold hover:border-main hover:text-main transition-all"
          >
            Get In Touch
          </a>
        </div>

        <div data-aos="fade-up" data-aos-delay="400" className="mt-16">
          <div className="animate-bounce text-6xl">👨‍💻</div>
        </div>
      </div>
    </section>
  );
}
