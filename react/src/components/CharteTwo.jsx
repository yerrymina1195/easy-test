import React, { useEffect } from "react";

const CharteTwo = () => {
  // charte 1
  useEffect(() => {
    let option = {
      xaxis: {
        show: true,
        categories: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
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
          data: [100, 140, 160, 120, 100, 80, 50],
          color: "#d97706",
        },
      ],
    };

    if (document.getElementById("area") && typeof ApexCharts !== "undefined") {
      const chartTwo = new ApexCharts(document.getElementById("area"), option);
      chartTwo.render();
    }
  }, []);
  window.addEventListener("load", function () {});
  return (
    <div>
      <div className="bg-white my-5 md:my-0 rounded-lg border border-gray-200">
        <div className="w-full bg-white rounded-lg shadow dark:bg-gray-800">
          <div className="flex p-5 justify-start">
            <h5 className="leading-none text-xl font-bold text-gray-900 dark:text-white pb-2">
              Total customers
            </h5>
          </div>
          <div id="area"></div>
        </div>
      </div>
    </div>
  );
};

export default CharteTwo;
