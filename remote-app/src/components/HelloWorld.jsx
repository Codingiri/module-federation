import PropTypes from "prop-types";

export default function HelloWorld({ msg }) {
  return <h1>{msg}</h1>;
}

HelloWorld.propTypes = {
  msg: PropTypes.string.isRequired,
};
