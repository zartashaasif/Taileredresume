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

function Resumescore1() {
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
              <img src={emptybar} alt="not show" />
              <p className="pt-[9px]">STEP 2</p>
            </div>
            <div>
              <img src={emptybar} alt="not show" />
              <p className="pt-[9px]">STEP 3</p>
            </div>
          </div>
          <div className="w-[881px] h-[16px] flex justify-around mt-[48px] mb-[20px]">
            <div className="font-normal text-[20px] text-[#000000]">
              <p>Features</p>
            </div>
            <div className="font-normal text-[20px] text-[#000000]">
              <p>Status</p>
            </div>
            <div className="font-normal text-[20px] text-[#000000]">
              <p>Description</p>
            </div>
          </div>
          <div class="line">
            <hr />
          </div>
          {/* Accordions in ReactJssss */}
          <div className="max-w-[878px] mx-auto pt-[21px]">
            <Accordion expanded={current === 0} onChange={changeState(0)}>
              <AccordionSummary>
                <Typography>
                  <div className="flex justify-between gap-[164px] items-center">
                    <h3 className="font-normal text-[13px] text-[#000000]">
                      SENTIMENT
                    </h3>
                    <img src={tick}  className="ml-[88px]" />
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
                  <div className="flex justify-between gap-[164px] items-center">
                    <h3 className="className=font-normal text-[13px] text-[#000000]">
                      CONTACT <br />
                      INFORMATION
                    </h3>
                    <img src={cross} className="ml-[70px]" />
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
            <Accordion expanded={current === 2} onChange={changeState(2)}>
              <AccordionSummary>
                <Typography>
                  <div className="w-[878px] mx-auto bg-[#666DA2] h-[50px] flex items-center">
                    <h3 className="font-semibold text-[13px] text-[#FFFFFF] ml-[20px]">
                      Cover Letter
                    </h3>
                    <img src={tick} className="ml-[240px]" />
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="flex justify-evenly w-[790px] mx-auto h-[218px] ">
                  <div class="w-[337px] h-[195px] bg-[#F6F6F6] text-center mt-[15px]">
                    <h3 className="font-normal text-[14px] uppercase mt-[18px] mb-[10px]">
                      Cover Letter 1
                    </h3>
                    <p className="w-[286px] mx-auto font-normal text-[13px] text-justify">
                      Lorem ipsum dolor sit amet consectetur. Eget dolor
                      elementum amet sed a molestie pharetra ullamcorper.
                      Consectetur quam sed at amet. Dictum faucibus magnis elit
                      consectetur egestas. Id posuere neque velit donec sit
                      interdum aliquam arcu. Habitant purus faucibus a lobortis
                      sit.
                    </p>
                  </div>
                  <div class="line"></div>
                  <div className="mt-[15px] w-[337px] h-[195px] bg-[#F6F6F6] text-center">
                    <h3 className="font-normal text-[14px] uppercase mt-[18px] mb-[10px]">
                      Cover Letter 2
                    </h3>
                    <p className="w-[286px] mx-auto font-normal text-[13px] text-justify">
                      Lorem ipsum dolor sit amet consectetur. Eget dolor
                      elementum amet sed a molestie pharetra ullamcorper.
                      Consectetur quam sed at amet. Dictum faucibus magnis elit
                      consectetur egestas. Id posuere neque velit donec sit
                      interdum aliquam arcu. Habitant purus faucibus a lobortis
                      sit.
                    </p>
                  </div>
                </div>
                <div class="missing_content">
                  <div class="mcontent">
                    <p>Missing Content</p>
                  </div>
                  <div class="image">
                    <img src={tick} />
                  </div>
                  <div class="mcontent">
                    <p>Website</p>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-[90%] mx-auto text-end pt-10 mt-[145px] ">
            <Link
              href="/resumescore2"
              style={{color: "#FFF",textDecoration:"none"}}
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
export default Resumescore1;
