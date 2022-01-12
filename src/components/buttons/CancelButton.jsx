
export function CancelButton({ setShow, text }) {
  const handleClose = () => { setShow(0) }

  return (
    <button onClick={handleClose} className="btn w-full bg-red-500 hover:bg-red-600 text-white" type="reset">
      {text}
    </button>
  )
}
