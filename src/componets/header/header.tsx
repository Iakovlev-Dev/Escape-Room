import { useAppSelector } from '../../store/hooks';
import { isUserAuthorezed } from '../../store/data-process/selectors';
import AuthUser from '../auth-user/auth-user';
import NoAuthUser from '../no-auth-user/no-user-auth';

export default function Header () {
  const isAuth = useAppSelector(isUserAuthorezed);
  return (
    <header className="header">
      {isAuth ? <AuthUser /> : <NoAuthUser />}
    </header>
  );
}
