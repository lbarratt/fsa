const errorHandler = require('./error-handler')

test('errorHandler set the status to 500 and sends a basic error message when an error is thrown', () => {
  const ctx = {}
  const next = () => { throw new Error('boom') }

  errorHandler(ctx, next)

  expect(ctx.status).toBe(500)
  expect(ctx.body).toBe('Sorry, something went wrong.')
})
