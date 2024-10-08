const uuid = require("uuid");
const path = require("path");
const { Device, DeviceInfo } = require("../models/models");
const ApiError = require("../error/apiError");

class DeviceController {
  async create(req, res, next) {
    try {
      let { name, price, typeId, info, shortDescription, nameType } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".png";
      img.mv(path.resolve(__dirname, "..", "static", fileName));
      const device = await Device.create({
        name,
        price,
        typeId,
        shortDescription,
        nameType,
        img: fileName,
      });

      if (info) {
        info = JSON.parse(info);
        info.forEach((i) => {
          DeviceInfo.create({
            title: i.title,
            description: i.description,
            deviceId: device.id,
          });
        });
      }

      return res.json(device);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res) {
    let { typeId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 6;
    let offset = page * limit - limit;
    let devices;
    if (!typeId) {
      devices = await Device.findAndCountAll({ limit, offset });
    } else {
      devices = await Device.findAndCountAll({
        where: { typeId },
        limit,
        offset,
      });
    }
    return res.json(devices);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const device = await Device.findOne({
      where: { id },
      include: [{ model: DeviceInfo, as: "info" }],
    });
    return res.json({ device, info: device.info });
  }
}

module.exports = new DeviceController(); // Path: server/routes/index.js
