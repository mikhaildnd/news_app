import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { getUserMounted, userActions } from '@/entities/User';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const isMounted = useSelector(getUserMounted);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {isMounted && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}

export default App;
