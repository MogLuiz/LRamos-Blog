// Packages
import { screen } from "@testing-library/react"

// Utils
import { renderWithTheme } from "utils/tests/helpers"

// Components
import { MainCard } from "."

describe("<MainCard />", () => {
  it("should render the component correctly", () => {
    renderWithTheme(<MainCard />)
    expect(screen.getByLabelText(/main post card/i)).toBeInTheDocument()
  })
})
