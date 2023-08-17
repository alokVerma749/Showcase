'use client'
export const revalidate = 0
import Card from "@/app/components/Card"
import { TAGS } from "@/utils/mockdata"
import { useEffect, useState } from "react"
import AddNewProject from "./components/AddNewProject";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [isFormVisible, setIsFormVisible] = useState(false)

  const filter = (tag) => {
    if (tag == "All") {
      return setFilteredData(data)
    }
    const filteredResults = data.filter((data) => data.tags.includes(tag.toLowerCase()))
    setFilteredData(filteredResults);
  }

  const handleFloatingButtonClick = () => {
    if (isFormVisible) {
      setIsFormVisible(false)
    } else {
      setIsFormVisible(true)
    }
  }

  const user = useSelector(store => store.user.user);


  useEffect(() => {
    fetchAllProjects()
  }, [])

  const fetchAllProjects = async () => {
    try {
      const res = await axios.get('/api/users/project')
      setData(res.data.data);
      setFilteredData(res.data.data)
    } catch (error) {
      setFilteredData([])
      console.error(error.message)
    }
  }
  return (
    <main className="hero p-5">
      <div className="hero flex flex-row justify-around mb-5">
        <div className="left w-1/2 border border-red-500 h-96">Text</div>
        <div className="right w-1/2 border border-red-500 h-96">img</div>
      </div>

      <section className="projects">
        <div className="project_container">
          {/* Floating Button */}
          {
            (user.isLoggedIn) && <button
              className="fixed bottom-5 right-5 bg-blue-500 p-4 text-white rounded-full shadow-lg"
              onClick={handleFloatingButtonClick}
            >
              Add Project
            </button>
          }
          {
            isFormVisible && <AddNewProject />
          }
          <p className="text-center text-3xl font-semibold m-3">Top Showcase</p>

          <div className="filter_btns mb-3 flex flex-row justify-around scroll-smooth snap-mandatory snap-x snap-center overflow-auto max-w-full space-x-3 ">
            {
              TAGS.map((tag, index) => {
                return <button key={index} onClick={() => filter(tag)} className="bg-slate-400 text-white p-2 text-sm font-medium rounded-xl">{tag}</button>
              })
            }
          </div>
          <div className="cards flex flex-wrap flex-row">
            {

              filteredData.length > 0 ? filteredData.map((data) => <Card key={data._id} data={data} />) : <p className='mx-auto text-xl m-3'>Empty</p>
            }
          </div>
        </div>
      </section>
    </main >
  )
}
