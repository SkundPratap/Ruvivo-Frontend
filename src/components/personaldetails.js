import react from 'react';

export default function personaldetails(){
    return(
        <div className="card" style={{borderRadius:'8px' ,margin:'2%', boxShadow: '0px 10px 30px #F3F4F740'}}>
        <div className="card-header bg-primary mb-3">
          <span style={{color:'white'}}> Personal Details</span>
        </div>
        <div className="card-body" style={{margin: '-0.5rem'}}>
      
        <div className="row" style={{margin:'1%'}}>
         <div className="col-sm-6">
          <span style={{color:'#A1A1A1'}}>Full Name <br/></span>
          <div>
          <input type="text" className="form-control bg-light mb-3" placeholder="Eg: John Smith" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
          </div>
      
          <div className="col-sm-6">
          <span style={{color:'#A1A1A1'}}>Email <br/></span>
          <div>
          <input type="text" className="form-control bg-light mb-3" placeholder="Eg: john@example.com" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
          </div>
        </div>
      
        <div className="row" style={{margin:'1%'}}>
        <div className="col-sm-6">
        <span style={{color:'#A1A1A1'}}>Date of Birth <br/></span>
        <div>
        <input type="text" className="form-control bg-light mb-3" placeholder="Eg: Jul 02,1991" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        </div>
      
        <div className="col-sm-6">
        <span style={{color:'#A1A1A1'}}>Location <br/></span>
        <div>
        <input type="text" className="form-control bg-light mb-3" placeholder="Eg: New York,NY" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        </div>
      </div>
      
      <div className="row" style={{margin:'1%'}}>
          <div className="col-sm-6">
          <span style={{color:'#A1A1A1'}}>Password <br/></span>
          <div>
          <input type="text" className="form-control bg-light mb-3" placeholder="Select a strong password" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
          </div>
      
          <div className="col-sm-6">
          <span style={{color:'#A1A1A1'}}>Confirm Password <br/></span>
          <div>
          <input type="text" className="form-control bg-light mb-3" placeholder="Enter password again" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
          </div>
        </div>
      
      
      
        </div>
      </div>
      
    );
}