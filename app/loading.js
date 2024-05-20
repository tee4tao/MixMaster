const loading = () => {
    return (
      <div className="flex justify-center items-center w-screen h-screen fixed top-0 right-0">
        <span className="loading loading-ball loading-xs"></span>
        <span className="loading loading-ball loading-sm"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-lg"></span>
      </div>
    );
  };
  
  export default loading;