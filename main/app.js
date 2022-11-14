const isString = (input) => {
  if (typeof input !== "string" && !(input instanceof String)) return false;
  return true;
};

function addTokens(input, tokens) {
  if (!isString(input)) throw new TypeError("Invalid input");

  if (input.length < 6)
    throw new Error("Input should have at least 6 characters");

  for (const e of tokens) {
    if (!("tokenName" in e) || !isString(e.tokenName))
      throw new Error("Invalid array format");
  }

  if (!input.includes("...")) return input;

  for (const e of tokens) {
    input = input.replace("...", "${" + e.tokenName + "}");
  }

  return input;
}

const app = {
  addTokens: addTokens,
};

module.exports = app;
