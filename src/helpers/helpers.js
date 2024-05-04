import { format } from "date-fns";

export const dateFormat = (date = Date.now()) => {
  return format(new Date(date), "yyyy");
};
