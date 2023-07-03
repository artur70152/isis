import Sign from "../models/signs";

class ProviderController {
  async index(req, res) {
    const users = await Sign.findAll({
      attributes: ['id', 'datai', 'dataf', 'signo'],
    });

    return res.json(users);
  }
}

export default new ProviderController();