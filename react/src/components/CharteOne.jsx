import React, { useEffect } from "react";

const CharteOne = () => {
  // charte 1
  useEffect(() => {
    let options = {
      xaxis: {
        show: true,
        categories: [
          "Jav",
          "Feb",
          "Mar",
          "Avr",
          "Mai",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: true,
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
          },
          formatter: function (value) {
            return "$" + value;
          },
        },
      },
      chart: {
        height: "75%",
        maxWidth: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        toolbar: {
          show: false,
        },
      },

      stroke: {
        width: 2,
      },
      series: [
        {
          name: "New users",
          data: [
            1500, 1418, 1456, 1526, 1356, 1256, 1500, 1418, 1456, 1526, 1356,
            1256,
          ],

          color: "#d97706",
        },
      ],
    };

    if (
      document.getElementById("area-chart") &&
      typeof ApexCharts !== "undefined"
    ) {
      const chartOne = new ApexCharts(
        document.getElementById("area-chart"),
        options
      );
      chartOne.render();
    }
  }, []);
  return (
    <div>
      <div className="bg-white my-5 md:my-0 rounded-lg border border-gray-200">
        <div className="w-full bg-white rounded-lg shadow dark:bg-gray-800">
          <div className="flex p-5 justify-start">
            <h5 className="leading-none text-xl font-bold text-gray-900 dark:text-white pb-2">
              Orders per month
            </h5>
          </div>
          <div id="area-chart"></div>
        </div>
      </div>
    </div>
  );
};

export default CharteOne;
