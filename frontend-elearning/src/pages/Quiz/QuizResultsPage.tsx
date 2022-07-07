import React, { useEffect, useRef, useState } from "react";
import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";
import { useLocation, useNavigate, Location } from "react-router-dom";
import CustomNavLink from "../../models/CustomNavLink";
import NavBar from "../../Navbar/NavBar";
import styles from "./QuizResultsPage.module.css";
import "../global.css";
import UserAuth from "../../models/UserAuth";
import PopularCourseGetDTO from "../../models/Course/PopularCourseGetDTO";
import { CourseService } from "../../Services/Course/CourseService";
import SectionAvgGrade from "../../models/Course/Section/SectionAvgGrade";
import FooterMain from "../../FooterMain/FooterMain";
import ClassicButton from "../../components/Buttons/ClassicButton/ClassicButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
import { Parser } from "json2csv";

const QuizResultsPage = () => {
  const [loggedUser, setLoggedUser]: [
    UserAuth,
    React.Dispatch<React.SetStateAction<UserAuth>>
  ] = useState({
    name: "",
    role: "",
    token: "",
  });

  const [popularCourses, setPopularCourses] = useState<PopularCourseGetDTO[]>(
    []
  );
  const [sectionsAvgGrade, setSectionsAvgGrade] = useState<SectionAvgGrade[]>(
    []
  );

  const location: Location = useLocation();
  const navigate = useNavigate();
  const downloadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const init = async () => {
      const courses = await getPopularCourses();
      await getSectionsAvgGrade(courses[0].courseId);
    };

    setLoggedUser(location.state as UserAuth);
    init();
  }, []);

  const onLogout = () => {
    sessionStorage.removeItem("isAuth");
    navigate(`/loginPage`, {});
    // TODO: delete navigation history
  };

  const onDataPointSelection = async (
    event: MouseEvent,
    chartContext: any,
    config: any
  ) => {
    const label = config.w.config.labels[config.dataPointIndex];
    const value = config.w.config.series[config.dataPointIndex];

    const course = popularCourses.filter(
      (course) => course.courseName === label
    );
    const id = course[0].courseId;

    if (id) {
      getSectionsAvgGrade(id);
    }
  };

  const getPopularCourses = async (): Promise<PopularCourseGetDTO[]> => {
    const courses: PopularCourseGetDTO[] =
      await CourseService.getPopularCourses((location.state as UserAuth).token);

    setPopularCourses(courses);

    return courses;
  };

  const getSectionsAvgGrade = async (
    courseId: number
  ): Promise<SectionAvgGrade[]> => {
    const sections: SectionAvgGrade[] =
      await CourseService.getAvgGradeForSections(
        courseId,
        (location.state as UserAuth).token
      );

    setSectionsAvgGrade(sections);

    return sections;
  };

  const responsiveChartBreakpoints = [
    {
      breakpoint: 1300,
      options: {
        chart: {
          width: 450,
        },
      },
    },
  ];

  const chart1Options = {
    series: popularCourses.map(
      (popularCourse) => popularCourse.totalTakenQuizzes
    ),
    options: {
      labels: popularCourses.map((popularCourse) => popularCourse.courseName),
      legend: { fontSize: "15rem" },
      chart: {
        toolbar: {
          show: true,
        },
        events: {
          dataPointSelection: onDataPointSelection,
        },
      },
      responsive: responsiveChartBreakpoints,
    },
  };

  const chart2Options = {
    series: [
      {
        data: sectionsAvgGrade.map((sectionAvg) => sectionAvg.averageGrade),
      },
    ],
    options: {
      colors: ["#726abc"],
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: sectionsAvgGrade.map(
          (sectionAvg) => sectionAvg.sectionName
        ),
        labels: {
          style: {
            colors: [
              "#726abc",
              "#726abc",
              "#726abc",
              "#726abc",
              "#726abc",
              "#726abc",
              "#726abc",

              "#726abc",
            ],
            fontSize: "1.5rem",
          },
        },
      },
      responsive: responsiveChartBreakpoints,
    },
  };

  const goToTeacherReportModule = () => {
    navigate(`/quizChart`, { state: location.state });
  };

  const goToMainPage = () => {
    navigate(`/mainPage`, { state: location.state });
  };

  const teacherLinks: CustomNavLink[] = [
    { text: "Listing courses", href: "", onClick: goToMainPage },
    { text: "Quiz results", href: "/", onClick: goToTeacherReportModule },
    { text: "Log out", href: "/", onClick: onLogout },
  ];

  const downloadGrades = async () => {
    const grades = await CourseService.getAllGrades(
      (location.state as UserAuth).token
    );

    // const replacer = (key: any, value: any) => (value === null ? "" : value); // specify how you want to handle null values here
    // const header = Object.keys(grades[0]);
    // const csv = [
    //   header.join(","), // header row first
    //   ...grades.map((row: any) =>
    //     header
    //       .map((fieldName) => JSON.stringify(row[fieldName], replacer))
    //       .join(",")
    //   ),
    // ].join("\r\n");

    const fields = ["field1", "field2", "field3"];
    const opts = { fields };

    const parser = new Parser(opts);
    const csv = parser.parse(grades);

    console.log(csv);
    const fileData = new Blob([csv]);
    const url = window.URL.createObjectURL(fileData);
    const downloadAnchor = document.createElement("a");
    downloadAnchor.style.display = "none";
    downloadAnchor.href = url;
    downloadAnchor.download = "results.csv";
    downloadRef.current?.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadRef.current?.removeChild(downloadAnchor);
    window.URL.revokeObjectURL(url);

    return grades;
  };

  return (
    <React.Fragment>
      <NavBar links={teacherLinks}></NavBar>
      <div className={styles["content"]} ref={downloadRef}>
        <h1
          className={`${styles["header--primary"]} ${styles["course-popularity"]}`}
        >
          Courses Popularity
        </h1>
        <h1
          className={`${styles["header--primary"]} ${styles["text-centered"]}`}
        >
          Average Grade per Course
        </h1>
        <div className={styles["chart"]}>
          <ReactApexChart
            options={chart1Options.options}
            series={chart1Options.series}
            type="pie"
            width="700px"
          />
        </div>
        <div className={styles["chart"]}>
          <ReactApexChart
            options={chart2Options.options}
            series={chart2Options.series}
            type="bar"
            width="700px"
          />
        </div>
        <ClassicButton
          className={`${styles["btn-download"]}`}
          onClick={downloadGrades}
        >
          <FontAwesomeIcon
            className={styles["btn__icon"]}
            icon={faBookOpenReader}
          />
          <span className={styles["btn__text"]}>DOWNLOAD ALL GRADES</span>
        </ClassicButton>
      </div>
      <FooterMain className={styles["footer"]} />
    </React.Fragment>
  );
};

export default QuizResultsPage;
