import React from 'react'
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap'

const FormikInput = ({ field, form: { touched, errors }, label }) => (
    <FormGroup>
        <Label>{label}</Label>
        <Input {...field} />
        {touched[field.name] && errors[field.name] && (
            <FormFeedback>{errors[field.name]}</FormFeedback>
        )}
    </FormGroup>
)

export default FormikInput
