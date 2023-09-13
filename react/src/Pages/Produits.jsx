import React from 'react'

const Produits = () => {
  return (
    <div class="row bg-gray-200 max-h-screen" >
       <div className="col-8">
       <div class="grid grid-cols-6 gap-4">
            <div class="col-start-1 col-end-3 ...">
              <p class="text-4xl font-bold">Des produits</p>
            </div>
            <div class="col-end-7 col-span-2 ...">
            <button class="bg-orange-500 text-white font-bold py-2 px-4 rounded">
                 Nouveau Produit
            </button>
            </div>
        </div>
       <div class="col-span-1">
            <div class=" w-100 h-500 py-5 px-5 rounded-md border-gray-200 bg-white m-2">
                <p>Produits totaux <br/>
                 <span class="font-bold">52</span>
                 </p>
            </div>
            <div class="text-gray-400 py-5 px-5 rounded-md border-gray-200 bg-white m-2">
                <p>Produits totaux <br/>
                   <span class="font-bold">52</span>
                 </p>
            </div>
            <div class=" text-gray-400 py-5 px-5 rounded-md border-gray-200 bg-white m-2">
                <p>Produits totaux <br/>
                  <span class="font-bold">52</span>
                </p>
            </div>
        </div>
        <div>
            <table class="table-fixed">
                <thead>
                    <tr>
                        <th class="w-1/2 px-4 py-2">Title</th>
                        <th class="w-1/4 px-4 py-2">Author</th>
                        <th class="w-1/4 px-4 py-2">Views</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border px-4 py-2">Intro to CSS</td>
                        <td class="border px-4 py-2">Adam</td>
                        <td class="border px-4 py-2">858</td>
                    </tr>
                    <tr class="bg-gray-100">
                        <td class="border px-4 py-2">A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
                        <td class="border px-4 py-2">Adam</td>
                        <td class="border px-4 py-2">112</td>
                    </tr>
                    <tr>
                        <td class="border px-4 py-2">Intro to JavaScript</td>
                        <td class="border px-4 py-2">Chris</td>
                        <td class="border px-4 py-2">1,280</td>
                    </tr>
                </tbody>
            </table>
        </div>
       </div>
    </div>
  )
}

export default Produits
