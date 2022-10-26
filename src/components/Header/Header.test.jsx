import {getAllByRole, getByText, getByRole, render, screen, getByPlaceholderText} from "@testing-library/react"
import Header from "./Header"

it("it should render the header", () => {
    //Arrange
    render(<Header title = "_Carsology - Find your next car here!" />)
    //Act
    const header = screen.getByText("_Carsology - Find your next car here!");
    //Assert
    expect(header).toBeInTheDocument();
});

