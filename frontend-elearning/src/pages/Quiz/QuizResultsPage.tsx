import React from "react";
import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";
import { useLocation, useNavigate, Location } from "react-router-dom";
import CustomNavLink from "../../models/CustomNavLink";
import NavBar from "../../Navbar/NavBar";
import styles from "./QuizResultsPage.module.css";

const QuizResultsPage = () => {
  const chart1Options = {
    series: [44, 55, 13, 43, 22],
    options: {
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
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

  const location: Location = useLocation();
  const navigate = useNavigate();

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
    <div className={styles["container"]}>
      <NavBar links={teacherLinks}></NavBar>
      <div className={styles["content"]}>
        <ReactApexChart
          options={chart1Options.options}
          series={chart1Options.series}
          type="pie"
          width={500}
        />
        <ReactApexChart
          options={chart2Options.options}
          series={chart2Options.series}
          type="bar"
          width={500}
        />
      </div>
    </div>
  );
};

export default QuizResultsPage;
