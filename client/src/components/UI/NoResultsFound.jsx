import { Container, Image } from 'react-bootstrap';
import NoResultsImage from '../../assets/images/no-results-found.png';

const NoResultsFound = ({ text }) =>
    <Container className="container-border container-flex-center p-5 m-0 ">
        <Image src={NoResultsImage} alt="No Results" />
        <p className="mt-5">{text}</p>
    </Container>;

export default NoResultsFound;