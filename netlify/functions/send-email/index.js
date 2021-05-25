exports.handler = async function (event, context) {
  try {
    const data = JSON.parse(event.body);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `You are ${data.username}, and you said "${data.message}"`,
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: err.message,
      }),
    };
  }
};
