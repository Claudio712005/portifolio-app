import { useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { appRoutes } from '../../../routes/appRouter';

function Breadcrumb() {
    const location = useLocation();
    const { t } = useTranslation();

    const breadcrumbRoutes = appRoutes.filter(
        route => route.breadcrumb.render && location.pathname.startsWith(route.path) &&  route.isVisible
    );

    return (
        <nav aria-label="breadcrumb">
            <ul>
                {breadcrumbRoutes.map((route, index) => (
                    <li key={index}>
                        {index > 0 && ' > '}
                        <Link to={route.path}>
                            {t(route.breadcrumb.labelKey)}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Breadcrumb;
