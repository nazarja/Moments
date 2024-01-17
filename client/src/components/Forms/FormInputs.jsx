import { Fragment } from "react";
import { Form } from "react-bootstrap";
import FormErrors from "./FormErrors";

const FormInputs = ({ formData, setFormData, errors }) =>
    Object.keys(formData).map(key =>
        <Fragment key={key}>
            <Form.Label className="d-block text-center text-capitalize my-3">{key}</Form.Label>
            <Form.Control
                className='text-center my-3'
                type={key.includes('password') ? 'password' : 'text'}
                value={formData[key]}
                onChange={({ target }) => setFormData({ ...formData, [key]: target.value })}
                autoComplete="off"
            />
            <FormErrors errors={errors} type={'key'} keyName={key} />
        </Fragment>
    );


export default FormInputs;