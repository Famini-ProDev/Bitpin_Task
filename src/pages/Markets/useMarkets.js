import { useRef, useState } from "react";
import toast from "react-hot-toast";

import useFetchData from "utils/useFetchData";

function useMarkets() {
  const [pages, setPages] = useState({
    page: 1,
    pageSize: 5,
  });
  const [loading, setLoading] = useState(false);
  const [dataCurrentPage, setDataCurrentPage] = useState();
  const dataMarkets = useRef();

  const getMarkets = () => {
    setLoading(true);
    useFetchData
      .get(`v1/mkt/markets/`)
      .then((e) => {
        dataMarkets.current = {
          count: e?.data?.count,
          results: e.data?.results,
        };
        handlePageChange(pages.page, pages.pageSize);
      })
      .catch((e) => {
        setLoading(false);
        toast.error(e?.response?.data?.message ?? "Unsuccessful");
      })
      .finally(() => {});
  };

  const handlePageChange = (page, pageSize) => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentPageData = dataMarkets.current?.results?.slice(
      startIndex,
      endIndex
    );
    setDataCurrentPage({
      count: dataMarkets.current?.count,
      results: currentPageData,
    });
    setPages({
      page: page,
      pageSize: pageSize,
    });
    setLoading(false);
  };

  return {
    pages,
    loading,
    getMarkets,
    handlePageChange,
    dataCurrentPage,
    setDataCurrentPage,
    dataMarkets,
  };
}

export default useMarkets;
