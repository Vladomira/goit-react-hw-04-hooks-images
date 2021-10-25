import PropTypes from "prop-types";
// import errorImage from "../images/cats.jpg";

//
export default function Error({ message }) {
  return (
    <>
      <div>
        {/* <img src={errorImage} width="240" height="240" alt="cats" /> */}
        <p className="error-message">{message}</p>
      </div>
    </>
  );
}
Error.propTypes = {
  message: PropTypes.string.isRequired,
};
