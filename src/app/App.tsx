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
import { ToggleComponentFeatures } from '@/shared/lib/features';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout';

function App() {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const isMounted = useSelector(getUserMounted);

    useEffect(() => {
        if (!isMounted) {
            void dispatch(initAuthData());
        }
    }, [dispatch, isMounted]);

    if (!isMounted) {
        return (
            <ToggleComponentFeatures
                feature="isAppRedesigned"
                on={
                    <div
                        id="app"
                        className={classNames('app_redesigned', {}, [theme])}
                    >
                        <AppLoaderLayout />
                    </div>
                }
                off={
                    <PageLoader /> // TODO: не работает компонент почему-то
                }
            />
        );
    }

    return (
        <ToggleComponentFeatures
            feature="isAppRedesigned"
            on={
                <div
                    id="app"
                    className={classNames('app_redesigned', {}, [theme])}
                >
                    <Suspense fallback="">
                        <MainLayout
                            header={<Navbar />}
                            content={<AppRouter />}
                            sidebar={<Sidebar />}
                        />
                    </Suspense>
                </div>
            }
            off={
                <div id="app" className={classNames('app', {}, [theme])}>
                    <Suspense fallback="">
                        <Navbar />
                        <div className="content-page">
                            <Sidebar />
                            <AppRouter />
                        </div>
                    </Suspense>
                </div>
            }
        />
    );

    // return (
    //     <div className={classNames('app', {}, [theme])}>
    //         <Suspense fallback="">
    //             <Navbar />
    //             <div className="content-page">
    //                 <Sidebar />
    //                 {isMounted && <AppRouter />}
    //             </div>
    //         </Suspense>
    //     </div>
    // );
}

export default App;
