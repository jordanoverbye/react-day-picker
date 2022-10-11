import format from 'date-fns/format';

import { DayLabel } from 'types/Labels';

/**
 * The default ARIA label for the day button.
 */
export const labelDay: DayLabel = (day, activeModifiers, options): string => {
  return format(day, 'do MMMM yyyy (EEEE)', options);
};
