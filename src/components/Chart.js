import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import Sidebar from "../components/Sidebar";

import styles from "../Design/Home.module.css";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement
);

const Chart = (props) => {
  const data = {
    plugins: [
      {
        id: "custom_canvas_background_color",
        beforeDraw: (chart, args, options) => {
          const {
            ctx,
            chartArea: { top, right, bottom, left, width, height },
            scales: { x, y },
          } = chart;
          ctx.save();
          ctx.globalCompositeOperation = "destination-over";
          var grd = ctx.createLinearGradient(0, 900, 0, 0);
          grd.addColorStop(0, "#e0e1e2");
          grd.addColorStop(1, "white");

          // Fill with gradient
          ctx.fillStyle = grd;
          ctx.fillRect(left, top, width, height);
          ctx.restore();
        },
      },
    ],
    data: {
      labels: props.projectId,
      datasets: [
        {
          label: "Budget",
          data: props.budget,
          backgroundColor: "red",
          borderWidth: 5,
          borderColor: "red",
        },
      ],
    },
    options: {
      scales: {
        y: {
          grid: {
            display: false,
          },
          title: {
            display: true,
            text: "Crore",
            font: {
              size: 30,
              color: "#fff",
            },
          },
        },
        x: {
          grid: {
            display: false,
          },
          title: {
            display: true,
            text: "Project ID",
            font: {
              size: 30,
              color: "#fff",
            },
          },
        },
      },
      plugins: {
        title: {
          display: true,
          text: "Project Budget",
          padding: {
            top: 10,
            bottom: 30,
            fontStyle: "bolder",
          },
        },
      },
    },
  };
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div className={styles.sideMainDiv}>
          <div className={styles.projectReportDiv}>
            <Line
              data={data.data}
              options={data.options}
              plugins={data.plugins}
            >
              Hello
            </Line>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chart;
