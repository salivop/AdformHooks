import React from "react";
import toJson from "enzyme-to-json";
import { shallow } from "enzyme";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import CampaignsTableContainer from "src/views/CampaignsTable/CampaignsTableContainer";

describe("CampaignsTableContainer", () => {
  let wrapper;
  let mock;
  let instance;


  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  beforeEach(() => {
    mock.reset();
    wrapper = shallow(<CampaignsTableContainer />);
    instance = wrapper.instance();
  });
  it("should render correctly", () => {
    const component = wrapper;
    expect(toJson(component)).toMatchSnapshot();
  });

  it("should have DOM elements", () => {
    expect(wrapper.find("PaperWrapper").length).toEqual(1);
  });
});

