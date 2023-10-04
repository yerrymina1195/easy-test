import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BtnToggle from "./BtnToggle";
import Editor from "./Editor";
import IconNotification from "./IconNotification";
import example from "../images/cooffe.jpeg";
import example1 from "../images/code.jpeg";
import example2 from "../images/in.jpeg";
import example3 from "../images/inf.jpeg";
import example4 from "../images/hijab.jpeg";
import example5 from "../images/machine.jpeg";
import example6 from "../images/startup.jpeg";
import example7 from "../images/team.jpeg";
import example10 from "../images/wifi.jpeg";
import InputSearch from "./InputSearch";
import { HiViewColumns, HiTrash } from "react-icons/hi2";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { FaFilter } from "react-icons/fa";
import { IoMdArrowRoundDown } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../axios";
import Swal from "sweetalert2";
import axios from "axios";
const EditeBrand = (props) => {
  const dataTable = [
    {
      name: "Lorem ipsum dolor sit amet",
      brand: "Lorem ipsum dolor sit",
      date: "Jav 12, 2023",
      icon: <AiOutlineCheckCircle className="w-5 h-5 text-green-700" />,
      image: example,
      price: 452,
      sKU: 123456,
      quantity: 9,
      securityStock: 3,
    },
    {
      name: "Lorem ipsum dolor sit amet",
      brand: "Lorem ipsum dolor sit",
      date: "Nov 22, 2023",
      icon: <AiOutlineCheckCircle className="w-5 h-5 text-green-700" />,
      image: example1,
      price: 415,
      sKU: 123456,
      quantity: 9,
      securityStock: 3,
    },
    {
      name: "Lorem ipsum dolor sit amet",
      brand: "Lorem ipsum dolor sit",
      date: "Avr 5, 2023",
      icon: <AiOutlineCloseCircle className="w-5 h-5 text-red-700" />,
      image: example2,
      price: 157,
      sKU: 123456,
      quantity: 9,
      securityStock: 3,
    },
    {
      name: "Lorem ipsum dolor sit amet",
      brand: "Lorem ipsum dolor sit",
      date: "Dec 6, 2023",
      icon: <AiOutlineCheckCircle className="w-5 h-5 text-green-700" />,
      image: example3,
      price: 568,
      sKU: 123456,
      quantity: 9,
      securityStock: 3,
    },
    {
      name: "Lorem ipsum dolor sit amet",
      brand: "Lorem ipsum dolor sit",
      date: "Mai 7, 2023",
      icon: <AiOutlineCloseCircle className="w-5 h-5 text-red-700" />,
      image: example5,
      price: 345,
      sKU: 123456,
      quantity: 9,
      securityStock: 3,
    },
    {
      name: "Lorem ipsum dolor sit amet",
      brand: "Lorem ipsum dolor sit",
      date: "Jav 17, 2023",
      icon: <AiOutlineCloseCircle className="w-5 h-5 text-red-700" />,
      image: example4,
      price: 451,
      sKU: 123456,
      quantity: 9,
      securityStock: 3,
    },
    {
      name: "Lorem ipsum dolor sit amet",
      brand: "Lorem ipsum dolor sit",
      date: "Dec 6, 2023",
      icon: <AiOutlineCheckCircle className="w-5 h-5 text-green-700" />,
      image: example6,
      price: 956,
      sKU: 123456,
      quantity: 9,
      securityStock: 3,
    },
    {
      name: "Lorem ipsum dolor sit amet",
      brand: "Lorem ipsum dolor sit",
      date: "Mai 7, 2023",
      icon: <AiOutlineCloseCircle className="w-5 h-5 text-red-700" />,
      image: example7,
      price: 653,
      sKU: 123456,
      quantity: 9,
      securityStock: 3,
    },
    {
      name: "Lorem ipsum dolor sit amet",
      brand: "Lorem ipsum dolor sit",
      date: "Jav 17, 2023",
      icon: <AiOutlineCloseCircle className="w-5 h-5 text-red-700" />,
      image: example10,
      price: 230,
      sKU: 123456,
      quantity: 9,
      securityStock: 3,
    },
  ];
  const navigate = useNavigate();
  const { id } = useParams();
  const [nom, setNom] = useState("");
  const [slug, setSlug] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescrition] = useState("");
  const [visibility, setVisibility] = useState(false);
  const [validationError, setValidationError] = useState({});
  const [data, setData] = useState([]);
  const [monthCreated, setMonthCretead] = useState("");
  const [monthUpdated, setMonthUpdated] = useState("");
  useEffect(() => {
    fetchBrand();
  }, [id]);
  const fetchBrand = async () => {
    await axiosClient
      .get(`/brand/${id}`)
      .then(({ data }) => {
        const {
          nom,
          slug,
          url,
          description,
          visibility,
          created_at,
          updated_at,
        } = data.brand;
        setNom(nom),
          setUrl(url),
          setSlug(slug),
          setVisibility(visibility),
          setDescrition(description);
        setMonthCretead(created_at);
        setMonthUpdated(updated_at);
        setData(data.brand);
      })
      .catch(({ response: { data } }) => {
        Swal.fire({
          text: data.message,
          icon: "error",
        });
      });
  };
// difference created_up
  const mois = (monthCreated) => {
    const date = new Date(monthCreated);
    const dateActuelle = new Date();
    const differenceMonth = dateActuelle.getFullYear() - date.getFullYear();
    if (differenceMonth === 0) {
      return "moins d'un mois";
    } else if (differenceMonth === 1) {
      return "il y a 1 mois";
    } else {
      return `il y a ${differenceMonth} mois`;
    }
  };
// created up
  const dateMonthCreated = mois(monthCreated);
  const dateMonthUpdated = mois(monthUpdated);

  const updateBrand = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosClient.put(`/brand/${id}`, {
        nom: nom,
        url: url,
        slug: nom,
        visibility: visibility,
        description: description,
      });
      Swal.fire({
        icon: "success",
        text: response.data.message,
      });
      navigate("/brands");
    } catch (error) {
      console.log(error);
      console.log(error.response.data);
    }
  };
  const cancel = async (e) => {
    setNom(""), setUrl(""), setSlug(" "), setVisibility(""), setDescrition("");
    navigate("/brands");
  };
  const handleToggle = (e) => {
    setVisibility(!visibility);
  };

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

    await axiosClient
      .delete(`/brand/${id}`)
      .then(({ data }) => {
        Swal.fire({
          icon: "success",
          text: data.message,
        });
      })
      .catch(({ response: { data } }) => {
        Swal.fire({
          text: data.message,
          icon: "error",
        });
      });
  };

  return (
    <div className="md:m-5">
      <div className="grid grid-cols-2">
        <div className="">
          <p className="text-gray-500 md:text-base text-sm">
            Brand &#62; {data?.nom} &#62; Edit
          </p>
          <h2 className="text-3xl pt-2 font-bold">{data?.nom}</h2>
        </div>
        <div className="grid justify-items-end">
          <button
            onClick={deleteProduct}
            className="rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
          >
            Delete
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-3 md:gap-5">
        <div className="md:col-span-2">
          <form onSubmit={updateBrand}>
            <div className="bg-white border border-gray-200 my-5 md:p-5 p-2.5 rounded-2xl">
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="floating_first_name"
                    id="floating_first_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                    placeholder=" "
                    required
                    value={nom}
                    onChange={(event) => {
                      setNom(event.target.value);
                    }}
                  />
                  <label
                    htmlFor="floating_first_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Name
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    readOnly
                    name="slug"
                    id="slug"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                    placeholder=" "
                    disabled
                    value={nom}
                  />
                  <label
                    htmlFor="slug"
                    className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Slug
                  </label>
                </div>
              </div>
              <div className="grid md:grid-cols-1">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="parent"
                    id="parent"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                    placeholder=" "
                    required
                    value={url}
                    onChange={(event) => {
                      setUrl(event.target.value);
                    }}
                  />
                  <label
                    htmlFor="parent"
                    className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Parent
                  </label>
                </div>
                <div className="relative z-0 mb-6 group">
                  <BtnToggle
                    checked={visibility}
                    value={visibility}
                    handleClick={handleToggle}
                    onChange={(event) => {
                      setVisibility(event.target.value);
                    }}
                    name={"Visible to customers."}
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-1">
                <div className="relative z-0 w-full mb-12 group">
                  <Editor value={description} onChange={setDescrition} />
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <button
                type="submit"
                className="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm w-auto px-4 py-2 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
              >
                Save changes
              </button>
              <button
                type="submit"
                onClick={cancel}
                className=" bg-white border-2 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
        <div className="bg-white border border-gray-200 p-5 my-5 rounded-xl h-40">
          <div>
            <p className="font-medium">Created at</p>
            <p className="text-gray-600">{dateMonthCreated}</p>
          </div>
          <div className="mt-5">
            <p className="font-medium">Last modified at</p>
            <p className="text-gray-600">{dateMonthUpdated}</p>
          </div>
        </div>
      </div>
      {/* tableau */}
      <div className="relative border-2 my-5 bg-white rounded-2xl">
        <div className="flex items-center border-b-2 gap-3 justify-between p-4  dark:bg-gray-800">
          <h2 className="font-medium">Products</h2>
          <Link to="/customers/create">
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
        {/* <nav
          className="flex items-center justify-between p-5"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Showing{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              1-10
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              1000
            </span>
          </span>
          <ul className="inline-flex -space-x-px text-sm h-8">
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                5
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </a>
            </li>
          </ul>
        </nav> */}
      </div>
    </div>
  );
};

export default EditeBrand;
