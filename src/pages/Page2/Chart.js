import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const getOptions = () => ({
  chart: {
    type: "line",
    width: 960,
    height: 300,
    backgroundColor: "#414141",
    boderColor: "#fff",
    annotations: {
      visible: false,
    },
  },
  title: {
    text: "BODY RECORD",
    align: "left",
    style: {
      fontSize: "15px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "18px",
      letterSpacing: "0.15px",
      color: "#fff",
      whiteSpace: "pre-line",
    },
  },
  subtitle: {
    text: "2021.05.21",
    style: {
      color: "#fff",
      fontSize: "15px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "18px",
      letterSpacing: "0.15px",
    },
  },
  xAxis: {
    lineColor: "#fff",
    visible: false,
  },
  yAxis: {
    lineColor: "#fff",
    visible: true,
  },
  series: [
    {
      title: "",
      color: "#FFCC21",
      data: [10, 2, 1, 4, 3, 6, 1, 2, 1, 4, 3, 6, 8],
    },
    {
      color: "#8FE9D0",
      data: [12, 7, 0, 4, 6, 2, 1, 2, 7, 0, 4, 6, 4],
    },
  ],
});
function LineChart({ data }) {
  return <HighchartsReact highcharts={Highcharts} options={getOptions()} />;
}

export default LineChart;
