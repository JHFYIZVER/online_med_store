const { BasketDevice, Device } = require("../models/models");
const ApiError = require("../error/apiError");

class BasketController {
  async create(req, res, next) {
    try {
      let { deviceId, basketId } = req.body;
      const basketDevice = await BasketDevice.create({
        deviceId,
        basketId,
        count: 1,
      });
      return res.json(basketDevice);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res, next) {
    try {
      const { basketId } = req.query;
      const basketDevices = await BasketDevice.findAll({
        where: { basketId },
        include: { model: Device },
      });
      return res.json(basketDevices);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async update(req, res, next) {
    try {
      const { id, count } = req.body;
      const basketDevice = await BasketDevice.findOne({
        where: { id },
      });
      if (!basketDevice) {
        return next(ApiError.badRequest("Девайс не найден"));
      } else {
        await BasketDevice.update({ count }, { where: { id } });
        return res.json("Количество товара в корзине обновлено");
      }
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.query;
      if (!id) {
        return next(ApiError.badRequest("ID не найден"));
      }
      await BasketDevice.destroy({
        where: { id },
      });
      return res.json("Товар удален из корзины");
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new BasketController();
