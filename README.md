# DevReportingService

Returns mock Reporting Service responses for IAS Dev environment. 

## Install

```
$ npm install 
```

## Usage

Start Server:

```
$ nodemon ./app.js localhost 3000
```

## API

This service will return mock data for team 3690, and all currently supported
[Publisher endpoints](https://util01.303net.net/confluence/display/ehr/Publisher+Endpoints).

## Customization

All mock responses added inside the 'responses/custom' directory will override the default responses setup by this server. To properly set this up, simply copy the 'teams' directory into the 'custom' directory, and customize your JSON responses as desired. These responses will now override the default responses setup by this server.

