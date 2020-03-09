// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  profile: (where?: ProfileWhereInput) => Promise<boolean>;
  project: (where?: ProjectWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  profile: (where: ProfileWhereUniqueInput) => ProfileNullablePromise;
  profiles: (args?: {
    where?: ProfileWhereInput;
    orderBy?: ProfileOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Profile>;
  profilesConnection: (args?: {
    where?: ProfileWhereInput;
    orderBy?: ProfileOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => ProfileConnectionPromise;
  project: (where: ProjectWhereUniqueInput) => ProjectNullablePromise;
  projects: (args?: {
    where?: ProjectWhereInput;
    orderBy?: ProjectOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Project>;
  projectsConnection: (args?: {
    where?: ProjectWhereInput;
    orderBy?: ProjectOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => ProjectConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createProfile: (data: ProfileCreateInput) => ProfilePromise;
  updateProfile: (args: {
    data: ProfileUpdateInput;
    where: ProfileWhereUniqueInput;
  }) => ProfilePromise;
  updateManyProfiles: (args: {
    data: ProfileUpdateManyMutationInput;
    where?: ProfileWhereInput;
  }) => BatchPayloadPromise;
  upsertProfile: (args: {
    where: ProfileWhereUniqueInput;
    create: ProfileCreateInput;
    update: ProfileUpdateInput;
  }) => ProfilePromise;
  deleteProfile: (where: ProfileWhereUniqueInput) => ProfilePromise;
  deleteManyProfiles: (where?: ProfileWhereInput) => BatchPayloadPromise;
  createProject: (data: ProjectCreateInput) => ProjectPromise;
  updateProject: (args: {
    data: ProjectUpdateInput;
    where: ProjectWhereUniqueInput;
  }) => ProjectPromise;
  updateManyProjects: (args: {
    data: ProjectUpdateManyMutationInput;
    where?: ProjectWhereInput;
  }) => BatchPayloadPromise;
  upsertProject: (args: {
    where: ProjectWhereUniqueInput;
    create: ProjectCreateInput;
    update: ProjectUpdateInput;
  }) => ProjectPromise;
  deleteProject: (where: ProjectWhereUniqueInput) => ProjectPromise;
  deleteManyProjects: (where?: ProjectWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  profile: (
    where?: ProfileSubscriptionWhereInput
  ) => ProfileSubscriptionPayloadSubscription;
  project: (
    where?: ProjectSubscriptionWhereInput
  ) => ProjectSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type ProfileOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "username_ASC"
  | "username_DESC"
  | "name_ASC"
  | "name_DESC"
  | "role_ASC"
  | "role_DESC";

export type ProjectOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "title_ASC"
  | "title_DESC"
  | "description_ASC"
  | "description_DESC"
  | "published_ASC"
  | "published_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC"
  | "role_ASC"
  | "role_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type ProfileWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface ProfileWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  userId?: Maybe<UserWhereInput>;
  username?: Maybe<String>;
  username_not?: Maybe<String>;
  username_in?: Maybe<String[] | String>;
  username_not_in?: Maybe<String[] | String>;
  username_lt?: Maybe<String>;
  username_lte?: Maybe<String>;
  username_gt?: Maybe<String>;
  username_gte?: Maybe<String>;
  username_contains?: Maybe<String>;
  username_not_contains?: Maybe<String>;
  username_starts_with?: Maybe<String>;
  username_not_starts_with?: Maybe<String>;
  username_ends_with?: Maybe<String>;
  username_not_ends_with?: Maybe<String>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  role?: Maybe<String>;
  role_not?: Maybe<String>;
  role_in?: Maybe<String[] | String>;
  role_not_in?: Maybe<String[] | String>;
  role_lt?: Maybe<String>;
  role_lte?: Maybe<String>;
  role_gt?: Maybe<String>;
  role_gte?: Maybe<String>;
  role_contains?: Maybe<String>;
  role_not_contains?: Maybe<String>;
  role_starts_with?: Maybe<String>;
  role_not_starts_with?: Maybe<String>;
  role_ends_with?: Maybe<String>;
  role_not_ends_with?: Maybe<String>;
  AND?: Maybe<ProfileWhereInput[] | ProfileWhereInput>;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  password?: Maybe<String>;
  password_not?: Maybe<String>;
  password_in?: Maybe<String[] | String>;
  password_not_in?: Maybe<String[] | String>;
  password_lt?: Maybe<String>;
  password_lte?: Maybe<String>;
  password_gt?: Maybe<String>;
  password_gte?: Maybe<String>;
  password_contains?: Maybe<String>;
  password_not_contains?: Maybe<String>;
  password_starts_with?: Maybe<String>;
  password_not_starts_with?: Maybe<String>;
  password_ends_with?: Maybe<String>;
  password_not_ends_with?: Maybe<String>;
  role?: Maybe<String>;
  role_not?: Maybe<String>;
  role_in?: Maybe<String[] | String>;
  role_not_in?: Maybe<String[] | String>;
  role_lt?: Maybe<String>;
  role_lte?: Maybe<String>;
  role_gt?: Maybe<String>;
  role_gte?: Maybe<String>;
  role_contains?: Maybe<String>;
  role_not_contains?: Maybe<String>;
  role_starts_with?: Maybe<String>;
  role_not_starts_with?: Maybe<String>;
  role_ends_with?: Maybe<String>;
  role_not_ends_with?: Maybe<String>;
  projects?: Maybe<ProjectWhereInput>;
  profileId?: Maybe<ProfileWhereInput>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface ProjectWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  description?: Maybe<String>;
  description_not?: Maybe<String>;
  description_in?: Maybe<String[] | String>;
  description_not_in?: Maybe<String[] | String>;
  description_lt?: Maybe<String>;
  description_lte?: Maybe<String>;
  description_gt?: Maybe<String>;
  description_gte?: Maybe<String>;
  description_contains?: Maybe<String>;
  description_not_contains?: Maybe<String>;
  description_starts_with?: Maybe<String>;
  description_not_starts_with?: Maybe<String>;
  description_ends_with?: Maybe<String>;
  description_not_ends_with?: Maybe<String>;
  published?: Maybe<Boolean>;
  published_not?: Maybe<Boolean>;
  author?: Maybe<UserWhereInput>;
  AND?: Maybe<ProjectWhereInput[] | ProjectWhereInput>;
}

export type ProjectWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  email?: Maybe<String>;
}>;

export interface ProfileCreateInput {
  id?: Maybe<ID_Input>;
  userId: UserCreateOneWithoutProfileIdInput;
  username: String;
  name: String;
  role: String;
}

export interface UserCreateOneWithoutProfileIdInput {
  create?: Maybe<UserCreateWithoutProfileIdInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateWithoutProfileIdInput {
  id?: Maybe<ID_Input>;
  email: String;
  password: String;
  role: String;
  projects?: Maybe<ProjectCreateOneWithoutAuthorInput>;
}

export interface ProjectCreateOneWithoutAuthorInput {
  create?: Maybe<ProjectCreateWithoutAuthorInput>;
  connect?: Maybe<ProjectWhereUniqueInput>;
}

export interface ProjectCreateWithoutAuthorInput {
  id?: Maybe<ID_Input>;
  title: String;
  description?: Maybe<String>;
  published?: Maybe<Boolean>;
}

export interface ProfileUpdateInput {
  userId?: Maybe<UserUpdateOneRequiredWithoutProfileIdInput>;
  username?: Maybe<String>;
  name?: Maybe<String>;
  role?: Maybe<String>;
}

export interface UserUpdateOneRequiredWithoutProfileIdInput {
  create?: Maybe<UserCreateWithoutProfileIdInput>;
  update?: Maybe<UserUpdateWithoutProfileIdDataInput>;
  upsert?: Maybe<UserUpsertWithoutProfileIdInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateWithoutProfileIdDataInput {
  email?: Maybe<String>;
  password?: Maybe<String>;
  role?: Maybe<String>;
  projects?: Maybe<ProjectUpdateOneWithoutAuthorInput>;
}

export interface ProjectUpdateOneWithoutAuthorInput {
  create?: Maybe<ProjectCreateWithoutAuthorInput>;
  update?: Maybe<ProjectUpdateWithoutAuthorDataInput>;
  upsert?: Maybe<ProjectUpsertWithoutAuthorInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
  connect?: Maybe<ProjectWhereUniqueInput>;
}

export interface ProjectUpdateWithoutAuthorDataInput {
  title?: Maybe<String>;
  description?: Maybe<String>;
  published?: Maybe<Boolean>;
}

export interface ProjectUpsertWithoutAuthorInput {
  update: ProjectUpdateWithoutAuthorDataInput;
  create: ProjectCreateWithoutAuthorInput;
}

export interface UserUpsertWithoutProfileIdInput {
  update: UserUpdateWithoutProfileIdDataInput;
  create: UserCreateWithoutProfileIdInput;
}

export interface ProfileUpdateManyMutationInput {
  username?: Maybe<String>;
  name?: Maybe<String>;
  role?: Maybe<String>;
}

export interface ProjectCreateInput {
  id?: Maybe<ID_Input>;
  title: String;
  description?: Maybe<String>;
  published?: Maybe<Boolean>;
  author: UserCreateOneWithoutProjectsInput;
}

export interface UserCreateOneWithoutProjectsInput {
  create?: Maybe<UserCreateWithoutProjectsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateWithoutProjectsInput {
  id?: Maybe<ID_Input>;
  email: String;
  password: String;
  role: String;
  profileId?: Maybe<ProfileCreateOneWithoutUserIdInput>;
}

export interface ProfileCreateOneWithoutUserIdInput {
  create?: Maybe<ProfileCreateWithoutUserIdInput>;
  connect?: Maybe<ProfileWhereUniqueInput>;
}

export interface ProfileCreateWithoutUserIdInput {
  id?: Maybe<ID_Input>;
  username: String;
  name: String;
  role: String;
}

export interface ProjectUpdateInput {
  title?: Maybe<String>;
  description?: Maybe<String>;
  published?: Maybe<Boolean>;
  author?: Maybe<UserUpdateOneRequiredWithoutProjectsInput>;
}

export interface UserUpdateOneRequiredWithoutProjectsInput {
  create?: Maybe<UserCreateWithoutProjectsInput>;
  update?: Maybe<UserUpdateWithoutProjectsDataInput>;
  upsert?: Maybe<UserUpsertWithoutProjectsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateWithoutProjectsDataInput {
  email?: Maybe<String>;
  password?: Maybe<String>;
  role?: Maybe<String>;
  profileId?: Maybe<ProfileUpdateOneWithoutUserIdInput>;
}

export interface ProfileUpdateOneWithoutUserIdInput {
  create?: Maybe<ProfileCreateWithoutUserIdInput>;
  update?: Maybe<ProfileUpdateWithoutUserIdDataInput>;
  upsert?: Maybe<ProfileUpsertWithoutUserIdInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
  connect?: Maybe<ProfileWhereUniqueInput>;
}

export interface ProfileUpdateWithoutUserIdDataInput {
  username?: Maybe<String>;
  name?: Maybe<String>;
  role?: Maybe<String>;
}

export interface ProfileUpsertWithoutUserIdInput {
  update: ProfileUpdateWithoutUserIdDataInput;
  create: ProfileCreateWithoutUserIdInput;
}

export interface UserUpsertWithoutProjectsInput {
  update: UserUpdateWithoutProjectsDataInput;
  create: UserCreateWithoutProjectsInput;
}

export interface ProjectUpdateManyMutationInput {
  title?: Maybe<String>;
  description?: Maybe<String>;
  published?: Maybe<Boolean>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  email: String;
  password: String;
  role: String;
  projects?: Maybe<ProjectCreateOneWithoutAuthorInput>;
  profileId?: Maybe<ProfileCreateOneWithoutUserIdInput>;
}

export interface UserUpdateInput {
  email?: Maybe<String>;
  password?: Maybe<String>;
  role?: Maybe<String>;
  projects?: Maybe<ProjectUpdateOneWithoutAuthorInput>;
  profileId?: Maybe<ProfileUpdateOneWithoutUserIdInput>;
}

export interface UserUpdateManyMutationInput {
  email?: Maybe<String>;
  password?: Maybe<String>;
  role?: Maybe<String>;
}

export interface ProfileSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<ProfileWhereInput>;
  AND?: Maybe<ProfileSubscriptionWhereInput[] | ProfileSubscriptionWhereInput>;
}

export interface ProjectSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<ProjectWhereInput>;
  AND?: Maybe<ProjectSubscriptionWhereInput[] | ProjectSubscriptionWhereInput>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Profile {
  id: ID_Output;
  createdAt?: DateTimeOutput;
  updatedAt?: DateTimeOutput;
  username: String;
  name: String;
  role: String;
}

export interface ProfilePromise extends Promise<Profile>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  userId: <T = UserPromise>() => T;
  username: () => Promise<String>;
  name: () => Promise<String>;
  role: () => Promise<String>;
}

export interface ProfileSubscription
  extends Promise<AsyncIterator<Profile>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  userId: <T = UserSubscription>() => T;
  username: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  role: () => Promise<AsyncIterator<String>>;
}

export interface ProfileNullablePromise
  extends Promise<Profile | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  userId: <T = UserPromise>() => T;
  username: () => Promise<String>;
  name: () => Promise<String>;
  role: () => Promise<String>;
}

export interface User {
  id: ID_Output;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
  email: String;
  password: String;
  role: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  role: () => Promise<String>;
  projects: <T = ProjectPromise>() => T;
  profileId: <T = ProfilePromise>() => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  role: () => Promise<AsyncIterator<String>>;
  projects: <T = ProjectSubscription>() => T;
  profileId: <T = ProfileSubscription>() => T;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  role: () => Promise<String>;
  projects: <T = ProjectPromise>() => T;
  profileId: <T = ProfilePromise>() => T;
}

export interface Project {
  id: ID_Output;
  createdAt?: DateTimeOutput;
  updatedAt?: DateTimeOutput;
  title: String;
  description?: String;
  published: Boolean;
}

export interface ProjectPromise extends Promise<Project>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  title: () => Promise<String>;
  description: () => Promise<String>;
  published: () => Promise<Boolean>;
  author: <T = UserPromise>() => T;
}

export interface ProjectSubscription
  extends Promise<AsyncIterator<Project>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  title: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  published: () => Promise<AsyncIterator<Boolean>>;
  author: <T = UserSubscription>() => T;
}

export interface ProjectNullablePromise
  extends Promise<Project | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  title: () => Promise<String>;
  description: () => Promise<String>;
  published: () => Promise<Boolean>;
  author: <T = UserPromise>() => T;
}

export interface ProfileConnection {
  pageInfo: PageInfo;
  edges: ProfileEdge[];
}

export interface ProfileConnectionPromise
  extends Promise<ProfileConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ProfileEdge>>() => T;
  aggregate: <T = AggregateProfilePromise>() => T;
}

export interface ProfileConnectionSubscription
  extends Promise<AsyncIterator<ProfileConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ProfileEdgeSubscription>>>() => T;
  aggregate: <T = AggregateProfileSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface ProfileEdge {
  node: Profile;
  cursor: String;
}

export interface ProfileEdgePromise extends Promise<ProfileEdge>, Fragmentable {
  node: <T = ProfilePromise>() => T;
  cursor: () => Promise<String>;
}

export interface ProfileEdgeSubscription
  extends Promise<AsyncIterator<ProfileEdge>>,
    Fragmentable {
  node: <T = ProfileSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateProfile {
  count: Int;
}

export interface AggregateProfilePromise
  extends Promise<AggregateProfile>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateProfileSubscription
  extends Promise<AsyncIterator<AggregateProfile>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface ProjectConnection {
  pageInfo: PageInfo;
  edges: ProjectEdge[];
}

export interface ProjectConnectionPromise
  extends Promise<ProjectConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ProjectEdge>>() => T;
  aggregate: <T = AggregateProjectPromise>() => T;
}

export interface ProjectConnectionSubscription
  extends Promise<AsyncIterator<ProjectConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ProjectEdgeSubscription>>>() => T;
  aggregate: <T = AggregateProjectSubscription>() => T;
}

export interface ProjectEdge {
  node: Project;
  cursor: String;
}

export interface ProjectEdgePromise extends Promise<ProjectEdge>, Fragmentable {
  node: <T = ProjectPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ProjectEdgeSubscription
  extends Promise<AsyncIterator<ProjectEdge>>,
    Fragmentable {
  node: <T = ProjectSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateProject {
  count: Int;
}

export interface AggregateProjectPromise
  extends Promise<AggregateProject>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateProjectSubscription
  extends Promise<AsyncIterator<AggregateProject>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface ProfileSubscriptionPayload {
  mutation: MutationType;
  node: Profile;
  updatedFields: String[];
  previousValues: ProfilePreviousValues;
}

export interface ProfileSubscriptionPayloadPromise
  extends Promise<ProfileSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ProfilePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ProfilePreviousValuesPromise>() => T;
}

export interface ProfileSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ProfileSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ProfileSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ProfilePreviousValuesSubscription>() => T;
}

export interface ProfilePreviousValues {
  id: ID_Output;
  createdAt?: DateTimeOutput;
  updatedAt?: DateTimeOutput;
  username: String;
  name: String;
  role: String;
}

export interface ProfilePreviousValuesPromise
  extends Promise<ProfilePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  username: () => Promise<String>;
  name: () => Promise<String>;
  role: () => Promise<String>;
}

export interface ProfilePreviousValuesSubscription
  extends Promise<AsyncIterator<ProfilePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  username: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  role: () => Promise<AsyncIterator<String>>;
}

export interface ProjectSubscriptionPayload {
  mutation: MutationType;
  node: Project;
  updatedFields: String[];
  previousValues: ProjectPreviousValues;
}

export interface ProjectSubscriptionPayloadPromise
  extends Promise<ProjectSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ProjectPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ProjectPreviousValuesPromise>() => T;
}

export interface ProjectSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ProjectSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ProjectSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ProjectPreviousValuesSubscription>() => T;
}

export interface ProjectPreviousValues {
  id: ID_Output;
  createdAt?: DateTimeOutput;
  updatedAt?: DateTimeOutput;
  title: String;
  description?: String;
  published: Boolean;
}

export interface ProjectPreviousValuesPromise
  extends Promise<ProjectPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  title: () => Promise<String>;
  description: () => Promise<String>;
  published: () => Promise<Boolean>;
}

export interface ProjectPreviousValuesSubscription
  extends Promise<AsyncIterator<ProjectPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  title: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  published: () => Promise<AsyncIterator<Boolean>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
  email: String;
  password: String;
  role: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  role: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  role: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Project",
    embedded: false
  },
  {
    name: "Profile",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
