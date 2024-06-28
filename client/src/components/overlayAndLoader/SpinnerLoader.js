import Spinner from "react-bootstrap/Spinner";

function SpinnerLoader() {
  return (
    <div className="w-100 text-center">
      <Spinner animation="border" className="spinner text-center" />
    </div>
  );
}

export default SpinnerLoader;
