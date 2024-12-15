import multer from "multer";
import { v2 as cloudinary } from 'cloudinary'
import { CloudinaryStorage } from 'multer-storage-cloudinary'
import { type Request, Response } from "express";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads',
    format: async () => 'png',
    public_id: (req: Request, file: Express.Multer.File) => file.originalname.split('.')[0],
  } as Record<string, unknown>
});

export const upload = multer({ storage: storage });
