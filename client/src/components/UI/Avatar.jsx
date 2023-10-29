import { Image } from 'react-bootstrap';

const Avatar = ({ src, username, height = 45 }) =>
    <>
        <Image
            src={src}
            height={height}
            width={height}
            alt="default avatar"
        />
        <span className='text-capitalize'>{username}</span>
    </>;


export default Avatar;