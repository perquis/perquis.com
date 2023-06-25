import ContentLoader from 'react-content-loader';

import { LoaderWrapper } from '@components/locals/Loader/atoms';
import { useThemeService } from '@providers';

export const PostLoader = () => {
  const { colors } = useThemeService();

  return (
    <>
      <ContentLoader speed={2} width="100%" height="100%" viewBox="0 0 400 240" {...colors}>
        <rect x="0" y="0" rx="4" ry="4" width="100%" height="240" />
      </ContentLoader>
      <LoaderWrapper>
        <ContentLoader speed={2} width="100%" height="100%" viewBox="0 0 400 176" {...colors}>
          <rect x="0" y="0" rx="4" ry="4" width="32%" height="16" />
          <rect x="0" y="30" rx="4" ry="4" width="82%" height="27" />
          <rect x="0" y="73" rx="4" ry="4" width="100%" height="16" />
          <rect x="0" y="101" rx="4" ry="4" width="72%" height="16" />
          <rect x="0" y="129" rx="4" ry="4" width="91%" height="16" />
          <rect x="0" y="161" rx="4" ry="4" width="24%" height="16" />
        </ContentLoader>
      </LoaderWrapper>
    </>
  );
};
