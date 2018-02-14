# FSA Hygiene Ratings

## Technology

- node
- express
- jest

## Setup

Requirements:

- Node v9.4.0+

Setup on OS X:

```
brew install node
npm install
```

## Running the app

`node`

Then browse to `http://localhost:3000`

## Code Quality

`npm run lint`

## Testing

`npm test`

## Notes

This app is intentionally very basic. It uses the popular express web server and simple static page templates.

Some basic caching is done using an in memory cache for simplicity. Something like redis or memcached would be more appropriate for a production application.

Linting is performed with Standard, as it enforces a very narrow and simple set of standards to achieve consistency.

Testing is executed using jest, since it is a very simple and fully featured test framework making it easy to get up and running.

