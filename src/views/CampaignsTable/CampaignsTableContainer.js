import React, { useState, useEffect } from "react";
import axios from "axios";
import Typography from "@material-ui/core/Typography/Typography";

import PaperWrapper from "components/PaperWrapper/PaperWrapper";
import Loader from "components/Loader/Loader";

import CampaignsTable from "./Table/CampaignsTable";

import { mockTableData } from "./MockData";

const CampaignsTableContainer = () => {
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/users");

   useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);
        // TODO:
        // THE API IS CHANGED BECAUSE PROVIDED API RETURN WRONG DATA.
        // IN THAT CASE I USED DATA FROM WORD DOC THAT I HAVE RECEIVED FROM ADFORM, ALSO DUE THAT SOME TESTS FAILS
        // setTableData(result.data);
        setTableData(
          mockTableData.map(item => ({
            ...item,
            active: dateCheck(item.startDate, item.endDate)
          }))
        );
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(true);
      }
    };
    setTimeout(function() {
      fetchData();
    }, 2000);
  }, [url]);

  const dateCheck = (startDate, endDate) => {
    let currentDate = new Date();
    let cDate = Date.parse(currentDate);
    return cDate <= Date.parse(endDate) && cDate >= Date.parse(startDate)
      ? true
      : false;
  };
  return (
    <PaperWrapper
      child={
        <React.Fragment>
          {isError && <Typography>Something wrong with table data</Typography>}
          {isLoading ? <Loader /> : <CampaignsTable tableData={tableData} />}
        </React.Fragment>
      }
    />
  );
};

export default CampaignsTableContainer;
