import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorisaionStatus } from '../../const';

type PrivateRouteProps = {
    authorisationStatus: AuthorisaionStatus;
    children: JSX.Element;
}

export default function PrivateRoute (props: PrivateRouteProps) {
  const {authorisationStatus, children} = props;

  return (
    authorisationStatus === AuthorisaionStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}
