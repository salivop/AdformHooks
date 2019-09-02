import React, { useState } from "react";
import Typography from "@material-ui/core/Typography/Typography";

import PaperWrapper from "components/PaperWrapper/PaperWrapper";
import Loader from "components/Loader/Loader";

import CampaignsTable from "./Table/CampaignsTable";
import useFetch from "./useFetch";

const CampaignsTableContainer = () => {
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/users");

  const { isLoading, isError, tableData } = useFetch(url);

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
