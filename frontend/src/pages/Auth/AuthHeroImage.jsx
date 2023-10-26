import { Image } from 'react-bootstrap';
import signInHeroImage from '../../assets/images/sign-in-hero-img.jpg';
import signUpHeroImage from '../../assets/images/sign-up-hero-img.jpg';

const AuthSwitcher = ({ url }) =>
    <>
        {
            url === '/signup'
                ? <Image src={signInHeroImage} height="295px" alt="sign up hero image" />
                : <Image src={signUpHeroImage} height="345px" alt="sign in hero image" />
        }
    </>;

export default AuthSwitcher;