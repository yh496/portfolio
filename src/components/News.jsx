import React, { useState } from "react";
import Modal from "react-modal";
import Social from "./Social";

Modal.setAppElement("#root");

const News = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <>
      <div className="tokyo_tm_news">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>Blog</span>
              <h3>Latest Blogs</h3>
            </div>
          </div>
        </div>
        {/* END TITLE */}

        <ul>
          <li>
            <a href="https://yhuh.medium.com/how-to-easily-host-your-express-server-on-https-without-a-domain-name-dccd92b2438d">
            <div className="list_inner">
              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href="#">Youn Sung Huh</a>
                    <span>13 July 2021</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalOne}>
                  Host your Express server on https without a domain name
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalOne}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
            </div>
            </a>
          </li>
          {/* END SINGLE BLOG */}

          <li>
          <a href="https://yhuh.medium.com/first-hackathon-win-seoul-smart-mobility-expo-c7cb6523c4e7">
            <div className="list_inner">
              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href="#">Youn Sung Huh</a>
                    <span>03 July 2021</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalTwo}>
                  First hackathon win @ Seoul Smart Mobility Expo
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalTwo}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>

            </div>
            </a>
          </li>
          {/* END SINGLE BLOG */}

          <li>
            <a href="https://yhuh.medium.com/how-to-improve-video-resolution-without-pixelation-811fddb70e34">
            <div className="list_inner">
              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href="#">Youn Sung Huh</a>
                    <span>02 June 2021</span>
                  </p>
                </div>

                <h3 className="title" onClick={toggleModalThree}>
                  How to improve video resolution without pixelation
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalThree}>
                    <span>Read More</span>
                  </a>
                </div>
              </div>
              
            </div>
            {/* END LIST INNER */}
            </a>
          </li>
          {/* END SINGLE BLOG */}

          <li>
            <a href="https://yhuh.medium.com/what-i-learned-from-my-first-hackathon-784b07b9a0ef">
            <div className="list_inner">
              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href="#">Youn Sung Huh</a>
                    <span>30 May 2021</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalFour}>
                  What I learned from my first hackathon:
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalFour}>
                    <span>Read More</span>
                  </a>
                </div>
              </div>
            </div>
            </a>

            {/* END LIST INNER */}
          </li>
        </ul>
      </div>
    </>
  );
};

export default News;
