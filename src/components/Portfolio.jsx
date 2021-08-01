import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

const Portfolio = () => {
  return (
    <>
      <SimpleReactLightbox>
        <div className="tokyo_tm_portfolio">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                {/* <span>Portfolio</span>                 */}
                <h3> Portfolio </h3>

              </div>
            </div>
          </div>
          {/* END TOKYO_TM_TITLE */}
          <div className="portfolio_filter">
            <Tabs>
              <TabList>
                <Tab>All</Tab>
                <Tab> Work </Tab>
                <Tab> Personal </Tab>
              </TabList>
              {/* END TABLIST */}
              <div className="list_wrapper">
                  <TabPanel>
                    <ul className="portfolio_list">
                      <li>
                        <div className="inner">
                          <div className="entry">
                            <a href="https://apps.apple.com/us/app/newface-bring-images-to-life/id1561310835" target="_blank">
                              <img
                                src="assets/img/portfolio/portfolio1.jpg"
                                alt="Portfolio"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      {/* END VIMEO */}
                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="https://aistudios.com/" target="_blank">
                              <img
                                src="assets/img/portfolio/portfolio2.jpg"
                                alt="portfolio"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      {/* END YOUTUBE */}
                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="http://52.201.254.22:3000/" target="_blank">
                              <img
                                src="assets/img/portfolio/portfolio3.jpg"
                                alt="portfolio"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="https://13-209-15-249.nip.io:8443/main" target="_blank">
                              <img
                                src="assets/img/portfolio/portfolio4.jpg"
                                alt="portfolio"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="https://github.com/all-nighter" target="_blank">
                              <img
                                src="assets/img/portfolio/portfolio5.jpg"
                                alt="portfolio"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                    {/* END PORTFOLIO LIST */}
                  </TabPanel>
                  {/* END ALL PORTFOLIO GALLERY */}

                  <TabPanel>
                    <ul className="portfolio_list">
                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/portfolio1.jpg">
                              <img
                                src="assets/img/portfolio/portfolio1.jpg"
                                alt="Ui/Ux"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      {/* END VIMEO */}
                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="https://aistudios.com/" target="_blank">
                              <img
                                src="assets/img/portfolio/portfolio2.jpg"
                                alt="portfolio"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      {/* END VIMEO */}
                    </ul>
                    {/* END PORTFOLIO LIST */}
                  </TabPanel>
                  {/* END UI/UX GALLERY */}

                  <TabPanel>
                    <ul className="portfolio_list">
                    <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="http://52.201.254.22:3000/" target="_blank">
                              <img
                                src="assets/img/portfolio/portfolio3.jpg"
                                alt="portfolio"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="https://13-209-15-249.nip.io:8443/main" target="_blank">
                              <img
                                src="assets/img/portfolio/portfolio4.jpg"
                                alt="portfolio"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="https://github.com/all-nighter" target="_blank">
                              <img
                                src="assets/img/portfolio/portfolio5.jpg"
                                alt="portfolio"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      {/* END YOUTUBE */}
                    </ul>
                    {/* END PORTFOLIO LIST */}
                  </TabPanel>
                  {/* END WEBSITE GALLERY */}
                  {/* END CREATIVE PORTFOLIO GALLERY */}
                {/* END TABPANEL */}
              </div>
              {/* END LIST WRAPPER */}
            </Tabs>
          </div>
        </div>
      </SimpleReactLightbox>
    </>
  );
};

export default Portfolio;
