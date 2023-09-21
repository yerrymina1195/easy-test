import React,{useState,useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import axiosClient from "../axios";

const EditeCustomers = () => {
  const {id}=useParams();
console.log(id);
  const [client, setClient] = useState(null);
  const [data, setData] = useState({
    nom: "",
    email: "",
    telephone: "",
    date_de_naissance:"",
  });
const [formattedDateDeCreation, setFormattedDateDeCreation] = useState("");
const [formattedDateDeMiseAJour, setFormattedDateDeMiseAJour] = useState("");

useEffect(() => {
  axiosClient.get(`/clients/${id}`)
    .then(response => {
      setClient(response.data);
      setData(response.data);
      
    })
    .catch(error => {
      console.error(error);
    });
    
}, [id]);



const { date_de_naissance:date, nom, email, telephone, } = data;
const handelchange = (e) => {
  setData({ ...data, [e.target.name]: e.target.value });
};
useEffect(() => {
  if (client) {
    const dateDeCreation = new Date(client.created_at);
    const formattedDateCreation = dateDeCreation.toLocaleString();

    const dateDeMiseAJour = new Date(client.updated_at);
    const formattedDateMiseAJour = dateDeMiseAJour.toLocaleString();

    setFormattedDateDeCreation(formattedDateCreation);
    setFormattedDateDeMiseAJour(formattedDateMiseAJour);
  }
}, [client]);
// const dateDeCreation = client ? new Date(client.created_at) : null;
//   const formattedDateDeCreation = dateDeCreation
//     ? dateDeCreation.toLocaleDateString() 
//     : "";

//   // Formater la date de mise à jour en utilisant la classe Date
//   const dateDeMiseAJour = client ? new Date(client.updated_at) : null;
//   const formattedDateDeMiseAJour = dateDeMiseAJour
//     ? dateDeMiseAJour.toLocaleDateString() 
//     : "";
console.log(client);
console.log(data);
const handleUpdate = async (e) => {
  e.preventDefault();

  try {

    await axiosClient.put(`/clients/${id}`, data);

  } catch (error) {
    console.error(error);
  }
};
const delateClient= async(e)=>{
  e.preventDefault();
  try {

    await axiosClient.delete(`/clients/${id}`);

  } catch (error) {
    console.error(error);
  }
};

  return (
    <div className="container m-10 mx-auto">
      <div className="grid grid-cols-2">
        <div className="">
          <p className="text-gray-500 md:text-base text-sm">
            <Link to={"/customers"}>Customers</Link>
            &#62; {client?.nom} &#62; Edit
          </p>
          <h2 className="text-3xl pt-2 font-bold">{client?.nom}</h2>
        </div>
        <div className="grid justify-items-end">
          <Link to="/categories/create">
            <button className="rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400" onClick={delateClient}>
              Delete
            </button>
          </Link>
        </div>
      </div>
      <div className="grid md:grid-cols-3 md:gap-5">
        <div className="md:col-span-2">
          <form onSubmit={handleUpdate} action="#" method="POST" >
            <div className="bg-white border border-gray-200 my-5 md:p-5 p-2.5 rounded-2xl">
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="nom"
                    id="nom"
                    value={nom}
                    onChange={handelchange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="nom"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Name
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={handelchange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email address
                  </label>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:my-5 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="tel"
                    pattern="[0-9]{9}"
                    name="telephone"
                    id="phone"
                    value={telephone}
                        onChange={handelchange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="phone"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone number
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="date"
                    id="date"
                    name="date_de_naissance"
                     value={date}
                    onChange={handelchange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="date"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Bithday
                  </label>
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
            <p className="text-gray-600">{formattedDateDeCreation}</p>
          </div>
          <div className="mt-5">
            <p className="font-medium">Last modified at</p>
            <p className="text-gray-600">{formattedDateDeMiseAJour}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditeCustomers;
