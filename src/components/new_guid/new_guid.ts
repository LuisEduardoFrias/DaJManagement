import { Guid } from "js-guid";

export default function NewGuid(): string {
  return Guid.newGuid().StringGuid;
}
