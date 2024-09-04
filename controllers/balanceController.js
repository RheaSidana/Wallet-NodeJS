const { Moralis } = require("../config/moralis");

const getBalance = async (req, res) => {
  try {
    const { address, chain, toBlock } = req.query;
    let balance;

    if (toBlock) {
      balance = await Moralis.EvmApi.balance.getNativeBalance({
        address,
        chain,
        toBlock
      });
    } else {
      balance = await Moralis.EvmApi.balance.getNativeBalance({
        address,
        chain,
      });
    }

    const result = balance.raw;
    return res.status(200).json({ result });
  } catch (error) {
    console.error("Error fetching balance:", error);
    return res.status(400).json({ message: "Something went wrong" });
  }
};

module.exports = { getBalance };
