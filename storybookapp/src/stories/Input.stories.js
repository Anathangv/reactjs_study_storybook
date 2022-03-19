import { Input } from "../components/Input"
import {Meta} from '@storybook/addon-docs'

<Meta title="Components/Input" component={Input}/> 

export default {
  tilte: "Components/Input",
  component: Input,
  // argTypes: {handleOnChange: {action: "onChange"}}
}

const Template = args => <Input {...args}/>

export const Simple = Template.bind({});
Simple.args = {
  backgroundColor: "gray",
  border: false,
  inputType: "text",
  defaultValue: 'This is it',
}