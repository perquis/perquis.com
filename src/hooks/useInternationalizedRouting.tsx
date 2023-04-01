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
      commentFormAuthenticatedDescription = global('comment.authenticated-description'),
      commentFormUnauthenticatedDescription = global('comment.unauthenticated-description'),
      commentFormReset = global('comment.form.reset'),
      commentFormPublish = global('comment.form.publish'),
      commentFormPlaceholder = global('comment.form.placeholder'),
      commentOptionsEdit = global('comment.options.edit'),
      commentOptionsDelete = global('comment.options.delete');

    const gotchaButton = global('gotcha-button');

    const loadingMessage = global('loading');

    const notificationSuccess = global('notificaion.success'),
      notificationSuccessDeleteComment = global('notificaion.success-delete-comment'),
      notificaionError = global('notificaion.error'),
      notificaionInfo = global('notificaion.info'),
      notificaionTextSuccess = global('notificaion.status.success'),
      notificaionTextError = global('notificaion.status.error'),
      notificaionTextWarn = global('notificaion.status.warn'),
      notificaionTextInfo = global('notificaion.status.info');

    return {
      loadingMessage,
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
      commentFormReset,
      commentFormPublish,
      commentFormPlaceholder,
      commentFormAuthenticatedDescription,
      commentFormUnauthenticatedDescription,
      commentOptionsEdit,
      commentOptionsDelete,
      gotchaButton,
      notificaionInfo,
      notificaionError,
      notificationSuccess,
      notificationSuccessDeleteComment,
      notificaionTextSuccess,
      notificaionTextError,
      notificaionTextWarn,
      notificaionTextInfo,
    };
  }

  return {};
};
