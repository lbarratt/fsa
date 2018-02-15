# FSA Hygiene Ratings

## Technology

- node
- koa
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

From the root directory of the app:

```
node
```

Then browse to `http://localhost:3000`

## Testing

To run the tests and linter:

```
npm test
npm run lint
```

## Technical notes & future considerations

This app is intentionally very basic. It uses the popular koa web server and it serves simple static page templates.

Some basic caching is done using an in memory cache for simplicity. Something like redis or memcached would be more appropriate for a production application.

Linting is performed with Standard, as it enforces a very narrow and simple set of standards to achieve consistency.

Testing is executed using jest, since it is a very simple and fully featured test framework making it easy to get up and running.

I have kept the styling simple. In a real world application it would be worth considering adding Sass as a preprocessor and properly structuring the code to follow ITCSS conventions.

This code has some of the foundations in place to carry the app forwards for future development, but has just enough in place to deliver the criteria without being difficult to adapt for future development.

## Criteria assumptions and auestions

- Should the rating appear in a specific order?
	- As the acceptance criteria does not explicitly specify the ordering of all possible rating values, I have left it unordered for now. This could be achieved quickly by specifying a map of ordered keys and iterating over them to return the rating values.

- Should percentages be whole numbers? Or decimals?
	- I went with 2 decimal places as some establishments were poorly represented in some authorities when rounded to the nearest whole number.