import { Fragment } from 'react';
import { Form, Row, Col, Container } from 'react-bootstrap';
import AuthSwitcher from './AuthSwitcher';
import AuthHeroImage from './AuthHeroImage';
import FormErrors from '../../components/Forms/FormErrors';

const AuthForm = ({ formData, setFormData, errors, handleSubmit, page, url }) => {

    const formInputs = () =>
        Object.keys(formData).map(key =>
            <Fragment key={key}>
                <Form.Control
                    className='border-0 text-center my-3'
                    type={key.includes('password') ? 'password' : 'text'}
                    placeholder={key.includes('password2') ? 'confirm password' : key.replace(/\d/, '')}
                    value={formData[key]}
                    onChange={({ target }) => setFormData({ ...formData, [key]: target.value })}
                    autoComplete="off"
                />
                <FormErrors errors={errors} type={'key'} keyName={key} />
            </Fragment>
        );

    return (
        <Row className="text-center auth-form-row">
            <Col className="auth-form-column">
                <Container className="container-border py-2 mt-0">
                    <h1 className="fs-6 my-3">{page.toUpperCase()}</h1>
                    <Form onSubmit={handleSubmit}>
                        {formInputs()}
                        <Form.Control type="submit" value={page} />
                        <FormErrors errors={errors} type={'non_field_errors'} />
                    </Form>
                </Container>
                <Container className="container-border">
                    <AuthSwitcher url={url} />
                </Container>
            </Col>
            <Col className="auth-form-column">
                <AuthHeroImage url={url} />
            </Col>
        </Row>
    );
};

export default AuthForm;