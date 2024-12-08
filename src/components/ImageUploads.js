import React, { useEffect, useState } from 'react';
import ProductImageCard from './ProductImageCard';

const ImageUploads = () => {
    const [uploadedImages, setUploadedImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    const addImage = (e) => {
        const { files } = e.target;
        if (files[0]) {
            const imageObj = {
                id: files[0]?.lastModified?.toString().trim().concat(files[0]?.size.toString().trim()),
                src: URL.createObjectURL(files[0])
            };
            setUploadedImages(prev => [...prev, imageObj]);
        }
    }
    const deleteImage = (id) => {
        const updatedImages = uploadedImages.filter(img => img.id !== id);
        setUploadedImages(updatedImages);
    }

    useEffect(() => {
        setSelectedImage(uploadedImages[0] ? uploadedImages[0] : null);
    }, [uploadedImages]);
    
    return (
        <div className="grid gap-3">
            <label htmlFor="">Additional Images</label>
            <ProductImageCard image={selectedImage} isPrimaryImage={true} addImage={addImage} deleteImage={deleteImage} />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-5">
                {
                    uploadedImages.length > 0 && (
                        uploadedImages.map(img => <ProductImageCard key={img.id} image={img} isPrimaryImage={false} />)
                    )
                }
                <ProductImageCard image={null} isPrimaryImage={false} addImage={addImage} deleteImage={deleteImage} />
                <div className="border-gray-400 border-dashed border-thin relative rounded-md h-40"></div>
            </div>
        </div>
    )
}

export default ImageUploads