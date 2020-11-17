import react from 'react';

export default function workexperience(){
    return(
        <div className="card" style={{borderRadius:'8px' ,margin:'2%', boxShadow: '0px 10px 30px #F3F4F740'}}>
        <div className="card-header bg-primary mb-3">
          <span style={{color:'white'}}> Work Experience</span>
        </div>
        <div className="card-body" style={{margin: '-0.5rem'}}>
      
        <div className="row" style={{margin:'1%'}}>
         <div className="col-sm-6">
          <span style={{color:'#A1A1A1'}}>Job Title</span>
          <br/>
          <div>
          <input type="text" className="form-control bg-light mb-3" placeholder="Eg: Frontend Engineer" aria-label="jobtitle" aria-describedby="basic-addon1" />
          </div>
          </div>
      
          <div className="col-sm-6">
          <span style={{color:'#A1A1A1'}}>Company</span>
          <br/>
          <div>
          <input type="text" className="form-control bg-light mb-3" placeholder="Eg: Ruvivo" aria-label="company" aria-describedby="basic-addon1" />
          </div>
          </div>
        </div>
      
        <div className="row" style={{margin:'1%'}}>
        <div className="col-sm-6">
        <span style={{color:'#A1A1A1'}}>Start Date</span>
        <br/>
        <div>
        <input type="text" className="form-control bg-light mb-3" placeholder="Eg: Jul 02,1991" aria-label="startdate" aria-describedby="basic-addon1" />
        </div>
        </div>
      
        <div className="col-sm-3">
        <span style={{color:'#A1A1A1'}}>End Date </span>
        <br/>
        <div>
        <input type="text" className="form-control bg-light mb-3" placeholder="Eg: Jul 02,1991" aria-label="enddate" aria-describedby="basic-addon1" />
        </div>
        </div>
        <div classNameName="col-sm-3">
            <span style={{color:'#A1A1A1'}}> <input type="checkbox" aria-label="current"/>&nbsp;I curently work here.</span>
        </div>

      </div>
      
      <div className="row" style={{margin:'1%'}}>
          <div className="col-sm-12">
          <span style={{color:'#A1A1A1'}}>Description</span>
          <br/>
          <div>
         <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          </div>

        </div>
        <div classNameName="row"> 
        {/* <button type="button" className="btn btn-primary btn-sm col-sm-5"> + Add More</button> */}
        <a href="#" className="btn btn-primary" style={{marginLeft:'40%', marginBottom:'2%'}}> &nbsp; + Add More</a>
        </div>
      
      
      
        </div>
      </div>
      
    );
}