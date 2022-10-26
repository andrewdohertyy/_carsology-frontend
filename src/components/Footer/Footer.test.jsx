import {getAllByRole, getByText, getByRole, render, screen, getByPlaceholderText} from "@testing-library/react"
import Footer from "./Footer"

it("it should render the footer", () => {
    //Arrange
    render(<Footer />)
    //Act
    const text = screen.getByText("SIGN UP TO OUR MAILING LIST HERE");
    //Assert
    expect(text).toBeInTheDocument();
});