import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";
import { useLocation, useNavigate, Location } from "react-router-dom";
import CustomNavLink from "../../models/CustomNavLink";
import NavBar from "../../Navbar/NavBar";
import styles from "./QuizResultsPage.module.css";
import "../global.css";
import UserAuth from "../../models/UserAuth";

const QuizResultsPage = () => {
  const chart1Options = {
    series: [44, 55, 13, 43, 22],
    options: {
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      chart: {
        toolbar: {
          show: true,
        },
        events: {
          dataPointSelection: (
            event: MouseEvent,
            chartContext: any,
            config: any
          ) => {
            // console.log(event);
            // console.log(chartContext);
            // console.log(config);
            console.log(config.w.config.labels[config.dataPointIndex]);
            console.log(config.w.config.series[config.dataPointIndex]);
          },
        },
      },
    },
  };

  const chart2Options = {
    series: [
      {
        data: [21, 22, 10, 28, 16, 21, 13, 30],
      },
    ],
    options: {
      colors: ["#726abc"],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [
          ["John", "Doe"],
          ["Joe", "Smith"],
          ["Jake", "Williams"],
          "Amber",
          ["Peter", "Brown"],
          ["Mary", "Evans"],
          ["David", "Wilson"],
          ["Lily", "Roberts"],
        ],
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
            fontSize: "12px",
          },
        },
      },
    },
  };

  const [loggedUser, setLoggedUser]: [
    UserAuth,
    React.Dispatch<React.SetStateAction<UserAuth>>
  ] = useState({
    name: "",
    role: "",
    token: "",
  });

  const location: Location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setLoggedUser(location.state as UserAuth);
  }, []);

  const onLogout = () => {
    sessionStorage.removeItem("isAuth");
    navigate(`/loginPage`, {});
    // TODO: delete navigation history
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
        <div className={styles["chart"]}>
          <ReactApexChart
            options={chart1Options.options}
            series={chart1Options.series}
            type="pie"
            width={500}
          />
        </div>
        <div className={styles["chart"]}>
          <ReactApexChart
            options={chart2Options.options}
            series={chart2Options.series}
            type="bar"
            width={500}
            height={350}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default QuizResultsPage;
