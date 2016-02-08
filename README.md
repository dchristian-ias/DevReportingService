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

This service will return mock data for team 3690, for all currently supported
[Publisher endpoints](https://util01.303net.net/confluence/display/ehr/Publisher+Endpoints).

## Customization

All mock responses added inside '~/rs-mock/responses' directory will override the default responses set by this server.

