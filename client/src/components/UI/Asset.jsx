
const Asset = ({ src, text }) => {
  return (
    <>
      { src && <img src={src} alt={text} /> }
      { text && <p className="mt-4">{text}</p> }
    </>
  );
};

export default Asset;
