

const Header = () => {
 

  return (
    <>
    <div className='header'>
        
        <h1>News Task</h1>
        <input type='text'onChange={((event)=>{
console.log(event.target.value);

        })} placeholder='search'/>
    
    </div>

    


    
    
    </>
  )
}

export default Header