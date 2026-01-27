
const Card:React.FC<any> =(prop) => {

    return (
  <div className="job-card">
    
    
    <div className="card-top">
      <img 
        src={prop.logo} 
        alt="Company Logo" 
        className="company-logo"
      />
    </div>

    
    <div className="card-middle">
      <div className="tags">
        <span className="tag product">{prop.category}</span>
        <span className="tag new">{prop.employees} employees</span>
      </div>

      <h2 className="job-title">
       {prop.title}
      </h2>

      <p className="salary">{prop.pay}</p>

      <div className="job-info">
        <span>{prop.location}</span>    
        <span>{prop.time}</span>
        
      </div>
    </div>

    
    <div className="card-bottom">
        <div className="skills">
          {prop.skills && prop.skills.map((skill: string, index: number) => (
            <span className="skill" key={index}>{skill}</span>
          ))}
        </div>

      <button className="view-btn">
        View Job 
      </button>
    </div>

  </div>
);
}

export default Card;