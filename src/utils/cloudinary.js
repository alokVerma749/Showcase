import cloudinary from "cloudinary"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const uploads = (file, folder) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(
            file,
            (result) => {
                if (result.resource_type === 'image') {
                    resolve({
                        public_id: result.public_id,
                    })
                } else {
                    reject(new Error('Unsupported file type'));
                }
            },
            {
                resource_type: '',
                folder: folder,
            }
        )
    })
}
export { uploads, cloudinary }