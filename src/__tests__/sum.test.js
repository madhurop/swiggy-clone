import { Sum } from "../Components/Sum";
test("Sum Function", () => {
    const result = Sum(3, 5)
    //Assertion
    expect(result).toBe(8)
}
)