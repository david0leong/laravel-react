import React from 'react'
import { withFormik, Field } from 'formik'
import { Card, CardBody, CardTitle, Button } from 'reactstrap'
import * as Yup from 'yup'
import get from 'lodash/get'

import FormikInput from '../formik/Input'

const TodoForm = ({ todo, handleSubmit }) => (
    <Card>
        <CardBody>
            <CardTitle>{todo ? 'Edit' : 'Add'} Todo</CardTitle>

            <Field
                name="description"
                component={FormikInput}
                label="Description"
            />

            <Button color="primary" onClick={handleSubmit}>
                Submit
            </Button>
        </CardBody>
    </Card>
)

export default withFormik({
    displayName: 'TodoForm',

    enableReinitialize: true,

    mapPropsToValues({ todo }) {
        return {
            description: get(todo, 'description', ''),
        }
    },

    validationSchema: Yup.object().shape({
        description: Yup.string().required('Description is required'),
    }),

    handleSubmit(values, { props: { onSubmit }, setSubmitting }) {
        onSubmit(values)

        setSubmitting(false)
    },
})(TodoForm)
