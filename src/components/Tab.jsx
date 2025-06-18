
const Tab = ({data, handle, active}) => {
  return (
    <div className="w-full flex justify-center px-3 lg:px-10">
        <div className="lg:max-w-screen-xl 2xl:max-w-screen-2xl w-full flex gap-2 lg:gap-5 mt-[-31px] md:mt-[-32px]">
            {
                data && data.map((item, index) => (
                    <button key={index} onClick={() => handle(item.id)} className={`border-b-4 ${active === item.id ? 'border-yellow-500 text-yellow-500' : 'border-white text-white'} font-medium text-sm md:text-lg px-3`}>
                        {item.name}
                    </button>
                ))
            }
        </div>
    </div>
  )
}

export default Tab