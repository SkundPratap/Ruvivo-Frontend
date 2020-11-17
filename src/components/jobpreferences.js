import react from 'react';

export default function jobpreference(){
    return(
        <div className="card" style={{borderRadius:'8px' ,margin:'2%', boxShadow: '0px 10px 30px #F3F4F740'}}>
        <div className="card-header bg-primary mb-3">
          <span style={{color:'white'}}> Personal Details</span>
        </div>
        <div className="card-body" style={{margin: '-0.5rem'}}>
      
        <div className="row" style={{margin:'1%'}}>
         <div className="col-sm-6">
          <span style={{color:'#A1A1A1'}}>Industry</span>
          
          </div> 
          </div>
        <div className="row" style={{margin:'1%'}}>
        <div className="col-sm-4">
                 <span > <input type="checkbox" aria-label="current"/>&nbsp;Software</span><br/>
                 <span > <input type="checkbox" aria-label="current"/>&nbsp;Software</span><br/>
                 <span > <input type="checkbox" aria-label="current"/>&nbsp;Software</span><br/>
                 <span > <input type="checkbox" aria-label="current"/>&nbsp;Software</span><br/>
                 <span > <input type="checkbox" aria-label="current"/>&nbsp;Software</span><br/>
                 <span > <input type="checkbox" aria-label="current"/>&nbsp;Software</span><br/>
                 <span > <input type="checkbox" aria-label="current"/>&nbsp;Software</span><br/>
            
          </div>
      
          <div className="col-sm-4">
          
          <span style={{color:'#A1A1A1'}}> <input type="checkbox" aria-label="current"/>&nbsp;Software</span><br/>
                 <span > <input type="checkbox" aria-label="current"/>&nbsp;Software</span><br/>
                 <span > <input type="checkbox" aria-label="current"/>&nbsp;Software</span><br/>
                 <span > <input type="checkbox" aria-label="current"/>&nbsp;Software</span><br/>
                 <span > <input type="checkbox" aria-label="current"/>&nbsp;Software</span><br/>
                 <span > <input type="checkbox" aria-label="current"/>&nbsp;Software</span><br/>
                 <span > <input type="checkbox" aria-label="current"/>&nbsp;Software</span><br/>
            
          </div>

          <div className="col-sm-4">
          
          
            
                 <span > <input type="checkbox" aria-label="current"/>&nbsp;Software</span><br/>
                 <span > <input type="checkbox" aria-label="current"/>&nbsp;Software</span><br/>
                 <span > <input type="checkbox" aria-label="current"/>&nbsp;Software</span><br/>
                 <span > <input type="checkbox" aria-label="current"/>&nbsp;Software</span><br/>
                 <span > <input type="checkbox" aria-label="current"/>&nbsp;Software</span><br/>
                 <span > <input type="checkbox" aria-label="current"/>&nbsp;Software</span><br/>
                 <span > <input type="checkbox" aria-label="current"/>&nbsp;Software</span><br/>
            
          
          </div>

        </div>
      
        <div className="row" style={{margin:'1%'}}>
        <div className="col-sm-6">
        <span style={{color:'#A1A1A1'}}>Position Type </span>
        <br/>
        </div>
        </div>
        <div className="row" style={{margin:'1%'}}>
        <div className="col-sm-3">
        <span> <input type="checkbox" aria-label="current"/>&nbsp;Full Time</span>
        </div>
        <div className="col-sm-3">
        <span> <input type="checkbox" aria-label="current"/>&nbsp;Part Time</span>
        </div>
        <div className="col-sm-3">
        <span> <input type="checkbox" aria-label="current"/>&nbsp;Internship</span>
        </div>
        <div className="col-sm-3">
        <span> <input type="checkbox" aria-label="current"/>&nbsp;Co Founder</span>
        </div>
        </div>
      
        
      
      <div className="row" style={{margin:'1%'}}>
          <div className="col-sm-12">
          <span style={{color:'#A1A1A1'}}>Location </span>
          <br/>
          <div>
          <input type="text" className="form-control bg-light mb-3" placeholder="Eg:New York, NY" aria-label="location" aria-describedby="basic-addon1" />
          </div>
          </div>
      
        </div>
      
      
      
        </div>
      </div>
      
    );
}