
import { expect } from "chai";
import "mocha";
import convertArrayToObject from "./index";
const data  = [
  {name: "1", value: "one"},
  {name: "2", value: "two"},
  {name: "3", value: "three"},
];
const dataObj = {
  1: {name: "1", value: "one"},
  2: {name: "2", value: "two"},
  3: {name: "3", value: "three"},
};

const key = "name";
describe("Convert Array to Object function", () => {
  const result = convertArrayToObject(data, key);
  it("should return Object with property value as key of object", () => {
    expect(result).to.be.a("object");
  });

  it("object should have 3 property", () => {
    const count = Object.keys(result).length;
    expect(count).to.equals(3);
    expect(result).to.have.property("1");
    expect(result).to.have.property("2");
    expect(result).to.have.property("3");
  });
  const resultObj = convertArrayToObject(data, key);
  it("should return same object if object is passed as first argument", () => {
    expect(resultObj).to.eql(dataObj);
  });
  it("should return empty object", () => {
    const res = convertArrayToObject([], key);
    expect(Object.keys(res)).to.have.length(0);
  });

});
