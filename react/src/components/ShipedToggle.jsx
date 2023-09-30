import React from 'react'

function ShipedToggle({  checkedshiped,valueReturn, valueShiped,checkedReturn, handleShiped,handleReturn,onChangeReturn,onChangeShiped }) {
  return (
    <div className="bg-white border border-gray-200 p-5 mb-5 rounded-xl">
    <h3 className="border-b border-gray-200 w-full mb-5 pb-2 font-bold">
      Shipping
    </h3>
    <div className="grid md:grid-cols-2 md:gap-6">
      <div className="flex gap-3 items-center">
        <input
          id="link-checkbox"
          type="checkbox"
          checked={checkedReturn}
          value={valueReturn}
          onClick={handleReturn}
          onChange={onChangeReturn}
          class="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 rounded focus:ring-amber-500 dark:focus:ring-amber-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />

        <p>This product can be returned</p>
      </div>
      <div className="flex gap-3 items-center">
        <input
          id="link-checkbox"
          type="checkbox"
          checked={checkedshiped}
          value={valueShiped}
          onClick={handleShiped}
          onChange={onChangeShiped}
          class="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 rounded focus:ring-amber-500 dark:focus:ring-amber-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />

        <p>This product will be shipped</p>
      </div>
    </div>
  </div>
  )
}

export default ShipedToggle