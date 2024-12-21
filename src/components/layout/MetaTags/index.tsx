import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { appRoutes } from '../../routes/appRouter';

function MetaTags() {
    const location = useLocation();
    const { t } = useTranslation();

    const currentRoute = appRoutes.find(route => route.path === location.pathname);

    if (!currentRoute?.breadcrumb.meta) return null;

    const { descriptionKey, keywordsKey } = currentRoute.breadcrumb.meta;

    const description = descriptionKey ? t(descriptionKey) : '';
    
    const keywordsArray = keywordsKey ? (t(keywordsKey) as unknown as string[]) : [];
    const keywords = Array.isArray(keywordsArray) ? keywordsArray.join(', ') : '';

    return (
        <Helmet>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
        </Helmet>
    );
}

export default MetaTags;
