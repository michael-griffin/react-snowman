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


// test("counts correctly when tails appears", function() {
//   const { container } = render(<CoinContainer />);

//   const button = container.querySelector("button");
//   fireEvent.click(button);
//   fireEvent.click(button);

//   expect(container.querySelector("img[alt='head']")).not.toBeInTheDocument();
//   expect(container.querySelector("img[alt='tail']")).toBeInTheDocument();
//   expect(container.querySelector("p"))
//     .toHaveTextContent("Out of 2 flips, there have been 1 heads and 1 tails.");
// });