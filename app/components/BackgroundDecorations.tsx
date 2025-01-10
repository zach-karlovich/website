const BackgroundDecoration = () => {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-nord8 opacity-10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-nord13 opacity-10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-nord15 opacity-10 rounded-full filter blur-3xl"></div>
      </div>
    )
  }
  
  export default BackgroundDecoration
  
  