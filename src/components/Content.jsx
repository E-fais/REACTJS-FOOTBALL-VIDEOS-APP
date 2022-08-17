import React, { useState, useEffect } from "react";
import "../App";
import axios from "axios";

const Content = () => {
  const [data, setData] = useState([]);
  const [iframeUrl,setIframeUrl]=useState('')

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://www.scorebat.com/video-api/v3/feed/?token=MTM4MDBfMTY0NTI2NzIyNV85MjkzODhhYjVmODAxODYwYzhkYjJkMjdkYzhlMDQ1NDRlYTVkZWVj`,
    })
      .then((res) => {
        console.log(res.data.response);
        setData(res.data.response);
      })
      .catch((e) => console.dir(e));
  }, []);

  return (
  <div>
     {iframeUrl && 
     <div className="iframeDiv">
      
      <iframe style={{width:'800px',height:'500px'}}
      src={iframeUrl}/>
      
    </div>}
    <div className="content-container">
    
      
      {data.map((item) => (
        <div
          key={item.thumbnail}
          className="video-div"
          // onClick={() => window.open(item.matchviewUrl)}
          onClick={()=>{setIframeUrl(item.matchviewUrl)
            window.scrollTo(250, 110)}}
        >
          <div>
            <h4>{item.title}</h4>
          </div>
          <div>
            <img src={item.thumbnail} alt="#" />
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Content;
