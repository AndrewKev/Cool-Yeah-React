import React, { Component, Fragment } from "react";

// css
import '../style/output.css';

// image
import pp from '../image/Ellipse1.png';

// course component
import Dicoding from "../components/aboutComponent/Dicoding";
import Progate from "../components/aboutComponent/Progate";
import Skill from "../components/aboutComponent/Skill";

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

    const progateList = [
      {
        title: 'HTML & CSS'
      },
      {
        title: 'JavaScript'
      },
      {
        title: 'React'
      }
    ]

    const skills = [
      {
        name: 'HTML'
      },
      {
        name: 'CSS'
      },
      {
        name: 'JavaScript'
      },
      {
        name: 'Java'
      },
      {
        name: 'SQL'
      },
      {
        name: 'Bootstrap'
      },
      {
        name: 'Tailwind'
      },
      {
        name: 'React'
      }
    ]

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
                {skills.map((skill) => {
                  return (
                    <li><Skill title={skill.name} /></li>
                  )
                })}
              </ul>
            </div>
          </div>

          <div className="flex justify-around pt-5">
            <div>
              <h1 className="font-bold text-2xl">Course Exp</h1>
              <div>
                <h2 className="text-xl">Dicoding Academy</h2>
                <ul className="list-disc ml-6">
                  {dicodingList.map((dList) => {
                    return (
                      <li><Dicoding title={dList.title} /></li>
                    )
                  })}
                </ul>
              </div>
              <div>
                <h2 className="text-xl">Progate</h2>
                <ul className="list-disc ml-6">
                  {progateList.map((pList) => {
                    return (
                      <li><Progate title={pList.title} /></li>
                    )
                  })}
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