import React, { useContext, useEffect, useState } from 'react';
import CustomInput from '../../components/CustomInput';
import CustomDropdown from '../../components/CustomDropdown';
import CustomSwitch from '../../components/CustomSwitch';
import ImageUploads from '../../components/ImageUploads';
import { categoryOptions, orderTypes, discountTypes, fontTypes, contentTypes, newInventoryPaths } from '../../utils/services';
import Add from '../../assets/icons/plus-white.svg';
import DownArrow from '../../assets/icons/ArrowDown-white.svg';
import Bold from '../../assets/icons/Bold.svg';
import Underline from '../../assets/icons/Underline.svg';
import Italic from '../../assets/icons/Italic.svg';
import JustfyCenter from '../../assets/icons/Align-justify.svg';
import JustfyLeft from '../../assets/icons/Align-left.svg';
import JustifyRight from '../../assets/icons/Align-right.svg';
import Attach from '../../assets/icons/Attach.svg';
import { PathsContext } from '../../utils/PathsContext';

const NewInventory = () => {
    const { setPaths } = useContext(PathsContext);
    const [category, setCategory] = useState({ value: '', label: '' });
    const [orderType, setOrderType] = useState({ value: '', label: '' });
    const [discountType, setDiscountType] = useState({ value: '', label: '' });
    const [fontType, setFontType] = useState({ value: 'roboto', label: 'Roboto' });
    const [contentType, setContentType] = useState({ value: 'paragraph', label: 'Paragraph' });
    const [discountAdded, setDiscountAdded] = useState(false);
    const [expDateAdded, setExpDateAdded] = useState(false);
    const [returnPolicy, setReturnPolicy] = useState(false);

    const handleCategorySelection = (categoryVal) => {
        setCategory(categoryVal);
    }
    const handleOrderTypeSelection = (ordType) => {
        setOrderType(ordType);
    }
    const handleDiscountTypeSelection = (discType) => {
        setDiscountType(discType);
    }
    const handleFontTypeSelection = (ftType) => {
        setFontType(ftType);
    }
    const handleContentTypeSelection = (contType) => {
        setContentType(contType);
    }
    const handleDiscountSwitchChange = (event) => {
        const checked = event.target.checked;
        setDiscountAdded(checked);
    }
    const handleExpDateSwitchChange = (event) => {
        const checked = event.target.checked;
        setExpDateAdded(checked);
    }
    const handleReturnPolicySwitchChange = (event) => {
        const checked = event.target.checked;
        setReturnPolicy(checked);
    }

    useEffect(() => {
        setPaths(newInventoryPaths);
    }, [setPaths]);
    return (
        <div className="grid gap-3">
            <div className="grid sm:grid-cols-[auto_1fr] gap-3 justify-between center-y">
                <h3>New Inventory Item</h3>
                <div className="flex flex-col sm:flex-row justify-end gap-3">
                    <button type="button" className="dark-button flex center-x-y gap-1">
                        <span className="pr-3 border-r-thin border-gray-600 border-solid">Save as Draft</span>
                        <img src={DownArrow} alt="Down Arrow" className="inline-block h-5 w-auto" />
                    </button>
                    <button type="button" className="primary-button flex center-x-y gap-1" >
                        <img src={Add} alt="Add" className="inline-block h-5 w-auto" />
                        <span>Save & Publish</span>
                    </button>
                </div>
            </div>
            <div className="lg:grid grid-cols-3 gap-3">
                <div className="card p-3 bg-white col-span-2 grid md:grid-cols-2 gap-3">
                    <div className="flex flex-col gap-4">
                        <div>
                            <label htmlFor="" className="text-sm text-gray-700 mb-1 inline-block">Product Name</label>
                            <CustomInput />
                        </div>
                        <div className="w-full min-w-14">
                            <CustomDropdown selectedOption={category} handleOptionClick={handleCategorySelection} options={categoryOptions}
                                dropdownStyles="min-h-10 rounded-md border-0 bg-body text-gray-400 text-base py-2 px-4" placeholder="Select Product Category" />
                        </div>
                        <div className="grid sm:grid-cols-2 gap-3">
                            <CustomInput placeholder="Selling Price" />
                            <CustomInput placeholder="Cost Price" />
                        </div>
                        <div>
                            <CustomInput type="number" placeholder="Quantity in Stock" />
                        </div>
                        <div className="w-full min-w-14">
                            <CustomDropdown selectedOption={orderType} handleOptionClick={handleOrderTypeSelection} options={orderTypes}
                                dropdownStyles="min-h-10 rounded-md border-0 bg-body text-gray-400 text-base py-2 px-4" placeholder="Order Type" />
                        </div>
                        <div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Discount</span>
                                <label htmlFor="" className="flex gap-2 items-center text-gray-400">
                                    Add Discount
                                    <CustomSwitch isChecked={discountAdded} handleToggleSwitch={handleDiscountSwitchChange} />
                                </label>
                            </div>
                            {
                                discountAdded && (
                                    <div className="grid sm:grid-cols-2 gap-3 mt-4">
                                        <CustomDropdown selectedOption={discountType} handleOptionClick={handleDiscountTypeSelection} options={discountTypes}
                                            dropdownStyles="min-h-10 rounded-md border-0 bg-body text-gray-400 text-base py-2 px-4" placeholder="Discount Type" />
                                        <CustomInput placeholder="Value" />
                                    </div>
                                )
                            }
                        </div>
                        <div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Expiry Date</span>
                                <label htmlFor="" className="flex gap-2 items-center text-gray-400">
                                    Add Expiry Date
                                    <CustomSwitch isChecked={expDateAdded} handleToggleSwitch={handleExpDateSwitchChange} />
                                </label>
                            </div>
                            {
                                expDateAdded && (
                                    <div className="mt-4">
                                        <CustomInput type="date" placeholder="12/12/2020" />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div>
                            <textarea placeholder="Short Description" className="outline-0 py-2 px-4 min-h-32 bg-body text-gray-600 border-0 w-full rounded-md"></textarea>
                        </div>
                        <div>
                            <label htmlFor="" className="text-sm text-gray-700 mb-1 inline-block">Product Long Description</label>
                            <div className="bg-body rounded-md">
                                <div className="flex p-2 gap-2 flex-wrap items-center">
                                    <div className="w-fit ">
                                        <CustomDropdown selectedOption={fontType} handleOptionClick={handleFontTypeSelection} options={fontTypes}
                                            dropdownStyles="block w-full text-left min-h-6 py-1 pl-2 pr-5 rounded-md text-sm text-gray-400 border-thin border-solid border-gray-400"
                                            placeholder="Font Type" />
                                    </div>
                                    <div className="w-fit">
                                        <CustomDropdown selectedOption={contentType} handleOptionClick={handleContentTypeSelection} options={contentTypes}
                                            dropdownStyles="block w-full text-left min-h-6 py-1 pl-2 pr-5 rounded-md text-sm text-gray-400 border-thin border-solid border-gray-400"
                                            placeholder="Content Type" />
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <img src={Bold} alt="Bold" className="h-4 cursor-pointer" />
                                        <img src={Underline} alt="Underline" className="h-4 cursor-pointer" />
                                        <img src={Italic} alt="Italic" className="h-4 cursor-pointer" />
                                        <img src={JustfyCenter} alt="Center Align" className="h-4 cursor-pointer" />
                                        <img src={JustfyLeft} alt="Left Align" className="h-4 cursor-pointer" />
                                        <img src={JustifyRight} alt="Right Align" className="h-4 cursor-pointer" />
                                        <img src={Attach} alt="Attach" className="h-4 cursor-pointer" />
                                    </div>
                                </div>
                                <textarea placeholder="Your text goes here" className="outline-0 py-2 px-4 min-h-28 bg-body text-gray-600 border-0 w-full"></textarea>
                            </div>
                            <span htmlFor="" className="text-sm text-gray-400 inline-block">Add a long description for your product</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Return Policy</span>
                            <label htmlFor="" className="flex gap-2 items-center text-gray-400">
                                Add Discount
                                <CustomSwitch isChecked={returnPolicy} handleToggleSwitch={handleReturnPolicySwitchChange} />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="" className="text-sm text-gray-700 mb-1 inline-block">Date Added</label>
                            <div className="grid sm:grid-cols-2 gap-3">
                                <CustomInput type="date" placeholder="12/12/2020" />
                                <CustomInput type="time" placeholder="12:00 PM" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-white mt-3 lg:mt-0">
                    <ImageUploads />
                </div>
            </div>
        </div>
    )
}

export default NewInventory