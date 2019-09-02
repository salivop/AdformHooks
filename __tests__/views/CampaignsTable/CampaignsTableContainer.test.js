import React from "react";
import toJson from "enzyme-to-json";
import { shallow } from "enzyme";

import CampaignsTableContainer from "src/views/CampaignsTable/CampaignsTableContainer";

describe("CampaignsTableContainer", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CampaignsTableContainer />);
  });
  it("should render correctly", () => {
    const component = wrapper;
    expect(toJson(component)).toMatchSnapshot();
  });

  it("should have DOM elements", () => {
    expect(wrapper.find("PaperWrapper").length).toEqual(1);
  });
});
