import { Router } from "express";
import upload from "../middleware/multerCong.js";
import FileUploadController from "../controllers/FileUploadController.js";

const router = Router();

router.post(
  "/api/fileanalyse",
  upload.single("upfile"),
  FileUploadController.post
);

export default router;
