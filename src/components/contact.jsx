import React from 'react'

const contact = () => {
  return (
    <div className='contact'>
        <main>
            <h1>Contact Us</h1>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" required placeholder='Name is required' />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" required placeholder='email is required' />
                </div>
                <div>
                    <label>Massage</label>
                    <input type="text" placeholder='Enter Your query' />
                </div>
                <button type='submit'>Send</button>
            </form>
        </main>
    </div>
  )
}

export default contact
