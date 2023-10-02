import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BtnToggle from "./BtnToggle";
import Editor from "./Editor";
import axiosClient from "../axios";
import axios from "axios";
import Swal from "sweetalert2";
const EditeProduits = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  // useState
  const [nom, setNom] = useState("");
  const [description, setDescrition] = useState("");
  const [prix, setPrix] = useState(0);
  const [prixCompare, setPrixCompare] = useState(0);
  const [cost, setCost] = useState(0);
  const [sku, setSku] = useState(0);
  const [BarCode, setBarCode] = useState(0);
  const [quantite, setQuantite] = useState(0);
  const [securiteStock, setSecuriteStock] = useState(0);
  const [productReturn, setProductReturn] = useState(0);
  const [productShiped, setProductShiped] = useState(0);
  const [visibility, setVisibility] = useState(0);
  const [date, setDate] = useState("");
  const [brand, setBrand] = useState("");
  const [brandValue, setBrandValue] = useState([]);
  const [categorie, setCategorie] = useState("");
  const [categorieValue, setCategorieValue] = useState([]);
  const [image, setImage] = useState(null);
  const [validationError, setValidationError] = useState({});
  const [dataProduit, setDataProduit] = useState([]);
  // Créez des références pour le champ de fichier et l'image
  const fileInputRef = useRef(null);
  const imageRef = useRef(null);
  const handleFileChange = (e) => {
    const selectedImage = e.target.files[0]; // Récupère le premier fichier sélectionné
    setImage(selectedImage);
    // afficher l'image
    if (selectedImage) {
      // Utilisez createObjectURL pour obtenir l'URL de l'image
      const imageURL = URL.createObjectURL(selectedImage);

      // Mettez à jour la source de l'image
      imageRef.current.src = imageURL;
    }
  };
  useEffect(() => {
    // Mettre à jour imageRef avec la nouvelle valeur de image
    imageRef.current.src = image;
  }, [image]);
  const handleToggle = () => {
    setVisibility(!visibility);
  };
  const handleReturn = () => {
    setProductReturn(!productReturn);
  };
  const handleShiped = () => {
    setProductShiped(!productShiped);
  };
  // cancel
  const cancel = async (e) => {
    setNom(" ");
    setDescrition(" ");
    setPrix(" ");
    setPrixCompare(" ");
    setCost(" ");
    setSku(" ");
    setBarCode(" ");
    setQuantite(" ");
    setSecuriteStock(" ");
    setProductReturn(" ");
    setProductShiped(" ");
    setVisibility(" ");
    setDate(" ");
    setBrand(" ");
    setBrandValue(" ");
    setCategorie(" ");
    setImage(" ");
    navigate("/produits");
  };
  // recuperer les donnes brands
  useEffect(() => {
    fetchBrand();
  }, []);

  const fetchBrand = async () => {
    await axios.get(`http://localhost:8000/api/brand`).then(({ data }) => {
      setBrandValue(data);
    });
  };
  // recuperer donnees categories
  useEffect(() => {
    fetchCategory();
  }, []);
  const fetchCategory = async () => {
    await axios.get(`http://localhost:8000/api/categorie`).then(({ data }) => {
      setCategorieValue(data);
    });
  };
  // recuperer les donnes produits par id
  useEffect(() => {
    fetchProduit();
  }, []);
  const fetchProduit = async () => {
    await axiosClient.get(`/produit/${id}`).then(({ data }) => {
      const {
        nom,
        description,
        image,
        prix,
        compare_prix,
        cost,
        sku,
        barcode,
        quantity,
        security_stock,
        product_return,
        product_shiped,
        visibility,
        date,
        brand,
        category,
      } = data.product;
      setNom(nom);
      setDescrition(description);
      setPrix(prix);
      setPrixCompare(compare_prix);
      setCost(cost);
      setSku(sku);
      setBarCode(barcode);
      setQuantite(quantity);
      setSecuriteStock(security_stock);
      setProductReturn(product_return);
      setProductShiped(product_shiped);
      setVisibility(visibility);
      setDate(date);
      setBrand(brand);
      setCategorie(category);
      setImage(image);
      setDataProduit(data.product);
      console.log(data);
    });
  };
  //  mise a jour des donner produits dans la basses de donner
  const update = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:8000/api/produit/${id}`,
        {
          nom: nom,
          slug: nom,
          description: description,
          image: image,
          prix: prix,
          compare_prix: prixCompare,
          cost: cost,
          sku: sku,
          barcode: BarCode,
          quantity: quantite,
          security_stock: securiteStock,
          product_return: productReturn,
          product_shiped: productShiped,
          visibility: visibility,
          date: date,
          brand: brand,
          category: categorie,
        }
      );
      Swal.fire({
        icon: "success",
        text: response.data.message,
      });

      navigate("/produits");
    } catch (error) {
      console.log(error);
      console.log(error.response.data);
    }
  };
  // supprimer un produit
  const deleteProduct = async (e) => {
    e.preventDefault();
    const isConfirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      return result.isConfirmed;
    });

    if (!isConfirm) {
      return;
    }

    await axios
      .delete(`http://localhost:8000/api/produit/${id}`)
      .then(({ data }) => {
        Swal.fire({
          icon: "success",
          text: data.message,
        });
        navigate("/produits");
      })
      .catch(({ response: { data } }) => {
        Swal.fire({
          text: data.message,
          icon: "error",
        });
      });
  };
  return (
    <div className="container overflow-auto m-10 mx-auto">
      <div className="md:columns-2">
        <div className="">
          <p className="text-gray-500 md:text-base text-sm">
            <Link to={"/produits"}>Produits</Link>
            &#62; {dataProduit?.nom} &#62; Edit
          </p>
          <h2 className="text-3xl pt-2 font-bold">{dataProduit?.nom}</h2>
        </div>
        <div className="grid md:justify-items-end">
          <Link to="/produits">
            <button
              onClick={deleteProduct}
              className="rounded-md my-5 bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
            >
              Delete
            </button>
          </Link>
        </div>
      </div>
      <div className="grid md:grid-cols-3 md:gap-5">
        <div className="md:col-span-2">
          <form onSubmit={update}>
            {/* premier section */}
            <div className="bg-white border border-gray-200 p-5 mb-5 rounded-xl">
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                    placeholder=" "
                    required
                    value={nom}
                    onChange={(e) => {
                      setNom(e.target.value);
                    }}
                  />
                  <label
                    htmlFor="name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Name
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                    placeholder=" "
                    required
                    disabled
                    value={nom}
                  />
                  <label
                    htmlFor="email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    slug
                  </label>
                </div>
              </div>
              <div className="">
                <label htmlFor="">Description</label>
                <Editor value={description} onChange={setDescrition} />
              </div>
            </div>
            {/* deuxiéme section */}
            <div className="bg-white border border-gray-200 p-5 mb-5 rounded-xl">
              <h3 className="border-b border-gray-200 w-full mb-5 pb-2 font-bold">
                Images
              </h3>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="image"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span>
                      {/* or drag and drop */}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    id="image"
                    name="image"
                    accept="image/*"
                    type="file"
                    className=""
                  />
                </label>
              </div>
              <img
                ref={imageRef}
                src={image}
                id="image"
                className="flex w-full mx-auto pt-4"
                alt=""
              />
            </div>
            {/*  troisieme section */}
            <div className="bg-white border border-gray-200 p-5 mb-5 rounded-xl">
              <h3 className="border-b border-gray-200 w-full mb-5 pb-2 font-bold">
                Pricing
              </h3>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                    placeholder=" "
                    required
                    value={prix}
                    onChange={(e) => setPrix(e.target.value)}
                  />
                  <label
                    htmlFor="price"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Price
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="number"
                    name="Compare"
                    id="Compare"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                    placeholder=" "
                    required
                    value={prixCompare}
                    onChange={(e) => setPrixCompare(e.target.value)}
                  />
                  <label
                    htmlFor="Compare"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Compare at price
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="number"
                    name="Cost"
                    id="Cost"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                    placeholder=" "
                    required
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                  />
                  <label
                    htmlFor="Cost"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Cost per item
                  </label>
                  <p className="text-gray-400 text-sm pt-5">
                    Customers won't see this price.
                  </p>
                </div>
              </div>
            </div>
            {/* quatrieme section */}
            <div className="bg-white border border-gray-200 p-5 mb-5 rounded-xl">
              <h3 className="border-b border-gray-200 w-full mb-5 pb-2 font-bold">
                Inventory
              </h3>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="SKU"
                    id="SKU"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                    placeholder=" "
                    required
                    value={sku}
                    onChange={(e) => setSku(e.target.value)}
                  />
                  <label
                    htmlFor="SKU"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    SKU (Stock Keeping Unit)*
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="Barcode"
                    id="Barcode"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                    placeholder=" "
                    required
                    value={BarCode}
                    onChange={(e) => setBarCode(e.target.value)}
                  />
                  <label
                    htmlFor="Barcode"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Barcode (ISBN, UPC, GTIN, etc.)*
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="number"
                    name="Quantity"
                    id="Quantity"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                    placeholder=" "
                    required
                    value={quantite}
                    onChange={(e) => setQuantite(e.target.value)}
                  />
                  <label
                    htmlFor="Quantity"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Quantity*
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="number"
                    name="Security"
                    id="Security"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                    placeholder=" "
                    required
                    value={securiteStock}
                    onChange={(e) => setSecuriteStock(e.target.value)}
                  />
                  <label
                    htmlFor="Security"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Security stock*
                  </label>
                  <p className="text-gray-400 text-sm pt-5">
                    The safety stock is the limit stock for your products which
                    alerts you if the product stock will soon be out of stock.
                  </p>
                </div>
              </div>
            </div>
            {/* cinquieme section */}
            <div className="bg-white border border-gray-200 p-5 mb-5 rounded-xl">
              <h3 className="border-b border-gray-200 w-full mb-5 pb-2 font-bold">
                Shipping
              </h3>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="flex gap-3 items-center">
                  <input
                    id="return-checkbox"
                    type="checkbox"
                    checked={productReturn}
                    onChange={handleReturn}
                    onClick={handleReturn}
                    class="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 rounded focus:ring-amber-500 dark:focus:ring-amber-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />

                  <p>This product can be returned</p>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    id="shiped-checkbox"
                    type="checkbox"
                    checked={productShiped}
                    onChange={handleShiped}
                    onClick={handleShiped}
                    class="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 rounded focus:ring-amber-500 dark:focus:ring-amber-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />

                  <p>This product will be shipped</p>
                </div>
              </div>
            </div>
            {/* section right */}
            <div>
              <div className="bg-white border border-gray-200 p-5 mb-5 rounded-xl">
                <h3 className="border-b border-gray-200 w-full mb-5 pb-2 font-bold">
                  Status
                </h3>
                <BtnToggle
                  checked={visibility}
                  value={visibility}
                  handleClick={handleToggle}
                  onChange={(event) => {
                    setVisibility(event.target.value);
                  }}
                  name={"Visible"}
                />

                <p className="text-gray-500 text-sm">
                  This product will be hidden from all sales channels.
                </p>
                <h4 className="font-medium pt-5 text-sm">Availability*</h4>
                <div>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="bg-white border border-gray-200 p-5 mb-5 rounded-xl">
                <h3 className="border-b border-gray-200 w-full mb-5 pb-2 font-bold">
                  Status
                </h3>
                {/* Brand */}
                <div>
                  <label
                    for="brand"
                    class="block mb-2 text-sm font-medium text-gray-600 dark:text-white"
                  >
                    Brand
                  </label>
                  <select
                    id="brand"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                  >
                    {brandValue.map((option, index) => {
                      return <option key={index}>{option.nom}</option>;
                    })}
                  </select>
                </div>
                {/* categorie */}
                <div className="pt-5">
                  <label
                    for="categories"
                    class="block mb-2 text-sm font-medium text-gray-600 dark:text-white"
                  >
                    Categories
                  </label>
                  <select
                    id="brand"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
                    value={categorie}
                    onChange={(e) => setCategorie(e.target.value)}
                  >
                    {categorieValue.map((option, index) => {
                      return <option key={index}>{option.nom}</option>;
                    })}
                  </select>
                </div>
              </div>
            </div>
            {/* section button */}
            <div className="lg:col-span-2">
              {/* les Boutons */}
              <div className="md:flex grid grid-cols-3 gap-4">
                <button
                  type="submit"
                  className="text-white bg-amber-600 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg md:text-sm text-xs w-full sm:w-auto px-3 py-2 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
                >
                  Save changes
                </button>
                <button
                  type="submit"
                  className=" bg-white border-2 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-xs w-full md:text-sm sm:w-auto px-3 py-2 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
                  onClick={cancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* <div className="bg-white border border-gray-200 p-5 my-5 rounded-xl h-40">
          <div>
            <p className="font-medium">Created at</p>
            <p className="text-gray-600">{"props.dateCreate"}</p>
          </div>
          <div className="mt-5">
            <p className="font-medium">Last modified at</p>
            <p className="text-gray-600">{"props.dateEdite"}</p>
          </div>
        </div> */}
      </div>
      {/* tableau */}
      {/* <div className="relative border-2 my-5 bg-white rounded-2xl">
        <div className="flex items-center border-b-2 gap-3 justify-between p-4  dark:bg-gray-800">
          <h2 className="font-medium">Products</h2>
          <Link to="# ">
            <button className="rounded-md bg-amber-600 md:px-3 px-2 py-1 md:py-1.5 text-sm font-semibold  text-white shadow-sm hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400">
              New Products
            </button>
          </Link>
        </div>
        <div className="flex items-center border-b-2 gap-2 justify-end p-4  dark:bg-gray-800">
          <InputSearch />
          <IconNotification icon={<FaFilter />} number={0} />
          <button>
            <HiViewColumns className="text-gray-400 md:w-6 md:h-7 focus:ring-amber-600 focus:border-amber-600 rounded-lg" />
          </button>
        </div>
        <div className="overflow-x-auto relative ">
          <table className="w-full text-sm text-left table-auto text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 rounded focus:ring-amber-500 dark:focus:ring-amber-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex gap-2">
                    Image
                    <span>
                      <IoMdArrowRoundDown />
                    </span>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex gap-2">
                    Name{" "}
                    <span>
                      <IoMdArrowRoundDown />
                    </span>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex gap-2">
                    Brand{" "}
                    <span>
                      <IoMdArrowRoundDown />
                    </span>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex gap-2">
                    Visibility{" "}
                    <span>
                      <IoMdArrowRoundDown />
                    </span>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex gap-2">
                    Price
                    <span>
                      <IoMdArrowRoundDown />
                    </span>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex gap-2">
                    SKU
                    <span>
                      <IoMdArrowRoundDown />
                    </span>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex gap-2">
                    Quantity
                    <span>
                      <IoMdArrowRoundDown />
                    </span>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex gap-2">
                    Security stock
                    <span>
                      <IoMdArrowRoundDown />
                    </span>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex gap-2">
                    Updated Date{" "}
                    <span>
                      <IoMdArrowRoundDown />
                    </span>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {dataTable.map((data) => {
                return (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-amber-600"
                    key={data.id}
                  >
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 rounded focus:ring-amber-500 dark:focus:ring-amber-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td className="w-4 p-4">
                      <img src={data.image} alt={data.name} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{data.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {data.brand}
                    </td>
                    <td className="px-6 py-4">{data.icon}</td>
                    <td className="px-6 py-4">{data.price}</td>
                    <td className="px-6 py-4">{data.sKU}</td>
                    <td className="px-6 py-4">{data.quantity}</td>
                    <td className="px-6 py-4">{data.securityStock}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{data.date}</td>
                    <td className="px-6 py-4">
                      <button className=" gap-1 text-red-600 hover:text-red-800 justify-center items-center flex font-medium">
                        <HiTrash />
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
      </div> */}
    </div>
  );
};

export default EditeProduits;
