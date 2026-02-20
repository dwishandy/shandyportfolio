import webdasarpdf from "../assets/pdf/webdasar.pdf";
import webdasarimg from "../assets/certificates/webdasar.webp";
import wordpresspdf from "../assets/pdf/wordpress.pdf";
import wordpressimg from "../assets/certificates/wordpress.webp";
import jspdf from "../assets/pdf/js.pdf";
import jsimg from "../assets/certificates/js.webp";
import uiuxpdf from "../assets/pdf/uiux.pdf";
import uiuximg from "../assets/certificates/uiux.webp";
import lks24pdf from "../assets/pdf/lks24.pdf";
import lks24img from "../assets/certificates/lks24.webp";
import lks22pdf from "../assets/pdf/lks22.pdf";
import lks22img from "../assets/certificates/lks22.webp";

export default function Certificates() {
  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Certificates & Achievements
          </h2>
          <div className="w-20 h-1 bg-main mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Continuous learning through courses and competitive achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ListCertificates
            delay="200"
            img={uiuximg}
            title="Weekly Class UI/UX GDGoC UIN Jakarta"
            publisher="GDGoC UIN Syarif Hidayatullah Jakarta"
            pdf={uiuxpdf}
            date="Jul 2025"
          ></ListCertificates>

          <ListCertificates
            delay="100"
            img={webdasarimg}
            title="Belajar Dasar Pemrograman Web"
            publisher="Dicoding"
            pdf={webdasarpdf}
            date="Jan 2026"
          ></ListCertificates>

          <ListCertificates
            delay="150"
            img={jsimg}
            title="PRDV401: Introduction to JavaScript I"
            publisher="Saylor Academy"
            pdf={jspdf}
            date="Jul 2025"
          ></ListCertificates>

          <ListCertificates
            delay="250"
            img={wordpressimg}
            title="Build a Full Website using WordPress"
            publisher="Coursera Project Network"
            pdf={wordpresspdf}
            date="Jun 2025"
          ></ListCertificates>

          <ListCertificates
            delay="150"
            img={lks24img}
            title="Top 6 LKS Web Technologies"
            publisher="Dinas Pendidikan dan Kebudayaan Kabupaten Tangerang"
            pdf={lks24pdf}
            date="Dec 2024"
          ></ListCertificates>

          <ListCertificates
            delay="150"
            img={lks22img}
            title="Top 15 LKS Web Technologies"
            publisher="Dinas Pendidikan dan Kebudayaan Kabupaten Tangerang"
            pdf={lks22pdf}
            date="Nov 2022"
          ></ListCertificates>
        </div>
      </div>
    </section>
  );
}

function ListCertificates({ delay, img, title, publisher, pdf, date }) {
  return (
    <div
      className="bg-white p-6 rounded-xl shadow-lg"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="h-64 bg-main flex items-center justify-center">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover bg-sky"
        />
      </div>

      <h3 className="text-xl font-semibold text-main mb-1 mt-6">{title}</h3>

      <p className="text-sm text-gray-600 mb-6 ">{publisher}</p>

      <div className="flex justify-between items-center space-x-4">
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="text-main/80 hover:text-main transition-colors"
        >
          Click to view certificate
        </a>
        <p className="text-xs text-gray-400">{date}</p>
      </div>
    </div>
  );
}
