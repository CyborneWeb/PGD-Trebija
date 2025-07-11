import React from 'react'
import VehicleContainer from '../AboutPage/VehicleContainer'
import VehicleCard from '../AboutPage/VehicleCard'

const Vehicles = () => {
  return (
    <>
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6">Naša vozila</h2>
            <p className="mb-4">
            Naša vozila so ključnega pomena za učinkovito delovanje našega
            društva. Tukaj je nekaj naših glavnih vozil:
            </p>
            <VehicleContainer />
            <VehicleCard />
        </div>
    </>
  )
}

export default Vehicles