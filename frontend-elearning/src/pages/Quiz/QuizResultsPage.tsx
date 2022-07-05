import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    const init = async () => {
      const courses = await getPopularCourses();
      await getSectionsAvgGrade(1);
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
    const mockToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0ZWFjaGVyIiwiaXNzIjoid3d3LmdvYWxkaWdnZXJzLmNvbSIsInN1YiI6IjM6c2Rhc2QifQ.-nEWzUxi7Zkc2BnLxxRrZuXp0pJJJDKIhNETu4pEXMI";

    const courses: PopularCourseGetDTO[] =
      await CourseService.getPopularCourses(mockToken);

    setPopularCourses(courses);

    return courses;
  };

  const getSectionsAvgGrade = async (
    courseId: number
  ): Promise<SectionAvgGrade[]> => {
    const mockToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0ZWFjaGVyIiwiaXNzIjoid3d3LmdvYWxkaWdnZXJzLmNvbSIsInN1YiI6IjM6c2Rhc2QifQ.-nEWzUxi7Zkc2BnLxxRrZuXp0pJJJDKIhNETu4pEXMI";

    const sections: SectionAvgGrade[] =
      await CourseService.getAvgGradeForSections(courseId, mockToken);

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

  const studentLinks: CustomNavLink[] = [
    { text: "Show notes", href: "#" },
    { text: "Quiz results", href: "#" },
    { text: "Log out", href: "/", onClick: onLogout },
  ];

  const teacherLinks: CustomNavLink[] = [
    { text: "Listing courses", href: "#" },
    { text: "Quiz results", href: "#" },
    { text: "Log out", href: "/", onClick: onLogout },
  ];

  return (
    <React.Fragment>
      <NavBar links={teacherLinks}></NavBar>
      <div className={styles["content"]}>
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
      </div>
    </React.Fragment>
  );
};

export default QuizResultsPage;
