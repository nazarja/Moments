import { Form } from "react-bootstrap";
import FormErrors from "./FormErrors";

const FormTextArea = ({ formKey, formData, setFormData, errors, rows = 6 }) =>
    <>
        <Form.Label className="d-block text-center text-capitalize my-3">{formKey}</Form.Label>
        <Form.Control
            className='my-3'
            as={'textarea'}
            value={formData[formKey]}
            onChange={({ target }) => setFormData({ ...formData, [formKey]: target.value })}
            rows={rows}
        />
        <FormErrors errors={errors} type={'key'} keyName={formKey} />
    </>

export default FormTextArea;