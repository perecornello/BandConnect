const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const announce = await tables.announce.readAll();
    res.json(announce);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const announce = await tables.announce.read(req.params.id);
    if (announce == null) {
      res.sendStatus(404);
    } else {
      res.json(announce);
    }
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  const announce = req.body;
  try {
    const insertId = await tables.announce.create(announce);

    res.status(201).json({ insertId });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.announce.delete(req.params.id);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  try {
    const announce = { ...req.body, id: Number(req.params.id) };
    await tables.announce.update(announce);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};
module.exports = { browse, read, add, destroy, edit };
