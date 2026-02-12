import express from 'express';
import upload from '../middlewares/multer.js';
import { uploadMedia } from '../controllers/uploadController.js';
import authUser from '../middlewares/authUser.js';
import authDoctor from '../middlewares/authDoctor.js';
import authAdmin from '../middlewares/authAdmin.js';

const uploadRouter = express.Router();

// Allow any authenticated user to upload
// You can create specific routes if you want stricter control, e.g., /upload/user, /upload/doctor
// For now, let's make a generic one that requires *some* valid token, or separate them.
// Given the simplicity, maybe just separate routes or a middleware that checks if *any* auth is present?
// Or just expose it for now and assume the frontend calls the right one?
// Let's create specific routes to be safe and use the correct middleware.

uploadRouter.post('/user', authUser, upload.single('file'), uploadMedia);
uploadRouter.post('/doctor', authDoctor, upload.single('file'), uploadMedia);
uploadRouter.post('/admin', authAdmin, upload.single('file'), uploadMedia);

export default uploadRouter;
