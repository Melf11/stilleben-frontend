// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


export const environment = {
  production: false,
  api: 'http://0.0.0.0:8055',
  version: '1.0',
  google_api_key: 'AIzaSyDSerXQiZHW_ooG1IuTFEJFB14IEfstPjw',
  defaultLocale: 'de',
  defaultPage: {
    ROLE_USER: ['de/home'],
    ROLE_ADMIN: ['de/home'],
  },
  authRoute: '/auth',
  title: 'Stillleben.Media - Akustik, Audio & Web',
  meta: {
    url: 'https://www.stillleben.media',
    email: 'melf@stillleben.media',
    phone_number: '+4917663441306',
    latitude: '54.39589731277502',
    longitude: '9.81696857143651',
    'street-address': 'Dorfstraße 37a',
    locality: 'Haby',
    region: 'SH',
    'postal-code': '24361',
    'country-name': 'GERMANY',
    robots: 'index, follow',
    keywords: 'Audio, Akustik, Bau, Mixin, Mastering, Sound, Engineer, Toningenieur, Ton, Music, Musik, Studio, SH, Schleswig-Holstein, Schleswig, Holstein',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
