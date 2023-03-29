import useTranslation from 'next-translate/useTranslation';

type Status = 'home' | 'global';

export const useInternationalizedRouting = (status: Status) => {
  const { t: global } = useTranslation('global');
  const { t: home } = useTranslation('home');

  if (status === 'home') {
    const aboutMeTitle = home('about-me.title'),
      aboutMeDescription = home('about-me.description');

    const postsListTitle = home('posts-list.title'),
      postsListDescription = home('posts-list.description'),
      postsListPlaceholder = home('posts-list.search-placeholder'),
      postsListTechnologies = home('posts-list.technologies');

    return { aboutMeTitle, aboutMeDescription, postsListTitle, postsListDescription, postsListPlaceholder, postsListTechnologies };
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

    const commentFormReset = global('comment.form.reset'),
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
      commentFormPublish,
      commentFormReset,
      gotchaButton,
    };
  }

  return {};
};
