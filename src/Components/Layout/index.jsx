function Layout({ children }) {

  return (
      <div className='flex flex-col items-center mt-14 pt-3'>
        {children}
      </div>
    )
  }

export { Layout }