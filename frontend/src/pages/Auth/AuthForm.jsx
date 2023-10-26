import { Fragment } from 'react';
import { Form, Row, Col, Container, Alert } from 'react-bootstrap';
import AuthSwitcher from './AuthSwitcher';
import AuthHeroImage from './AuthHeroImage';
import '../../styles/authentication.css';

const AuthForm = ({ formData, setFormData, errors, handleSubmit, page, url }) => {

    const renderFormInputs = () =>
        Object.keys(formData).map(key =>
            <Fragment key={key}>
                <Form.Control
                    className='border-0 text-center my-3'
                    type={key.includes('password') ? 'password' : 'text'}
                    placeholder={createPlaceHolder(key)}
                    value={formData[key]}
                    onChange={({ target }) => setFormData({ ...formData, [key]: target.value })}
                    autoComplete="off"
                />
                {
                    errors[key]?.map(error => (
                        <Alert key={`${key}-error`} variant="primary" className="p-1">
                            {error}
                        </Alert>
                    ))
                }
            </Fragment>
        );

    const createPlaceHolder = key =>
        key.includes('password2')
            ? 'confirm password'
            : key.replace(/\d/, '');

    return (
        <Row className="text-center auth-form-row">
            <Col className="auth-form-column">
                <Container className="container-border py-2 mt-0">
                    <h1 className="fs-6 my-3">{page.toUpperCase()}</h1>
                    <Form onSubmit={handleSubmit}>
                        {renderFormInputs()}
                        <Form.Control type="submit" value={page} />
                        {
                            errors.non_field_errors?.map(error => (
                                <Alert key={'non-field-errors'} variant="primary" className="p-1">
                                    {error}
                                </Alert>
                            ))
                        }
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