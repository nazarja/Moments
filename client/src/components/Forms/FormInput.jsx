import { Form } from "react-bootstrap";
import FormErrors from "./FormErrors";

const FormInputs = ({ formData, formKey, setFormData, errors }) =>
    <>
        <Form.Label htmlFor={formKey} className="d-block text-center text-capitalize my-3">{formKey}</Form.Label>
        <Form.Control
            className='my-3'
            type={formKey == 'password' ? 'password' : 'text'}
            value={formData[formKey]}
            onChange={({ target }) => setFormData({ ...formData, [formKey]: target.value })}
            autoComplete="off"
            id={formKey}
        />
        <FormErrors errors={errors} type={'key'} keyName={formKey} />
    </>;

export default FormInputs;