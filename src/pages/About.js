import React, { Component, Fragment } from "react";
import '../style/output.css';
import pp from '../image/Ellipse1.png';
import Dicoding from "../components/aboutComponent/Dicoding";

class About extends Component {
  render() {
    const dicodingList = [
      { 
        title: 'Belajar Prinsip Pemrograman SOLID'
      },
      { 
        title: 'Memulai Pemrograman Dengan Java'
      },
      { 
        title: 'Memulai Pemrograman Dengan C'
      },
      { 
        title: 'Belajar Dasar Pemrograman Web'
      },
      { 
        title: 'Belajar Dasar Pemrograman JavaScript'
      },
      { 
        title: 'Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)'
      },
      { 
        title: 'Architecting on AWS (Membangun Arsitektur Cloud di AWS)'
      },
      { 
        title: 'Belajar Dasar-Dasar DevOps'
      },
      { 
        title: 'Belajar Jaringan Komputer untuk Pemula'
      },
    ];

    return (
      <Fragment>
        <div className="pt-[100px]">
          <div className="flex justify-around">
            <div>
              <h1 className="font-bold text-2xl mt-12">Contact</h1>
              <ul>
                <li>0819-0873-4242</li>
                <li>akmkevin100@gmail.com</li>
                <li>@kevinmaheswaraa</li>
              </ul>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-6">
                <img src={pp} alt="" />
              </div>
              <p className="max-w-xs text-center">
                Hallo, saya Andreas Kevin Maheswara, seorang mahasiswa yang berkuliah
                di Universitas Sanata Dharma. Saya berkuliah di jurusan Informatika,
                mempunyai beberapa skill dalam programming web dan database
              </p>
            </div>

            <div>
              <h1 className="font-bold text-2xl mt-12">Skills</h1>
              <ul className="list-disc ml-6">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Java</li>
                <li>SQL</li>
                <li>Bootstrap</li>
                <li>Tailwind</li>
                <li>React</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-around pt-5">
            <div>
              <h1 className="font-bold text-2xl">Course Exp</h1>
              <div>
                <h2 className="text-xl">Dicoding Academy</h2>
                <ul className="list-disc ml-6">
                  <li><Dicoding title="Belajar Prinsip Pemrograman SOLID" /></li>
                  <li>Memulai Pemrograman Dengan Java</li>
                  <li>Memulai Pemrograman Dengan C</li>
                  <li>Belajar Dasar Pemrograman Web</li>
                  <li>Belajar Dasar Pemrograman JavaScript</li>
                  <li>Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)</li>
                  <li>Architecting on AWS (Membangun Arsitektur Cloud di AWS)</li>
                  <li>Belajar Dasar-Dasar DevOps</li>
                  <li>Belajar Jaringan Komputer untuk Pemula</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl">Progate</h2>
                <ul className="list-disc ml-6">
                  <li>HTML & CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                </ul>
              </div>
            </div>

            <div>
              <h1 className="font-bold text-2xl">Education</h1>
              <ul className="list-disc ml-6">
                <li>
                  <div>
                    <p>2016 - 2019</p>
                    <p>SMA N 2 Banguntapan</p>
                  </div>
                </li>
                <li>
                  <div>
                    <p>Current</p>
                    <p>Universitas Sanata Dharma</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <div>
                <h1 className="font-bold text-2xl">Language</h1>
                <ul className="list-disc ml-6">
                  <li>Indonesia</li>
                  <li>English</li>
                </ul>
              </div>

              <div className="mt-14">
                <h1 className="font-bold text-2xl">Tools</h1>
                <ul className="list-disc ml-6">
                  <li>Figma</li>
                  <li>Visual Studio Code</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default About;