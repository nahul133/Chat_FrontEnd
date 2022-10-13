import React from 'react'
import useContextAuth from '../hooks/useContextAuth'

const SearchBox = () => {

  const {auth, logout} = useContextAuth()

  return (
    
    <div className="headind_srch">
        <div className="recent_heading mt-2">
                <h4>{auth.nombre}</h4>
         </div>
        <div className="srch_bar">
            <div className="stylish-input-group">
                <button className="btn text-danger"
                        onClick={e => logout()}
                >
                        Salir
                </button>
            </div>
        </div>
    </div>

  )
}

export default SearchBox