class Auth {
    constructor() {
        this.booly = false;
    }

    static async loginFunction() {
        return new Promise((resolve, reject) => {
            let gapi = window.gapi;
            let CLIENT_ID =
                '467971129335-5qmjs9a8mcp9370e7qj8uc2a3p175sb9.apps.googleusercontent.com';
            let API_KEY = 'AIzaSyCr_5BVcdimHTMcZczxL_ScgvJVkCb9NeY';
            let DISCOVERY_DOCS = [
                'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'
            ];
            let SCOPES = 'https://www.googleapis.com/auth/calendar.events';
            gapi.load('client:auth2', () => {
                console.log('loaded auth');
                gapi.auth2.init({
                    clientId: CLIENT_ID,
                    apiKey: API_KEY,
                    discoveryDocs: DISCOVERY_DOCS,
                    scope: SCOPES
                });
                gapi.auth2
                    .getAuthInstance()
                    .signIn()
                    .then(() => {
                        console.log('Logged In, setting booly true');
                        Auth.booly = true;
                        resolve(true);
                    })
                    .catch((error) => {
                        reject(false);
                        console.log('Error: ' + error);
                        Auth.booly = false;
                    });
            });
        });
    }

    static async logoutFunction() {
        if (Auth.booly === true) {
            let gapi = window.gapi;
            let signOut = gapi.auth2.getAuthInstance();
            signOut.signOut().then(console.log('Signed out successfully'));
            Auth.booly = false;
        } else {
            console.log("Can't sign out if you never signed out");
        }
    }

    static async calendarFunction() {
        return new Promise((resolve, reject) => {
            if (this.booly === true) {
                let gapi = window.gapi;
                gapi.load('client:auth2', () => {
                    gapi.client.load('calendar', 'v3', () =>
                        gapi.client.calendar.events
                            .list({
                                calendarId: 'primary',
                                maxResults: 10
                            })
                            .then((response) => {
                                const events = response.result.items;
                                console.log('EVENTS: ', events);
                                resolve(events);
                            })
                    );
                });
            } else {
                reject("Calendar Call failed because the user isn't logged in");
            }
        });
    }

    static isLoggedInFunction() {
        let test = this.booly;
        if (test === true) {
            console.log('Booly is True');
            return true;
        } else {
            console.log('Booly is False!!');
            return false;
        }
    }

    // .then(() => {
    // gapi.client.load('calendar', 'v3', () => console.log('bam!'))
    // gapi.auth2.getAuthInstance().signIn()
    //     .then(() => {
    //         gapi.client.calendar.events.list({
    //             'calendarId': 'primary',
    //             'timeMin': (new Date()).toISOString(),
    //             'showDeleted': false,
    //             'singleEvents': true,
    //             'maxResults': 10,
    //             'orderBy': 'startTime'
    //         }).then(response => {
    //             const events = response.result.items
    //             console.log('EVENTS: ', events)
    //         })

    //     })
    // })

    /* gapi.client.load('calendar', 'v3', () => console.log('bam!'))

    gapi.auth2.getAuthInstance().signIn()
        .then(() => {
            gapi.client.calendar.events.list({
                'calendarId': 'primary',
                'timeMin': (new Date()).toISOString(),
                'showDeleted': false,
                'singleEvents': true,
                'maxResults': 10,
                'orderBy': 'startTime'
            }).then(response => {
                const events = response.result.items
                console.log('EVENTS: ', events)
                console.log("Triggered from AuthService.jsx")
            })


        })

    if (gapi.auth2.getAuthInstance().isSignedIn.get() == true) {
        console.log("You're return true")
    } else {
        console.log("You're false")
    }


}) */
}

export default Auth;
