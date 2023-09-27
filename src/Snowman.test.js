import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";

test("Show you lose after", function () {

  const {container, debug} = render(
    <Snowman />
  )
  const buttons = container.querySelectorAll("button");
  // const arrButtons = [...buttons];

  //Should get us to the lose state
  for (let i = 1; i <= 10; i++){
    fireEvent.click(buttons[i]);
  }



  //fireEvent multiple times.

  //We could check if img element still on page

  const img = container.querySelector(".Snowman-image");
  expect(img).not.toBeInTheDocument();

  //We could check if letter guess on page
  const guessButton = container.querySelector(".Snowman-guess");
  expect(guessButton).not.toBeInTheDocument();

  //Check if "you lose" properly appears on page
  const endMsg = container.querySelector(".endMsg");
  expect(endMsg).toHaveTextContent("You lose");

})

describe("correct and incorrect guesses are registered correctly", function() {
  test("correct guesses work", function() {
    const {container, debug} = render(
      <Snowman words={["apple"]}/>
    )
    const buttons = container.querySelectorAll("button");

    const img = container.querySelector(".Snowman-image");
    const initialAlt = img.getAttribute("alt");

    fireEvent.click(buttons[0]); // "a" -> correct guess for "apple"

    const numWrong = container.querySelector(".Snowman-num-wrong");
    const snowmanWord = container.querySelector(".Snowman-word");

    expect(numWrong).toHaveTextContent("0");
    expect(snowmanWord).toHaveTextContent("a");
    expect(img.getAttribute("alt")).toEqual("0");
    expect(img.getAttribute("alt")).toEqual(initialAlt);
  })

  test("incorrect guesses work", function() {
    const {container, debug} = render(
      <Snowman words={["apple"]}/>
    )
    const buttons = container.querySelectorAll("button");

    const img = container.querySelector(".Snowman-image");
    const initialAlt = img.getAttribute("alt");

    fireEvent.click(buttons[25]); // "z" -> incorrect guess for "apple"

    const numWrong = container.querySelector(".Snowman-num-wrong");
    const snowmanWord = container.querySelector(".Snowman-word");
    // debug(container);

    expect(numWrong).toHaveTextContent("1");
    expect(snowmanWord).not.toHaveTextContent("z");
    expect(img.getAttribute("alt")).toEqual("1");
    expect(img.getAttribute("alt")).not.toEqual(initialAlt);
  })
});