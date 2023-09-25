
import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../axios.js";
function Connexion() {
  const { setCurrentUser, setUserToken, setLoading } = useStateContext();
  const navitage = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ __html: "" });
  const onSubmit = (e) => {
    e.preventDefault();
    setError({ __html: "" });


    axiosClient
      .post("/login", {
        email,
        password,
 
      })
      .then(({ data }) => {
        setCurrentUser(data.user);
        setUserToken(data.token,data.user);
         setLoading(true)
      console.log(data)
      alert(`Bienvenu ${data.user.name}`)
      navitage('/dashbord', { replace: true })
      window.location.reload();
      })
      .catch((error) => {
        // const response= error.response;

        // if (response && response.status == 422) {
        //   alert(response.data.message)
        //   console.log(response);
        // }
        
        if (error.response) {
            const finalErrors = Object.values(error.response.data.message).reduce((accum, next) => [...accum, ...next], [])
            console.log(finalErrors)
            setError({__html: finalErrors.join('')})
          }
          // console.error(error)
      });
  };








  return (
    <>
    <div className="  h-[550px] flex justify-center content-center items-center ">
    <div className="flex  flex-1 flex-col sm:mx-auto sm:w-full sm:max-w-md items-center mt-5  bg-white  justify-center px-6 py-12 lg:px-8 rounded-lg border-2 border-slate-100">
       <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         <h3 className=" text-center text-1xl font-bold leading-9 tracking-tight text-gray-900">
           Filament Demo
         </h3>
         <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
           Sign in
         </h2>
         {error.__html && (<div className="bg-red-500 rounded py-2 px-3 text-white" dangerouslySetInnerHTML={error}>
      </div>)}
       </div>

       <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
         <form className="space-y-6" onSubmit={onSubmit} action="#" method="POST">
           <div>
             <div className="flex items-center justify-between">
               <label htmlFor="email" className="block ">
                 <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                   Email address
                 </span>
               </label>
             </div>
             <div className="mt-2">
               <input
                 id="email"
                 name="email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                 autoComplete="email"
                 required
                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
               />
             </div>
           </div>

           <div>
             <div className="flex items-center justify-between">
               <label htmlFor="password" className="block ">
                 <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                   Password
                 </span>
               </label>
             </div>
             <div className="mt-2">
               <input
                 id="password"
                 name="password"
                 type="password"
                 value={password}
                 onChange={e => setPassword(e.target.value)}
                 autoComplete="current-password"
                 required
                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 outline-none focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
               />
             </div>
           </div>

           <div>
             <button
               type="submit"
               className="flex w-full justify-center rounded-md bg-amber-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
             >
               Sign in
             </button>
           </div>
         </form>
         <h2 className=" mt-2 text-center">
        <Link
          to="/inscription"
          className="font-medium text-indigo-600  hover:text-indigo-500"
        >
          sign up for free
        </Link>
        </h2>
       </div>
     </div>
    </div>
   </>
  )
}

export default Connexion
