
export function SubmitButton({ onclick, text }) {
  return (
    <button className="btn w-full bg-blue-500 hover:bg-blue-600 text-white" type="submit">
      {text}
    </button>
  )
}
