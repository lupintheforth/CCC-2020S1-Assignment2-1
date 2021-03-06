/**
 * COMP90024 Cluster and Cloud Computing Team 12
 *
 * @Author: Haowen Shen
 * Email: haoshen@student.unimelb.edu.au
 */
import React from "react";
import { Tooltip } from "antd";

export function TitleWithTooltip({
  title,
  tooltipInfo,
  placement = "topLeft",
}) {
  return (
    <Tooltip title={tooltipInfo} placement={placement}>
      {typeof title === "string" ? <h3>{title}</h3> : title}
    </Tooltip>
  );
}
