import { format } from "date-fns";

export function sortDates(postA, postB) {
  const a = new Date(postA.frontmatter.date);
  const b = new Date(postB.frontmatter.date);
  return b - a;
}

export function humanizeDate(date) {
  return format(new Date(date), "do  MMMM yyyy");
}
