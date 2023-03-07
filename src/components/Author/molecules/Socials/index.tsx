import Link from 'next/link';
import { BsGithub, BsTwitter } from 'react-icons/bs';

import styles from './Socials.module.scss';

export const Socials = () => {
  return (
    <div className={styles.socials}>
      <Link href="/github">
        <BsGithub size={24} />
      </Link>
      <Link href="/twitter">
        <BsTwitter size={24} />
      </Link>
    </div>
  );
};
