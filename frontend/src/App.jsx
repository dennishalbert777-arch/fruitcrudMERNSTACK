import { useState,useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'

function App() {
  const [data, setdata] = useState({id:"",name:"",price:"",unit:""})
    const [fruit, setfruit] = useState([])
 const [page, setpage] = useState("list")

  useEffect(()=>
  {
    fetch("http://localhost:4000/fruits")
    .then((res)=>res.json())
    .then((data)=>setfruit(data))
  })

   function handlechange(e)
  {
    const{name,value}=e.target

    setdata((prev)=>({
      ...prev,[name]:value
  }))
}

function handlesubmit(e)
  {
     e.preventDefault()

     const formdata=new FormData()
     formdata.append("name",data.name)
     formdata.append("price",data.price)
     formdata.append("unit",data.unit)
  

     if(!data.id)
     {
      fetch("http://localhost:4000/fruits/register",{
        method:"POST",
        body:formdata
      })
     }
     else
     {
       fetch(`http://localhost:4000/fruits/${data.id}`,{
        method:"PUT",
        body:formdata
      })
     }

     setdata({
      name:"",
      price:"",
      unit:""
    
     })
   
      setpage("list")

  }

  
  function handledelete(id)
  
  {
    console.log(id)
    fetch(`http://localhost:4000/fruits/${id}`,{
      method:"DELETE"
    })

 
  }

  

  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col-12 text-center my-5'>
          <h1 className='text-success'>fruit Details</h1>
          <button className='btn btn-primary mx-3 px-5 my-3' onClick={() => setpage("list")}>list</button>
          <button className='btn btn-warning px-5' onClick={() => setpage("add")}>add</button>
        

        </div>
        

      </div>

    </div>

    {page === "add" && (
  <div className='container my-3'>
    <div className='row'>
      <div className='col-12'>

        <span className='h1 text-success'>Add Fruit</span>

        <form onSubmit={handlesubmit}>

          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={data.name}
            className='form-control'
            onChange={handlechange}
          />

          <label>Price:</label>
          <input
            type="text"
            name="price"
            value={data.price}
            className='form-control'
            onChange={handlechange}
          />

          <label>Unit:</label>
          <input
            type="text"
            name="unit"
            value={data.unit}
            className='form-control'
            onChange={handlechange}
          />

          <button className='btn btn-primary my-3'>
            submit
          </button>

        </form>

      </div>
    </div>
  </div>
)}

    {page === "list" && (
  <div className='container'>
    <div className='row'>
      <div className='col-12'>

        <table className='table table-bordered'>

          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>unit</th>
              <th>total price</th>
              <th>action</th>
            </tr>
          </thead>

          <tbody>
            {fruit.map((students) => (
              <tr key={students.id}>
                <td>{students.id}</td>
                <td>{students.name}</td>
                <td>{students.price}</td>
                <td>{students.unit}</td>

                <td>
                  {Number(students.unit) * Number(students.price)}
                </td>

                <td>
                  <button
                    className='btn btn-danger'
                    onClick={() => handledelete(students.id)}
                  >
                    delete
                  </button>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  </div>
)}
    </>
  )
}

export default App
