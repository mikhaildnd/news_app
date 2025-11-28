import { Suspense, useEffect } from 'react';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { getUserMounted, initAuthData } from '@/entities/User';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageLoader } from '@/widgets/PageLoader';
import { useSelector } from 'react-redux';

function App() {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const isMounted = useSelector(getUserMounted);
    // const isMounted = false;

    useEffect(() => {
        void dispatch(initAuthData());
    }, [dispatch]);

    if (!isMounted) {
        return <PageLoader />; // TODO: не работает компонент почему-то
    }

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
