// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyAXgRU12pYZ7tzsx7BoiaFmT0gWAh0VERU',
    authDomain: 'tiendita-93848.firebaseapp.com',
    databaseURL: 'https://tiendita-93848.firebaseio.com',
    projectId: 'tiendita-93848',
    storageBucket: 'tiendita-93848.appspot.com',
    messagingSenderId: '398691519887',
    appId: '1:398691519887:web:37fb25dcfc603271044ffa',
    measurementId: 'G-VV09EQWY0V'
  }
};

export const snapshotToArray = snapshot => {
  const array = [];
  snapshot.forEach( element => {
    const item = element.val();
    item.key = element.key.toString();
    array.push(item);
  });

  return array;
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
