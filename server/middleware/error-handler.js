module.exports = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    console.error(error.message);

    ctx.status = 500;
    ctx.body = 'Sorry, something went wrong.';
  }
}
