const Form =( { formData, handleChange, handleSubmit } )=> {

    return(
        <main className="main" id="formMain">
            <div className="container">
                <h2 className="form-h2 text-center mb-5 text-capitalize">
                    create a login
                </h2>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="mb-3 form-check form-div">
                            <label className="form-label text-capitalize">
                                first name
                            </label>
                            <input
                                type="text"
                                id="fName"
                                name="fName"
                                value={formData.fName}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3 form-check form-div">
                            <label className="form-label text-capitalize">
                                last name
                            </label>
                            <input 
                                type="text"
                                id='lName'
                                name="lName"
                                value={formData.lName}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3 form-check form-div">
                            <label className="form-label text-capitalize">
                                email
                            </label>
                            <input 
                                type="email"
                                id='email'
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3 form-check form-div">
                            <label className="form-label text-capitalize">
                                phone
                            </label>
                            <input 
                                type="phone"
                                id='phone'
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3 form-check form-div">
                            <label className="form-label text-capitalize">
                                password
                            </label>
                            <input 
                                type="password"
                                id='password'
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <button type="submit"  className="btn btn-primary">
                                create login
                            </button>
                        </div>
                    </div>
                </form> 
            </div>
        </main>
    )
}

export default Form