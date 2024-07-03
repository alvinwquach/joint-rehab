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
    "fragment service on Service {\n  image {\n    asset {\n      url\n    }\n  }\n  name\n  slug {\n    current\n  }\n  descriptionRaw\n}\n\nfragment serviceSlug on Service {\n  name\n  slug {\n    current\n  }\n}\n\nquery ServiceBySlug($slug: String!) {\n  allService(where: {slug: {current: {eq: $slug}}}) {\n    ...serviceSlug\n  }\n}\n\nquery allServices {\n  allService {\n    ...service\n  }\n}": types.ServiceFragmentDoc,
    "fragment team on Team {\n  image {\n    asset {\n      url\n    }\n  }\n  name\n  jobTitle\n  team\n  descriptionRaw\n}\n\nquery allTeams {\n  allTeam {\n    ...team\n  }\n}": types.TeamFragmentDoc,
    "fragment testimonial on Testimonial {\n  image {\n    asset {\n      url\n    }\n  }\n  name\n  testimonial\n}\n\nquery allTestimonials {\n  allTestimonial {\n    ...testimonial\n  }\n}": types.TestimonialFragmentDoc,
    "fragment ashgroveMedicalCenterLocation on AshgroveMedicalCenterLocation {\n  address\n  addresslinen\n  phone\n  fax\n  email\n  sunday\n  monday\n  tuesday\n  wednesday\n  thursday\n  friday\n  saturday\n}\n\nquery allAshgroveMedicalCenterLocations {\n  allAshgroveMedicalCenterLocation {\n    ...ashgroveMedicalCenterLocation\n  }\n}": types.AshgroveMedicalCenterLocationFragmentDoc,
    "fragment markhamPlazaLocation on MarkhamPlazaLocation {\n  address\n  addresslinen\n  phone\n  fax\n  email\n  sunday\n  monday\n  tuesday\n  wednesday\n  thursday\n  friday\n  saturday\n}\n\nquery allMarkhamPlazaLocations {\n  allMarkhamPlazaLocation {\n    ...markhamPlazaLocation\n  }\n}": types.MarkhamPlazaLocationFragmentDoc,
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
export function graphql(source: "fragment service on Service {\n  image {\n    asset {\n      url\n    }\n  }\n  name\n  slug {\n    current\n  }\n  descriptionRaw\n}\n\nfragment serviceSlug on Service {\n  name\n  slug {\n    current\n  }\n}\n\nquery ServiceBySlug($slug: String!) {\n  allService(where: {slug: {current: {eq: $slug}}}) {\n    ...serviceSlug\n  }\n}\n\nquery allServices {\n  allService {\n    ...service\n  }\n}"): (typeof documents)["fragment service on Service {\n  image {\n    asset {\n      url\n    }\n  }\n  name\n  slug {\n    current\n  }\n  descriptionRaw\n}\n\nfragment serviceSlug on Service {\n  name\n  slug {\n    current\n  }\n}\n\nquery ServiceBySlug($slug: String!) {\n  allService(where: {slug: {current: {eq: $slug}}}) {\n    ...serviceSlug\n  }\n}\n\nquery allServices {\n  allService {\n    ...service\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment team on Team {\n  image {\n    asset {\n      url\n    }\n  }\n  name\n  jobTitle\n  team\n  descriptionRaw\n}\n\nquery allTeams {\n  allTeam {\n    ...team\n  }\n}"): (typeof documents)["fragment team on Team {\n  image {\n    asset {\n      url\n    }\n  }\n  name\n  jobTitle\n  team\n  descriptionRaw\n}\n\nquery allTeams {\n  allTeam {\n    ...team\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment testimonial on Testimonial {\n  image {\n    asset {\n      url\n    }\n  }\n  name\n  testimonial\n}\n\nquery allTestimonials {\n  allTestimonial {\n    ...testimonial\n  }\n}"): (typeof documents)["fragment testimonial on Testimonial {\n  image {\n    asset {\n      url\n    }\n  }\n  name\n  testimonial\n}\n\nquery allTestimonials {\n  allTestimonial {\n    ...testimonial\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ashgroveMedicalCenterLocation on AshgroveMedicalCenterLocation {\n  address\n  addresslinen\n  phone\n  fax\n  email\n  sunday\n  monday\n  tuesday\n  wednesday\n  thursday\n  friday\n  saturday\n}\n\nquery allAshgroveMedicalCenterLocations {\n  allAshgroveMedicalCenterLocation {\n    ...ashgroveMedicalCenterLocation\n  }\n}"): (typeof documents)["fragment ashgroveMedicalCenterLocation on AshgroveMedicalCenterLocation {\n  address\n  addresslinen\n  phone\n  fax\n  email\n  sunday\n  monday\n  tuesday\n  wednesday\n  thursday\n  friday\n  saturday\n}\n\nquery allAshgroveMedicalCenterLocations {\n  allAshgroveMedicalCenterLocation {\n    ...ashgroveMedicalCenterLocation\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment markhamPlazaLocation on MarkhamPlazaLocation {\n  address\n  addresslinen\n  phone\n  fax\n  email\n  sunday\n  monday\n  tuesday\n  wednesday\n  thursday\n  friday\n  saturday\n}\n\nquery allMarkhamPlazaLocations {\n  allMarkhamPlazaLocation {\n    ...markhamPlazaLocation\n  }\n}"): (typeof documents)["fragment markhamPlazaLocation on MarkhamPlazaLocation {\n  address\n  addresslinen\n  phone\n  fax\n  email\n  sunday\n  monday\n  tuesday\n  wednesday\n  thursday\n  friday\n  saturday\n}\n\nquery allMarkhamPlazaLocations {\n  allMarkhamPlazaLocation {\n    ...markhamPlazaLocation\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;