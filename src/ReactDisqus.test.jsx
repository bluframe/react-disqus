import React from "react"
import ReactDisqus from "./ReactDisqus"
import { shallow } from "enzyme"

describe("ReactDisqus", () => {
  it("renders", () => {
    const wrapper = shallow(<ReactDisqus />)

    expect(wrapper).toMatchSnapshot()
  })
})
