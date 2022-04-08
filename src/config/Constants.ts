import { subDays } from 'date-fns';

export const DRAWER_MENU_WIDTH = '250px';
export const PAYPAL_DONATE_LINK =
  'https://www.paypal.com/donate/?business=UF2GH7ZPMLES8&no_recurring=0&item_name=Chaque+don+me+permet+de+continuer+%C3%A0+d%C3%A9velopper+et+%C3%A0+am%C3%A9liorer+l%27application+Bujo+Tracker%2C+merci+%21+%3A%29&currency_code=EUR';

export const SEVEN_DAYS_AGO_DATE: Date = subDays(new Date(), 7);
export const SEVEN_DAYS_AGO_STRING: string = SEVEN_DAYS_AGO_DATE.toString();
export const TRACKERS_BEGIN_IN: Date = new Date(2000, 0);
