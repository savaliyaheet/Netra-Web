function PrimaryButton({ type, children }) {
  return (
    <>
      <button
        type={type}
        className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
      >
        {children}
      </button>
    </>
  );
}

export default PrimaryButton;
