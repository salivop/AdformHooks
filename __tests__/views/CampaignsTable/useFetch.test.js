import { renderHook } from "@testing-library/react-hooks";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import useFetch from "src/views/CampaignsTable/useFetch";

describe("useFetch", () => {
  let mock;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  it("useFetch performs GET request success", async () => {
    const mockData = [];
    const url = "http://mock";
    mock.onGet(url).reply(200, mockData);

    const { result, waitForNextUpdate } = renderHook(() => useFetch(url));
    expect(result.current.tableData).toEqual([]);
    expect(result.current.isLoading).toBeTruthy();
    expect(result.current.isError).toBeFalsy();

    await waitForNextUpdate();

    expect(result.current.tableData.length).toEqual(0);
    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.isError).toBeFalsy();
  });

  it("useFetch performs GET request failure", async () => {
    const mock = new MockAdapter(axios);

    const mockData = [];
    const url = "http://mock";
    mock.onGet(url).reply(404, mockData);

    const { result, waitForNextUpdate } = renderHook(() => useFetch(url));
    expect(result.current.tableData).toEqual([]);
    expect(result.current.isLoading).toBeTruthy();
    expect(result.current.isError).toBeFalsy();

    await waitForNextUpdate();

    expect(result.current.tableData.length).toEqual(0);
    expect(result.current.isLoading).toBeTruthy();
    expect(result.current.isError).toBeTruthy();
  });
});
