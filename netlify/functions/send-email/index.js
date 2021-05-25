exports.handler = async function (event, context) {
  try {
    const data = JSON.parse(event.body);
    return {
      statusCode: 200,
      message: `You are ${data.username}, and you said "${data.message}"`,
    };
  } catch (err) {
    return {
      statusCode: 500,
      message: err.message,
    };
  }
};
