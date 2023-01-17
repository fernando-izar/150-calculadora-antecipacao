import React from "react";
import renderer from "react-test-renderer";
import { Form } from "../../components/Form"

describe("Form", () => {
    it("should not have unexpected changes", () => {
        const form = renderer.create(<Form />).toJSON();
        expect(form).toMatchSnapshot();
    });
});

