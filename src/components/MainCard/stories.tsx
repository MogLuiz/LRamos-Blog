// Packages
import { Story, Meta } from "@storybook/react/types-6-0"

// Components
import { MainCard } from "."

export default {
  title: "MainCard",
  component: MainCard
} as Meta

export const Default: Story = () => <MainCard />

Default.parameters = {
  backgounds: {
    default: "#1F2028"
  }
}
