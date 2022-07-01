// Packages
import { Story, Meta } from "@storybook/react/types-6-0"

// Components
import { Toggle } from "."

export default {
  title: "Toggle",
  component: Toggle
} as Meta

export const Default: Story = () => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <Toggle />
  </div>
)

Default.parameters = {
  backgounds: {
    default: "#1F2028"
  }
}
