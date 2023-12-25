import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorisaionStatus } from '../../const';
import { useAppSelector } from '../../store/hooks';
import { selectAuthStatus } from '../../store/data-process/selectors';


type PrivateRouteProps = {
    children: JSX.Element;
}

export default function PrivateRoute (props: PrivateRouteProps) {
  const { children} = props;

  return (
    useAppSelector(selectAuthStatus) === AuthorisaionStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}
