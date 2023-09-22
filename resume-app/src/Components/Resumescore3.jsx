import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Link,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import circle from "../images/circle.png";
import Ellipse from "../images/Ellipse.png";
import fullbar from "../images/fullbar.png";
import emptybar from "../images/emptybar.png";
import tick from "../images/tick.png";
import cross from "../images/cross.png";

function Resumescore3() {
  const [current, setCurrent] = useState(-1);
  const changeState = (panel) => (e, newValue) => {
    setCurrent(newValue ? panel : -1);
  };
  return (
    <div className="max-w-[1440px] w-[100%] h-[1091px] flex justify-between">
      <section className="w-[317px] h-1091px bg-[#F6F6FB]">
        <nav className="overflow-hidden  mt-[35px] rounded-[10px]">
          <h4 className="text-[20px] font-normal text-[#000000] ml-[52px] mb-[30px]">
            <i class="fa-solid fa-angle-left"></i>&nbsp; Back to Overview
          </h4>
          <ul className="nav-upper a">
            <div className="resume_bg">
              <li>
                <a href="#">
                  <i class="fa-solid fa-house icnn"></i> &nbsp; Resume Score
                </a>
              </li>
            </div>
            <li>
              <a href="#">
                <i class="fa-solid fa-fire icn"></i> &nbsp; Summary
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-sharp fa-solid fa-pen-to-square icn"></i> &nbsp;
                Editor
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-solid fa-file-lines icn"></i> &nbsp;Cover letter
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-solid fa-bookmark icn"></i> &nbsp; Saved
              </a>
            </li>
          </ul>
          <ul className="nav-down mt-[219px]">
            <li>
              <a href="#">
                <i class="fa-solid fa-gear icn"></i> &nbsp; Setting
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-solid fa-circle-question icn"></i> &nbsp; help
              </a>
            </li>
            <div className="logout_heading a mt-[20px]">
              <li>
                <a href="#">
                  <i class="fa-solid fa-right-from-bracket icn logout"></i>
                  &nbsp;Logout
                </a>
              </li>
            </div>
          </ul>
        </nav>
      </section>
      <section className="w-[1123px] h-[1091px]">
        <div className="flex">
          <div className="w-[272px] h-[304px] bg-[#666DA2] rounded-[18px] ml-[67px] mt-[39px]">
            <div className="flex justify-center mt-[18px]">
              <div className="relative">
                <img src={circle} alt="circle is not uploaded" />
                <div className="w-[100%] h-[100%] flex justify-center items-center absolute top-[-55px]">
                  <div className="text-[#FFF] leading-none">
                    <h2 className="text-[31px] font-medium">83% </h2>
                    <br />
                    <p className="text-[13px] font-normal">MATCH</p>
                  </div>
                </div>
                <div className="flex mt-[35px]">
                  <div class="circle">
                    <span class="dot1"></span> &nbsp;
                    <i class="fa-solid fa-angle-right"></i>60
                  </div>
                  <div class="circle">
                    <span class="dot2"></span> &nbsp;
                    <i class="fa-solid fa-angle-right"></i>75
                  </div>
                  <div class="circle">
                    <span class="dot3"></span> &nbsp;
                    <i class="fa-solid fa-angle-left"></i>80
                  </div>
                </div>
                <div className="mt-[10px]">
                  <h1 className="text-[#F6F6FB] text-[24px] font-normal text-center">
                    ATS Score
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[550px] h-[198px] rounded-[9px] ml-[116px] mt-[43px] bg-[#F6F6FB] shadow">
            <div className="flex rounded-[9px]">
              <div className="w-[112px] mt-[10px] ml-[30px] mb-[15px] profile">
                <img src={Ellipse} alt="not upload" />
                <p className="font-normal text-[20px] leading-none pt-[11px]">
                  Jane <br /> Smith
                </p>
                <h5 className="text-[10px] pt-[5px] pb-[3px]">
                  Business Manager
                </h5>
              </div>
              <div className="w-[427px] ml-[20px] pt-[18px] mb-[13px] contact">
                <h2 className="text-[20px] font-normal text-[#000000]">
                  Contact
                </h2>
                <p>
                  <i class="fa-solid fa-phone"></i> &nbsp; +0415 844 4278
                </p>
                <p>
                  <i class="fa-solid fa-envelope icnnn"></i> &nbsp;
                  JANE.SMITH@GMAIL.COM
                </p>
                <p>
                  <i class="fa-solid fa-globe icnnn"></i> &nbsp;{" "}
                  <span className="text-[#FFC127]">
                    <b>MISSING CONTENT</b>
                  </span>
                </p>
                <p>
                  <i class="fa-solid fa-location-dot icnnn"></i> &nbsp;
                  MELBOURN, AUSTRALIA
                </p>
              </div>
            </div>
            <div className="mt-[20px] text-end">
              <a href="#" className="import_btn">
                <i class="fa-solid fa-cloud-arrow-up"></i> &nbsp;Import
              </a>
              <a href="#" className="filter_btn">
                Filter
              </a>
            </div>
          </div>
        </div>
        <section className="w-[1022px] h-[710px] bg-[#F6F6FB] rounded-[3px] ml-[17px] mt-[36px] ">
          <h1 className="ml-[70px] font-normal text-[24px] text-[#000000] pt-[3px] mb-[9px]">
            Summary
          </h1>
          <div className="flex justify-evenly">
            <div>
              <img src={fullbar} alt="not show" />
              <p className="pt-[9px]">STEP 1</p>
            </div>
            <div>
              <img src={fullbar} alt="not show" />
              <p className="pt-[9px]">STEP 2</p>
            </div>
            <div>
              <img src={fullbar} alt="not show" />
              <p className="pt-[9px]">STEP 3</p>
            </div>
          </div>

          <div className="line pt-[79px]">
            <hr />
          </div>
          {/* Accordions in ReactJssss */}
          <div className="max-w-[878px] mx-auto pt-[22px]">
            <Accordion expanded={current === 0} onChange={changeState(0)}>
              <AccordionSummary>
                <Typography>
                  <div className="flex justify-between gap-[164px] items-center">
                    <h3 className="font-normal text-[13px] text-[#000000]">
                      EXPERIENCE
                    </h3>
                    <img src={tick} />
                    <p className="w-[308px] h-[17px] font-normal text-[12px] text-[#000000]">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  <p className="font-normal text-[13px]">
                    Veniam deserunt irure consectetur laboris deserunt id aliqua
                    nostrud cupidatat ipsum in mollit labore. Labore elit fugiat
                    mollit nulla commodo excepteur dolor adipisicing do aliquip
                    ea exercitation dolor nulla. Aliquip voluptate sit culpa
                    cupidatat laboris aliquip ullamco eiusmod commodo qui
                    nostrud laborum pariatur laboris. Labore ad ipsum non fugiat
                    ut eu reprehenderit eu do exercitation aliqua minim magna
                    cillum. Deserunt ea ut nulla culpa reprehenderit aliquip et.
                    Ullamco ullamco commodo consequat laboris id sint anim
                    voluptate nisi duis eiusmod anim.
                  </p>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={current === 1} onChange={changeState(1)}>
              <AccordionSummary>
                <Typography>
                  <div className="w-[878px] mx-auto bg-[#666DA2] h-[82px] flex justify-between gap-[164px] items-center">
                    <h3 className="font-bold text-[13px] text-[#FFFFFF] uppercase ml-[22px]">
                      Certificates
                    </h3>
                    <img src={cross} className="ml-[-15px]" />
                    <p className="w-[308px] h-[17px] font-bold text-[11px] text-[#FFFFFF] mr-[141px]">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  <div className="w-[767px] h-[167px] mx-auto">
                    <div class="pt-10 flex mb-[35px]">
                      <span className="ml-[20px] h-[15px] w-[15px] bg-[#666DA2] rounded-[50%] inline"></span>
                      <p className="ml-[30px] font-normal text-[11px] ">
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                    </div>
                    <div class="flex">
                      <span className="ml-[20px] h-[15px] w-[15px] bg-[#666DA2] rounded-[50%] inline"></span>
                      <p className="ml-[30px] font-normal text-[11px]">
                        Lorem ipsum dolor sit amet consectetur. Sem velit proin
                        in <br /> aliquam ipsum urna auctor aliquam sed.
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-[90%] mx-auto text-end pt-10 mt-[145px] ">
            <Link
              href="/resumescore2"
              style={{ color: "#FFF",textDecoration:"none" }}
              className="bg-[#666DA2] rounded-[18px] text-[#FFFFFF] py-[5px] px-[20px]"
            >
              Next Step
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
}
export default Resumescore3;
