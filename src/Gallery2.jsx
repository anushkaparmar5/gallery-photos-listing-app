import React from 'react'

const Gallery2 = ({ list, handleButtonClick, categoryList }) => {
    return (
        <div>
            {/* <div className="text-center">Nav Bar</div> */}
            <nav className="navbar-light bg-info p-3">
                <h3 className='text-white text-center'>Gallery App</h3>
            </nav>
            <div className="d-flex gap-3 justify-content-center m-3">
                {categoryList?.length ? categoryList?.map((val, index) => {
                    return <button key={index} className="btn btn-primary text-capitalize" onClick={() => handleButtonClick(val)}>{val} </button>
                }) : null}
            </div>

            <div className="d-flex gap-3 justify-content-center align-items-start flex-wrap">
                {list?.length ? list.map((card, index) => (
                    <div key={index} className="card">
                        <img src={card?.image} className="card-img-top" alt="card" width={50} height={200} />
                        <div className="card-body">
                            <h5 className="card-title text-capitalize">{card?.title}</h5>
                            <p className="card-text">{card?.description}</p>
                        </div>
                    </div>
                ))
                    : "No Data Found."}
            </div>
        </div>

    )
}

export default Gallery2
