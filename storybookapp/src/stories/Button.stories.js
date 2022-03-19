import { Button } from "../components/Button"

export default {
  tilte: "Components/Button",
  component: Button,
  argTypes: {handleClick: {action: "myHandleClick"}} //define differents types all of the arguments and build define
}

//creates a function that return the Button and passes all the arguments to it
const Template = args => <Button {...args}/>


//named story
//red story insed the Button folder
export const Red = Template.bind({});
Red.args = {
  backgroundColor: "red",
  label: "Press me",
  size: "md",
}

export const Green = Template.bind({});
Green.args = {
  backgroundColor: "green",
  label: "Press me",
  size: "md",
}

export const Large = Template.bind({});
Large.args = {
  backgroundColor: "red",
  label: "Press me",
  size: "lg",
}

export const LongLabel = Template.bind({});
LongLabel.args = {
  backgroundColor: "red",
  label: "This is a bery long label, isn't it?",
  size: "md",
}