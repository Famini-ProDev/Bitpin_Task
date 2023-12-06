import React from "react";
import { Pagination } from "antd";

function BPPagination({ defaultCurrent, total, ...props }) {
  return (
    <Pagination defaultCurrent={defaultCurrent} total={total} {...props} />
  );
}

export default BPPagination;
