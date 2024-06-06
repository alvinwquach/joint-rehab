import { gql } from "@apollo/client";

const TESTIMONIAL_FRAGMENT = gql`
  fragment testimonial on Testimonial {
    image {
      asset {
        url
      }
    }
    name
    testimonial
  }
`;

export const GET_TESTIMONIALS = gql`
  ${TESTIMONIAL_FRAGMENT}

  query allTestimonials {
    allTestimonial {
      ...testimonial
    }
  }
`;

const SERVICE_FRAGMENT = gql`
  fragment service on Service {
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

export const GET_SERVICES = gql`
  ${SERVICE_FRAGMENT}

  query allServices {
    allService {
      ...service
    }
  }
`;

export const GET_SPECIFIC_SERVICE = gql`
  ${SERVICE_FRAGMENT}

  query specificService($slug: String!) {
    allService(where: { slug: { current: { eq: $slug } } }) {
      ...service
    }
  }
`;

const TEAM_FRAGMENT = gql`
  fragment team on Team {
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

export const GET_TEAMS = gql`
  ${TEAM_FRAGMENT}

  query allTeams {
    allTeam {
      ...team
    }
  }
`;

export const GET_SPECIFIC_TEAM = gql`
  ${TEAM_FRAGMENT}

  query specificTeam($team: String!) {
    allTeam(where: { team: { eq: $team } }) {
      ...team
    }
  }
`;

export const GET_ASHGROVE_MEDICAL_CENTER_LOCATION = gql`
  query ashgroveMedicalCenterLocation {
    allAshgroveMedicalCenterLocation {
      addresslinen
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
  }
`;

export const GET_MARKHAM_PLAZA_LOCATION = gql`
  query markhamPlazaLocation {
    allMarkhamPlazaLocation {
      addresslinen
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
  }
`;
