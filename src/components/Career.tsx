import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Supply Chain Data Analyst</h4>
                <h5>Self Employed</h5>
              </div>
              <h3>2023 - Present</h3>
            </div>
            <p>
              Worked with multiple businesses to analyze trends and patterns in their data, helping them make smarter decisions
              through dashboards and visual reports built with Excel, Power BI and Python.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Projects</h4>
                <h5>Self</h5>
              </div>
              <h3>2024-2026</h3>
            </div>
            <p>
              Worked on multiple data projects including Maven Market Analysis, 
Engr Corporation Dashboard and D Smart Sales Dashboard — analyzing 
supply chain trends, sales patterns and business data to uncover 
insights that help organizations make smarter, data driven decisions 
using Excel, Power BI, Python and SQL.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BS Supply Chain Analytics</h4>
                <h5>University of Lahore </h5>
              </div>
              <h3>2023–2027</h3>
            </div>
            <p>
              Currently pursuing a degree in Supply Chain Analytics, building strong foundations in data analysis, supply chain optimization, and business intelligence.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Career;
