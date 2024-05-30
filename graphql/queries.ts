import { gql } from "@apollo/client";

const locationFieldsFragment = gql`
  fragment LocationFields on Location {
    _id
    name
    address
    addressline
    phone
    fax
    email
    sunday
    monday
    tuesday
    wednesday
    thursday
    friday
    saturday
  }
`;

const serviceFieldsFragment = gql`
  fragment ServiceFields on Service {
    image {
      asset {
        url
      }
    }
    name
    slug {
      current
    }
    descriptionRaw
  }
`;

const teamFieldsFragment = gql`
  fragment TeamFields on Team {
    image {
      asset {
        url
      }
    }
    name
    jobTitle
    team
    descriptionRaw
  }
`;

export const ashgroveMedicalCenterLocationQuery = gql`
  query GetAshgroveMedicalCenterLocation {
    ashgroveMedicalCenterLocation {
      ...LocationFields
    }
  }
  ${locationFieldsFragment}
`;

export const markhamPlazaLocationQuery = gql`
  query GetMarkhamPlazaLocation {
    markhamPlazaLocation {
      ...LocationFields
    }
  }
  ${locationFieldsFragment}
`;

export const serviceQuery = gql`
  query allServices {
    allServices {
      ...ServiceFields
    }
  }
  ${serviceFieldsFragment}
`;

export const teamsQuery = gql`
  query allTeams {
    allTeams {
      ...TeamFields
    }
  }
  ${teamFieldsFragment}
`;
