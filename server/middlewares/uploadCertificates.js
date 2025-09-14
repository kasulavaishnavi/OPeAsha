import multer from "multer";
import path from "path";

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (![".jpg", ".jpeg", ".png", ".pdf"].includes(ext)) {
      return cb(new Error("Only images and PDFs are allowed"), false);
    }
    cb(null, true);
  },
});

export default upload;
