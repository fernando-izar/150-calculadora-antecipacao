import React from "react";
import renderer from "react-test-renderer";
import { RequestValues } from "../../components/RequestValues";

describe("RequestValues", () => {
    it("should not have unexpected changes", () => {
        const form = renderer.create(<RequestValues />).toJSON();
        expect(form).toMatchSnapshot();
    });
});