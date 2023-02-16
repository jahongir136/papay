const MemberModel = require("../schema/member.model");
const Definer = require("../lib/mistake");
const { shapeIntoMongooseObjectId } = require("../lib/config");
const assert = require("assert");

class Restaurant {
  constructor() {
    this.memberModel = MemberModel;
  }
  async getAllRestaurantsData() {
    try {
      const result = await this.memberModel
        .find({
          mb_type: "RESTAURANT",
        })
        .exec();

      assert(result, Definer.general_err1);
      return result;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = Restaurant;
