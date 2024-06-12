import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = "./public/images";
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

export default upload;
