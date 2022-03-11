const Alert = ({ error, type }) => {
  return (
    <div className={`alert alert-${type}`} role='alert'>
      {error}
    </div>
  );
};

export default Alert;
