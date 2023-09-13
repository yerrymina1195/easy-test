import React from 'react'

const Produits = () => {
  return (
    <div>
       <div>
           <div>
              <h3>Des Produits</h3>
           </div>
           <div>
              <button>Nouveau produit</button>
           </div>
       </div>
        <div class="flex bg-gray-200">
            <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                Short
            </div>
            <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                Medium length
            </div>
            <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                Significantly larger amount of content
            </div>
        </div>
    </div>
  )
}

export default Produits
