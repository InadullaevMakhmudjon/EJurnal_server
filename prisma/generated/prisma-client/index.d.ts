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
  role: (where?: RoleWhereInput) => Promise<boolean>;
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

  role: (where: RoleWhereUniqueInput) => RoleNullablePromise;
  roles: (args?: {
    where?: RoleWhereInput;
    orderBy?: RoleOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Role>;
  rolesConnection: (args?: {
    where?: RoleWhereInput;
    orderBy?: RoleOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => RoleConnectionPromise;
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

  createRole: (data: RoleCreateInput) => RolePromise;
  updateRole: (args: {
    data: RoleUpdateInput;
    where: RoleWhereUniqueInput;
  }) => RolePromise;
  updateManyRoles: (args: {
    data: RoleUpdateManyMutationInput;
    where?: RoleWhereInput;
  }) => BatchPayloadPromise;
  upsertRole: (args: {
    where: RoleWhereUniqueInput;
    create: RoleCreateInput;
    update: RoleUpdateInput;
  }) => RolePromise;
  deleteRole: (where: RoleWhereUniqueInput) => RolePromise;
  deleteManyRoles: (where?: RoleWhereInput) => BatchPayloadPromise;
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
  role: (
    where?: RoleSubscriptionWhereInput
  ) => RoleSubscriptionPayloadSubscription;
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

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "firstName_ASC"
  | "firstName_DESC"
  | "secondName_ASC"
  | "secondName_DESC"
  | "userName_ASC"
  | "userName_DESC"
  | "password_ASC"
  | "password_DESC"
  | "blocked_ASC"
  | "blocked_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "lastEntered_ASC"
  | "lastEntered_DESC";

export type RoleOrderByInput = "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type RoleWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

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
  firstName?: Maybe<String>;
  firstName_not?: Maybe<String>;
  firstName_in?: Maybe<String[] | String>;
  firstName_not_in?: Maybe<String[] | String>;
  firstName_lt?: Maybe<String>;
  firstName_lte?: Maybe<String>;
  firstName_gt?: Maybe<String>;
  firstName_gte?: Maybe<String>;
  firstName_contains?: Maybe<String>;
  firstName_not_contains?: Maybe<String>;
  firstName_starts_with?: Maybe<String>;
  firstName_not_starts_with?: Maybe<String>;
  firstName_ends_with?: Maybe<String>;
  firstName_not_ends_with?: Maybe<String>;
  secondName?: Maybe<String>;
  secondName_not?: Maybe<String>;
  secondName_in?: Maybe<String[] | String>;
  secondName_not_in?: Maybe<String[] | String>;
  secondName_lt?: Maybe<String>;
  secondName_lte?: Maybe<String>;
  secondName_gt?: Maybe<String>;
  secondName_gte?: Maybe<String>;
  secondName_contains?: Maybe<String>;
  secondName_not_contains?: Maybe<String>;
  secondName_starts_with?: Maybe<String>;
  secondName_not_starts_with?: Maybe<String>;
  secondName_ends_with?: Maybe<String>;
  secondName_not_ends_with?: Maybe<String>;
  userName?: Maybe<String>;
  userName_not?: Maybe<String>;
  userName_in?: Maybe<String[] | String>;
  userName_not_in?: Maybe<String[] | String>;
  userName_lt?: Maybe<String>;
  userName_lte?: Maybe<String>;
  userName_gt?: Maybe<String>;
  userName_gte?: Maybe<String>;
  userName_contains?: Maybe<String>;
  userName_not_contains?: Maybe<String>;
  userName_starts_with?: Maybe<String>;
  userName_not_starts_with?: Maybe<String>;
  userName_ends_with?: Maybe<String>;
  userName_not_ends_with?: Maybe<String>;
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
  blocked?: Maybe<Boolean>;
  blocked_not?: Maybe<Boolean>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  lastEntered?: Maybe<DateTimeInput>;
  lastEntered_not?: Maybe<DateTimeInput>;
  lastEntered_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  lastEntered_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  lastEntered_lt?: Maybe<DateTimeInput>;
  lastEntered_lte?: Maybe<DateTimeInput>;
  lastEntered_gt?: Maybe<DateTimeInput>;
  lastEntered_gte?: Maybe<DateTimeInput>;
  role?: Maybe<RoleWhereInput>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface RoleWhereInput {
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
  users_every?: Maybe<UserWhereInput>;
  users_some?: Maybe<UserWhereInput>;
  users_none?: Maybe<UserWhereInput>;
  AND?: Maybe<RoleWhereInput[] | RoleWhereInput>;
  OR?: Maybe<RoleWhereInput[] | RoleWhereInput>;
  NOT?: Maybe<RoleWhereInput[] | RoleWhereInput>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  userName?: Maybe<String>;
}>;

export interface RoleCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  users?: Maybe<UserCreateManyWithoutRoleInput>;
}

export interface UserCreateManyWithoutRoleInput {
  create?: Maybe<UserCreateWithoutRoleInput[] | UserCreateWithoutRoleInput>;
  connect?: Maybe<UserWhereUniqueInput[] | UserWhereUniqueInput>;
}

export interface UserCreateWithoutRoleInput {
  id?: Maybe<ID_Input>;
  firstName: String;
  secondName: String;
  userName: String;
  password: String;
  blocked?: Maybe<Boolean>;
  lastEntered?: Maybe<DateTimeInput>;
}

export interface RoleUpdateInput {
  name?: Maybe<String>;
  users?: Maybe<UserUpdateManyWithoutRoleInput>;
}

export interface UserUpdateManyWithoutRoleInput {
  create?: Maybe<UserCreateWithoutRoleInput[] | UserCreateWithoutRoleInput>;
  delete?: Maybe<UserWhereUniqueInput[] | UserWhereUniqueInput>;
  connect?: Maybe<UserWhereUniqueInput[] | UserWhereUniqueInput>;
  set?: Maybe<UserWhereUniqueInput[] | UserWhereUniqueInput>;
  disconnect?: Maybe<UserWhereUniqueInput[] | UserWhereUniqueInput>;
  update?: Maybe<
    | UserUpdateWithWhereUniqueWithoutRoleInput[]
    | UserUpdateWithWhereUniqueWithoutRoleInput
  >;
  upsert?: Maybe<
    | UserUpsertWithWhereUniqueWithoutRoleInput[]
    | UserUpsertWithWhereUniqueWithoutRoleInput
  >;
  deleteMany?: Maybe<UserScalarWhereInput[] | UserScalarWhereInput>;
  updateMany?: Maybe<
    UserUpdateManyWithWhereNestedInput[] | UserUpdateManyWithWhereNestedInput
  >;
}

export interface UserUpdateWithWhereUniqueWithoutRoleInput {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutRoleDataInput;
}

export interface UserUpdateWithoutRoleDataInput {
  firstName?: Maybe<String>;
  secondName?: Maybe<String>;
  userName?: Maybe<String>;
  password?: Maybe<String>;
  blocked?: Maybe<Boolean>;
  lastEntered?: Maybe<DateTimeInput>;
}

export interface UserUpsertWithWhereUniqueWithoutRoleInput {
  where: UserWhereUniqueInput;
  update: UserUpdateWithoutRoleDataInput;
  create: UserCreateWithoutRoleInput;
}

export interface UserScalarWhereInput {
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
  firstName?: Maybe<String>;
  firstName_not?: Maybe<String>;
  firstName_in?: Maybe<String[] | String>;
  firstName_not_in?: Maybe<String[] | String>;
  firstName_lt?: Maybe<String>;
  firstName_lte?: Maybe<String>;
  firstName_gt?: Maybe<String>;
  firstName_gte?: Maybe<String>;
  firstName_contains?: Maybe<String>;
  firstName_not_contains?: Maybe<String>;
  firstName_starts_with?: Maybe<String>;
  firstName_not_starts_with?: Maybe<String>;
  firstName_ends_with?: Maybe<String>;
  firstName_not_ends_with?: Maybe<String>;
  secondName?: Maybe<String>;
  secondName_not?: Maybe<String>;
  secondName_in?: Maybe<String[] | String>;
  secondName_not_in?: Maybe<String[] | String>;
  secondName_lt?: Maybe<String>;
  secondName_lte?: Maybe<String>;
  secondName_gt?: Maybe<String>;
  secondName_gte?: Maybe<String>;
  secondName_contains?: Maybe<String>;
  secondName_not_contains?: Maybe<String>;
  secondName_starts_with?: Maybe<String>;
  secondName_not_starts_with?: Maybe<String>;
  secondName_ends_with?: Maybe<String>;
  secondName_not_ends_with?: Maybe<String>;
  userName?: Maybe<String>;
  userName_not?: Maybe<String>;
  userName_in?: Maybe<String[] | String>;
  userName_not_in?: Maybe<String[] | String>;
  userName_lt?: Maybe<String>;
  userName_lte?: Maybe<String>;
  userName_gt?: Maybe<String>;
  userName_gte?: Maybe<String>;
  userName_contains?: Maybe<String>;
  userName_not_contains?: Maybe<String>;
  userName_starts_with?: Maybe<String>;
  userName_not_starts_with?: Maybe<String>;
  userName_ends_with?: Maybe<String>;
  userName_not_ends_with?: Maybe<String>;
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
  blocked?: Maybe<Boolean>;
  blocked_not?: Maybe<Boolean>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  lastEntered?: Maybe<DateTimeInput>;
  lastEntered_not?: Maybe<DateTimeInput>;
  lastEntered_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  lastEntered_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  lastEntered_lt?: Maybe<DateTimeInput>;
  lastEntered_lte?: Maybe<DateTimeInput>;
  lastEntered_gt?: Maybe<DateTimeInput>;
  lastEntered_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<UserScalarWhereInput[] | UserScalarWhereInput>;
  OR?: Maybe<UserScalarWhereInput[] | UserScalarWhereInput>;
  NOT?: Maybe<UserScalarWhereInput[] | UserScalarWhereInput>;
}

export interface UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput;
  data: UserUpdateManyDataInput;
}

export interface UserUpdateManyDataInput {
  firstName?: Maybe<String>;
  secondName?: Maybe<String>;
  userName?: Maybe<String>;
  password?: Maybe<String>;
  blocked?: Maybe<Boolean>;
  lastEntered?: Maybe<DateTimeInput>;
}

export interface RoleUpdateManyMutationInput {
  name?: Maybe<String>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  firstName: String;
  secondName: String;
  userName: String;
  password: String;
  blocked?: Maybe<Boolean>;
  lastEntered?: Maybe<DateTimeInput>;
  role: RoleCreateOneWithoutUsersInput;
}

export interface RoleCreateOneWithoutUsersInput {
  create?: Maybe<RoleCreateWithoutUsersInput>;
  connect?: Maybe<RoleWhereUniqueInput>;
}

export interface RoleCreateWithoutUsersInput {
  id?: Maybe<ID_Input>;
  name: String;
}

export interface UserUpdateInput {
  firstName?: Maybe<String>;
  secondName?: Maybe<String>;
  userName?: Maybe<String>;
  password?: Maybe<String>;
  blocked?: Maybe<Boolean>;
  lastEntered?: Maybe<DateTimeInput>;
  role?: Maybe<RoleUpdateOneRequiredWithoutUsersInput>;
}

export interface RoleUpdateOneRequiredWithoutUsersInput {
  create?: Maybe<RoleCreateWithoutUsersInput>;
  update?: Maybe<RoleUpdateWithoutUsersDataInput>;
  upsert?: Maybe<RoleUpsertWithoutUsersInput>;
  connect?: Maybe<RoleWhereUniqueInput>;
}

export interface RoleUpdateWithoutUsersDataInput {
  name?: Maybe<String>;
}

export interface RoleUpsertWithoutUsersInput {
  update: RoleUpdateWithoutUsersDataInput;
  create: RoleCreateWithoutUsersInput;
}

export interface UserUpdateManyMutationInput {
  firstName?: Maybe<String>;
  secondName?: Maybe<String>;
  userName?: Maybe<String>;
  password?: Maybe<String>;
  blocked?: Maybe<Boolean>;
  lastEntered?: Maybe<DateTimeInput>;
}

export interface RoleSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<RoleWhereInput>;
  AND?: Maybe<RoleSubscriptionWhereInput[] | RoleSubscriptionWhereInput>;
  OR?: Maybe<RoleSubscriptionWhereInput[] | RoleSubscriptionWhereInput>;
  NOT?: Maybe<RoleSubscriptionWhereInput[] | RoleSubscriptionWhereInput>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Role {
  id: ID_Output;
  name: String;
}

export interface RolePromise extends Promise<Role>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  users: <T = FragmentableArray<User>>(args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface RoleSubscription
  extends Promise<AsyncIterator<Role>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  users: <T = Promise<AsyncIterator<UserSubscription>>>(args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface RoleNullablePromise
  extends Promise<Role | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  users: <T = FragmentableArray<User>>(args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface User {
  id: ID_Output;
  firstName: String;
  secondName: String;
  userName: String;
  password: String;
  blocked: Boolean;
  createdAt: DateTimeOutput;
  lastEntered?: DateTimeOutput;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  firstName: () => Promise<String>;
  secondName: () => Promise<String>;
  userName: () => Promise<String>;
  password: () => Promise<String>;
  blocked: () => Promise<Boolean>;
  createdAt: () => Promise<DateTimeOutput>;
  lastEntered: () => Promise<DateTimeOutput>;
  role: <T = RolePromise>() => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  firstName: () => Promise<AsyncIterator<String>>;
  secondName: () => Promise<AsyncIterator<String>>;
  userName: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  blocked: () => Promise<AsyncIterator<Boolean>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  lastEntered: () => Promise<AsyncIterator<DateTimeOutput>>;
  role: <T = RoleSubscription>() => T;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  firstName: () => Promise<String>;
  secondName: () => Promise<String>;
  userName: () => Promise<String>;
  password: () => Promise<String>;
  blocked: () => Promise<Boolean>;
  createdAt: () => Promise<DateTimeOutput>;
  lastEntered: () => Promise<DateTimeOutput>;
  role: <T = RolePromise>() => T;
}

export interface RoleConnection {
  pageInfo: PageInfo;
  edges: RoleEdge[];
}

export interface RoleConnectionPromise
  extends Promise<RoleConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<RoleEdge>>() => T;
  aggregate: <T = AggregateRolePromise>() => T;
}

export interface RoleConnectionSubscription
  extends Promise<AsyncIterator<RoleConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<RoleEdgeSubscription>>>() => T;
  aggregate: <T = AggregateRoleSubscription>() => T;
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

export interface RoleEdge {
  node: Role;
  cursor: String;
}

export interface RoleEdgePromise extends Promise<RoleEdge>, Fragmentable {
  node: <T = RolePromise>() => T;
  cursor: () => Promise<String>;
}

export interface RoleEdgeSubscription
  extends Promise<AsyncIterator<RoleEdge>>,
    Fragmentable {
  node: <T = RoleSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateRole {
  count: Int;
}

export interface AggregateRolePromise
  extends Promise<AggregateRole>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateRoleSubscription
  extends Promise<AsyncIterator<AggregateRole>>,
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

export interface RoleSubscriptionPayload {
  mutation: MutationType;
  node: Role;
  updatedFields: String[];
  previousValues: RolePreviousValues;
}

export interface RoleSubscriptionPayloadPromise
  extends Promise<RoleSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = RolePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = RolePreviousValuesPromise>() => T;
}

export interface RoleSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<RoleSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = RoleSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = RolePreviousValuesSubscription>() => T;
}

export interface RolePreviousValues {
  id: ID_Output;
  name: String;
}

export interface RolePreviousValuesPromise
  extends Promise<RolePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface RolePreviousValuesSubscription
  extends Promise<AsyncIterator<RolePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
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
  firstName: String;
  secondName: String;
  userName: String;
  password: String;
  blocked: Boolean;
  createdAt: DateTimeOutput;
  lastEntered?: DateTimeOutput;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  firstName: () => Promise<String>;
  secondName: () => Promise<String>;
  userName: () => Promise<String>;
  password: () => Promise<String>;
  blocked: () => Promise<Boolean>;
  createdAt: () => Promise<DateTimeOutput>;
  lastEntered: () => Promise<DateTimeOutput>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  firstName: () => Promise<AsyncIterator<String>>;
  secondName: () => Promise<AsyncIterator<String>>;
  userName: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  blocked: () => Promise<AsyncIterator<Boolean>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  lastEntered: () => Promise<AsyncIterator<DateTimeOutput>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

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
    name: "Role",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
