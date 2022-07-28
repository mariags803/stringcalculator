import {adds} from "../stringcalculator"
describe("String Calculator", ()=>{
    it("returns zero when the expression is null or empty",()=>{
        expect(adds("")).toBe(0);
        expect(adds(null)).toBe(0);
    });
    it("when receives only a number, returns that number",()=>{
        expect(adds("8")).toBe(8);
    });
    it("adds all of numbers when they are separated by commas",()=>{
        expect(adds("1,2,3,4")).toBe(10);
    });
    it("ignores any element of the expression if it is not a number",()=>{
        expect(adds("1,2,a,3,4,5")).toBe(15);
    });
    it("allows custom separators configured at the beginning of the expression",()=>{
        expect(adds("//%/1%5%3")).toBe(9);
    });
});