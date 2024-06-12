import fileUploadModel from "../models/fileUploadModel.js";

export default {
  post: async (req, res, next) => {
    try {
      if (!req.file) {
        return res.json({ message: "file has not uploaded." });
      }
      const { originalname, mimetype, path, size } = req.file;
      const fileUpload = new fileUploadModel({
        filename: originalname,
        type: mimetype,
        path: path,
        size: size,
      });
      await fileUpload.save();
      res.json({ name: originalname, type: mimetype, size: size });
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  },
};
