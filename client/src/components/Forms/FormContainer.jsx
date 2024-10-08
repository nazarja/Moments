import { Container, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import FormErrors from "./FormErrors";

const FormContainer = ({ children, handleSubmit, errors, submitText = 'post', comment = false }) => {
    const navigate = useNavigate();

    return (
        <Container className="container-border py-2 m-0">
            <Form onSubmit={handleSubmit}>
                {children}
                <Form.Control type="submit" value={submitText} />
                {!comment && <Form.Control type="button" value={'cancel'} onClick={() => navigate(-1)} />}
                <FormErrors errors={errors} type={'non_field_errors'} />
            </Form>
        </Container>
    );
};

export default FormContainer;