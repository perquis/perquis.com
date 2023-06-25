import ContentLoader from 'react-content-loader';

import { useThemeService } from '@providers';

export const CommentLoader = () => {
  const colors = useThemeService();

  return (
    <>
      <ContentLoader width="100%" height={206} {...colors}>
        <rect x="0" y="0" rx="4" ry="4" width="52" height="52" />
        <rect x="70" y="0" rx="4" ry="4" width="36%" height="21" />
        <rect x="70" y="31" rx="4" ry="4" width="21%" height="21" />
        <rect x="calc(100% - 50px)" y="0" rx="4" ry="4" width="50" height="38" />
        <rect x="0" y="70" rx="4" ry="4" width="79%" height="21" />
        <rect x="82%" y="70" rx="4" ry="4" width="18%" height="21" />
        <rect x="0" y="101" rx="4" ry="4" width="32%" height="21" />
        <rect x="35%" y="101" rx="4" ry="4" width="65%" height="21" />
        <rect x="0" y="132" rx="4" ry="4" width="100%" height="21" />
        <rect x="calc(100% - 96px)" y="170" rx="4" ry="4" width="96" height="35" />
      </ContentLoader>
    </>
  );
};
