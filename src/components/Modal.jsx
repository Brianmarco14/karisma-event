
const Modal = ({children, isOpen, handle}) => {
  return (
    <div className="fixed top-1/2 z-10">
        <div className="absolute top-0  w-screen h-[100vh] bg-gray-900/10"></div>
        <div className="bg-white p-5 z-20 rounded-xl max-w-lg w-full">
            {children}
        </div>
    </div>
  )
}

export default Modal