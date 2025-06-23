
const FormEmbed = ({ data }) => {
  console.log(data);
  
  return (
    <div className="w-full h-[90vh] bg-[#F0EBF8] ">
      <iframe src={data?.url} className="grow h-[100vh] w-full pb-32" title="PDF Viewer"></iframe>
    </div>
  )
}

export default FormEmbed