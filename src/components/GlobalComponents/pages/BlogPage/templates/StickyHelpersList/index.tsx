import { AnimatePresence } from 'framer-motion';
import { BsGithub } from 'react-icons/bs';
import { TbWorldWww } from 'react-icons/tb';

import { SocialButton } from '@GlobalComponents/atoms/SocialButton';
import { StickyContainer } from '@GlobalComponents/atoms/StickyContainer';

import { ToggleTheme } from '@components/Navigation/atoms/ToggleTheme';

import { useTOCStore } from '@stories/toc';

import type { Articles } from '@graphql/databases/client';

import { StickyButtonsList } from './atoms/StickyButtonsList';

export const StickyHelpersList = ({ socials }: Record<'socials', Articles['socials']>) => {
  const [tocHeight, isVisible] = useTOCStore((state) => [state.tocHeight, state.isVisible]);

  return (
    <StickyContainer style={{ paddingTop: tocHeight }}>
      <AnimatePresence>
        {isVisible && (
          <StickyButtonsList>
            <ToggleTheme />
            <SocialButton href={socials?.repository ?? ''}>
              <BsGithub size={18} />
            </SocialButton>
            <SocialButton href={socials?.liveDemo ?? ''}>
              <TbWorldWww size={18} />
            </SocialButton>
          </StickyButtonsList>
        )}
      </AnimatePresence>
    </StickyContainer>
  );
};
