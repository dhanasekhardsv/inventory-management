import React, { useRef } from 'react';
import ImagePlaceholder from '../assets/images/ImagePlaceholder.png';
import Upload from '../assets/icons/UploadCloud.svg';
import UploadBlue from '../assets/icons/UploadCloud-Blue.svg';
import Delete from '../assets/icons/Delete.svg';

const ProductImageCard = ({ image, isPrimaryImage, addImage, deleteImage }) => {
    const fileInputRef = useRef(null);

    const handleImageClick = () => {
        fileInputRef.current.click();
    };
    const handleDelete = (id) => {
        deleteImage(id);
    }
    return (
        <>
            {
                image?.src ? (
                    <div className={`border-gray-200 border-solid border-thin relative rounded-md flex flex-col items-center ${isPrimaryImage ? '' : 'h-40'}`}>
                        <img src={image?.src} alt="Product" className="m-auto max-h-full max-w-full" />
                        <div className="absolute top-2 right-2 inline-flex gap-2">
                            <div className="bg-amber-100 p-2 rounded">
                                <img src={Upload} alt="Upload" className="h-4 cursor-pointer" />
                            </div>
                            <div className="bg-amber-100 p-2 rounded">
                                <img src={Delete} alt="Delete" className="h-4 cursor-pointer" onClick={() => handleDelete(image.id)} />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={`border-gray-200 border-solid border-thin relative rounded-md flex flex-col items-center justify-center bg-body ${isPrimaryImage ? 'px-7 py-14' : 'px-3 py-7 h-40'}`}>
                        <img src={ImagePlaceholder} alt="Default Img" />
                        <label htmlFor="" className="flex center-x-y gap-2 mt-6 cursor-pointer" onClick={handleImageClick}>
                            <input type="file" ref={fileInputRef} onChange={addImage} className="hidden" accept=".jpeg, .png" />
                            <img src={UploadBlue} alt="Upload" className="h-5" />
                            <span className="text-sm text-custom-primary">Upload Image</span>
                        </label>
                        {
                            isPrimaryImage && (
                                <>
                                    <label htmlFor="" className="text-gray-500 text-center text-sm mt-4">Upload a cover image for your product.</label>
                                    <p className="text-gray-400 text-center text-xs">
                                        File Format&nbsp;<span className="text-black">jpeg, png</span>&nbsp;Recommended Size&nbsp;<span className="text-black">600x600{" (1:1)"}</span>
                                    </p>
                                </>
                            )
                        }
                    </div>
                )
            }
        </>
    )
}

export default ProductImageCard