const accountSid = 'AC8f77f445e89ff299b5bec97472ec64da'
const authToken = 'f340eb3c6a5d0fef2e8fa19377ce91a6'
const client = require('twilio')(accountSid, authToken);

client.messages.create({
    to: '+19176209668',
    from: '+15407923784',
    body: 'Someone is working on your project.',
})
.then((message) => console.log(message.sid));
