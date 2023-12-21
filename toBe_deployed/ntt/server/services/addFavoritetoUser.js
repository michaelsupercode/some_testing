const { _getDB } = require("../db_access/_getDB");
const ObjectId = require("mongodb").ObjectId;

async function addFavorite(userObjId, productObjId) {
  const db = await _getDB();
  const userFavorite = await db.collection("users").updateOne(
    {
      _id: new ObjectId(userObjId),
    },
    { $push: { favorites: productObjId } }
  );
  return userFavorite;
}

module.exports = {
  addFavorite,
};
