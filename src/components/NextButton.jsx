function NextButton({ pagination, setPagination }) {
  return (
    <div className='d-flex align-items-center justify-content-between my-5'>
      {
        pagination === 1 
          ? <button className='btn btn-primary' disabled>
            Previous
          </button>
          : <button className='btn btn-primary' onClick={() => setPagination(pagination - 1)}>
            Previous
          </button>
      }

      <h5 className='text-white font-weight-bold'>Page {pagination}</h5>
      
      {
        pagination === 42
          ? <button className='btn btn-primary' disabled>
            Next
          </button>
          : <button className='btn btn-primary' onClick={() => setPagination(pagination + 1)}>
            Next
          </button>
      }
    </div>
  )
}

export default NextButton;