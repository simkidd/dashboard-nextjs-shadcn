import React from "react";
import { BarChartInteractive } from "../components/BarChart";
import { RadialChartShape } from "../components/RadialChart";

const ActivityPage = () => {
  return (
    <div className="space-y-4">
      <RadialChartShape />
      <BarChartInteractive />
    </div>
  );
};

export default ActivityPage;
