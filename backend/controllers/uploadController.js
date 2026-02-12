import { v2 as cloudinary } from 'cloudinary';

const uploadMedia = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, message: "No file uploaded" });
        }

        // Upload to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path, {
            resource_type: "auto",
        });

        res.json({
            success: true,
            message: "File uploaded successfully",
            url: result.secure_url,
            public_id: result.public_id
        });

    } catch (error) {
        console.error("Upload Error:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

export { uploadMedia };
