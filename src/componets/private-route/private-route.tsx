import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorisaionStatus, NameSpace } from '../../const';
import { useAppSelector } from '../../store/hooks';


type PrivateRouteProps = {
    children: JSX.Element;
}

export default function PrivateRoute (props: PrivateRouteProps) {
  const { children} = props;

  return (
    useAppSelector((store) => store[NameSpace.User].authorizationStatus) === AuthorisaionStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}
