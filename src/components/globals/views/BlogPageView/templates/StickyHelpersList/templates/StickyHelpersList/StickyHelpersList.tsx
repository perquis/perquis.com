import { AnimatePresence } from 'framer-motion';
import { BsGithub } from 'react-icons/bs';
import { TbWorldWww } from 'react-icons/tb';

import { SocialButton, StickyContainer } from '@components/globals/atoms';
import { ToggleTheme } from '@components/locals/Navigation/atoms';
import type { Articles } from '@graphql/databases/client';

import { StickyButtonsList } from '../../atoms';

export const StickyHelpersList = ({ socials }: Record<'socials', Articles['socials']>) => {
  return (
    <StickyContainer>
      <AnimatePresence>
        <StickyButtonsList>
          <ToggleTheme />
          {socials?.repository && (
            <SocialButton href={socials.repository}>
              <BsGithub size={18} />
            </SocialButton>
          )}
          {socials?.liveDemo && (
            <SocialButton href={socials.liveDemo}>
              <TbWorldWww size={18} />
            </SocialButton>
          )}
        </StickyButtonsList>
      </AnimatePresence>
    </StickyContainer>
  );
};
