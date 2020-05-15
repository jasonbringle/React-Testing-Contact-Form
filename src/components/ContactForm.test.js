import React from "react";
import { render, getByTestId, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";
import { onSubmit } from './ContactForm'

test("renders App without crashing", () => {
    render(<ContactForm />);
  });

test("Name input exists", () => {
    const name = 'firstName';
    const { getByTestId } = render(<ContactForm/>);
    const inputField = getByTestId("Name Input");
    expect(inputField.name).toBe(name);
})

test("First Name label exists", () => {
    const labelName ='First Name*';
    const { getByTestId } = render(<ContactForm/>);
     
    const NameLabel = getByTestId("Name Label");
    // console.log(NameLabel)
    expect(NameLabel.textContent).toBe(labelName);
})

test ("Last Name input exists", () => {
    const lastNamePlaceHolder = 'luo';
    const { getByPlaceholderText } = render(<ContactForm/>);
    const lastNameInput = getByPlaceholderText('luo');
    expect(lastNameInput.placeholder).toBe(lastNamePlaceHolder);
})

 test('check if there is a button input', () => {
    const { container } = render(<ContactForm/>);
    const submitButton = container.querySelector('[type="submit"]')
    const submit = 'submit'
    // console.log(submitButton)
    expect(submitButton.type).toBe(submit)
 })

 test('Submit button sends to submit', () => {
    const { getByTestId }= render(<ContactForm/>);
    const formSubmit = getByTestId("Form Element")
    fireEvent.click(formSubmit)
})
