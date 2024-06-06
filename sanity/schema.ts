import { type SchemaTypeDefinition } from "sanity";
import { ashgroveMedicalCenterLocation } from "./schemas/ashgroveMedicalCenterLocation";
import { markhamPlazaLocation } from "./schemas/markhamPlazaLocation";
import { service } from "./schemas/service";
import { team } from "./schemas/team";
import { testimonial } from "./schemas/testimonial";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    ashgroveMedicalCenterLocation,
    markhamPlazaLocation,
    service,
    team,
    testimonial,
  ],
};
