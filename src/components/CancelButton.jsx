import { useHistory } from "react-router-dom"

export function CancelButton({ setShow, text }) {
const history=useHistory()
  return (
    <button onClick={()=>{setShow(false)}} className="btn w-full bg-red-500 hover:bg-red-600 text-white" type="reset">
      {text}
    </button>
  )
}
