import { Container, Spinner } from "react-bootstrap";

const Loading = () =>
        <Container className="container-border m-0 container-flex-center p-5">
                <Spinner variant="primary" />
                <p className="mt-5">Loading ...</p>
        </Container>;

export default Loading;