import React from "react";
import styles from "./AboutUs.module.css";
import CAD from "./CAD.jpg";
import AS from "./alexStoica.jpg";
import MC from "./mihaiCiocan.jpg";
import BI from "./bogdanIsar.jpg";
import MV from "./mateiVlad.jpg";
import CA from "./capanuAndrei.jpg";

export default function AboutUs() {
  return (
    <div className={styles["about-us"]}>
      <div className={`container-center`}>
        <h1 className={styles["info-title-about-section"]}>About Us</h1>
      </div>
      <div className={`container-center`}>
        <h4 className={`${styles["aboutus-text"]}`}>
          Meet the amazing team behind this project and find out more about how
          we work.
        </h4>
      </div>
      {/* first set */}
      <div className={`row ${styles["spacing-rows"]}`}>
        <div className={`col ${styles["spacing-column"]}`}>
          <div className={`row ${styles["spacing-left"]}`}>
            <div className={`col-md-5 ${styles["spacing-image"]}`}>
              <div className={styles["card-image"]}>
                <div>
                  <img className={styles["img-responsive"]} src={CA} />
                </div>
              </div>
            </div>
            <div className={`col-md-7`}>
              <div className={styles["card-body"]}>
                <h4 className={styles["card-title"]}> Capanu Andrei </h4>
                <p className={styles["card-description"]}>
                  {" "}
                  Capanu Andrei is a full professor at University Politehnica of
                  Bucharest (UPB) with a strong background in Computer Science
                  applied in Education. He has extensive experience in national
                  and international research projects with more than 200
                  published papers.{" "}
                </p>
                <div className={styles["card-footer"]}>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/capanu-andrei-claudiu-5a953a222/"
                    className={`btn btn-icon btn-neutral btn-linkedin`}
                    id={styles["card-icon"]}
                  >
                    <i className={`fab fa-linkedin`}></i>Linkedin
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`col ${styles["spacing-column"]}`}>
          <div className={`row ${styles["spacing-right"]}`}>
            <div className={`col-md-5 ${styles["spacing-image"]}`}>
              <div className={`card-image`}>
                <div>
                  <img className={styles["img-responsive"]} src={MC} />
                </div>
              </div>
            </div>
            <div className={`col-md-7`}>
              <div className={`card-body`}>
                <h4 className={styles["card-title"]}> Ciocan Mihai </h4>
                <p className={styles["card-description"]}>
                  {" "}
                  Ciocan Mihai is a full professor at University Politehnica of
                  Bucharest (UPB) with a strong background in Computer Science
                  applied in Education. He has extensive experience in national
                  and international research projects with more than 200
                  published papers.{" "}
                </p>
                <div className={styles["card-footer"]}>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/mihai-ciocan/"
                    className={`btn btn-icon btn-neutral btn-linkedin`}
                    id={styles["card-icon"]}
                  >
                    <i className={`fab fa-linkedin`}></i>Linkedin
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* second set */}

      <div className={`row ${styles["spacing-rows"]}`}>
        <div className={`col ${styles["spacing-column"]}`}>
          <div className={`row ${styles["spacing-left"]}`}>
            <div className={`col-md-5 ${styles["spacing-image"]}`}>
              <div className={styles["card-image"]}>
                <div>
                  <img className={styles["img-responsive"]} src={CAD} />
                </div>
              </div>
            </div>
            <div className={`col-md-7`}>
              <div className={styles["card-body"]}>
                <h4 className={styles["card-title"]}>Cristescu Alexandru</h4>
                <p className={styles["card-description"]}>
                  {" "}
                  Cristescu Alexandru is a full professor at University
                  Politehnica of Bucharest (UPB) with a strong background in
                  Computer Science applied in Education. He has extensive
                  experience in national and international research projects
                  with more than 200 published papers.{" "}
                </p>
                <div className={styles["card-footer"]}>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/alexandru-daniel-cristescu-1424b7206/"
                    className={`btn btn-icon btn-neutral btn-linkedin`}
                    id={styles["card-icon"]}
                  >
                    <i className={`fab fa-linkedin`}></i>Linkedin
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`col ${styles["spacing-column"]}`}>
          <div className={`row ${styles["spacing-right"]}`}>
            <div className={`col-md-5 ${styles["spacing-image"]}`}>
              <div className={`card-image`}>
                <div>
                  <img className={styles["img-responsive"]} src={BI} />
                </div>
              </div>
            </div>
            <div className={`col-md-7`}>
              <div className={`card-body`}>
                <h4 className={styles["card-title"]}>Isar Bogdan</h4>
                <p className={styles["card-description"]}>
                  {" "}
                  Isar Bogdan is a full professor at University Politehnica of
                  Bucharest (UPB) with a strong background in Computer Science
                  applied in Education. He has extensive experience in national
                  and international research projects with more than 200
                  published papers.{" "}
                </p>
                <div className={styles["card-footer"]}>
                  <a
                    target="_blank"
                    href="#"
                    className={`btn btn-icon btn-neutral btn-linkedin`}
                    id={styles["card-icon"]}
                  >
                    <i className={`fab fa-linkedin`}></i>Linkedin
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*third set */}
      <div className={`row ${styles["spacing-rows"]}`}>
        <div className={`col ${styles["spacing-column"]}`}>
          <div className={`row ${styles["spacing-left"]}`}>
            <div className={`col-md-5 ${styles["spacing-image"]}`}>
              <div className={styles["card-image"]}>
                <div>
                  <img className={styles["img-responsive"]} src={MV} />
                </div>
              </div>
            </div>
            <div className={`col-md-7`}>
              <div className={styles["card-body"]}>
                <h4 className={styles["card-title"]}>Matei Vlad</h4>
                <p className={styles["card-description"]}>
                  {" "}
                  Matei Vlad is a full professor at University Politehnica of
                  Bucharest (UPB) with a strong background in Computer Science
                  applied in Education. He has extensive experience in national
                  and international research projects with more than 200
                  published papers.{" "}
                </p>
                <div className={styles["card-footer"]}>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/vlad-m-9730271b7/"
                    className={`btn btn-icon btn-neutral btn-linkedin`}
                    id={styles["card-icon"]}
                  >
                    <i className={`fab fa-linkedin`}></i>Linkedin
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`col ${styles["spacing-column"]}`}>
          <div className={`row ${styles["spacing-right"]}`}>
            <div className={`col-md-5 ${styles["spacing-image"]}`}>
              <div className={`card-image`}>
                <div>
                  <img className={styles["img-responsive"]} src={AS} />
                </div>
              </div>
            </div>
            <div className={`col-md-7`}>
              <div className={`card-body`}>
                <h4 className={styles["card-title"]}>Stoica Alexandru</h4>
                <p className={styles["card-description"]}>
                  {" "}
                  Stoica Alexandru is a full professor at University Politehnica
                  of Bucharest (UPB) with a strong background in Computer
                  Science applied in Education. He has extensive experience in
                  national and international research projects with more than
                  200 published papers.{" "}
                </p>
                <div className={styles["card-footer"]}>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/alexandru-stoica-0418031a7/"
                    className={`btn btn-icon btn-neutral btn-linkedin`}
                    id={styles["card-icon"]}
                  >
                    <i className={`fab fa-linkedin`}></i>Linkedin
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
