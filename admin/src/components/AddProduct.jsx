import { useState } from 'react'
import "./Css/AddProduct.css"
import upload_area from "../assets/upload_area.svg"
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
    navigation = useNavigate()
    const [image, setImage] = useState(false)
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "women",
        old_price: "",
        new_price: ""
    })

    const imageHandler = (e) => {
        setImage(e.target.files[0])
    }
    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value })
    }

    const Add_product = async () => {
        const Host = "hhttps://e-commerce-backend-aslv.onrender.com";
        let responseData;
        let product = productDetails;
        let formdata = new FormData()
        formdata.append("product", image)
        await fetch(`${Host}/upload`, {
            method: "POST",
            headers: {
                Accept: "application/json",
            },
            body: formdata,
        }).then((res) => res.json()).then((data) => { responseData = data })
        if (responseData?.success) {
            product.image = responseData.image_url;
            console.log(product);

            await fetch(`${Host}/addproduct`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(product),
            }).then((res) => res.json()).then((data) => {

                toast.success(data.success ? "Product added " : "Failed", { autoClose: 1000 })
                navigation("/listproduct")
            })
        }
    }

    const HandleSubmit = (e) => {
        e.preventDefault()
        setProductDetails({
            name: "",
            image: "",
            category: "women",
            old_price: "",
            new_price: ""
        })
        setImage(false)
    }
    return (
        <form onSubmit={HandleSubmit}>
            <div className='addproduct'>
                <div className="addproduct-itemfeild">
                    <p>Product Title</p>
                    <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='type here..' />
                </div>
                <div className="addproduct-price">
                    <div className="addproduct-itemfeild">
                        <p>Price</p>
                        <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='type here' />
                    </div>
                    <div className="addproduct-itemfeild">
                        <p> Offer Price</p>
                        <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='type here' />
                    </div>
                </div>
                <div className="addproduct-itemfeild">
                    <p>Product category</p>
                    <select value={productDetails.category} onChange={changeHandler} name="category" className='addproduct-category'>
                        <option value="women">Women</option>
                        <option value="men">Men</option>
                        <option value="kid">Kid</option>
                    </select>
                </div>
                <div className="addproduct-itemfeild">
                    <label htmlFor="file-input">
                        <img src={image ? URL.createObjectURL(image) : upload_area} className='addproduct-img' alt="" />
                    </label>
                    <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
                </div>
                <button onClick={() => { Add_product() }} className="addproduct-btn">Add</button>
            </div>
        </form>
    )
}

export default AddProduct
