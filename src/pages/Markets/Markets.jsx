import React, { useEffect } from "react";
import Card from "components/Common/Card";
import BPPagination from "components/Elements/BPPagination";
import useMarkets from "./useMarkets";
import BPLoading from "components/Elements/BPLoading";
import socket from "services/socketService";

function Markets() {
  const {
    pages,
    loading,
    getMarkets,
    setDataCurrentPage,
    handlePageChange,
    dataCurrentPage,
  } = useMarkets();

  useEffect(() => {
    getMarkets();
  }, []);

  useEffect(() => {
    socket.emit("subscribe", { method: "sub_to_price_info" });
    socket.on("currency_price_info_update", handlePriceInfoUpdate);
    return () => {
      socket.off("currency_price_info_update", handlePriceInfoUpdate);
    };
  }, [dataCurrentPage]);

  const handlePriceInfoUpdate = (update) => {
    setDataCurrentPage((prevData) => {
      const updatedData = prevData.map((market) => {
        if (market.id === update.data.market_id) {
          return {
            ...market,
            ...update.data,
          };
        }
        return market;
      });

      return updatedData;
    });
  };

  return (
    <div className="px-[335px] pt-16 pb-20">
      {loading ? (
        <div className="flex justify-center items-center">
          <BPLoading />
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center">
            <div className="text-4xl font-semibold text-[#444444]">
              <p>Market List</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {dataCurrentPage?.results?.map((item) => (
              <Card key={item?.id} {...item} />
            ))}
          </div>
          <div className="flex justify-center items-center mt-9">
            <BPPagination
              defaultCurrent={1}
              current={pages.page}
              pageSize={5}
              total={dataCurrentPage?.count}
              onChange={handlePageChange}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Markets;
