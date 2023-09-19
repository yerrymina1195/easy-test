import Editor from "../components/Editor";
import BtnToggle from "../components/BtnToggle";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const CategoriesCreate = () => {
  const [nom, setNom] = useState("");
  const [slug, setSlug] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescrition] = useState("");
  const [visibility, setVisibility] = useState(false);
  const [validationError, setValidationError] = useState({});
  const navigate = useNavigate();

  const create = async (e) => {
    e.preventDefault();

    await axios
      .post(`http://localhost:8000/api/categorie`, {
        nom: nom,
        url: url,
        slug: slug,
        visibility: visibility,
        description: description,
      })
      .then(({ data }) => {
        Swal.fire({
          icon: "success",
          text: data.message,
        });
        navigate("/categories");
      })
      .catch(({ response }) => {
        if (response.status === 422) {
          setValidationError(response.data.errors);
        } else {
          Swal.fire({
            text: response.data.message,
            icon: "error",
          });
        }
      });
  };
  const cancel = async (e) => {
    setNom(""), setUrl(""), setSlug(" "), setVisibility(""), setDescrition("");
    navigate("/categories");
  };

  return (
    <div className="container m-10 mx-auto">
      <div className="columns-1 m-5">
        <div className="grid justify-items-start">
          <p className="">Category &#62; create</p>
          <h2 className="text-2xl py-3 font-bold">Create Category</h2>
        </div>
      </div>
      <div className="m-5">
        <form onSubmit={create}>
          <div className="bg-white p-5 my-5 rounded-2xl">
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                  placeholder=" "
                  required
                  value={nom}
                  onChange={(event) => {
                    setNom(event.target.value);
                  }}
                />
                <label
                  for="floating_first_name"
                  class="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Name
                </label>
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="slug"
                  id="slug"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                  placeholder=" "
                  required
                  value={slug}
                  onChange={(event) => {
                    setSlug(event.target.value);
                  }}
                />
                <label
                  for="slug"
                  class="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Slug
                </label>
              </div>
            </div>
            <div class="grid md:grid-cols-1">
              <div class="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="website"
                  id="website"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                  placeholder=" "
                  required
                  value={url}
                  onChange={(event) => {
                    setUrl(event.target.value);
                  }}
                />
                <label
                  for="parent"
                  class="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Website
                </label>
              </div>
              <div class="relative z-0 mb-6 group">
                <BtnToggle name={"Visible to customers."} />
              </div>
            </div>
            <div class="grid md:grid-cols-1">
              <div
                class="relative z-0 w-full mb-12 group"
                value={description}
                onChange={(event) => {
                  setDescrition(event.target.value);
                }}
              >
                <Editor  value={description}
                onChange={(event) => {
                  setDescrition(event.target.value);
                }} />
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <button
              type="submit"
              class="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
            >
              Create
            </button>
            <button
              type="submit"
              class=" border-2 bg-white focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
            >
              Create & create another
            </button>
            <button
              type="submit"
              class=" bg-white border-2 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
              onClick={cancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoriesCreate;
