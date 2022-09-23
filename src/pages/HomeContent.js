import React, { Fragment } from "react";
import { Link } from "react-router-dom";

// image
import kevin from '../image/kevin.png'

// import Sosmed from "../components/Sosmed";


class HomeContent extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="flex justify-between pt-20 px-32">
          <div className="mt-24">
            <div className="flex">
              <svg width="29" height="25" viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M1.90625 0.90625C1.64932 0.90625 1.40292 1.00831 1.22124 1.18999C1.03956 1.37167 0.9375 1.61807 0.9375 1.875V11.175C0.9375 11.8111 1.06279 12.441 1.30621 13.0286C1.54963 13.6163 1.90642 14.1503 2.3562 14.6C3.26458 15.5084 4.49661 16.0188 5.78125 16.0188H24.7552L18.2704 22.5016C18.0885 22.6835 17.9863 22.9302 17.9863 23.1875C17.9863 23.4448 18.0885 23.6915 18.2704 23.8734C18.4523 24.0553 18.699 24.1575 18.9563 24.1575C19.2135 24.1575 19.4602 24.0553 19.6421 23.8734L27.7796 15.7359C27.8698 15.6459 27.9414 15.539 27.9903 15.4213C28.0391 15.3036 28.0642 15.1774 28.0642 15.05C28.0642 14.9226 28.0391 14.7964 27.9903 14.6787C27.9414 14.561 27.8698 14.4541 27.7796 14.3641L20.0296 6.61413C19.8477 6.43222 19.601 6.33003 19.3438 6.33003C19.0865 6.33003 18.8398 6.43222 18.6579 6.61413C18.476 6.79603 18.3738 7.04275 18.3738 7.3C18.3738 7.55725 18.476 7.80397 18.6579 7.98587L24.7552 14.0813H5.78125C5.01046 14.0813 4.27125 13.7751 3.72622 13.23C3.18119 12.685 2.875 11.9458 2.875 11.175V1.875C2.875 1.61807 2.77294 1.37167 2.59126 1.18999C2.40958 1.00831 2.16318 0.90625 1.90625 0.90625Z"
                  fill="#06283D" />
              </svg>
              <span className="ml-3 text-2xl text-blue-donk">Hello</span>
            </div>
            <h1 className="font-bold text-[32px] text-blue-donk">Andreas Kevin Maheswara</h1>
            <p className="w-[19rem] text-xl text-blue-donk">Mahasiswa, Web Desainer, Programmer, Yogyakarta, Indonesia</p>

            <Link to="/about">
              <button
                className="mb-16 mt-14 bg-[#E23E57] py-[10px] px-[31px] text-white font-bold rounded-tl-xl rounded-br-xl rounded-bl-sm rounded-tr-sm hover:bg-[#06283D]">Read
                More</button>
            </Link>
            <div className="flex">
              {/* <Sosmed />
              <Sosmed />
              <Sosmed /> */}
              {/* <button>
                <div className="mr-6">
                  <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="hover:fill-[#06283D]" fill-rule="evenodd" clip-rule="evenodd"
                      d="M10.2852 0.105C12.1514 0.0190909 12.7464 0 17.5 0C22.2536 0 22.8486 0.0206818 24.7132 0.105C26.5777 0.189318 27.8505 0.486818 28.9641 0.917955C30.1302 1.35864 31.1882 2.0475 32.0632 2.93841C32.9541 3.81182 33.6414 4.86818 34.0805 6.03591C34.5132 7.14955 34.8091 8.42227 34.895 10.2836C34.9809 12.153 35 12.748 35 17.5C35 22.2536 34.9793 22.8486 34.895 24.7148C34.8107 26.5761 34.5132 27.8489 34.0805 28.9625C33.6414 30.1304 32.9529 31.1885 32.0632 32.0632C31.1882 32.9541 30.1302 33.6414 28.9641 34.0805C27.8505 34.5132 26.5777 34.8091 24.7164 34.895C22.8486 34.9809 22.2536 35 17.5 35C12.7464 35 12.1514 34.9793 10.2852 34.895C8.42386 34.8107 7.15114 34.5132 6.0375 34.0805C4.86965 33.6413 3.81153 32.9529 2.93682 32.0632C2.04651 31.1892 1.35755 30.1316 0.917955 28.9641C0.486818 27.8505 0.190909 26.5777 0.105 24.7164C0.0190909 22.847 0 22.252 0 17.5C0 12.7464 0.0206818 12.1514 0.105 10.2868C0.189318 8.42227 0.486818 7.14955 0.917955 6.03591C1.3582 4.86831 2.04769 3.81073 2.93841 2.93682C3.81188 2.04671 4.86893 1.35775 6.03591 0.917955C7.14955 0.486818 8.42227 0.190909 10.2836 0.105H10.2852ZM24.5716 3.255C22.7261 3.17068 22.1725 3.15318 17.5 3.15318C12.8275 3.15318 12.2739 3.17068 10.4284 3.255C8.72136 3.33295 7.79545 3.61773 7.17818 3.85795C6.36205 4.17614 5.77818 4.55318 5.16568 5.16568C4.58507 5.73054 4.13824 6.41818 3.85795 7.17818C3.61773 7.79545 3.33295 8.72136 3.255 10.4284C3.17068 12.2739 3.15318 12.8275 3.15318 17.5C3.15318 22.1725 3.17068 22.7261 3.255 24.5716C3.33295 26.2786 3.61773 27.2045 3.85795 27.8218C4.13795 28.5807 4.585 29.2695 5.16568 29.8343C5.73045 30.415 6.41932 30.862 7.17818 31.142C7.79545 31.3823 8.72136 31.667 10.4284 31.745C12.2739 31.8293 12.8259 31.8468 17.5 31.8468C22.1741 31.8468 22.7261 31.8293 24.5716 31.745C26.2786 31.667 27.2045 31.3823 27.8218 31.142C28.638 30.8239 29.2218 30.4468 29.8343 29.8343C30.415 29.2695 30.862 28.5807 31.142 27.8218C31.3823 27.2045 31.667 26.2786 31.745 24.5716C31.8293 22.7261 31.8468 22.1725 31.8468 17.5C31.8468 12.8275 31.8293 12.2739 31.745 10.4284C31.667 8.72136 31.3823 7.79545 31.142 7.17818C30.8239 6.36205 30.4468 5.77818 29.8343 5.16568C29.2694 4.58511 28.5818 4.13829 27.8218 3.85795C27.2045 3.61773 26.2786 3.33295 24.5716 3.255ZM15.2648 22.8948C16.5131 23.4144 17.9031 23.4845 19.1974 23.0932C20.4917 22.7018 21.6099 21.8733 22.3612 20.749C23.1125 19.6248 23.4501 18.2746 23.3164 16.929C23.1828 15.5835 22.5861 14.3261 21.6284 13.3716C21.0179 12.7614 20.2797 12.2942 19.4669 12.0036C18.6541 11.713 17.787 11.6063 16.9281 11.691C16.0691 11.7757 15.2396 12.0498 14.4992 12.4936C13.7589 12.9374 13.1262 13.5398 12.6466 14.2575C12.1671 14.9752 11.8526 15.7902 11.7258 16.644C11.5991 17.4978 11.6632 18.3691 11.9136 19.1951C12.164 20.0212 12.5944 20.7814 13.1739 21.4211C13.7533 22.0609 14.4674 22.5642 15.2648 22.8948ZM11.1395 11.1395C11.9748 10.3043 12.9664 9.64171 14.0577 9.18967C15.1491 8.73762 16.3188 8.50496 17.5 8.50496C18.6812 8.50496 19.8509 8.73762 20.9423 9.18967C22.0336 9.64171 23.0252 10.3043 23.8605 11.1395C24.6957 11.9748 25.3583 12.9664 25.8103 14.0577C26.2624 15.1491 26.495 16.3188 26.495 17.5C26.495 18.6812 26.2624 19.8509 25.8103 20.9423C25.3583 22.0336 24.6957 23.0252 23.8605 23.8605C22.1736 25.5474 19.8856 26.495 17.5 26.495C15.1144 26.495 12.8264 25.5474 11.1395 23.8605C9.45265 22.1736 8.50496 19.8856 8.50496 17.5C8.50496 15.1144 9.45265 12.8264 11.1395 11.1395ZM28.49 9.84455C28.697 9.64929 28.8627 9.41449 28.9773 9.15405C29.0919 8.89361 29.1531 8.61281 29.1573 8.3283C29.1614 8.04378 29.1084 7.76133 29.0014 7.49765C28.8945 7.23398 28.7357 6.99445 28.5345 6.79324C28.3333 6.59204 28.0938 6.43325 27.8301 6.32628C27.5664 6.21931 27.2839 6.16633 26.9994 6.17047C26.7149 6.17462 26.4341 6.23581 26.1737 6.35043C25.9132 6.46504 25.6784 6.63074 25.4832 6.83773C25.1034 7.24027 24.8955 7.77497 24.9036 8.3283C24.9117 8.88163 25.1351 9.41004 25.5264 9.80134C25.9177 10.1926 26.4461 10.416 26.9994 10.4241C27.5528 10.4322 28.0875 10.2243 28.49 9.84455Z"
                      fill="#E23E57" />
                  </svg>
                </div>
              </button>
              <button>
                <div className="mr-6">
                  <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="hover:fill-[#06283D]" fill-rule="evenodd" clip-rule="evenodd"
                      d="M0.902466 17.5977C0.902466 26.2981 7.22142 33.5329 15.4858 35V22.3606H11.1108V17.5H15.4858V13.6106C15.4858 9.23563 18.3048 6.80604 22.2918 6.80604C23.5548 6.80604 24.9168 7 26.1798 7.19396V11.6667H23.9441C21.8048 11.6667 21.3191 12.7356 21.3191 14.0977V17.5H25.9858L25.2085 22.3606H21.3191V35C29.5835 33.5329 35.9025 26.2996 35.9025 17.5977C35.9025 7.91875 28.0275 0 18.4025 0C8.77747 0 0.902466 7.91875 0.902466 17.5977Z"
                      fill="#E23E57" />
                  </svg>
                </div>
              </button>
              <button>
                <div className="mr-6">
                  <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="hover:fill-[#06283D]" fill-rule="evenodd" clip-rule="evenodd"
                      d="M26.2017 20.9738C25.7672 20.7565 23.6365 19.7094 23.2399 19.5636C22.8432 19.4192 22.5545 19.3477 22.2642 19.7823C21.9755 20.214 21.1457 21.1911 20.8934 21.4798C20.6397 21.77 20.3874 21.805 19.9542 21.5892C19.5211 21.3704 18.124 20.914 16.4688 19.4382C15.1811 18.289 14.3105 16.87 14.0582 16.4354C13.8059 16.0023 14.0305 15.7675 14.2478 15.5517C14.4432 15.3577 14.6809 15.0457 14.8982 14.7934C15.1155 14.5396 15.187 14.3588 15.3313 14.0686C15.4772 13.7798 15.4043 13.5275 15.2949 13.3102C15.187 13.093 14.3207 10.9594 13.959 10.0917C13.6076 9.24734 13.2503 9.36254 12.9849 9.34796C12.7311 9.33629 12.4424 9.33338 12.1536 9.33338C11.8649 9.33338 11.3953 9.44129 10.9986 9.87588C10.6005 10.309 9.48197 11.3575 9.48197 13.4911C9.48197 15.6232 11.0336 17.6838 11.2509 17.974C11.4682 18.2627 14.3061 22.6406 18.6534 24.5175C19.6888 24.9638 20.4953 25.2306 21.1238 25.429C22.1622 25.76 23.1072 25.7133 23.8538 25.6011C24.6851 25.4771 26.4176 24.5525 26.7792 23.5404C27.1394 22.5284 27.1394 21.6606 27.0315 21.4798C26.9236 21.299 26.6349 21.1911 26.2003 20.9738H26.2017ZM18.2947 31.7698H18.2888C15.7068 31.7703 13.1721 31.0762 10.9505 29.7602L10.4255 29.4481L4.96844 30.8802L6.42531 25.5602L6.0826 25.0148C4.63905 22.717 3.87512 20.0576 3.87906 17.344C3.88198 9.39609 10.3482 2.92985 18.3005 2.92985C22.1505 2.92985 25.7701 4.43193 28.4913 7.15609C29.8335 8.49277 30.8974 10.0823 31.6213 11.8328C32.3452 13.5833 32.7149 15.4599 32.7088 17.3542C32.7059 25.3021 26.2397 31.7698 18.2947 31.7698ZM30.5621 5.08672C28.9553 3.46932 27.0435 2.18688 24.9375 1.31372C22.8315 0.440569 20.5731 -0.00594452 18.2932 5.97588e-05C8.73531 5.97588e-05 0.953651 7.78025 0.950734 17.3425C0.946305 20.3857 1.74461 23.3762 3.26511 26.0123L0.804901 35L9.99822 32.5879C12.5414 33.9735 15.3913 34.6995 18.2874 34.6996H18.2947C27.8526 34.6996 35.6342 26.9194 35.6371 17.3557C35.6442 15.0767 35.1993 12.8189 34.3282 10.713C33.4571 8.60708 32.177 6.69478 30.5621 5.08672Z"
                      fill="#E23E57" />
                  </svg>
                </div>
              </button> */}
            </div>

          </div>
          <div>
            <img src={kevin} alt="" />
          </div>
        </div>
      </Fragment>
    )
  }
}

export default HomeContent;