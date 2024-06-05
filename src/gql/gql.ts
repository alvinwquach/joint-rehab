/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment service on Service {\n  image {\n    asset {\n      url\n    }\n  }\n  name\n  slug {\n    current\n  }\n  descriptionRaw\n}\n\nquery allServices {\n  allService {\n    ...service\n  }\n}": types.ServiceFragmentDoc,
    "fragment team on Team {\n  image {\n    asset {\n      url\n    }\n  }\n  name\n  jobTitle\n  team\n  descriptionRaw\n}\n\nquery allTeams {\n  allTeam {\n    ...team\n  }\n}": types.TeamFragmentDoc,
    "query ashgroveMedicalCenterLocation {\n  allAshgroveMedicalCenterLocation {\n    addresslinen\n    phone\n    fax\n    email\n    sunday\n    monday\n    tuesday\n    wednesday\n    thursday\n    friday\n    saturday\n  }\n}": types.AshgroveMedicalCenterLocationDocument,
    "query markhamPlazaLocation {\n  allMarkhamPlazaLocation {\n    addresslinen\n    phone\n    fax\n    email\n    sunday\n    monday\n    tuesday\n    wednesday\n    thursday\n    friday\n    saturday\n  }\n}": types.MarkhamPlazaLocationDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment service on Service {\n  image {\n    asset {\n      url\n    }\n  }\n  name\n  slug {\n    current\n  }\n  descriptionRaw\n}\n\nquery allServices {\n  allService {\n    ...service\n  }\n}"): (typeof documents)["fragment service on Service {\n  image {\n    asset {\n      url\n    }\n  }\n  name\n  slug {\n    current\n  }\n  descriptionRaw\n}\n\nquery allServices {\n  allService {\n    ...service\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment team on Team {\n  image {\n    asset {\n      url\n    }\n  }\n  name\n  jobTitle\n  team\n  descriptionRaw\n}\n\nquery allTeams {\n  allTeam {\n    ...team\n  }\n}"): (typeof documents)["fragment team on Team {\n  image {\n    asset {\n      url\n    }\n  }\n  name\n  jobTitle\n  team\n  descriptionRaw\n}\n\nquery allTeams {\n  allTeam {\n    ...team\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ashgroveMedicalCenterLocation {\n  allAshgroveMedicalCenterLocation {\n    addresslinen\n    phone\n    fax\n    email\n    sunday\n    monday\n    tuesday\n    wednesday\n    thursday\n    friday\n    saturday\n  }\n}"): (typeof documents)["query ashgroveMedicalCenterLocation {\n  allAshgroveMedicalCenterLocation {\n    addresslinen\n    phone\n    fax\n    email\n    sunday\n    monday\n    tuesday\n    wednesday\n    thursday\n    friday\n    saturday\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query markhamPlazaLocation {\n  allMarkhamPlazaLocation {\n    addresslinen\n    phone\n    fax\n    email\n    sunday\n    monday\n    tuesday\n    wednesday\n    thursday\n    friday\n    saturday\n  }\n}"): (typeof documents)["query markhamPlazaLocation {\n  allMarkhamPlazaLocation {\n    addresslinen\n    phone\n    fax\n    email\n    sunday\n    monday\n    tuesday\n    wednesday\n    thursday\n    friday\n    saturday\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;