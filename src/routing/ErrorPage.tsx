import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <h1>Oops...</h1>
      <p>{isRouteErrorResponse(error) ? 'Invalid request URL' : 'An unexpected error has occurred.'}</p>
    </>
  );
};

export default ErrorPage;
