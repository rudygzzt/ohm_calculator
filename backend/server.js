// server.js
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");
const { Op } = require("sequelize");

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + "/static"));

app.get("/bands", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  try {
    const { bandsColors } = req.query;

    const bandsData = await getBandsColorsData(bandsColors);

    const significantNumber1 = getBandDataByPosition(1, bandsData);
    const significantNumber2 = getBandDataByPosition(2, bandsData);
    const multiplier = getBandDataByPosition(3, bandsData);
    const tolerance = getBandDataByPosition(4, bandsData);

    const ohmVal = (significantNumber1 * 10 + significantNumber2) * multiplier;

    return res.send(ohmVal + " +/-" + tolerance * 100 + "%");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send(error);
  }
});

async function getBandsColorsData(bands) {
  const bandsColors = await db.Band.findAll({
    where: { color: { [Op.in]: bands.map((band) => band.color) } },
  });

  let bandFullInfo = bands.map((band) => {
    let fullBand = bandsColors.filter((bandDb) => bandDb.color === band.color);
    return { ...fullBand[0].dataValues, position: band.position };
  });

  return bandFullInfo;
}

function getBandDataByPosition(position, bandsData) {
  switch (position) {
    case 1:
      return bandsData.find((band) => band.position == position)
        .significantNumber;

    case 2:
      return bandsData.find((band) => band.position == position)
        .significantNumber;

    case 3:
      return bandsData.find((band) => band.position == position).multiplier;

    case 4:
      return bandsData.find((band) => band.position == position).tolerance;

    default:
      break;
  }
}

app.listen(3030, () => {
  console.log("Server is up on port 3030");
});

module.exports = { getBandsColorsData, getBandDataByPosition };
