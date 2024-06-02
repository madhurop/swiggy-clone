import React from "react";
import { render,screen } from "@testing-library/react";
import SignIn from "../Components/SignIn";
import "@testing-library/jest-dom"

test("Shoul Load or Not",()=>{
    render(
        <SignIn/>
    )

    const heading =screen.getByText("Password")
    expect(heading).toBeInTheDocument()
})
test("Shoul Load or Not Button",()=>{
    render(
        <SignIn/>
    )

    const heading =screen.getByRole("button")
    expect(heading).toBeInTheDocument()
})
test("Should Load or Not Placeholder",()=>{
    render(
        <SignIn/>
    )

    const heading =screen.getByPlaceholderText("Email")
    expect(heading).toBeInTheDocument()
})
test("Should Load 2Input Boxex",()=>{
    render(
        <SignIn/>
    )

    const heading =screen.getAllByRole("textbox")
    expect(heading.length).toBe(1)
})