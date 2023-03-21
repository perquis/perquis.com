/* eslint-disable */
import * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: Date;
  DateTime: Date;
  Hex: any;
  Json: { [key: string]: any };
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  RichTextAST: any;
};

export type Aggregate = {
  readonly __typename?: 'Aggregate';
  readonly count: Scalars['Int'];
};

/** This schema represents all articles list. */
export type Articles = Node & {
  readonly __typename?: 'Articles';
  readonly comments: ReadonlyArray<CommentsSchema>;
  readonly content?: Maybe<Scalars['String']>;
  /** The time the document was created */
  readonly createdAt: Scalars['DateTime'];
  /** User that created this document */
  readonly createdBy?: Maybe<User>;
  /** Get the document in other stages */
  readonly documentInStages: ReadonlyArray<Articles>;
  /** List of Articles versions */
  readonly history: ReadonlyArray<Version>;
  /** The unique identifier */
  readonly id: Scalars['ID'];
  readonly introduction?: Maybe<Scalars['String']>;
  /** System Locale field */
  readonly locale: Locale;
  /** Get the other localizations for this document */
  readonly localizations: ReadonlyArray<Articles>;
  /** The time the document was published. Null on documents in draft stage. */
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  readonly publishedBy?: Maybe<User>;
  readonly resources: ReadonlyArray<Links>;
  readonly scheduledIn: ReadonlyArray<ScheduledOperation>;
  readonly slug?: Maybe<Scalars['String']>;
  /** System stage field */
  readonly stage: Stage;
  readonly tags: ReadonlyArray<Tags>;
  readonly thumbnail?: Maybe<Asset>;
  readonly title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  readonly updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  readonly updatedBy?: Maybe<User>;
};

/** This schema represents all articles list. */
export type ArticlesCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  orderBy?: InputMaybe<CommentsSchemaOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommentsSchemaWhereInput>;
};

/** This schema represents all articles list. */
export type ArticlesCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** This schema represents all articles list. */
export type ArticlesCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

/** This schema represents all articles list. */
export type ArticlesDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: ReadonlyArray<Stage>;
};

/** This schema represents all articles list. */
export type ArticlesHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};

/** This schema represents all articles list. */
export type ArticlesLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: ReadonlyArray<Locale>;
};

/** This schema represents all articles list. */
export type ArticlesPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** This schema represents all articles list. */
export type ArticlesPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

/** This schema represents all articles list. */
export type ArticlesResourcesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  orderBy?: InputMaybe<LinksOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LinksWhereInput>;
};

/** This schema represents all articles list. */
export type ArticlesScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** This schema represents all articles list. */
export type ArticlesThumbnailArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

/** This schema represents all articles list. */
export type ArticlesUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** This schema represents all articles list. */
export type ArticlesUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type ArticlesConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  readonly where: ArticlesWhereUniqueInput;
};

/** A connection to a list of items. */
export type ArticlesConnection = {
  readonly __typename?: 'ArticlesConnection';
  readonly aggregate: Aggregate;
  /** A list of edges. */
  readonly edges: ReadonlyArray<ArticlesEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
};

export type ArticlesCreateInput = {
  readonly comments?: InputMaybe<CommentsSchemaCreateManyInlineInput>;
  /** content input for default locale (en) */
  readonly content?: InputMaybe<Scalars['String']>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  /** introduction input for default locale (en) */
  readonly introduction?: InputMaybe<Scalars['String']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  readonly localizations?: InputMaybe<ArticlesCreateLocalizationsInput>;
  readonly resources?: InputMaybe<LinksCreateManyInlineInput>;
  /** slug input for default locale (en) */
  readonly slug?: InputMaybe<Scalars['String']>;
  readonly tags?: InputMaybe<ReadonlyArray<Tags>>;
  readonly thumbnail?: InputMaybe<AssetCreateOneInlineInput>;
  /** title input for default locale (en) */
  readonly title?: InputMaybe<Scalars['String']>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ArticlesCreateLocalizationDataInput = {
  readonly content?: InputMaybe<Scalars['String']>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  readonly introduction?: InputMaybe<Scalars['String']>;
  readonly slug?: InputMaybe<Scalars['String']>;
  readonly title?: InputMaybe<Scalars['String']>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ArticlesCreateLocalizationInput = {
  /** Localization input */
  readonly data: ArticlesCreateLocalizationDataInput;
  readonly locale: Locale;
};

export type ArticlesCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  readonly create?: InputMaybe<ReadonlyArray<ArticlesCreateLocalizationInput>>;
};

export type ArticlesCreateManyInlineInput = {
  /** Connect multiple existing Articles documents */
  readonly connect?: InputMaybe<ReadonlyArray<ArticlesWhereUniqueInput>>;
  /** Create and connect multiple existing Articles documents */
  readonly create?: InputMaybe<ReadonlyArray<ArticlesCreateInput>>;
};

export type ArticlesCreateOneInlineInput = {
  /** Connect one existing Articles document */
  readonly connect?: InputMaybe<ArticlesWhereUniqueInput>;
  /** Create and connect one Articles document */
  readonly create?: InputMaybe<ArticlesCreateInput>;
};

/** An edge in a connection. */
export type ArticlesEdge = {
  readonly __typename?: 'ArticlesEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Articles;
};

/** Identifies documents */
export type ArticlesManyWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<ArticlesWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<ArticlesWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<ArticlesWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']>;
  readonly comments_every?: InputMaybe<CommentsSchemaWhereInput>;
  readonly comments_none?: InputMaybe<CommentsSchemaWhereInput>;
  readonly comments_some?: InputMaybe<CommentsSchemaWhereInput>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly documentInStages_every?: InputMaybe<ArticlesWhereStageInput>;
  readonly documentInStages_none?: InputMaybe<ArticlesWhereStageInput>;
  readonly documentInStages_some?: InputMaybe<ArticlesWhereStageInput>;
  readonly id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly resources_every?: InputMaybe<LinksWhereInput>;
  readonly resources_none?: InputMaybe<LinksWhereInput>;
  readonly resources_some?: InputMaybe<LinksWhereInput>;
  readonly scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  readonly tags?: InputMaybe<ReadonlyArray<Tags>>;
  /** Matches if the field array contains *all* items provided to the filter */
  readonly tags_contains_all?: InputMaybe<ReadonlyArray<Tags>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  readonly tags_contains_none?: InputMaybe<ReadonlyArray<Tags>>;
  /** Matches if the field array contains at least one item provided to the filter */
  readonly tags_contains_some?: InputMaybe<ReadonlyArray<Tags>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  readonly tags_not?: InputMaybe<ReadonlyArray<Tags>>;
  readonly thumbnail?: InputMaybe<AssetWhereInput>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ArticlesOrderByInput {
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IntroductionAsc = 'introduction_ASC',
  IntroductionDesc = 'introduction_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TagsAsc = 'tags_ASC',
  TagsDesc = 'tags_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ArticlesUpdateInput = {
  readonly comments?: InputMaybe<CommentsSchemaUpdateManyInlineInput>;
  /** content input for default locale (en) */
  readonly content?: InputMaybe<Scalars['String']>;
  /** introduction input for default locale (en) */
  readonly introduction?: InputMaybe<Scalars['String']>;
  /** Manage document localizations */
  readonly localizations?: InputMaybe<ArticlesUpdateLocalizationsInput>;
  readonly resources?: InputMaybe<LinksUpdateManyInlineInput>;
  /** slug input for default locale (en) */
  readonly slug?: InputMaybe<Scalars['String']>;
  readonly tags?: InputMaybe<ReadonlyArray<Tags>>;
  readonly thumbnail?: InputMaybe<AssetUpdateOneInlineInput>;
  /** title input for default locale (en) */
  readonly title?: InputMaybe<Scalars['String']>;
};

export type ArticlesUpdateLocalizationDataInput = {
  readonly content?: InputMaybe<Scalars['String']>;
  readonly introduction?: InputMaybe<Scalars['String']>;
  readonly slug?: InputMaybe<Scalars['String']>;
  readonly title?: InputMaybe<Scalars['String']>;
};

export type ArticlesUpdateLocalizationInput = {
  readonly data: ArticlesUpdateLocalizationDataInput;
  readonly locale: Locale;
};

export type ArticlesUpdateLocalizationsInput = {
  /** Localizations to create */
  readonly create?: InputMaybe<ReadonlyArray<ArticlesCreateLocalizationInput>>;
  /** Localizations to delete */
  readonly delete?: InputMaybe<ReadonlyArray<Locale>>;
  /** Localizations to update */
  readonly update?: InputMaybe<ReadonlyArray<ArticlesUpdateLocalizationInput>>;
  readonly upsert?: InputMaybe<ReadonlyArray<ArticlesUpsertLocalizationInput>>;
};

export type ArticlesUpdateManyInlineInput = {
  /** Connect multiple existing Articles documents */
  readonly connect?: InputMaybe<ReadonlyArray<ArticlesConnectInput>>;
  /** Create and connect multiple Articles documents */
  readonly create?: InputMaybe<ReadonlyArray<ArticlesCreateInput>>;
  /** Delete multiple Articles documents */
  readonly delete?: InputMaybe<ReadonlyArray<ArticlesWhereUniqueInput>>;
  /** Disconnect multiple Articles documents */
  readonly disconnect?: InputMaybe<ReadonlyArray<ArticlesWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Articles documents */
  readonly set?: InputMaybe<ReadonlyArray<ArticlesWhereUniqueInput>>;
  /** Update multiple Articles documents */
  readonly update?: InputMaybe<ReadonlyArray<ArticlesUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Articles documents */
  readonly upsert?: InputMaybe<ReadonlyArray<ArticlesUpsertWithNestedWhereUniqueInput>>;
};

export type ArticlesUpdateManyInput = {
  /** introduction input for default locale (en) */
  readonly introduction?: InputMaybe<Scalars['String']>;
  /** Optional updates to localizations */
  readonly localizations?: InputMaybe<ArticlesUpdateManyLocalizationsInput>;
  readonly tags?: InputMaybe<ReadonlyArray<Tags>>;
};

export type ArticlesUpdateManyLocalizationDataInput = {
  readonly introduction?: InputMaybe<Scalars['String']>;
};

export type ArticlesUpdateManyLocalizationInput = {
  readonly data: ArticlesUpdateManyLocalizationDataInput;
  readonly locale: Locale;
};

export type ArticlesUpdateManyLocalizationsInput = {
  /** Localizations to update */
  readonly update?: InputMaybe<ReadonlyArray<ArticlesUpdateManyLocalizationInput>>;
};

export type ArticlesUpdateManyWithNestedWhereInput = {
  /** Update many input */
  readonly data: ArticlesUpdateManyInput;
  /** Document search */
  readonly where: ArticlesWhereInput;
};

export type ArticlesUpdateOneInlineInput = {
  /** Connect existing Articles document */
  readonly connect?: InputMaybe<ArticlesWhereUniqueInput>;
  /** Create and connect one Articles document */
  readonly create?: InputMaybe<ArticlesCreateInput>;
  /** Delete currently connected Articles document */
  readonly delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Articles document */
  readonly disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Articles document */
  readonly update?: InputMaybe<ArticlesUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Articles document */
  readonly upsert?: InputMaybe<ArticlesUpsertWithNestedWhereUniqueInput>;
};

export type ArticlesUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  readonly data: ArticlesUpdateInput;
  /** Unique document search */
  readonly where: ArticlesWhereUniqueInput;
};

export type ArticlesUpsertInput = {
  /** Create document if it didn't exist */
  readonly create: ArticlesCreateInput;
  /** Update document if it exists */
  readonly update: ArticlesUpdateInput;
};

export type ArticlesUpsertLocalizationInput = {
  readonly create: ArticlesCreateLocalizationDataInput;
  readonly locale: Locale;
  readonly update: ArticlesUpdateLocalizationDataInput;
};

export type ArticlesUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  readonly data: ArticlesUpsertInput;
  /** Unique document search */
  readonly where: ArticlesWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ArticlesWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  readonly outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ArticlesWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<ArticlesWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<ArticlesWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<ArticlesWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']>;
  readonly comments_every?: InputMaybe<CommentsSchemaWhereInput>;
  readonly comments_none?: InputMaybe<CommentsSchemaWhereInput>;
  readonly comments_some?: InputMaybe<CommentsSchemaWhereInput>;
  readonly content?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly content_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly content_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly content_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly content_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly content_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly content_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly content_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly content_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly content_starts_with?: InputMaybe<Scalars['String']>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly documentInStages_every?: InputMaybe<ArticlesWhereStageInput>;
  readonly documentInStages_none?: InputMaybe<ArticlesWhereStageInput>;
  readonly documentInStages_some?: InputMaybe<ArticlesWhereStageInput>;
  readonly id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']>;
  readonly introduction?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly introduction_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly introduction_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly introduction_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly introduction_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly introduction_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly introduction_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly introduction_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly introduction_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly introduction_starts_with?: InputMaybe<Scalars['String']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly resources_every?: InputMaybe<LinksWhereInput>;
  readonly resources_none?: InputMaybe<LinksWhereInput>;
  readonly resources_some?: InputMaybe<LinksWhereInput>;
  readonly scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  readonly slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly slug_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly slug_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly slug_starts_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  readonly tags?: InputMaybe<ReadonlyArray<Tags>>;
  /** Matches if the field array contains *all* items provided to the filter */
  readonly tags_contains_all?: InputMaybe<ReadonlyArray<Tags>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  readonly tags_contains_none?: InputMaybe<ReadonlyArray<Tags>>;
  /** Matches if the field array contains at least one item provided to the filter */
  readonly tags_contains_some?: InputMaybe<ReadonlyArray<Tags>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  readonly tags_not?: InputMaybe<ReadonlyArray<Tags>>;
  readonly thumbnail?: InputMaybe<AssetWhereInput>;
  readonly title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly title_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly title_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly title_starts_with?: InputMaybe<Scalars['String']>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ArticlesWhereStageInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<ArticlesWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<ArticlesWhereStageInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<ArticlesWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  readonly compareWithParent?: InputMaybe<ArticlesWhereComparatorInput>;
  /** Specify the stage to compare with */
  readonly stage?: InputMaybe<Stage>;
};

/** References Articles record uniquely */
export type ArticlesWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars['ID']>;
};

/** Asset system model */
export type Asset = Node & {
  readonly __typename?: 'Asset';
  /** The time the document was created */
  readonly createdAt: Scalars['DateTime'];
  /** User that created this document */
  readonly createdBy?: Maybe<User>;
  /** Get the document in other stages */
  readonly documentInStages: ReadonlyArray<Asset>;
  /** The file name */
  readonly fileName: Scalars['String'];
  /** The file handle */
  readonly handle: Scalars['String'];
  /** The height of the file */
  readonly height?: Maybe<Scalars['Float']>;
  /** List of Asset versions */
  readonly history: ReadonlyArray<Version>;
  /** The unique identifier */
  readonly id: Scalars['ID'];
  /** System Locale field */
  readonly locale: Locale;
  /** Get the other localizations for this document */
  readonly localizations: ReadonlyArray<Asset>;
  /** The mime type of the file */
  readonly mimeType?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  readonly publishedBy?: Maybe<User>;
  readonly scheduledIn: ReadonlyArray<ScheduledOperation>;
  /** The file size */
  readonly size?: Maybe<Scalars['Float']>;
  /** System stage field */
  readonly stage: Stage;
  readonly thumbnailArticles: ReadonlyArray<Articles>;
  readonly thumbnailProjects: ReadonlyArray<Projects>;
  /** The time the document was updated */
  readonly updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  readonly updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  readonly url: Scalars['String'];
  /** The file width */
  readonly width?: Maybe<Scalars['Float']>;
};

/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: ReadonlyArray<Stage>;
};

/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};

/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: ReadonlyArray<Locale>;
};

/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** Asset system model */
export type AssetThumbnailArticlesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  orderBy?: InputMaybe<ArticlesOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ArticlesWhereInput>;
};

/** Asset system model */
export type AssetThumbnailProjectsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  orderBy?: InputMaybe<ProjectsOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectsWhereInput>;
};

/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  readonly where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  readonly __typename?: 'AssetConnection';
  readonly aggregate: Aggregate;
  /** A list of edges. */
  readonly edges: ReadonlyArray<AssetEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
};

export type AssetCreateInput = {
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  readonly fileName: Scalars['String'];
  readonly handle: Scalars['String'];
  readonly height?: InputMaybe<Scalars['Float']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  readonly localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  readonly mimeType?: InputMaybe<Scalars['String']>;
  readonly size?: InputMaybe<Scalars['Float']>;
  readonly thumbnailArticles?: InputMaybe<ArticlesCreateManyInlineInput>;
  readonly thumbnailProjects?: InputMaybe<ProjectsCreateManyInlineInput>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
  readonly width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  readonly fileName: Scalars['String'];
  readonly handle: Scalars['String'];
  readonly height?: InputMaybe<Scalars['Float']>;
  readonly mimeType?: InputMaybe<Scalars['String']>;
  readonly size?: InputMaybe<Scalars['Float']>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
  readonly width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  readonly data: AssetCreateLocalizationDataInput;
  readonly locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  readonly create?: InputMaybe<ReadonlyArray<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  readonly connect?: InputMaybe<ReadonlyArray<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  readonly create?: InputMaybe<ReadonlyArray<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  readonly connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  readonly create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  readonly __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  readonly documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  readonly documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  readonly id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  readonly thumbnailArticles_every?: InputMaybe<ArticlesWhereInput>;
  readonly thumbnailArticles_none?: InputMaybe<ArticlesWhereInput>;
  readonly thumbnailArticles_some?: InputMaybe<ArticlesWhereInput>;
  readonly thumbnailProjects_every?: InputMaybe<ProjectsWhereInput>;
  readonly thumbnailProjects_none?: InputMaybe<ProjectsWhereInput>;
  readonly thumbnailProjects_some?: InputMaybe<ProjectsWhereInput>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  readonly document?: InputMaybe<DocumentTransformationInput>;
  readonly image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  readonly validateOptions?: InputMaybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  readonly fileName?: InputMaybe<Scalars['String']>;
  readonly handle?: InputMaybe<Scalars['String']>;
  readonly height?: InputMaybe<Scalars['Float']>;
  /** Manage document localizations */
  readonly localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  readonly mimeType?: InputMaybe<Scalars['String']>;
  readonly size?: InputMaybe<Scalars['Float']>;
  readonly thumbnailArticles?: InputMaybe<ArticlesUpdateManyInlineInput>;
  readonly thumbnailProjects?: InputMaybe<ProjectsUpdateManyInlineInput>;
  readonly width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
  readonly fileName?: InputMaybe<Scalars['String']>;
  readonly handle?: InputMaybe<Scalars['String']>;
  readonly height?: InputMaybe<Scalars['Float']>;
  readonly mimeType?: InputMaybe<Scalars['String']>;
  readonly size?: InputMaybe<Scalars['Float']>;
  readonly width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
  readonly data: AssetUpdateLocalizationDataInput;
  readonly locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  readonly create?: InputMaybe<ReadonlyArray<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  readonly delete?: InputMaybe<ReadonlyArray<Locale>>;
  /** Localizations to update */
  readonly update?: InputMaybe<ReadonlyArray<AssetUpdateLocalizationInput>>;
  readonly upsert?: InputMaybe<ReadonlyArray<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  readonly connect?: InputMaybe<ReadonlyArray<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  readonly create?: InputMaybe<ReadonlyArray<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  readonly delete?: InputMaybe<ReadonlyArray<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  readonly disconnect?: InputMaybe<ReadonlyArray<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  readonly set?: InputMaybe<ReadonlyArray<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  readonly update?: InputMaybe<ReadonlyArray<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  readonly upsert?: InputMaybe<ReadonlyArray<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  readonly fileName?: InputMaybe<Scalars['String']>;
  readonly height?: InputMaybe<Scalars['Float']>;
  /** Optional updates to localizations */
  readonly localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  readonly mimeType?: InputMaybe<Scalars['String']>;
  readonly size?: InputMaybe<Scalars['Float']>;
  readonly width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  readonly fileName?: InputMaybe<Scalars['String']>;
  readonly height?: InputMaybe<Scalars['Float']>;
  readonly mimeType?: InputMaybe<Scalars['String']>;
  readonly size?: InputMaybe<Scalars['Float']>;
  readonly width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
  readonly data: AssetUpdateManyLocalizationDataInput;
  readonly locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  readonly update?: InputMaybe<ReadonlyArray<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  readonly data: AssetUpdateManyInput;
  /** Document search */
  readonly where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  readonly connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  readonly create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  readonly delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  readonly disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Asset document */
  readonly update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  readonly upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  readonly data: AssetUpdateInput;
  /** Unique document search */
  readonly where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  readonly create: AssetCreateInput;
  /** Update document if it exists */
  readonly update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  readonly create: AssetCreateLocalizationDataInput;
  readonly locale: Locale;
  readonly update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  readonly data: AssetUpsertInput;
  /** Unique document search */
  readonly where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  readonly outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  readonly documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  readonly documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  readonly fileName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly fileName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly fileName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly fileName_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly fileName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly fileName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly fileName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly fileName_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly fileName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly fileName_starts_with?: InputMaybe<Scalars['String']>;
  readonly handle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly handle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly handle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly handle_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly handle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly handle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly handle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly handle_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly handle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly handle_starts_with?: InputMaybe<Scalars['String']>;
  readonly height?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  readonly height_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  readonly height_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  readonly height_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  readonly height_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  readonly height_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  readonly height_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  readonly height_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  readonly id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']>;
  readonly mimeType?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly mimeType_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly mimeType_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly mimeType_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly mimeType_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly mimeType_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly mimeType_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly mimeType_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly mimeType_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly mimeType_starts_with?: InputMaybe<Scalars['String']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  readonly size?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  readonly size_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  readonly size_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  readonly size_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  readonly size_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  readonly size_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  readonly size_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  readonly size_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  readonly thumbnailArticles_every?: InputMaybe<ArticlesWhereInput>;
  readonly thumbnailArticles_none?: InputMaybe<ArticlesWhereInput>;
  readonly thumbnailArticles_some?: InputMaybe<ArticlesWhereInput>;
  readonly thumbnailProjects_every?: InputMaybe<ProjectsWhereInput>;
  readonly thumbnailProjects_none?: InputMaybe<ProjectsWhereInput>;
  readonly thumbnailProjects_some?: InputMaybe<ProjectsWhereInput>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
  readonly width?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  readonly width_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  readonly width_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  readonly width_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  readonly width_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  readonly width_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  readonly width_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  readonly width_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  readonly compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  readonly stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars['ID']>;
};

export type BatchPayload = {
  readonly __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  readonly count: Scalars['Long'];
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  readonly __typename?: 'Color';
  readonly css: Scalars['String'];
  readonly hex: Scalars['Hex'];
  readonly rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  readonly hex?: InputMaybe<Scalars['Hex']>;
  readonly rgba?: InputMaybe<RgbaInput>;
};

export type Comments = {
  readonly __typename?: 'Comments';
  readonly avatar: Scalars['String'];
  readonly content: Scalars['String'];
  /** The unique identifier */
  readonly id: Scalars['ID'];
  readonly languages: Languages;
  readonly nickname: Scalars['String'];
  /** System stage field */
  readonly stage: Stage;
};

export type CommentsConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  readonly where: CommentsWhereUniqueInput;
};

/** A connection to a list of items. */
export type CommentsConnection = {
  readonly __typename?: 'CommentsConnection';
  readonly aggregate: Aggregate;
  /** A list of edges. */
  readonly edges: ReadonlyArray<CommentsEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
};

export type CommentsCreateInput = {
  readonly avatar: Scalars['String'];
  readonly content: Scalars['String'];
  readonly languages: Languages;
  readonly nickname: Scalars['String'];
};

export type CommentsCreateManyInlineInput = {
  /** Create and connect multiple existing Comments documents */
  readonly create?: InputMaybe<ReadonlyArray<CommentsCreateInput>>;
};

export type CommentsCreateOneInlineInput = {
  /** Create and connect one Comments document */
  readonly create?: InputMaybe<CommentsCreateInput>;
};

export type CommentsCreateWithPositionInput = {
  /** Document to create */
  readonly data: CommentsCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  readonly position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type CommentsEdge = {
  readonly __typename?: 'CommentsEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Comments;
};

/** Identifies documents */
export type CommentsManyWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<CommentsWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<CommentsWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<CommentsWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']>;
  readonly avatar?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly avatar_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly avatar_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly avatar_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly avatar_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly avatar_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly avatar_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly avatar_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly avatar_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly avatar_starts_with?: InputMaybe<Scalars['String']>;
  readonly content?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly content_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly content_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly content_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly content_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly content_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly content_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly content_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly content_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly content_starts_with?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']>;
  readonly languages?: InputMaybe<Languages>;
  /** All values that are contained in given list. */
  readonly languages_in?: InputMaybe<ReadonlyArray<InputMaybe<Languages>>>;
  /** All values that are not equal to given value. */
  readonly languages_not?: InputMaybe<Languages>;
  /** All values that are not contained in given list. */
  readonly languages_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Languages>>>;
  readonly nickname?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly nickname_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly nickname_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly nickname_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly nickname_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly nickname_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly nickname_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly nickname_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly nickname_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly nickname_starts_with?: InputMaybe<Scalars['String']>;
};

export enum CommentsOrderByInput {
  AvatarAsc = 'avatar_ASC',
  AvatarDesc = 'avatar_DESC',
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LanguagesAsc = 'languages_ASC',
  LanguagesDesc = 'languages_DESC',
  NicknameAsc = 'nickname_ASC',
  NicknameDesc = 'nickname_DESC',
}

export type CommentsParent = CommentsSchema;

export type CommentsParentConnectInput = {
  readonly CommentsSchema?: InputMaybe<CommentsSchemaConnectInput>;
};

export type CommentsParentCreateInput = {
  readonly CommentsSchema?: InputMaybe<CommentsSchemaCreateInput>;
};

export type CommentsParentCreateManyInlineInput = {
  /** Connect multiple existing CommentsParent documents */
  readonly connect?: InputMaybe<ReadonlyArray<CommentsParentWhereUniqueInput>>;
  /** Create and connect multiple existing CommentsParent documents */
  readonly create?: InputMaybe<ReadonlyArray<CommentsParentCreateInput>>;
};

export type CommentsParentCreateOneInlineInput = {
  /** Connect one existing CommentsParent document */
  readonly connect?: InputMaybe<CommentsParentWhereUniqueInput>;
  /** Create and connect one CommentsParent document */
  readonly create?: InputMaybe<CommentsParentCreateInput>;
};

export type CommentsParentUpdateInput = {
  readonly CommentsSchema?: InputMaybe<CommentsSchemaUpdateInput>;
};

export type CommentsParentUpdateManyInlineInput = {
  /** Connect multiple existing CommentsParent documents */
  readonly connect?: InputMaybe<ReadonlyArray<CommentsParentConnectInput>>;
  /** Create and connect multiple CommentsParent documents */
  readonly create?: InputMaybe<ReadonlyArray<CommentsParentCreateInput>>;
  /** Delete multiple CommentsParent documents */
  readonly delete?: InputMaybe<ReadonlyArray<CommentsParentWhereUniqueInput>>;
  /** Disconnect multiple CommentsParent documents */
  readonly disconnect?: InputMaybe<ReadonlyArray<CommentsParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing CommentsParent documents */
  readonly set?: InputMaybe<ReadonlyArray<CommentsParentWhereUniqueInput>>;
  /** Update multiple CommentsParent documents */
  readonly update?: InputMaybe<ReadonlyArray<CommentsParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple CommentsParent documents */
  readonly upsert?: InputMaybe<ReadonlyArray<CommentsParentUpsertWithNestedWhereUniqueInput>>;
};

export type CommentsParentUpdateManyWithNestedWhereInput = {
  readonly CommentsSchema?: InputMaybe<CommentsSchemaUpdateManyWithNestedWhereInput>;
};

export type CommentsParentUpdateOneInlineInput = {
  /** Connect existing CommentsParent document */
  readonly connect?: InputMaybe<CommentsParentWhereUniqueInput>;
  /** Create and connect one CommentsParent document */
  readonly create?: InputMaybe<CommentsParentCreateInput>;
  /** Delete currently connected CommentsParent document */
  readonly delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected CommentsParent document */
  readonly disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single CommentsParent document */
  readonly update?: InputMaybe<CommentsParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CommentsParent document */
  readonly upsert?: InputMaybe<CommentsParentUpsertWithNestedWhereUniqueInput>;
};

export type CommentsParentUpdateWithNestedWhereUniqueInput = {
  readonly CommentsSchema?: InputMaybe<CommentsSchemaUpdateWithNestedWhereUniqueInput>;
};

export type CommentsParentUpsertWithNestedWhereUniqueInput = {
  readonly CommentsSchema?: InputMaybe<CommentsSchemaUpsertWithNestedWhereUniqueInput>;
};

export type CommentsParentWhereInput = {
  readonly CommentsSchema?: InputMaybe<CommentsSchemaWhereInput>;
};

export type CommentsParentWhereUniqueInput = {
  readonly CommentsSchema?: InputMaybe<CommentsSchemaWhereUniqueInput>;
};

export type CommentsSchema = Node & {
  readonly __typename?: 'CommentsSchema';
  readonly articles?: Maybe<Articles>;
  readonly avatar: Scalars['String'];
  readonly content: Scalars['String'];
  /** The time the document was created */
  readonly createdAt: Scalars['DateTime'];
  /** User that created this document */
  readonly createdBy?: Maybe<User>;
  /** Get the document in other stages */
  readonly documentInStages: ReadonlyArray<CommentsSchema>;
  readonly edges: ReadonlyArray<Comments>;
  /** List of CommentsSchema versions */
  readonly history: ReadonlyArray<Version>;
  /** The unique identifier */
  readonly id: Scalars['ID'];
  readonly languages: Languages;
  readonly nickname: Scalars['String'];
  /** The time the document was published. Null on documents in draft stage. */
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  readonly publishedBy?: Maybe<User>;
  readonly scheduledIn: ReadonlyArray<ScheduledOperation>;
  /** System stage field */
  readonly stage: Stage;
  /** The time the document was updated */
  readonly updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  readonly updatedBy?: Maybe<User>;
};

export type CommentsSchemaArticlesArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type CommentsSchemaCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type CommentsSchemaDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: ReadonlyArray<Stage>;
};

export type CommentsSchemaEdgesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  orderBy?: InputMaybe<CommentsOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommentsWhereInput>;
};

export type CommentsSchemaHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};

export type CommentsSchemaPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type CommentsSchemaScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type CommentsSchemaUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type CommentsSchemaConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  readonly where: CommentsSchemaWhereUniqueInput;
};

/** A connection to a list of items. */
export type CommentsSchemaConnection = {
  readonly __typename?: 'CommentsSchemaConnection';
  readonly aggregate: Aggregate;
  /** A list of edges. */
  readonly edges: ReadonlyArray<CommentsSchemaEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
};

export type CommentsSchemaCreateInput = {
  readonly articles?: InputMaybe<ArticlesCreateOneInlineInput>;
  readonly avatar: Scalars['String'];
  readonly content: Scalars['String'];
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  readonly edges?: InputMaybe<CommentsCreateManyInlineInput>;
  readonly languages: Languages;
  readonly nickname: Scalars['String'];
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CommentsSchemaCreateManyInlineInput = {
  /** Connect multiple existing CommentsSchema documents */
  readonly connect?: InputMaybe<ReadonlyArray<CommentsSchemaWhereUniqueInput>>;
  /** Create and connect multiple existing CommentsSchema documents */
  readonly create?: InputMaybe<ReadonlyArray<CommentsSchemaCreateInput>>;
};

export type CommentsSchemaCreateOneInlineInput = {
  /** Connect one existing CommentsSchema document */
  readonly connect?: InputMaybe<CommentsSchemaWhereUniqueInput>;
  /** Create and connect one CommentsSchema document */
  readonly create?: InputMaybe<CommentsSchemaCreateInput>;
};

/** An edge in a connection. */
export type CommentsSchemaEdge = {
  readonly __typename?: 'CommentsSchemaEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: CommentsSchema;
};

/** Identifies documents */
export type CommentsSchemaManyWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<CommentsSchemaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<CommentsSchemaWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<CommentsSchemaWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']>;
  readonly articles?: InputMaybe<ArticlesWhereInput>;
  readonly avatar?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly avatar_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly avatar_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly avatar_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly avatar_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly avatar_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly avatar_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly avatar_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly avatar_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly avatar_starts_with?: InputMaybe<Scalars['String']>;
  readonly content?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly content_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly content_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly content_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly content_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly content_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly content_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly content_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly content_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly content_starts_with?: InputMaybe<Scalars['String']>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly documentInStages_every?: InputMaybe<CommentsSchemaWhereStageInput>;
  readonly documentInStages_none?: InputMaybe<CommentsSchemaWhereStageInput>;
  readonly documentInStages_some?: InputMaybe<CommentsSchemaWhereStageInput>;
  readonly edges_every?: InputMaybe<CommentsWhereInput>;
  readonly edges_none?: InputMaybe<CommentsWhereInput>;
  readonly edges_some?: InputMaybe<CommentsWhereInput>;
  readonly id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']>;
  readonly languages?: InputMaybe<Languages>;
  /** All values that are contained in given list. */
  readonly languages_in?: InputMaybe<ReadonlyArray<InputMaybe<Languages>>>;
  /** All values that are not equal to given value. */
  readonly languages_not?: InputMaybe<Languages>;
  /** All values that are not contained in given list. */
  readonly languages_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Languages>>>;
  readonly nickname?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly nickname_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly nickname_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly nickname_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly nickname_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly nickname_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly nickname_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly nickname_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly nickname_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly nickname_starts_with?: InputMaybe<Scalars['String']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

export enum CommentsSchemaOrderByInput {
  AvatarAsc = 'avatar_ASC',
  AvatarDesc = 'avatar_DESC',
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LanguagesAsc = 'languages_ASC',
  LanguagesDesc = 'languages_DESC',
  NicknameAsc = 'nickname_ASC',
  NicknameDesc = 'nickname_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type CommentsSchemaUpdateInput = {
  readonly articles?: InputMaybe<ArticlesUpdateOneInlineInput>;
  readonly avatar?: InputMaybe<Scalars['String']>;
  readonly content?: InputMaybe<Scalars['String']>;
  readonly edges?: InputMaybe<CommentsUpdateManyInlineInput>;
  readonly languages?: InputMaybe<Languages>;
  readonly nickname?: InputMaybe<Scalars['String']>;
};

export type CommentsSchemaUpdateManyInlineInput = {
  /** Connect multiple existing CommentsSchema documents */
  readonly connect?: InputMaybe<ReadonlyArray<CommentsSchemaConnectInput>>;
  /** Create and connect multiple CommentsSchema documents */
  readonly create?: InputMaybe<ReadonlyArray<CommentsSchemaCreateInput>>;
  /** Delete multiple CommentsSchema documents */
  readonly delete?: InputMaybe<ReadonlyArray<CommentsSchemaWhereUniqueInput>>;
  /** Disconnect multiple CommentsSchema documents */
  readonly disconnect?: InputMaybe<ReadonlyArray<CommentsSchemaWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing CommentsSchema documents */
  readonly set?: InputMaybe<ReadonlyArray<CommentsSchemaWhereUniqueInput>>;
  /** Update multiple CommentsSchema documents */
  readonly update?: InputMaybe<ReadonlyArray<CommentsSchemaUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple CommentsSchema documents */
  readonly upsert?: InputMaybe<ReadonlyArray<CommentsSchemaUpsertWithNestedWhereUniqueInput>>;
};

export type CommentsSchemaUpdateManyInput = {
  readonly avatar?: InputMaybe<Scalars['String']>;
  readonly content?: InputMaybe<Scalars['String']>;
  readonly languages?: InputMaybe<Languages>;
  readonly nickname?: InputMaybe<Scalars['String']>;
};

export type CommentsSchemaUpdateManyWithNestedWhereInput = {
  /** Update many input */
  readonly data: CommentsSchemaUpdateManyInput;
  /** Document search */
  readonly where: CommentsSchemaWhereInput;
};

export type CommentsSchemaUpdateOneInlineInput = {
  /** Connect existing CommentsSchema document */
  readonly connect?: InputMaybe<CommentsSchemaWhereUniqueInput>;
  /** Create and connect one CommentsSchema document */
  readonly create?: InputMaybe<CommentsSchemaCreateInput>;
  /** Delete currently connected CommentsSchema document */
  readonly delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected CommentsSchema document */
  readonly disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single CommentsSchema document */
  readonly update?: InputMaybe<CommentsSchemaUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CommentsSchema document */
  readonly upsert?: InputMaybe<CommentsSchemaUpsertWithNestedWhereUniqueInput>;
};

export type CommentsSchemaUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  readonly data: CommentsSchemaUpdateInput;
  /** Unique document search */
  readonly where: CommentsSchemaWhereUniqueInput;
};

export type CommentsSchemaUpsertInput = {
  /** Create document if it didn't exist */
  readonly create: CommentsSchemaCreateInput;
  /** Update document if it exists */
  readonly update: CommentsSchemaUpdateInput;
};

export type CommentsSchemaUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  readonly data: CommentsSchemaUpsertInput;
  /** Unique document search */
  readonly where: CommentsSchemaWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type CommentsSchemaWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  readonly outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type CommentsSchemaWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<CommentsSchemaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<CommentsSchemaWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<CommentsSchemaWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']>;
  readonly articles?: InputMaybe<ArticlesWhereInput>;
  readonly avatar?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly avatar_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly avatar_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly avatar_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly avatar_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly avatar_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly avatar_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly avatar_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly avatar_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly avatar_starts_with?: InputMaybe<Scalars['String']>;
  readonly content?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly content_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly content_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly content_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly content_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly content_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly content_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly content_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly content_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly content_starts_with?: InputMaybe<Scalars['String']>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly documentInStages_every?: InputMaybe<CommentsSchemaWhereStageInput>;
  readonly documentInStages_none?: InputMaybe<CommentsSchemaWhereStageInput>;
  readonly documentInStages_some?: InputMaybe<CommentsSchemaWhereStageInput>;
  readonly edges_every?: InputMaybe<CommentsWhereInput>;
  readonly edges_none?: InputMaybe<CommentsWhereInput>;
  readonly edges_some?: InputMaybe<CommentsWhereInput>;
  readonly id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']>;
  readonly languages?: InputMaybe<Languages>;
  /** All values that are contained in given list. */
  readonly languages_in?: InputMaybe<ReadonlyArray<InputMaybe<Languages>>>;
  /** All values that are not equal to given value. */
  readonly languages_not?: InputMaybe<Languages>;
  /** All values that are not contained in given list. */
  readonly languages_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Languages>>>;
  readonly nickname?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly nickname_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly nickname_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly nickname_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly nickname_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly nickname_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly nickname_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly nickname_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly nickname_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly nickname_starts_with?: InputMaybe<Scalars['String']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type CommentsSchemaWhereStageInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<CommentsSchemaWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<CommentsSchemaWhereStageInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<CommentsSchemaWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  readonly compareWithParent?: InputMaybe<CommentsSchemaWhereComparatorInput>;
  /** Specify the stage to compare with */
  readonly stage?: InputMaybe<Stage>;
};

/** References CommentsSchema record uniquely */
export type CommentsSchemaWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars['ID']>;
};

export type CommentsUpdateInput = {
  readonly avatar?: InputMaybe<Scalars['String']>;
  readonly content?: InputMaybe<Scalars['String']>;
  readonly languages?: InputMaybe<Languages>;
  readonly nickname?: InputMaybe<Scalars['String']>;
};

export type CommentsUpdateManyInlineInput = {
  /** Create and connect multiple Comments component instances */
  readonly create?: InputMaybe<ReadonlyArray<CommentsCreateWithPositionInput>>;
  /** Delete multiple Comments documents */
  readonly delete?: InputMaybe<ReadonlyArray<CommentsWhereUniqueInput>>;
  /** Update multiple Comments component instances */
  readonly update?: InputMaybe<ReadonlyArray<CommentsUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Comments component instances */
  readonly upsert?: InputMaybe<ReadonlyArray<CommentsUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type CommentsUpdateManyInput = {
  readonly avatar?: InputMaybe<Scalars['String']>;
  readonly content?: InputMaybe<Scalars['String']>;
  readonly languages?: InputMaybe<Languages>;
  readonly nickname?: InputMaybe<Scalars['String']>;
};

export type CommentsUpdateManyWithNestedWhereInput = {
  /** Update many input */
  readonly data: CommentsUpdateManyInput;
  /** Document search */
  readonly where: CommentsWhereInput;
};

export type CommentsUpdateOneInlineInput = {
  /** Create and connect one Comments document */
  readonly create?: InputMaybe<CommentsCreateInput>;
  /** Delete currently connected Comments document */
  readonly delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single Comments document */
  readonly update?: InputMaybe<CommentsUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Comments document */
  readonly upsert?: InputMaybe<CommentsUpsertWithNestedWhereUniqueInput>;
};

export type CommentsUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  readonly data?: InputMaybe<CommentsUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  readonly position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  readonly where: CommentsWhereUniqueInput;
};

export type CommentsUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  readonly data: CommentsUpdateInput;
  /** Unique document search */
  readonly where: CommentsWhereUniqueInput;
};

export type CommentsUpsertInput = {
  /** Create document if it didn't exist */
  readonly create: CommentsCreateInput;
  /** Update document if it exists */
  readonly update: CommentsUpdateInput;
};

export type CommentsUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  readonly data?: InputMaybe<CommentsUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  readonly position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  readonly where: CommentsWhereUniqueInput;
};

export type CommentsUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  readonly data: CommentsUpsertInput;
  /** Unique document search */
  readonly where: CommentsWhereUniqueInput;
};

/** Identifies documents */
export type CommentsWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<CommentsWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<CommentsWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<CommentsWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']>;
  readonly avatar?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly avatar_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly avatar_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly avatar_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly avatar_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly avatar_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly avatar_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly avatar_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly avatar_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly avatar_starts_with?: InputMaybe<Scalars['String']>;
  readonly content?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly content_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly content_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly content_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly content_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly content_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly content_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly content_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly content_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly content_starts_with?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']>;
  readonly languages?: InputMaybe<Languages>;
  /** All values that are contained in given list. */
  readonly languages_in?: InputMaybe<ReadonlyArray<InputMaybe<Languages>>>;
  /** All values that are not equal to given value. */
  readonly languages_not?: InputMaybe<Languages>;
  /** All values that are not contained in given list. */
  readonly languages_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Languages>>>;
  readonly nickname?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly nickname_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly nickname_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly nickname_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly nickname_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly nickname_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly nickname_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly nickname_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly nickname_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly nickname_starts_with?: InputMaybe<Scalars['String']>;
};

/** References Comments record uniquely */
export type CommentsWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars['ID']>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  readonly after?: InputMaybe<Scalars['ID']>;
  /** Connect document before specified document */
  readonly before?: InputMaybe<Scalars['ID']>;
  /** Connect document at last position */
  readonly end?: InputMaybe<Scalars['Boolean']>;
  /** Connect document at first position */
  readonly start?: InputMaybe<Scalars['Boolean']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx',
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  readonly format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  readonly output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  readonly __typename?: 'DocumentVersion';
  readonly createdAt: Scalars['DateTime'];
  readonly data?: Maybe<Scalars['Json']>;
  readonly id: Scalars['ID'];
  readonly revision: Scalars['Int'];
  readonly stage: Stage;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale',
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  readonly fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  readonly height?: InputMaybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  readonly width?: InputMaybe<Scalars['Int']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  readonly resize?: InputMaybe<ImageResizeInput>;
};

export enum Languages {
  En = 'en',
  Pl = 'pl',
}

export type Links = {
  readonly __typename?: 'Links';
  /** The unique identifier */
  readonly id: Scalars['ID'];
  readonly link?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  /** System stage field */
  readonly stage: Stage;
};

export type LinksConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  readonly where: LinksWhereUniqueInput;
};

/** A connection to a list of items. */
export type LinksConnection = {
  readonly __typename?: 'LinksConnection';
  readonly aggregate: Aggregate;
  /** A list of edges. */
  readonly edges: ReadonlyArray<LinksEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
};

export type LinksCreateInput = {
  readonly link?: InputMaybe<Scalars['String']>;
  readonly name?: InputMaybe<Scalars['String']>;
};

export type LinksCreateManyInlineInput = {
  /** Create and connect multiple existing Links documents */
  readonly create?: InputMaybe<ReadonlyArray<LinksCreateInput>>;
};

export type LinksCreateOneInlineInput = {
  /** Create and connect one Links document */
  readonly create?: InputMaybe<LinksCreateInput>;
};

export type LinksCreateWithPositionInput = {
  /** Document to create */
  readonly data: LinksCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  readonly position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type LinksEdge = {
  readonly __typename?: 'LinksEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Links;
};

/** Identifies documents */
export type LinksManyWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<LinksWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<LinksWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<LinksWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']>;
  readonly link?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly link_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly link_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly link_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly link_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly link_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly link_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly link_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly link_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly link_starts_with?: InputMaybe<Scalars['String']>;
  readonly name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly name_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly name_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly name_starts_with?: InputMaybe<Scalars['String']>;
};

export enum LinksOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
}

export type LinksParent = Articles;

export type LinksParentConnectInput = {
  readonly Articles?: InputMaybe<ArticlesConnectInput>;
};

export type LinksParentCreateInput = {
  readonly Articles?: InputMaybe<ArticlesCreateInput>;
};

export type LinksParentCreateManyInlineInput = {
  /** Connect multiple existing LinksParent documents */
  readonly connect?: InputMaybe<ReadonlyArray<LinksParentWhereUniqueInput>>;
  /** Create and connect multiple existing LinksParent documents */
  readonly create?: InputMaybe<ReadonlyArray<LinksParentCreateInput>>;
};

export type LinksParentCreateOneInlineInput = {
  /** Connect one existing LinksParent document */
  readonly connect?: InputMaybe<LinksParentWhereUniqueInput>;
  /** Create and connect one LinksParent document */
  readonly create?: InputMaybe<LinksParentCreateInput>;
};

export type LinksParentUpdateInput = {
  readonly Articles?: InputMaybe<ArticlesUpdateInput>;
};

export type LinksParentUpdateManyInlineInput = {
  /** Connect multiple existing LinksParent documents */
  readonly connect?: InputMaybe<ReadonlyArray<LinksParentConnectInput>>;
  /** Create and connect multiple LinksParent documents */
  readonly create?: InputMaybe<ReadonlyArray<LinksParentCreateInput>>;
  /** Delete multiple LinksParent documents */
  readonly delete?: InputMaybe<ReadonlyArray<LinksParentWhereUniqueInput>>;
  /** Disconnect multiple LinksParent documents */
  readonly disconnect?: InputMaybe<ReadonlyArray<LinksParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing LinksParent documents */
  readonly set?: InputMaybe<ReadonlyArray<LinksParentWhereUniqueInput>>;
  /** Update multiple LinksParent documents */
  readonly update?: InputMaybe<ReadonlyArray<LinksParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple LinksParent documents */
  readonly upsert?: InputMaybe<ReadonlyArray<LinksParentUpsertWithNestedWhereUniqueInput>>;
};

export type LinksParentUpdateManyWithNestedWhereInput = {
  readonly Articles?: InputMaybe<ArticlesUpdateManyWithNestedWhereInput>;
};

export type LinksParentUpdateOneInlineInput = {
  /** Connect existing LinksParent document */
  readonly connect?: InputMaybe<LinksParentWhereUniqueInput>;
  /** Create and connect one LinksParent document */
  readonly create?: InputMaybe<LinksParentCreateInput>;
  /** Delete currently connected LinksParent document */
  readonly delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected LinksParent document */
  readonly disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single LinksParent document */
  readonly update?: InputMaybe<LinksParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single LinksParent document */
  readonly upsert?: InputMaybe<LinksParentUpsertWithNestedWhereUniqueInput>;
};

export type LinksParentUpdateWithNestedWhereUniqueInput = {
  readonly Articles?: InputMaybe<ArticlesUpdateWithNestedWhereUniqueInput>;
};

export type LinksParentUpsertWithNestedWhereUniqueInput = {
  readonly Articles?: InputMaybe<ArticlesUpsertWithNestedWhereUniqueInput>;
};

export type LinksParentWhereInput = {
  readonly Articles?: InputMaybe<ArticlesWhereInput>;
};

export type LinksParentWhereUniqueInput = {
  readonly Articles?: InputMaybe<ArticlesWhereUniqueInput>;
};

export type LinksUpdateInput = {
  readonly link?: InputMaybe<Scalars['String']>;
  readonly name?: InputMaybe<Scalars['String']>;
};

export type LinksUpdateManyInlineInput = {
  /** Create and connect multiple Links component instances */
  readonly create?: InputMaybe<ReadonlyArray<LinksCreateWithPositionInput>>;
  /** Delete multiple Links documents */
  readonly delete?: InputMaybe<ReadonlyArray<LinksWhereUniqueInput>>;
  /** Update multiple Links component instances */
  readonly update?: InputMaybe<ReadonlyArray<LinksUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Links component instances */
  readonly upsert?: InputMaybe<ReadonlyArray<LinksUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type LinksUpdateManyInput = {
  readonly link?: InputMaybe<Scalars['String']>;
  readonly name?: InputMaybe<Scalars['String']>;
};

export type LinksUpdateManyWithNestedWhereInput = {
  /** Update many input */
  readonly data: LinksUpdateManyInput;
  /** Document search */
  readonly where: LinksWhereInput;
};

export type LinksUpdateOneInlineInput = {
  /** Create and connect one Links document */
  readonly create?: InputMaybe<LinksCreateInput>;
  /** Delete currently connected Links document */
  readonly delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single Links document */
  readonly update?: InputMaybe<LinksUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Links document */
  readonly upsert?: InputMaybe<LinksUpsertWithNestedWhereUniqueInput>;
};

export type LinksUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  readonly data?: InputMaybe<LinksUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  readonly position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  readonly where: LinksWhereUniqueInput;
};

export type LinksUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  readonly data: LinksUpdateInput;
  /** Unique document search */
  readonly where: LinksWhereUniqueInput;
};

export type LinksUpsertInput = {
  /** Create document if it didn't exist */
  readonly create: LinksCreateInput;
  /** Update document if it exists */
  readonly update: LinksUpdateInput;
};

export type LinksUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  readonly data?: InputMaybe<LinksUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  readonly position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  readonly where: LinksWhereUniqueInput;
};

export type LinksUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  readonly data: LinksUpsertInput;
  /** Unique document search */
  readonly where: LinksWhereUniqueInput;
};

/** Identifies documents */
export type LinksWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<LinksWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<LinksWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<LinksWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']>;
  readonly link?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly link_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly link_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly link_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly link_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly link_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly link_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly link_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly link_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly link_starts_with?: InputMaybe<Scalars['String']>;
  readonly name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly name_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly name_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly name_starts_with?: InputMaybe<Scalars['String']>;
};

/** References Links record uniquely */
export type LinksWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars['ID']>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en',
  Pl = 'pl',
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  readonly __typename?: 'Location';
  readonly distance: Scalars['Float'];
  readonly latitude: Scalars['Float'];
  readonly longitude: Scalars['Float'];
};

/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  readonly latitude: Scalars['Float'];
  readonly longitude: Scalars['Float'];
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  /** Create one articles */
  readonly createArticles?: Maybe<Articles>;
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  readonly createAsset?: Maybe<Asset>;
  /** Create one commentsSchema */
  readonly createCommentsSchema?: Maybe<CommentsSchema>;
  /** Create one projects */
  readonly createProjects?: Maybe<Projects>;
  /** Create one scheduledRelease */
  readonly createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one userProfile */
  readonly createUserProfile?: Maybe<UserProfile>;
  /** Delete one articles from _all_ existing stages. Returns deleted document. */
  readonly deleteArticles?: Maybe<Articles>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  readonly deleteAsset?: Maybe<Asset>;
  /** Delete one commentsSchema from _all_ existing stages. Returns deleted document. */
  readonly deleteCommentsSchema?: Maybe<CommentsSchema>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  readonly deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  readonly deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many CommentsSchema documents
   * @deprecated Please use the new paginated many mutation (deleteManyCommentSchemaConnection)
   */
  readonly deleteManyCommentSchema: BatchPayload;
  /** Delete many CommentsSchema documents, return deleted documents */
  readonly deleteManyCommentSchemaConnection: CommentsSchemaConnection;
  /**
   * Delete many Projects documents
   * @deprecated Please use the new paginated many mutation (deleteManyProjectConnection)
   */
  readonly deleteManyProject: BatchPayload;
  /** Delete many Projects documents, return deleted documents */
  readonly deleteManyProjectConnection: ProjectsConnection;
  /**
   * Delete many Articles documents
   * @deprecated Please use the new paginated many mutation (deleteManySchemaArticlesConnection)
   */
  readonly deleteManySchemaArticles: BatchPayload;
  /** Delete many Articles documents, return deleted documents */
  readonly deleteManySchemaArticlesConnection: ArticlesConnection;
  /**
   * Delete many UserProfile documents
   * @deprecated Please use the new paginated many mutation (deleteManyUserProfilesConnection)
   */
  readonly deleteManyUserProfiles: BatchPayload;
  /** Delete many UserProfile documents, return deleted documents */
  readonly deleteManyUserProfilesConnection: UserProfileConnection;
  /** Delete one projects from _all_ existing stages. Returns deleted document. */
  readonly deleteProjects?: Maybe<Projects>;
  /** Delete and return scheduled operation */
  readonly deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  readonly deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one userProfile from _all_ existing stages. Returns deleted document. */
  readonly deleteUserProfile?: Maybe<UserProfile>;
  /** Publish one articles */
  readonly publishArticles?: Maybe<Articles>;
  /** Publish one asset */
  readonly publishAsset?: Maybe<Asset>;
  /** Publish one commentsSchema */
  readonly publishCommentsSchema?: Maybe<CommentsSchema>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  readonly publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  readonly publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many CommentsSchema documents
   * @deprecated Please use the new paginated many mutation (publishManyCommentSchemaConnection)
   */
  readonly publishManyCommentSchema: BatchPayload;
  /** Publish many CommentsSchema documents */
  readonly publishManyCommentSchemaConnection: CommentsSchemaConnection;
  /**
   * Publish many Projects documents
   * @deprecated Please use the new paginated many mutation (publishManyProjectConnection)
   */
  readonly publishManyProject: BatchPayload;
  /** Publish many Projects documents */
  readonly publishManyProjectConnection: ProjectsConnection;
  /**
   * Publish many Articles documents
   * @deprecated Please use the new paginated many mutation (publishManySchemaArticlesConnection)
   */
  readonly publishManySchemaArticles: BatchPayload;
  /** Publish many Articles documents */
  readonly publishManySchemaArticlesConnection: ArticlesConnection;
  /**
   * Publish many UserProfile documents
   * @deprecated Please use the new paginated many mutation (publishManyUserProfilesConnection)
   */
  readonly publishManyUserProfiles: BatchPayload;
  /** Publish many UserProfile documents */
  readonly publishManyUserProfilesConnection: UserProfileConnection;
  /** Publish one projects */
  readonly publishProjects?: Maybe<Projects>;
  /** Publish one userProfile */
  readonly publishUserProfile?: Maybe<UserProfile>;
  /** Schedule to publish one articles */
  readonly schedulePublishArticles?: Maybe<Articles>;
  /** Schedule to publish one asset */
  readonly schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one commentsSchema */
  readonly schedulePublishCommentsSchema?: Maybe<CommentsSchema>;
  /** Schedule to publish one projects */
  readonly schedulePublishProjects?: Maybe<Projects>;
  /** Schedule to publish one userProfile */
  readonly schedulePublishUserProfile?: Maybe<UserProfile>;
  /** Unpublish one articles from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly scheduleUnpublishArticles?: Maybe<Articles>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one commentsSchema from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly scheduleUnpublishCommentsSchema?: Maybe<CommentsSchema>;
  /** Unpublish one projects from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly scheduleUnpublishProjects?: Maybe<Projects>;
  /** Unpublish one userProfile from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly scheduleUnpublishUserProfile?: Maybe<UserProfile>;
  /** Unpublish one articles from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly unpublishArticles?: Maybe<Articles>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly unpublishAsset?: Maybe<Asset>;
  /** Unpublish one commentsSchema from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly unpublishCommentsSchema?: Maybe<CommentsSchema>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  readonly unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  readonly unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many CommentsSchema documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCommentSchemaConnection)
   */
  readonly unpublishManyCommentSchema: BatchPayload;
  /** Find many CommentsSchema documents that match criteria in specified stage and unpublish from target stages */
  readonly unpublishManyCommentSchemaConnection: CommentsSchemaConnection;
  /**
   * Unpublish many Projects documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProjectConnection)
   */
  readonly unpublishManyProject: BatchPayload;
  /** Find many Projects documents that match criteria in specified stage and unpublish from target stages */
  readonly unpublishManyProjectConnection: ProjectsConnection;
  /**
   * Unpublish many Articles documents
   * @deprecated Please use the new paginated many mutation (unpublishManySchemaArticlesConnection)
   */
  readonly unpublishManySchemaArticles: BatchPayload;
  /** Find many Articles documents that match criteria in specified stage and unpublish from target stages */
  readonly unpublishManySchemaArticlesConnection: ArticlesConnection;
  /**
   * Unpublish many UserProfile documents
   * @deprecated Please use the new paginated many mutation (unpublishManyUserProfilesConnection)
   */
  readonly unpublishManyUserProfiles: BatchPayload;
  /** Find many UserProfile documents that match criteria in specified stage and unpublish from target stages */
  readonly unpublishManyUserProfilesConnection: UserProfileConnection;
  /** Unpublish one projects from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly unpublishProjects?: Maybe<Projects>;
  /** Unpublish one userProfile from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly unpublishUserProfile?: Maybe<UserProfile>;
  /** Update one articles */
  readonly updateArticles?: Maybe<Articles>;
  /** Update one asset */
  readonly updateAsset?: Maybe<Asset>;
  /** Update one commentsSchema */
  readonly updateCommentsSchema?: Maybe<CommentsSchema>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  readonly updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  readonly updateManyAssetsConnection: AssetConnection;
  /**
   * Update many commentSchema
   * @deprecated Please use the new paginated many mutation (updateManyCommentSchemaConnection)
   */
  readonly updateManyCommentSchema: BatchPayload;
  /** Update many CommentsSchema documents */
  readonly updateManyCommentSchemaConnection: CommentsSchemaConnection;
  /**
   * Update many project
   * @deprecated Please use the new paginated many mutation (updateManyProjectConnection)
   */
  readonly updateManyProject: BatchPayload;
  /** Update many Projects documents */
  readonly updateManyProjectConnection: ProjectsConnection;
  /**
   * Update many schemaArticles
   * @deprecated Please use the new paginated many mutation (updateManySchemaArticlesConnection)
   */
  readonly updateManySchemaArticles: BatchPayload;
  /** Update many Articles documents */
  readonly updateManySchemaArticlesConnection: ArticlesConnection;
  /**
   * Update many userProfiles
   * @deprecated Please use the new paginated many mutation (updateManyUserProfilesConnection)
   */
  readonly updateManyUserProfiles: BatchPayload;
  /** Update many UserProfile documents */
  readonly updateManyUserProfilesConnection: UserProfileConnection;
  /** Update one projects */
  readonly updateProjects?: Maybe<Projects>;
  /** Update one scheduledRelease */
  readonly updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one userProfile */
  readonly updateUserProfile?: Maybe<UserProfile>;
  /** Upsert one articles */
  readonly upsertArticles?: Maybe<Articles>;
  /** Upsert one asset */
  readonly upsertAsset?: Maybe<Asset>;
  /** Upsert one commentsSchema */
  readonly upsertCommentsSchema?: Maybe<CommentsSchema>;
  /** Upsert one projects */
  readonly upsertProjects?: Maybe<Projects>;
  /** Upsert one userProfile */
  readonly upsertUserProfile?: Maybe<UserProfile>;
};

export type MutationCreateArticlesArgs = {
  data: ArticlesCreateInput;
};

export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};

export type MutationCreateCommentsSchemaArgs = {
  data: CommentsSchemaCreateInput;
};

export type MutationCreateProjectsArgs = {
  data: ProjectsCreateInput;
};

export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};

export type MutationCreateUserProfileArgs = {
  data: UserProfileCreateInput;
};

export type MutationDeleteArticlesArgs = {
  where: ArticlesWhereUniqueInput;
};

export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};

export type MutationDeleteCommentsSchemaArgs = {
  where: CommentsSchemaWhereUniqueInput;
};

export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationDeleteManyCommentSchemaArgs = {
  where?: InputMaybe<CommentsSchemaManyWhereInput>;
};

export type MutationDeleteManyCommentSchemaConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommentsSchemaManyWhereInput>;
};

export type MutationDeleteManyProjectArgs = {
  where?: InputMaybe<ProjectsManyWhereInput>;
};

export type MutationDeleteManyProjectConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectsManyWhereInput>;
};

export type MutationDeleteManySchemaArticlesArgs = {
  where?: InputMaybe<ArticlesManyWhereInput>;
};

export type MutationDeleteManySchemaArticlesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ArticlesManyWhereInput>;
};

export type MutationDeleteManyUserProfilesArgs = {
  where?: InputMaybe<UserProfileManyWhereInput>;
};

export type MutationDeleteManyUserProfilesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserProfileManyWhereInput>;
};

export type MutationDeleteProjectsArgs = {
  where: ProjectsWhereUniqueInput;
};

export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};

export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};

export type MutationDeleteUserProfileArgs = {
  where: UserProfileWhereUniqueInput;
};

export type MutationPublishArticlesArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: ReadonlyArray<Stage>;
  where: ArticlesWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};

export type MutationPublishAssetArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: ReadonlyArray<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};

export type MutationPublishCommentsSchemaArgs = {
  to?: ReadonlyArray<Stage>;
  where: CommentsSchemaWhereUniqueInput;
};

export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: ReadonlyArray<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};

export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: ReadonlyArray<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};

export type MutationPublishManyCommentSchemaArgs = {
  to?: ReadonlyArray<Stage>;
  where?: InputMaybe<CommentsSchemaManyWhereInput>;
};

export type MutationPublishManyCommentSchemaConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: ReadonlyArray<Stage>;
  where?: InputMaybe<CommentsSchemaManyWhereInput>;
};

export type MutationPublishManyProjectArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: ReadonlyArray<Stage>;
  where?: InputMaybe<ProjectsManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};

export type MutationPublishManyProjectConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: ReadonlyArray<Stage>;
  where?: InputMaybe<ProjectsManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};

export type MutationPublishManySchemaArticlesArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: ReadonlyArray<Stage>;
  where?: InputMaybe<ArticlesManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};

export type MutationPublishManySchemaArticlesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: ReadonlyArray<Stage>;
  where?: InputMaybe<ArticlesManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};

export type MutationPublishManyUserProfilesArgs = {
  to?: ReadonlyArray<Stage>;
  where?: InputMaybe<UserProfileManyWhereInput>;
};

export type MutationPublishManyUserProfilesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: ReadonlyArray<Stage>;
  where?: InputMaybe<UserProfileManyWhereInput>;
};

export type MutationPublishProjectsArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: ReadonlyArray<Stage>;
  where: ProjectsWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};

export type MutationPublishUserProfileArgs = {
  to?: ReadonlyArray<Stage>;
  where: UserProfileWhereUniqueInput;
};

export type MutationSchedulePublishArticlesArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: ReadonlyArray<Stage>;
  where: ArticlesWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};

export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: ReadonlyArray<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};

export type MutationSchedulePublishCommentsSchemaArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: ReadonlyArray<Stage>;
  where: CommentsSchemaWhereUniqueInput;
};

export type MutationSchedulePublishProjectsArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: ReadonlyArray<Stage>;
  where: ProjectsWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};

export type MutationSchedulePublishUserProfileArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: ReadonlyArray<Stage>;
  where: UserProfileWhereUniqueInput;
};

export type MutationScheduleUnpublishArticlesArgs = {
  from?: ReadonlyArray<Stage>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: ArticlesWhereUniqueInput;
};

export type MutationScheduleUnpublishAssetArgs = {
  from?: ReadonlyArray<Stage>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};

export type MutationScheduleUnpublishCommentsSchemaArgs = {
  from?: ReadonlyArray<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: CommentsSchemaWhereUniqueInput;
};

export type MutationScheduleUnpublishProjectsArgs = {
  from?: ReadonlyArray<Stage>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: ProjectsWhereUniqueInput;
};

export type MutationScheduleUnpublishUserProfileArgs = {
  from?: ReadonlyArray<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: UserProfileWhereUniqueInput;
};

export type MutationUnpublishArticlesArgs = {
  from?: ReadonlyArray<Stage>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: ArticlesWhereUniqueInput;
};

export type MutationUnpublishAssetArgs = {
  from?: ReadonlyArray<Stage>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};

export type MutationUnpublishCommentsSchemaArgs = {
  from?: ReadonlyArray<Stage>;
  where: CommentsSchemaWhereUniqueInput;
};

export type MutationUnpublishManyAssetsArgs = {
  from?: ReadonlyArray<Stage>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: ReadonlyArray<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUnpublishManyCommentSchemaArgs = {
  from?: ReadonlyArray<Stage>;
  where?: InputMaybe<CommentsSchemaManyWhereInput>;
};

export type MutationUnpublishManyCommentSchemaConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: ReadonlyArray<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<CommentsSchemaManyWhereInput>;
};

export type MutationUnpublishManyProjectArgs = {
  from?: ReadonlyArray<Stage>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ProjectsManyWhereInput>;
};

export type MutationUnpublishManyProjectConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: ReadonlyArray<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ProjectsManyWhereInput>;
};

export type MutationUnpublishManySchemaArticlesArgs = {
  from?: ReadonlyArray<Stage>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ArticlesManyWhereInput>;
};

export type MutationUnpublishManySchemaArticlesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: ReadonlyArray<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ArticlesManyWhereInput>;
};

export type MutationUnpublishManyUserProfilesArgs = {
  from?: ReadonlyArray<Stage>;
  where?: InputMaybe<UserProfileManyWhereInput>;
};

export type MutationUnpublishManyUserProfilesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: ReadonlyArray<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<UserProfileManyWhereInput>;
};

export type MutationUnpublishProjectsArgs = {
  from?: ReadonlyArray<Stage>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: ProjectsWhereUniqueInput;
};

export type MutationUnpublishUserProfileArgs = {
  from?: ReadonlyArray<Stage>;
  where: UserProfileWhereUniqueInput;
};

export type MutationUpdateArticlesArgs = {
  data: ArticlesUpdateInput;
  where: ArticlesWhereUniqueInput;
};

export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};

export type MutationUpdateCommentsSchemaArgs = {
  data: CommentsSchemaUpdateInput;
  where: CommentsSchemaWhereUniqueInput;
};

export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUpdateManyCommentSchemaArgs = {
  data: CommentsSchemaUpdateManyInput;
  where?: InputMaybe<CommentsSchemaManyWhereInput>;
};

export type MutationUpdateManyCommentSchemaConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: CommentsSchemaUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommentsSchemaManyWhereInput>;
};

export type MutationUpdateManyProjectArgs = {
  data: ProjectsUpdateManyInput;
  where?: InputMaybe<ProjectsManyWhereInput>;
};

export type MutationUpdateManyProjectConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ProjectsUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectsManyWhereInput>;
};

export type MutationUpdateManySchemaArticlesArgs = {
  data: ArticlesUpdateManyInput;
  where?: InputMaybe<ArticlesManyWhereInput>;
};

export type MutationUpdateManySchemaArticlesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ArticlesUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ArticlesManyWhereInput>;
};

export type MutationUpdateManyUserProfilesArgs = {
  data: UserProfileUpdateManyInput;
  where?: InputMaybe<UserProfileManyWhereInput>;
};

export type MutationUpdateManyUserProfilesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: UserProfileUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserProfileManyWhereInput>;
};

export type MutationUpdateProjectsArgs = {
  data: ProjectsUpdateInput;
  where: ProjectsWhereUniqueInput;
};

export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};

export type MutationUpdateUserProfileArgs = {
  data: UserProfileUpdateInput;
  where: UserProfileWhereUniqueInput;
};

export type MutationUpsertArticlesArgs = {
  upsert: ArticlesUpsertInput;
  where: ArticlesWhereUniqueInput;
};

export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};

export type MutationUpsertCommentsSchemaArgs = {
  upsert: CommentsSchemaUpsertInput;
  where: CommentsSchemaWhereUniqueInput;
};

export type MutationUpsertProjectsArgs = {
  upsert: ProjectsUpsertInput;
  where: ProjectsWhereUniqueInput;
};

export type MutationUpsertUserProfileArgs = {
  upsert: UserProfileUpsertInput;
  where: UserProfileWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  readonly id: Scalars['ID'];
  /** The Stage of an object */
  readonly stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  readonly __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** Number of items in the current page. */
  readonly pageSize?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor?: Maybe<Scalars['String']>;
};

export type ProjectLinks = {
  readonly __typename?: 'ProjectLinks';
  /** The unique identifier */
  readonly id: Scalars['ID'];
  readonly liveDemo?: Maybe<Scalars['String']>;
  readonly repository?: Maybe<Scalars['String']>;
  /** System stage field */
  readonly stage: Stage;
};

export type ProjectLinksConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  readonly where: ProjectLinksWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProjectLinksConnection = {
  readonly __typename?: 'ProjectLinksConnection';
  readonly aggregate: Aggregate;
  /** A list of edges. */
  readonly edges: ReadonlyArray<ProjectLinksEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
};

export type ProjectLinksCreateInput = {
  readonly liveDemo?: InputMaybe<Scalars['String']>;
  readonly repository?: InputMaybe<Scalars['String']>;
};

export type ProjectLinksCreateManyInlineInput = {
  /** Create and connect multiple existing ProjectLinks documents */
  readonly create?: InputMaybe<ReadonlyArray<ProjectLinksCreateInput>>;
};

export type ProjectLinksCreateOneInlineInput = {
  /** Create and connect one ProjectLinks document */
  readonly create?: InputMaybe<ProjectLinksCreateInput>;
};

export type ProjectLinksCreateWithPositionInput = {
  /** Document to create */
  readonly data: ProjectLinksCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  readonly position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ProjectLinksEdge = {
  readonly __typename?: 'ProjectLinksEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: ProjectLinks;
};

/** Identifies documents */
export type ProjectLinksManyWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<ProjectLinksWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<ProjectLinksWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<ProjectLinksWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']>;
  readonly liveDemo?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly liveDemo_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly liveDemo_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly liveDemo_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly liveDemo_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly liveDemo_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly liveDemo_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly liveDemo_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly liveDemo_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly liveDemo_starts_with?: InputMaybe<Scalars['String']>;
  readonly repository?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly repository_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly repository_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly repository_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly repository_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly repository_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly repository_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly repository_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly repository_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly repository_starts_with?: InputMaybe<Scalars['String']>;
};

export enum ProjectLinksOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LiveDemoAsc = 'liveDemo_ASC',
  LiveDemoDesc = 'liveDemo_DESC',
  RepositoryAsc = 'repository_ASC',
  RepositoryDesc = 'repository_DESC',
}

export type ProjectLinksParent = Projects;

export type ProjectLinksParentConnectInput = {
  readonly Projects?: InputMaybe<ProjectsConnectInput>;
};

export type ProjectLinksParentCreateInput = {
  readonly Projects?: InputMaybe<ProjectsCreateInput>;
};

export type ProjectLinksParentCreateManyInlineInput = {
  /** Connect multiple existing ProjectLinksParent documents */
  readonly connect?: InputMaybe<ReadonlyArray<ProjectLinksParentWhereUniqueInput>>;
  /** Create and connect multiple existing ProjectLinksParent documents */
  readonly create?: InputMaybe<ReadonlyArray<ProjectLinksParentCreateInput>>;
};

export type ProjectLinksParentCreateOneInlineInput = {
  /** Connect one existing ProjectLinksParent document */
  readonly connect?: InputMaybe<ProjectLinksParentWhereUniqueInput>;
  /** Create and connect one ProjectLinksParent document */
  readonly create?: InputMaybe<ProjectLinksParentCreateInput>;
};

export type ProjectLinksParentUpdateInput = {
  readonly Projects?: InputMaybe<ProjectsUpdateInput>;
};

export type ProjectLinksParentUpdateManyInlineInput = {
  /** Connect multiple existing ProjectLinksParent documents */
  readonly connect?: InputMaybe<ReadonlyArray<ProjectLinksParentConnectInput>>;
  /** Create and connect multiple ProjectLinksParent documents */
  readonly create?: InputMaybe<ReadonlyArray<ProjectLinksParentCreateInput>>;
  /** Delete multiple ProjectLinksParent documents */
  readonly delete?: InputMaybe<ReadonlyArray<ProjectLinksParentWhereUniqueInput>>;
  /** Disconnect multiple ProjectLinksParent documents */
  readonly disconnect?: InputMaybe<ReadonlyArray<ProjectLinksParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ProjectLinksParent documents */
  readonly set?: InputMaybe<ReadonlyArray<ProjectLinksParentWhereUniqueInput>>;
  /** Update multiple ProjectLinksParent documents */
  readonly update?: InputMaybe<ReadonlyArray<ProjectLinksParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ProjectLinksParent documents */
  readonly upsert?: InputMaybe<ReadonlyArray<ProjectLinksParentUpsertWithNestedWhereUniqueInput>>;
};

export type ProjectLinksParentUpdateManyWithNestedWhereInput = {
  readonly Projects?: InputMaybe<ProjectsUpdateManyWithNestedWhereInput>;
};

export type ProjectLinksParentUpdateOneInlineInput = {
  /** Connect existing ProjectLinksParent document */
  readonly connect?: InputMaybe<ProjectLinksParentWhereUniqueInput>;
  /** Create and connect one ProjectLinksParent document */
  readonly create?: InputMaybe<ProjectLinksParentCreateInput>;
  /** Delete currently connected ProjectLinksParent document */
  readonly delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ProjectLinksParent document */
  readonly disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ProjectLinksParent document */
  readonly update?: InputMaybe<ProjectLinksParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProjectLinksParent document */
  readonly upsert?: InputMaybe<ProjectLinksParentUpsertWithNestedWhereUniqueInput>;
};

export type ProjectLinksParentUpdateWithNestedWhereUniqueInput = {
  readonly Projects?: InputMaybe<ProjectsUpdateWithNestedWhereUniqueInput>;
};

export type ProjectLinksParentUpsertWithNestedWhereUniqueInput = {
  readonly Projects?: InputMaybe<ProjectsUpsertWithNestedWhereUniqueInput>;
};

export type ProjectLinksParentWhereInput = {
  readonly Projects?: InputMaybe<ProjectsWhereInput>;
};

export type ProjectLinksParentWhereUniqueInput = {
  readonly Projects?: InputMaybe<ProjectsWhereUniqueInput>;
};

export type ProjectLinksUpdateInput = {
  readonly liveDemo?: InputMaybe<Scalars['String']>;
  readonly repository?: InputMaybe<Scalars['String']>;
};

export type ProjectLinksUpdateManyInlineInput = {
  /** Create and connect multiple ProjectLinks component instances */
  readonly create?: InputMaybe<ReadonlyArray<ProjectLinksCreateWithPositionInput>>;
  /** Delete multiple ProjectLinks documents */
  readonly delete?: InputMaybe<ReadonlyArray<ProjectLinksWhereUniqueInput>>;
  /** Update multiple ProjectLinks component instances */
  readonly update?: InputMaybe<ReadonlyArray<ProjectLinksUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ProjectLinks component instances */
  readonly upsert?: InputMaybe<ReadonlyArray<ProjectLinksUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ProjectLinksUpdateManyInput = {
  readonly liveDemo?: InputMaybe<Scalars['String']>;
  readonly repository?: InputMaybe<Scalars['String']>;
};

export type ProjectLinksUpdateManyWithNestedWhereInput = {
  /** Update many input */
  readonly data: ProjectLinksUpdateManyInput;
  /** Document search */
  readonly where: ProjectLinksWhereInput;
};

export type ProjectLinksUpdateOneInlineInput = {
  /** Create and connect one ProjectLinks document */
  readonly create?: InputMaybe<ProjectLinksCreateInput>;
  /** Delete currently connected ProjectLinks document */
  readonly delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single ProjectLinks document */
  readonly update?: InputMaybe<ProjectLinksUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProjectLinks document */
  readonly upsert?: InputMaybe<ProjectLinksUpsertWithNestedWhereUniqueInput>;
};

export type ProjectLinksUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  readonly data?: InputMaybe<ProjectLinksUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  readonly position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  readonly where: ProjectLinksWhereUniqueInput;
};

export type ProjectLinksUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  readonly data: ProjectLinksUpdateInput;
  /** Unique document search */
  readonly where: ProjectLinksWhereUniqueInput;
};

export type ProjectLinksUpsertInput = {
  /** Create document if it didn't exist */
  readonly create: ProjectLinksCreateInput;
  /** Update document if it exists */
  readonly update: ProjectLinksUpdateInput;
};

export type ProjectLinksUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  readonly data?: InputMaybe<ProjectLinksUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  readonly position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  readonly where: ProjectLinksWhereUniqueInput;
};

export type ProjectLinksUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  readonly data: ProjectLinksUpsertInput;
  /** Unique document search */
  readonly where: ProjectLinksWhereUniqueInput;
};

/** Identifies documents */
export type ProjectLinksWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<ProjectLinksWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<ProjectLinksWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<ProjectLinksWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']>;
  readonly liveDemo?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly liveDemo_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly liveDemo_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly liveDemo_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly liveDemo_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly liveDemo_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly liveDemo_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly liveDemo_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly liveDemo_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly liveDemo_starts_with?: InputMaybe<Scalars['String']>;
  readonly repository?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly repository_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly repository_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly repository_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly repository_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly repository_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly repository_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly repository_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly repository_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly repository_starts_with?: InputMaybe<Scalars['String']>;
};

/** References ProjectLinks record uniquely */
export type ProjectLinksWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars['ID']>;
};

export type Projects = Node & {
  readonly __typename?: 'Projects';
  /** The time the document was created */
  readonly createdAt: Scalars['DateTime'];
  /** User that created this document */
  readonly createdBy?: Maybe<User>;
  /** Get the document in other stages */
  readonly documentInStages: ReadonlyArray<Projects>;
  /** List of Projects versions */
  readonly history: ReadonlyArray<Version>;
  /** The unique identifier */
  readonly id: Scalars['ID'];
  readonly introduction: Scalars['String'];
  readonly links?: Maybe<ProjectLinks>;
  /** System Locale field */
  readonly locale: Locale;
  /** Get the other localizations for this document */
  readonly localizations: ReadonlyArray<Projects>;
  readonly published?: Maybe<Scalars['Date']>;
  /** The time the document was published. Null on documents in draft stage. */
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  readonly publishedBy?: Maybe<User>;
  readonly scheduledIn: ReadonlyArray<ScheduledOperation>;
  readonly slug: Scalars['String'];
  /** System stage field */
  readonly stage: Stage;
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly thumbnail?: Maybe<Asset>;
  readonly title: Scalars['String'];
  /** The time the document was updated */
  readonly updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  readonly updatedBy?: Maybe<User>;
};

export type ProjectsCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type ProjectsCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type ProjectsDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: ReadonlyArray<Stage>;
};

export type ProjectsHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};

export type ProjectsLinksArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type ProjectsLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: ReadonlyArray<Locale>;
};

export type ProjectsPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type ProjectsPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type ProjectsScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type ProjectsThumbnailArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type ProjectsUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type ProjectsUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type ProjectsConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  readonly where: ProjectsWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProjectsConnection = {
  readonly __typename?: 'ProjectsConnection';
  readonly aggregate: Aggregate;
  /** A list of edges. */
  readonly edges: ReadonlyArray<ProjectsEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
};

export type ProjectsCreateInput = {
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  /** introduction input for default locale (en) */
  readonly introduction: Scalars['String'];
  readonly links?: InputMaybe<ProjectLinksCreateOneInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  readonly localizations?: InputMaybe<ProjectsCreateLocalizationsInput>;
  readonly published?: InputMaybe<Scalars['Date']>;
  /** slug input for default locale (en) */
  readonly slug: Scalars['String'];
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly thumbnail?: InputMaybe<AssetCreateOneInlineInput>;
  /** title input for default locale (en) */
  readonly title: Scalars['String'];
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProjectsCreateLocalizationDataInput = {
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  readonly introduction: Scalars['String'];
  readonly slug: Scalars['String'];
  readonly title: Scalars['String'];
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProjectsCreateLocalizationInput = {
  /** Localization input */
  readonly data: ProjectsCreateLocalizationDataInput;
  readonly locale: Locale;
};

export type ProjectsCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  readonly create?: InputMaybe<ReadonlyArray<ProjectsCreateLocalizationInput>>;
};

export type ProjectsCreateManyInlineInput = {
  /** Connect multiple existing Projects documents */
  readonly connect?: InputMaybe<ReadonlyArray<ProjectsWhereUniqueInput>>;
  /** Create and connect multiple existing Projects documents */
  readonly create?: InputMaybe<ReadonlyArray<ProjectsCreateInput>>;
};

export type ProjectsCreateOneInlineInput = {
  /** Connect one existing Projects document */
  readonly connect?: InputMaybe<ProjectsWhereUniqueInput>;
  /** Create and connect one Projects document */
  readonly create?: InputMaybe<ProjectsCreateInput>;
};

/** An edge in a connection. */
export type ProjectsEdge = {
  readonly __typename?: 'ProjectsEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Projects;
};

/** Identifies documents */
export type ProjectsManyWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<ProjectsWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<ProjectsWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<ProjectsWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly documentInStages_every?: InputMaybe<ProjectsWhereStageInput>;
  readonly documentInStages_none?: InputMaybe<ProjectsWhereStageInput>;
  readonly documentInStages_some?: InputMaybe<ProjectsWhereStageInput>;
  readonly id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']>;
  readonly links?: InputMaybe<ProjectLinksWhereInput>;
  readonly published?: InputMaybe<Scalars['Date']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  /** All values greater than the given value. */
  readonly published_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  readonly published_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  readonly published_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']>>>;
  /** All values less than the given value. */
  readonly published_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  readonly published_lte?: InputMaybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  readonly published_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  readonly published_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']>>>;
  readonly scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  readonly tags?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  readonly tags_contains_all?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  readonly tags_contains_none?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  readonly tags_contains_some?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  readonly tags_not?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly thumbnail?: InputMaybe<AssetWhereInput>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ProjectsOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IntroductionAsc = 'introduction_ASC',
  IntroductionDesc = 'introduction_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  PublishedAsc = 'published_ASC',
  PublishedDesc = 'published_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TagsAsc = 'tags_ASC',
  TagsDesc = 'tags_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ProjectsUpdateInput = {
  /** introduction input for default locale (en) */
  readonly introduction?: InputMaybe<Scalars['String']>;
  readonly links?: InputMaybe<ProjectLinksUpdateOneInlineInput>;
  /** Manage document localizations */
  readonly localizations?: InputMaybe<ProjectsUpdateLocalizationsInput>;
  readonly published?: InputMaybe<Scalars['Date']>;
  /** slug input for default locale (en) */
  readonly slug?: InputMaybe<Scalars['String']>;
  readonly tags?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly thumbnail?: InputMaybe<AssetUpdateOneInlineInput>;
  /** title input for default locale (en) */
  readonly title?: InputMaybe<Scalars['String']>;
};

export type ProjectsUpdateLocalizationDataInput = {
  readonly introduction?: InputMaybe<Scalars['String']>;
  readonly slug?: InputMaybe<Scalars['String']>;
  readonly title?: InputMaybe<Scalars['String']>;
};

export type ProjectsUpdateLocalizationInput = {
  readonly data: ProjectsUpdateLocalizationDataInput;
  readonly locale: Locale;
};

export type ProjectsUpdateLocalizationsInput = {
  /** Localizations to create */
  readonly create?: InputMaybe<ReadonlyArray<ProjectsCreateLocalizationInput>>;
  /** Localizations to delete */
  readonly delete?: InputMaybe<ReadonlyArray<Locale>>;
  /** Localizations to update */
  readonly update?: InputMaybe<ReadonlyArray<ProjectsUpdateLocalizationInput>>;
  readonly upsert?: InputMaybe<ReadonlyArray<ProjectsUpsertLocalizationInput>>;
};

export type ProjectsUpdateManyInlineInput = {
  /** Connect multiple existing Projects documents */
  readonly connect?: InputMaybe<ReadonlyArray<ProjectsConnectInput>>;
  /** Create and connect multiple Projects documents */
  readonly create?: InputMaybe<ReadonlyArray<ProjectsCreateInput>>;
  /** Delete multiple Projects documents */
  readonly delete?: InputMaybe<ReadonlyArray<ProjectsWhereUniqueInput>>;
  /** Disconnect multiple Projects documents */
  readonly disconnect?: InputMaybe<ReadonlyArray<ProjectsWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Projects documents */
  readonly set?: InputMaybe<ReadonlyArray<ProjectsWhereUniqueInput>>;
  /** Update multiple Projects documents */
  readonly update?: InputMaybe<ReadonlyArray<ProjectsUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Projects documents */
  readonly upsert?: InputMaybe<ReadonlyArray<ProjectsUpsertWithNestedWhereUniqueInput>>;
};

export type ProjectsUpdateManyInput = {
  /** introduction input for default locale (en) */
  readonly introduction?: InputMaybe<Scalars['String']>;
  /** Optional updates to localizations */
  readonly localizations?: InputMaybe<ProjectsUpdateManyLocalizationsInput>;
  readonly published?: InputMaybe<Scalars['Date']>;
  readonly tags?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** title input for default locale (en) */
  readonly title?: InputMaybe<Scalars['String']>;
};

export type ProjectsUpdateManyLocalizationDataInput = {
  readonly introduction?: InputMaybe<Scalars['String']>;
  readonly title?: InputMaybe<Scalars['String']>;
};

export type ProjectsUpdateManyLocalizationInput = {
  readonly data: ProjectsUpdateManyLocalizationDataInput;
  readonly locale: Locale;
};

export type ProjectsUpdateManyLocalizationsInput = {
  /** Localizations to update */
  readonly update?: InputMaybe<ReadonlyArray<ProjectsUpdateManyLocalizationInput>>;
};

export type ProjectsUpdateManyWithNestedWhereInput = {
  /** Update many input */
  readonly data: ProjectsUpdateManyInput;
  /** Document search */
  readonly where: ProjectsWhereInput;
};

export type ProjectsUpdateOneInlineInput = {
  /** Connect existing Projects document */
  readonly connect?: InputMaybe<ProjectsWhereUniqueInput>;
  /** Create and connect one Projects document */
  readonly create?: InputMaybe<ProjectsCreateInput>;
  /** Delete currently connected Projects document */
  readonly delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Projects document */
  readonly disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Projects document */
  readonly update?: InputMaybe<ProjectsUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Projects document */
  readonly upsert?: InputMaybe<ProjectsUpsertWithNestedWhereUniqueInput>;
};

export type ProjectsUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  readonly data: ProjectsUpdateInput;
  /** Unique document search */
  readonly where: ProjectsWhereUniqueInput;
};

export type ProjectsUpsertInput = {
  /** Create document if it didn't exist */
  readonly create: ProjectsCreateInput;
  /** Update document if it exists */
  readonly update: ProjectsUpdateInput;
};

export type ProjectsUpsertLocalizationInput = {
  readonly create: ProjectsCreateLocalizationDataInput;
  readonly locale: Locale;
  readonly update: ProjectsUpdateLocalizationDataInput;
};

export type ProjectsUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  readonly data: ProjectsUpsertInput;
  /** Unique document search */
  readonly where: ProjectsWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ProjectsWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  readonly outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ProjectsWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<ProjectsWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<ProjectsWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<ProjectsWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly documentInStages_every?: InputMaybe<ProjectsWhereStageInput>;
  readonly documentInStages_none?: InputMaybe<ProjectsWhereStageInput>;
  readonly documentInStages_some?: InputMaybe<ProjectsWhereStageInput>;
  readonly id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']>;
  readonly introduction?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly introduction_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly introduction_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly introduction_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly introduction_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly introduction_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly introduction_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly introduction_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly introduction_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly introduction_starts_with?: InputMaybe<Scalars['String']>;
  readonly links?: InputMaybe<ProjectLinksWhereInput>;
  readonly published?: InputMaybe<Scalars['Date']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  /** All values greater than the given value. */
  readonly published_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  readonly published_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  readonly published_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']>>>;
  /** All values less than the given value. */
  readonly published_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  readonly published_lte?: InputMaybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  readonly published_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  readonly published_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']>>>;
  readonly scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  readonly slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly slug_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly slug_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly slug_starts_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  readonly tags?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  readonly tags_contains_all?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  readonly tags_contains_none?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  readonly tags_contains_some?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  readonly tags_not?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly thumbnail?: InputMaybe<AssetWhereInput>;
  readonly title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly title_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly title_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly title_starts_with?: InputMaybe<Scalars['String']>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ProjectsWhereStageInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<ProjectsWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<ProjectsWhereStageInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<ProjectsWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  readonly compareWithParent?: InputMaybe<ProjectsWhereComparatorInput>;
  /** Specify the stage to compare with */
  readonly stage?: InputMaybe<Stage>;
};

/** References Projects record uniquely */
export type ProjectsWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars['ID']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  readonly locale: Locale;
  /** Stages to publish selected locales to */
  readonly stages: ReadonlyArray<Stage>;
};

export type Query = {
  readonly __typename?: 'Query';
  /** Retrieve a single articles */
  readonly articles?: Maybe<Articles>;
  /** Retrieve document version */
  readonly articlesVersion?: Maybe<DocumentVersion>;
  /** Retrieve a single asset */
  readonly asset?: Maybe<Asset>;
  /** Retrieve document version */
  readonly assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  readonly assets: ReadonlyArray<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  readonly assetsConnection: AssetConnection;
  /** Retrieve multiple commentSchema */
  readonly commentSchema: ReadonlyArray<CommentsSchema>;
  /** Retrieve multiple commentSchema using the Relay connection interface */
  readonly commentSchemaConnection: CommentsSchemaConnection;
  /** Retrieve a single commentsSchema */
  readonly commentsSchema?: Maybe<CommentsSchema>;
  /** Retrieve document version */
  readonly commentsSchemaVersion?: Maybe<DocumentVersion>;
  /** Fetches an object given its ID */
  readonly node?: Maybe<Node>;
  /** Retrieve multiple project */
  readonly project: ReadonlyArray<Projects>;
  /** Retrieve multiple project using the Relay connection interface */
  readonly projectConnection: ProjectsConnection;
  /** Retrieve a single projects */
  readonly projects?: Maybe<Projects>;
  /** Retrieve document version */
  readonly projectsVersion?: Maybe<DocumentVersion>;
  /** Retrieve a single scheduledOperation */
  readonly scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  readonly scheduledOperations: ReadonlyArray<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  readonly scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  readonly scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  readonly scheduledReleases: ReadonlyArray<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  readonly scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve multiple schemaArticles */
  readonly schemaArticles: ReadonlyArray<Articles>;
  /** Retrieve multiple schemaArticles using the Relay connection interface */
  readonly schemaArticlesConnection: ArticlesConnection;
  /** Retrieve a single user */
  readonly user?: Maybe<User>;
  /** Retrieve a single userProfile */
  readonly userProfile?: Maybe<UserProfile>;
  /** Retrieve document version */
  readonly userProfileVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple userProfiles */
  readonly userProfiles: ReadonlyArray<UserProfile>;
  /** Retrieve multiple userProfiles using the Relay connection interface */
  readonly userProfilesConnection: UserProfileConnection;
  /** Retrieve multiple users */
  readonly users: ReadonlyArray<User>;
  /** Retrieve multiple users using the Relay connection interface */
  readonly usersConnection: UserConnection;
};

export type QueryArticlesArgs = {
  locales?: ReadonlyArray<Locale>;
  stage?: Stage;
  where: ArticlesWhereUniqueInput;
};

export type QueryArticlesVersionArgs = {
  where: VersionWhereInput;
};

export type QueryAssetArgs = {
  locales?: ReadonlyArray<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};

export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};

export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};

export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};

export type QueryCommentSchemaArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<CommentsSchemaOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<CommentsSchemaWhereInput>;
};

export type QueryCommentSchemaConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<CommentsSchemaOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<CommentsSchemaWhereInput>;
};

export type QueryCommentsSchemaArgs = {
  locales?: ReadonlyArray<Locale>;
  stage?: Stage;
  where: CommentsSchemaWhereUniqueInput;
};

export type QueryCommentsSchemaVersionArgs = {
  where: VersionWhereInput;
};

export type QueryNodeArgs = {
  id: Scalars['ID'];
  locales?: ReadonlyArray<Locale>;
  stage?: Stage;
};

export type QueryProjectArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<ProjectsOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ProjectsWhereInput>;
};

export type QueryProjectConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<ProjectsOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ProjectsWhereInput>;
};

export type QueryProjectsArgs = {
  locales?: ReadonlyArray<Locale>;
  stage?: Stage;
  where: ProjectsWhereUniqueInput;
};

export type QueryProjectsVersionArgs = {
  where: VersionWhereInput;
};

export type QueryScheduledOperationArgs = {
  locales?: ReadonlyArray<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};

export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type QueryScheduledReleaseArgs = {
  locales?: ReadonlyArray<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};

export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};

export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};

export type QuerySchemaArticlesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<ArticlesOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ArticlesWhereInput>;
};

export type QuerySchemaArticlesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<ArticlesOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ArticlesWhereInput>;
};

export type QueryUserArgs = {
  locales?: ReadonlyArray<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};

export type QueryUserProfileArgs = {
  locales?: ReadonlyArray<Locale>;
  stage?: Stage;
  where: UserProfileWhereUniqueInput;
};

export type QueryUserProfileVersionArgs = {
  where: VersionWhereInput;
};

export type QueryUserProfilesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<UserProfileOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserProfileWhereInput>;
};

export type QueryUserProfilesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<UserProfileOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserProfileWhereInput>;
};

export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  readonly __typename?: 'RGBA';
  readonly a: Scalars['RGBATransparency'];
  readonly b: Scalars['RGBAHue'];
  readonly g: Scalars['RGBAHue'];
  readonly r: Scalars['RGBAHue'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  readonly a: Scalars['RGBATransparency'];
  readonly b: Scalars['RGBAHue'];
  readonly g: Scalars['RGBAHue'];
  readonly r: Scalars['RGBAHue'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  readonly __typename?: 'RichText';
  /** Returns HTMl representation */
  readonly html: Scalars['String'];
  /** Returns Markdown representation */
  readonly markdown: Scalars['String'];
  /** Returns AST representation */
  readonly raw: Scalars['RichTextAST'];
  /** Returns plain-text contents of RichText */
  readonly text: Scalars['String'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  readonly __typename?: 'ScheduledOperation';
  readonly affectedDocuments: ReadonlyArray<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  readonly createdAt: Scalars['DateTime'];
  /** User that created this document */
  readonly createdBy?: Maybe<User>;
  /** Operation description */
  readonly description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  readonly documentInStages: ReadonlyArray<ScheduledOperation>;
  /** Operation error message */
  readonly errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  readonly id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  readonly publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  readonly rawPayload: Scalars['Json'];
  /** The release this operation is scheduled for */
  readonly release?: Maybe<ScheduledRelease>;
  /** System stage field */
  readonly stage: Stage;
  /** operation Status */
  readonly status: ScheduledOperationStatus;
  /** The time the document was updated */
  readonly updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  readonly updatedBy?: Maybe<User>;
};

/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};

/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: ReadonlyArray<Stage>;
};

/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type ScheduledOperationAffectedDocument = Articles | Asset | CommentsSchema | Projects | UserProfile;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  readonly where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  readonly __typename?: 'ScheduledOperationConnection';
  readonly aggregate: Aggregate;
  /** A list of edges. */
  readonly edges: ReadonlyArray<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  readonly connect?: InputMaybe<ReadonlyArray<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  readonly connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  readonly __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly description_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly description_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly description_starts_with?: InputMaybe<Scalars['String']>;
  readonly errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly errorMessage_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly errorMessage_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  readonly rawPayload_json_path_exists?: InputMaybe<Scalars['String']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  readonly rawPayload_value_recursive?: InputMaybe<Scalars['Json']>;
  readonly release?: InputMaybe<ScheduledReleaseWhereInput>;
  readonly status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  readonly status_in?: InputMaybe<ReadonlyArray<InputMaybe<ScheduledOperationStatus>>>;
  /** All values that are not equal to given value. */
  readonly status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  readonly status_not_in?: InputMaybe<ReadonlyArray<InputMaybe<ScheduledOperationStatus>>>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING',
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  readonly connect?: InputMaybe<ReadonlyArray<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  readonly disconnect?: InputMaybe<ReadonlyArray<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  readonly set?: InputMaybe<ReadonlyArray<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  readonly connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  readonly disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly description_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly description_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly description_starts_with?: InputMaybe<Scalars['String']>;
  readonly errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly errorMessage_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly errorMessage_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  readonly rawPayload_json_path_exists?: InputMaybe<Scalars['String']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  readonly rawPayload_value_recursive?: InputMaybe<Scalars['Json']>;
  readonly release?: InputMaybe<ScheduledReleaseWhereInput>;
  readonly status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  readonly status_in?: InputMaybe<ReadonlyArray<InputMaybe<ScheduledOperationStatus>>>;
  /** All values that are not equal to given value. */
  readonly status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  readonly status_not_in?: InputMaybe<ReadonlyArray<InputMaybe<ScheduledOperationStatus>>>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  readonly __typename?: 'ScheduledRelease';
  /** The time the document was created */
  readonly createdAt: Scalars['DateTime'];
  /** User that created this document */
  readonly createdBy?: Maybe<User>;
  /** Release description */
  readonly description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  readonly documentInStages: ReadonlyArray<ScheduledRelease>;
  /** Release error message */
  readonly errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  readonly id: Scalars['ID'];
  /** Whether scheduled release should be run */
  readonly isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  readonly isImplicit: Scalars['Boolean'];
  /** Operations to run with this release */
  readonly operations: ReadonlyArray<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  readonly publishedBy?: Maybe<User>;
  /** Release date and time */
  readonly releaseAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  readonly stage: Stage;
  /** Release Status */
  readonly status: ScheduledReleaseStatus;
  /** Release Title */
  readonly title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  readonly updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  readonly updatedBy?: Maybe<User>;
};

/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: ReadonlyArray<Stage>;
};

/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  readonly where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  readonly __typename?: 'ScheduledReleaseConnection';
  readonly aggregate: Aggregate;
  /** A list of edges. */
  readonly edges: ReadonlyArray<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  readonly description?: InputMaybe<Scalars['String']>;
  readonly errorMessage?: InputMaybe<Scalars['String']>;
  readonly isActive?: InputMaybe<Scalars['Boolean']>;
  readonly releaseAt?: InputMaybe<Scalars['DateTime']>;
  readonly title?: InputMaybe<Scalars['String']>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  readonly connect?: InputMaybe<ReadonlyArray<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  readonly create?: InputMaybe<ReadonlyArray<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  readonly connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  readonly create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  readonly __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly description_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly description_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly description_starts_with?: InputMaybe<Scalars['String']>;
  readonly errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly errorMessage_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly errorMessage_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']>;
  readonly isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  readonly isActive_not?: InputMaybe<Scalars['Boolean']>;
  readonly isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  readonly isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  readonly operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly releaseAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly releaseAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  readonly status_in?: InputMaybe<ReadonlyArray<InputMaybe<ScheduledReleaseStatus>>>;
  /** All values that are not equal to given value. */
  readonly status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  readonly status_not_in?: InputMaybe<ReadonlyArray<InputMaybe<ScheduledReleaseStatus>>>;
  readonly title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly title_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly title_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly title_starts_with?: InputMaybe<Scalars['String']>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING',
}

export type ScheduledReleaseUpdateInput = {
  readonly description?: InputMaybe<Scalars['String']>;
  readonly errorMessage?: InputMaybe<Scalars['String']>;
  readonly isActive?: InputMaybe<Scalars['Boolean']>;
  readonly releaseAt?: InputMaybe<Scalars['DateTime']>;
  readonly title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  readonly connect?: InputMaybe<ReadonlyArray<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  readonly create?: InputMaybe<ReadonlyArray<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  readonly delete?: InputMaybe<ReadonlyArray<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  readonly disconnect?: InputMaybe<ReadonlyArray<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  readonly set?: InputMaybe<ReadonlyArray<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  readonly update?: InputMaybe<ReadonlyArray<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  readonly upsert?: InputMaybe<ReadonlyArray<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  readonly description?: InputMaybe<Scalars['String']>;
  readonly errorMessage?: InputMaybe<Scalars['String']>;
  readonly isActive?: InputMaybe<Scalars['Boolean']>;
  readonly releaseAt?: InputMaybe<Scalars['DateTime']>;
  readonly title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  readonly data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  readonly where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  readonly connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  readonly create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  readonly delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ScheduledRelease document */
  readonly disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ScheduledRelease document */
  readonly update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  readonly upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  readonly data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  readonly where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  readonly create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  readonly update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  readonly data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  readonly where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly description_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly description_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly description_starts_with?: InputMaybe<Scalars['String']>;
  readonly errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly errorMessage_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly errorMessage_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']>;
  readonly isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  readonly isActive_not?: InputMaybe<Scalars['Boolean']>;
  readonly isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  readonly isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  readonly operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly releaseAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly releaseAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  readonly status_in?: InputMaybe<ReadonlyArray<InputMaybe<ScheduledReleaseStatus>>>;
  /** All values that are not equal to given value. */
  readonly status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  readonly status_not_in?: InputMaybe<ReadonlyArray<InputMaybe<ScheduledReleaseStatus>>>;
  readonly title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly title_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly title_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly title_starts_with?: InputMaybe<Scalars['String']>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED',
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION',
}

export enum Tags {
  Cms = 'cms',
  Css = 'css',
  Express = 'express',
  FramerMotion = 'framer_motion',
  Graphql = 'graphql',
  Html = 'html',
  Javascript = 'javascript',
  Next = 'next',
  Node = 'node',
  Python = 'python',
  React = 'react',
  Scss = 'scss',
  Typescript = 'typescript',
  Zustand = 'zustand',
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  readonly locale: Locale;
  /** Stages to unpublish selected locales from */
  readonly stages: ReadonlyArray<Stage>;
};

/** User system model */
export type User = Node & {
  readonly __typename?: 'User';
  /** The time the document was created */
  readonly createdAt: Scalars['DateTime'];
  /** Get the document in other stages */
  readonly documentInStages: ReadonlyArray<User>;
  /** The unique identifier */
  readonly id: Scalars['ID'];
  /** Flag to determine if user is active or not */
  readonly isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  readonly kind: UserKind;
  /** The username */
  readonly name: Scalars['String'];
  /** Profile Picture url */
  readonly picture?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  readonly stage: Stage;
  /** The time the document was updated */
  readonly updatedAt: Scalars['DateTime'];
};

/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: ReadonlyArray<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  readonly where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  readonly __typename?: 'UserConnection';
  readonly aggregate: Aggregate;
  /** A list of edges. */
  readonly edges: ReadonlyArray<UserEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  readonly connect?: InputMaybe<ReadonlyArray<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  readonly connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  readonly __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: User;
};

/** System User Kind */
export enum UserKind {
  AppToken = 'APP_TOKEN',
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK',
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly documentInStages_every?: InputMaybe<UserWhereStageInput>;
  readonly documentInStages_none?: InputMaybe<UserWhereStageInput>;
  readonly documentInStages_some?: InputMaybe<UserWhereStageInput>;
  readonly id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']>;
  readonly isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  readonly isActive_not?: InputMaybe<Scalars['Boolean']>;
  readonly kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  readonly kind_in?: InputMaybe<ReadonlyArray<InputMaybe<UserKind>>>;
  /** All values that are not equal to given value. */
  readonly kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  readonly kind_not_in?: InputMaybe<ReadonlyArray<InputMaybe<UserKind>>>;
  readonly name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly name_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly name_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly name_starts_with?: InputMaybe<Scalars['String']>;
  readonly picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly picture_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly picture_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly picture_starts_with?: InputMaybe<Scalars['String']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type UserProfile = Node & {
  readonly __typename?: 'UserProfile';
  /** The time the document was created */
  readonly createdAt: Scalars['DateTime'];
  /** User that created this document */
  readonly createdBy?: Maybe<User>;
  /** Get the document in other stages */
  readonly documentInStages: ReadonlyArray<UserProfile>;
  readonly email: Scalars['String'];
  /** List of UserProfile versions */
  readonly history: ReadonlyArray<Version>;
  /** The unique identifier */
  readonly id: Scalars['ID'];
  readonly image?: Maybe<Scalars['String']>;
  readonly nickname: Scalars['String'];
  /** The time the document was published. Null on documents in draft stage. */
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  readonly publishedBy?: Maybe<User>;
  readonly scheduledIn: ReadonlyArray<ScheduledOperation>;
  /** System stage field */
  readonly stage: Stage;
  /** The time the document was updated */
  readonly updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  readonly updatedBy?: Maybe<User>;
};

export type UserProfileCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type UserProfileDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: ReadonlyArray<Stage>;
};

export type UserProfileHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};

export type UserProfilePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type UserProfileScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type UserProfileUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type UserProfileConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  readonly where: UserProfileWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserProfileConnection = {
  readonly __typename?: 'UserProfileConnection';
  readonly aggregate: Aggregate;
  /** A list of edges. */
  readonly edges: ReadonlyArray<UserProfileEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
};

export type UserProfileCreateInput = {
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  readonly email: Scalars['String'];
  readonly image?: InputMaybe<Scalars['String']>;
  readonly nickname: Scalars['String'];
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserProfileCreateManyInlineInput = {
  /** Connect multiple existing UserProfile documents */
  readonly connect?: InputMaybe<ReadonlyArray<UserProfileWhereUniqueInput>>;
  /** Create and connect multiple existing UserProfile documents */
  readonly create?: InputMaybe<ReadonlyArray<UserProfileCreateInput>>;
};

export type UserProfileCreateOneInlineInput = {
  /** Connect one existing UserProfile document */
  readonly connect?: InputMaybe<UserProfileWhereUniqueInput>;
  /** Create and connect one UserProfile document */
  readonly create?: InputMaybe<UserProfileCreateInput>;
};

/** An edge in a connection. */
export type UserProfileEdge = {
  readonly __typename?: 'UserProfileEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: UserProfile;
};

/** Identifies documents */
export type UserProfileManyWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<UserProfileWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<UserProfileWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<UserProfileWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly documentInStages_every?: InputMaybe<UserProfileWhereStageInput>;
  readonly documentInStages_none?: InputMaybe<UserProfileWhereStageInput>;
  readonly documentInStages_some?: InputMaybe<UserProfileWhereStageInput>;
  readonly email?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly email_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly email_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly email_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly email_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly email_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly email_starts_with?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']>;
  readonly image?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly image_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly image_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly image_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly image_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly image_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly image_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly image_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly image_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly image_starts_with?: InputMaybe<Scalars['String']>;
  readonly nickname?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly nickname_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly nickname_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly nickname_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly nickname_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly nickname_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly nickname_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly nickname_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly nickname_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly nickname_starts_with?: InputMaybe<Scalars['String']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

export enum UserProfileOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ImageAsc = 'image_ASC',
  ImageDesc = 'image_DESC',
  NicknameAsc = 'nickname_ASC',
  NicknameDesc = 'nickname_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type UserProfileUpdateInput = {
  readonly email?: InputMaybe<Scalars['String']>;
  readonly image?: InputMaybe<Scalars['String']>;
  readonly nickname?: InputMaybe<Scalars['String']>;
};

export type UserProfileUpdateManyInlineInput = {
  /** Connect multiple existing UserProfile documents */
  readonly connect?: InputMaybe<ReadonlyArray<UserProfileConnectInput>>;
  /** Create and connect multiple UserProfile documents */
  readonly create?: InputMaybe<ReadonlyArray<UserProfileCreateInput>>;
  /** Delete multiple UserProfile documents */
  readonly delete?: InputMaybe<ReadonlyArray<UserProfileWhereUniqueInput>>;
  /** Disconnect multiple UserProfile documents */
  readonly disconnect?: InputMaybe<ReadonlyArray<UserProfileWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing UserProfile documents */
  readonly set?: InputMaybe<ReadonlyArray<UserProfileWhereUniqueInput>>;
  /** Update multiple UserProfile documents */
  readonly update?: InputMaybe<ReadonlyArray<UserProfileUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple UserProfile documents */
  readonly upsert?: InputMaybe<ReadonlyArray<UserProfileUpsertWithNestedWhereUniqueInput>>;
};

export type UserProfileUpdateManyInput = {
  readonly image?: InputMaybe<Scalars['String']>;
  readonly nickname?: InputMaybe<Scalars['String']>;
};

export type UserProfileUpdateManyWithNestedWhereInput = {
  /** Update many input */
  readonly data: UserProfileUpdateManyInput;
  /** Document search */
  readonly where: UserProfileWhereInput;
};

export type UserProfileUpdateOneInlineInput = {
  /** Connect existing UserProfile document */
  readonly connect?: InputMaybe<UserProfileWhereUniqueInput>;
  /** Create and connect one UserProfile document */
  readonly create?: InputMaybe<UserProfileCreateInput>;
  /** Delete currently connected UserProfile document */
  readonly delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected UserProfile document */
  readonly disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single UserProfile document */
  readonly update?: InputMaybe<UserProfileUpdateWithNestedWhereUniqueInput>;
  /** Upsert single UserProfile document */
  readonly upsert?: InputMaybe<UserProfileUpsertWithNestedWhereUniqueInput>;
};

export type UserProfileUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  readonly data: UserProfileUpdateInput;
  /** Unique document search */
  readonly where: UserProfileWhereUniqueInput;
};

export type UserProfileUpsertInput = {
  /** Create document if it didn't exist */
  readonly create: UserProfileCreateInput;
  /** Update document if it exists */
  readonly update: UserProfileUpdateInput;
};

export type UserProfileUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  readonly data: UserProfileUpsertInput;
  /** Unique document search */
  readonly where: UserProfileWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserProfileWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  readonly outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserProfileWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<UserProfileWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<UserProfileWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<UserProfileWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly documentInStages_every?: InputMaybe<UserProfileWhereStageInput>;
  readonly documentInStages_none?: InputMaybe<UserProfileWhereStageInput>;
  readonly documentInStages_some?: InputMaybe<UserProfileWhereStageInput>;
  readonly email?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly email_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly email_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly email_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly email_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly email_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly email_starts_with?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']>;
  readonly image?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly image_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly image_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly image_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly image_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly image_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly image_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly image_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly image_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly image_starts_with?: InputMaybe<Scalars['String']>;
  readonly nickname?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly nickname_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly nickname_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly nickname_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly nickname_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly nickname_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly nickname_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly nickname_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly nickname_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly nickname_starts_with?: InputMaybe<Scalars['String']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserProfileWhereStageInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<UserProfileWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<UserProfileWhereStageInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<UserProfileWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  readonly compareWithParent?: InputMaybe<UserProfileWhereComparatorInput>;
  /** Specify the stage to compare with */
  readonly stage?: InputMaybe<Stage>;
};

/** References UserProfile record uniquely */
export type UserProfileWhereUniqueInput = {
  readonly email?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['ID']>;
};

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  readonly connect?: InputMaybe<ReadonlyArray<UserConnectInput>>;
  /** Disconnect multiple User documents */
  readonly disconnect?: InputMaybe<ReadonlyArray<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  readonly set?: InputMaybe<ReadonlyArray<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  readonly connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  readonly disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  readonly outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly documentInStages_every?: InputMaybe<UserWhereStageInput>;
  readonly documentInStages_none?: InputMaybe<UserWhereStageInput>;
  readonly documentInStages_some?: InputMaybe<UserWhereStageInput>;
  readonly id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']>;
  readonly isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  readonly isActive_not?: InputMaybe<Scalars['Boolean']>;
  readonly kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  readonly kind_in?: InputMaybe<ReadonlyArray<InputMaybe<UserKind>>>;
  /** All values that are not equal to given value. */
  readonly kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  readonly kind_not_in?: InputMaybe<ReadonlyArray<InputMaybe<UserKind>>>;
  readonly name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly name_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly name_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly name_starts_with?: InputMaybe<Scalars['String']>;
  readonly picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly picture_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly picture_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly picture_starts_with?: InputMaybe<Scalars['String']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  readonly compareWithParent?: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  readonly stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars['ID']>;
};

export type Version = {
  readonly __typename?: 'Version';
  readonly createdAt: Scalars['DateTime'];
  readonly id: Scalars['ID'];
  readonly revision: Scalars['Int'];
  readonly stage: Stage;
};

export type VersionWhereInput = {
  readonly id: Scalars['ID'];
  readonly revision: Scalars['Int'];
  readonly stage: Stage;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  JsonPathExists = 'json_path_exists',
  JsonValueRecursive = 'json_value_recursive',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with',
  UnionEmpty = 'union_empty',
  UnionEvery = 'union_every',
  UnionNone = 'union_none',
  UnionSingle = 'union_single',
  UnionSome = 'union_some',
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual',
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert',
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one',
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update',
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union',
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization',
}

export type SearchForArticlesListQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']>;
  locales: ReadonlyArray<Locale> | Locale;
  orderBy?: InputMaybe<ArticlesOrderByInput>;
}>;

export type SearchForArticlesListQuery = {
  readonly __typename?: 'Query';
  readonly schemaArticles: ReadonlyArray<{
    readonly __typename?: 'Articles';
    readonly id: string;
    readonly slug?: string | null;
    readonly tags: ReadonlyArray<Tags>;
    readonly title?: string | null;
    readonly createdAt: Date;
    readonly introduction?: string | null;
    readonly thumbnail?: { readonly __typename?: 'Asset'; readonly url: string } | null;
  }>;
};

export type SearchForArticlesListByTagsQueryVariables = Exact<{
  locales: ReadonlyArray<Locale> | Locale;
  orderBy?: InputMaybe<ArticlesOrderByInput>;
  tagsContainsSome?: InputMaybe<ReadonlyArray<Tags> | Tags>;
}>;

export type SearchForArticlesListByTagsQuery = {
  readonly __typename?: 'Query';
  readonly schemaArticles: ReadonlyArray<{
    readonly __typename?: 'Articles';
    readonly id: string;
    readonly slug?: string | null;
    readonly tags: ReadonlyArray<Tags>;
    readonly title?: string | null;
    readonly createdAt: Date;
    readonly introduction?: string | null;
    readonly thumbnail?: { readonly __typename?: 'Asset'; readonly url: string } | null;
  }>;
};

export type SearchForArticlesListWithTagsQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']>;
  locales: ReadonlyArray<Locale> | Locale;
  orderBy?: InputMaybe<ArticlesOrderByInput>;
  tagsContainsSome?: InputMaybe<ReadonlyArray<Tags> | Tags>;
}>;

export type SearchForArticlesListWithTagsQuery = {
  readonly __typename?: 'Query';
  readonly schemaArticles: ReadonlyArray<{
    readonly __typename?: 'Articles';
    readonly id: string;
    readonly slug?: string | null;
    readonly tags: ReadonlyArray<Tags>;
    readonly title?: string | null;
    readonly createdAt: Date;
    readonly introduction?: string | null;
    readonly thumbnail?: { readonly __typename?: 'Asset'; readonly url: string } | null;
  }>;
};

export type ArticlesListWithPagesQueryVariables = Exact<{
  locales: ReadonlyArray<Locale> | Locale;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ArticlesOrderByInput>;
}>;

export type ArticlesListWithPagesQuery = {
  readonly __typename?: 'Query';
  readonly page: {
    readonly __typename?: 'ArticlesConnection';
    readonly edges: ReadonlyArray<{
      readonly __typename?: 'ArticlesEdge';
      readonly node: {
        readonly __typename?: 'Articles';
        readonly id: string;
        readonly slug?: string | null;
        readonly tags: ReadonlyArray<Tags>;
        readonly title?: string | null;
        readonly createdAt: Date;
        readonly introduction?: string | null;
        readonly thumbnail?: { readonly __typename?: 'Asset'; readonly url: string } | null;
      };
    }>;
    readonly pageInfo: { readonly __typename?: 'PageInfo'; readonly hasNextPage: boolean; readonly hasPreviousPage: boolean; readonly pageSize?: number | null };
  };
};

export type GetStaticAriclePageQueryVariables = Exact<{
  locales: ReadonlyArray<Locale> | Locale;
  slug?: InputMaybe<Scalars['String']>;
}>;

export type GetStaticAriclePageQuery = {
  readonly __typename?: 'Query';
  readonly page: {
    readonly __typename?: 'ArticlesConnection';
    readonly edges: ReadonlyArray<{
      readonly __typename?: 'ArticlesEdge';
      readonly node: {
        readonly __typename?: 'Articles';
        readonly id: string;
        readonly updatedAt: Date;
        readonly createdAt: Date;
        readonly introduction?: string | null;
        readonly tags: ReadonlyArray<Tags>;
        readonly slug?: string | null;
        readonly title?: string | null;
        readonly content?: string | null;
        readonly thumbnail?: { readonly __typename?: 'Asset'; readonly url: string } | null;
        readonly resources: ReadonlyArray<{ readonly __typename?: 'Links'; readonly id: string; readonly name?: string | null; readonly link?: string | null }>;
      };
    }>;
  };
};

export type ArticlesListQueryVariables = Exact<{
  locales: ReadonlyArray<Locale> | Locale;
  lng?: InputMaybe<Languages>;
}>;

export type ArticlesListQuery = {
  readonly __typename?: 'Query';
  readonly page: {
    readonly __typename?: 'ArticlesConnection';
    readonly edges: ReadonlyArray<{
      readonly __typename?: 'ArticlesEdge';
      readonly node: {
        readonly __typename?: 'Articles';
        readonly id: string;
        readonly updatedAt: Date;
        readonly createdAt: Date;
        readonly introduction?: string | null;
        readonly tags: ReadonlyArray<Tags>;
        readonly slug?: string | null;
        readonly title?: string | null;
        readonly content?: string | null;
        readonly thumbnail?: { readonly __typename?: 'Asset'; readonly url: string } | null;
        readonly comments: ReadonlyArray<{
          readonly __typename?: 'CommentsSchema';
          readonly id: string;
          readonly nickname: string;
          readonly avatar: string;
          readonly content: string;
          readonly edges: ReadonlyArray<{ readonly __typename?: 'Comments'; readonly id: string; readonly nickname: string; readonly avatar: string; readonly content: string }>;
        }>;
        readonly resources: ReadonlyArray<{ readonly __typename?: 'Links'; readonly id: string; readonly name?: string | null; readonly link?: string | null }>;
      };
    }>;
  };
};

export const SearchForArticlesListDocument = gql`
  query SearchForArticlesList($search: String, $locales: [Locale!]!, $orderBy: ArticlesOrderByInput) {
    schemaArticles(where: { _search: $search }, locales: $locales, orderBy: $orderBy) {
      id
      slug
      tags
      title
      createdAt
      introduction
      thumbnail {
        url
      }
    }
  }
`;

/**
 * __useSearchForArticlesListQuery__
 *
 * To run a query within a React component, call `useSearchForArticlesListQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchForArticlesListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchForArticlesListQuery({
 *   variables: {
 *      search: // value for 'search'
 *      locales: // value for 'locales'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useSearchForArticlesListQuery(baseOptions: Apollo.QueryHookOptions<SearchForArticlesListQuery, SearchForArticlesListQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SearchForArticlesListQuery, SearchForArticlesListQueryVariables>(SearchForArticlesListDocument, options);
}
export function useSearchForArticlesListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchForArticlesListQuery, SearchForArticlesListQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SearchForArticlesListQuery, SearchForArticlesListQueryVariables>(SearchForArticlesListDocument, options);
}
export type SearchForArticlesListQueryHookResult = ReturnType<typeof useSearchForArticlesListQuery>;
export type SearchForArticlesListLazyQueryHookResult = ReturnType<typeof useSearchForArticlesListLazyQuery>;
export type SearchForArticlesListQueryResult = Apollo.QueryResult<SearchForArticlesListQuery, SearchForArticlesListQueryVariables>;
export const SearchForArticlesListByTagsDocument = gql`
  query SearchForArticlesListByTags($locales: [Locale!]!, $orderBy: ArticlesOrderByInput, $tagsContainsSome: [Tags!]) {
    schemaArticles(where: { tags_contains_some: $tagsContainsSome }, locales: $locales, orderBy: $orderBy) {
      id
      slug
      tags
      title
      createdAt
      introduction
      thumbnail {
        url
      }
    }
  }
`;

/**
 * __useSearchForArticlesListByTagsQuery__
 *
 * To run a query within a React component, call `useSearchForArticlesListByTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchForArticlesListByTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchForArticlesListByTagsQuery({
 *   variables: {
 *      locales: // value for 'locales'
 *      orderBy: // value for 'orderBy'
 *      tagsContainsSome: // value for 'tagsContainsSome'
 *   },
 * });
 */
export function useSearchForArticlesListByTagsQuery(baseOptions: Apollo.QueryHookOptions<SearchForArticlesListByTagsQuery, SearchForArticlesListByTagsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SearchForArticlesListByTagsQuery, SearchForArticlesListByTagsQueryVariables>(SearchForArticlesListByTagsDocument, options);
}
export function useSearchForArticlesListByTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchForArticlesListByTagsQuery, SearchForArticlesListByTagsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SearchForArticlesListByTagsQuery, SearchForArticlesListByTagsQueryVariables>(SearchForArticlesListByTagsDocument, options);
}
export type SearchForArticlesListByTagsQueryHookResult = ReturnType<typeof useSearchForArticlesListByTagsQuery>;
export type SearchForArticlesListByTagsLazyQueryHookResult = ReturnType<typeof useSearchForArticlesListByTagsLazyQuery>;
export type SearchForArticlesListByTagsQueryResult = Apollo.QueryResult<SearchForArticlesListByTagsQuery, SearchForArticlesListByTagsQueryVariables>;
export const SearchForArticlesListWithTagsDocument = gql`
  query SearchForArticlesListWithTags($search: String, $locales: [Locale!]!, $orderBy: ArticlesOrderByInput, $tagsContainsSome: [Tags!]) {
    schemaArticles(where: { _search: $search, tags_contains_some: $tagsContainsSome }, locales: $locales, orderBy: $orderBy) {
      id
      slug
      tags
      title
      createdAt
      introduction
      thumbnail {
        url
      }
    }
  }
`;

/**
 * __useSearchForArticlesListWithTagsQuery__
 *
 * To run a query within a React component, call `useSearchForArticlesListWithTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchForArticlesListWithTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchForArticlesListWithTagsQuery({
 *   variables: {
 *      search: // value for 'search'
 *      locales: // value for 'locales'
 *      orderBy: // value for 'orderBy'
 *      tagsContainsSome: // value for 'tagsContainsSome'
 *   },
 * });
 */
export function useSearchForArticlesListWithTagsQuery(baseOptions: Apollo.QueryHookOptions<SearchForArticlesListWithTagsQuery, SearchForArticlesListWithTagsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SearchForArticlesListWithTagsQuery, SearchForArticlesListWithTagsQueryVariables>(SearchForArticlesListWithTagsDocument, options);
}
export function useSearchForArticlesListWithTagsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<SearchForArticlesListWithTagsQuery, SearchForArticlesListWithTagsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SearchForArticlesListWithTagsQuery, SearchForArticlesListWithTagsQueryVariables>(SearchForArticlesListWithTagsDocument, options);
}
export type SearchForArticlesListWithTagsQueryHookResult = ReturnType<typeof useSearchForArticlesListWithTagsQuery>;
export type SearchForArticlesListWithTagsLazyQueryHookResult = ReturnType<typeof useSearchForArticlesListWithTagsLazyQuery>;
export type SearchForArticlesListWithTagsQueryResult = Apollo.QueryResult<SearchForArticlesListWithTagsQuery, SearchForArticlesListWithTagsQueryVariables>;
export const ArticlesListWithPagesDocument = gql`
  query ArticlesListWithPages($locales: [Locale!]!, $first: Int, $skip: Int, $orderBy: ArticlesOrderByInput) {
    page: schemaArticlesConnection(locales: $locales, first: $first, skip: $skip, orderBy: $orderBy) {
      edges {
        node {
          id
          slug
          tags
          title
          createdAt
          introduction
          thumbnail {
            url
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        pageSize
      }
    }
  }
`;

/**
 * __useArticlesListWithPagesQuery__
 *
 * To run a query within a React component, call `useArticlesListWithPagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesListWithPagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesListWithPagesQuery({
 *   variables: {
 *      locales: // value for 'locales'
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useArticlesListWithPagesQuery(baseOptions: Apollo.QueryHookOptions<ArticlesListWithPagesQuery, ArticlesListWithPagesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ArticlesListWithPagesQuery, ArticlesListWithPagesQueryVariables>(ArticlesListWithPagesDocument, options);
}
export function useArticlesListWithPagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticlesListWithPagesQuery, ArticlesListWithPagesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ArticlesListWithPagesQuery, ArticlesListWithPagesQueryVariables>(ArticlesListWithPagesDocument, options);
}
export type ArticlesListWithPagesQueryHookResult = ReturnType<typeof useArticlesListWithPagesQuery>;
export type ArticlesListWithPagesLazyQueryHookResult = ReturnType<typeof useArticlesListWithPagesLazyQuery>;
export type ArticlesListWithPagesQueryResult = Apollo.QueryResult<ArticlesListWithPagesQuery, ArticlesListWithPagesQueryVariables>;
export const GetStaticAriclePageDocument = gql`
  query GetStaticAriclePage($locales: [Locale!]!, $slug: String) {
    page: schemaArticlesConnection(where: { slug_contains: $slug }, locales: $locales) {
      edges {
        node {
          id
          updatedAt
          createdAt
          thumbnail {
            url
          }
          introduction
          tags
          id
          slug
          title
          content
          resources {
            id
            name
            link
          }
        }
      }
    }
  }
`;

/**
 * __useGetStaticAriclePageQuery__
 *
 * To run a query within a React component, call `useGetStaticAriclePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStaticAriclePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStaticAriclePageQuery({
 *   variables: {
 *      locales: // value for 'locales'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetStaticAriclePageQuery(baseOptions: Apollo.QueryHookOptions<GetStaticAriclePageQuery, GetStaticAriclePageQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetStaticAriclePageQuery, GetStaticAriclePageQueryVariables>(GetStaticAriclePageDocument, options);
}
export function useGetStaticAriclePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStaticAriclePageQuery, GetStaticAriclePageQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetStaticAriclePageQuery, GetStaticAriclePageQueryVariables>(GetStaticAriclePageDocument, options);
}
export type GetStaticAriclePageQueryHookResult = ReturnType<typeof useGetStaticAriclePageQuery>;
export type GetStaticAriclePageLazyQueryHookResult = ReturnType<typeof useGetStaticAriclePageLazyQuery>;
export type GetStaticAriclePageQueryResult = Apollo.QueryResult<GetStaticAriclePageQuery, GetStaticAriclePageQueryVariables>;
export const ArticlesListDocument = gql`
  query ArticlesList($locales: [Locale!]!, $lng: Languages) {
    page: schemaArticlesConnection(locales: $locales) {
      edges {
        node {
          id
          updatedAt
          createdAt
          thumbnail {
            url
          }
          introduction
          tags
          id
          slug
          title
          content
          comments(where: { languages: $lng }) {
            id
            nickname
            avatar
            content
            edges {
              id
              nickname
              avatar
              content
            }
          }
          resources {
            id
            name
            link
          }
        }
      }
    }
  }
`;

/**
 * __useArticlesListQuery__
 *
 * To run a query within a React component, call `useArticlesListQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesListQuery({
 *   variables: {
 *      locales: // value for 'locales'
 *      lng: // value for 'lng'
 *   },
 * });
 */
export function useArticlesListQuery(baseOptions: Apollo.QueryHookOptions<ArticlesListQuery, ArticlesListQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ArticlesListQuery, ArticlesListQueryVariables>(ArticlesListDocument, options);
}
export function useArticlesListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticlesListQuery, ArticlesListQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ArticlesListQuery, ArticlesListQueryVariables>(ArticlesListDocument, options);
}
export type ArticlesListQueryHookResult = ReturnType<typeof useArticlesListQuery>;
export type ArticlesListLazyQueryHookResult = ReturnType<typeof useArticlesListLazyQuery>;
export type ArticlesListQueryResult = Apollo.QueryResult<ArticlesListQuery, ArticlesListQueryVariables>;
