import useTranslation from 'next-translate/useTranslation';

type Status = 'home' | 'global';

export const useInternationalizedRouting = (status: Status) => {
  const { t: global } = useTranslation('global');
  const { t: home } = useTranslation('home');

  if (status === 'home') {
    const aboutMeTitle = home('about-me.title');

    const postsListTitle = home('posts-list.title'),
      postsListDescription = home('posts-list.description'),
      postsListPlaceholder = home('posts-list.search-placeholder'),
      postsListTechnologies = home('posts-list.technologies');

    return { aboutMeTitle, postsListTitle, postsListDescription, postsListPlaceholder, postsListTechnologies };
  }
  if (status === 'global') {
    const userProfileSignIn = global('user-profile.sign-in'),
      userProfileSignOut = global('user-profile.sign-out'),
      userProfileChangeLocation = global('user-profile.change-location');

    const tableOfContentsHeading = global('toc');

    const resourcesListsTitle = global('resources');

    const newsletterTitle = global('newsletter.title'),
      newsletterDescription = global('newsletter.description'),
      newsletterPlaceholder = global('newsletter.placeholder'),
      newsletterButton = global('newsletter.button');

    const joinOurCommunityTitle = global('join-our-community.title'),
      joinOurCommunityDescription = global('join-our-community.description'),
      joinOurCommunityButton = global('join-our-community.button');

    const commentFormTitle = global('comment.title'),
      commentFormDescription = global('comment.description'),
      commentFormReset = global('comment.form.reset'),
      commentFormPublish = global('comment.form.publish');

    const gotchaButton = global('gotcha-button');

    return {
      userProfileSignIn,
      userProfileSignOut,
      userProfileChangeLocation,
      tableOfContentsHeading,
      resourcesListsTitle,
      newsletterTitle,
      newsletterDescription,
      newsletterPlaceholder,
      newsletterButton,
      joinOurCommunityTitle,
      joinOurCommunityDescription,
      joinOurCommunityButton,
      commentFormTitle,
      commentFormDescription,
      commentFormPublish,
      commentFormReset,
      gotchaButton,
    };
  }

  return {};
};
