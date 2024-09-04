const Moralis = require("moralis").default;

const startMoralis = async () => {
  try {
    await Moralis.start({
      apiKey: process.env.GET_BALANCE_API_KEY,
    });
    console.log("Moralis started successfully");
  } catch (error) {
    console.error("Failed to start Moralis:", error);
    process.exit(1);
  }
};

module.exports = { Moralis, startMoralis };
