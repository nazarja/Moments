import { Alert } from "react-bootstrap";

const FormErrors = ({ errors, type, keyName = null }) => {
    const error = type === 'non_field_errors'
        ? errors.non_field_errors
        : errors[keyName];

    return error?.map(error => (
        <Alert key={type} variant="primary" className="p-1">
            {error}
        </Alert>
    ));
};

export default FormErrors;