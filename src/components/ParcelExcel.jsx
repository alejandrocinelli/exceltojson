import React from 'react'
import { useState } from 'react'
import * as XLSX from 'xlsx'
import useData from '../hooks/useData'

const ParcelExcel = () => {

    const {data,setData} = useData()

 // const [data, setData] = useState()


const handlerFile = async (e) => {
    //console.log(e.target.files[0])
    const file = e.target.files[0]
    const data = await file.arrayBuffer()
    const workbook = XLSX.read(data)
    console.log(workbook)

    const worksheet = workbook.Sheets[workbook.SheetNames[0]]
    const jsonData = XLSX.utils.sheet_to_json(worksheet)
    console.log(jsonData)
    setData(jsonData)
}

  return (
    <div className='grid justify-items-center bg-indigo-500 w-full h-14 pt-3 shadow-2xl'>
    <input type="file" className='text-xs' onChange={(e) =>handlerFile(e) }/>
    </div>
    
  )
}
export default ParcelExcel