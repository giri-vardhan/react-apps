import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
// import { Method } from './Method';
//import styled from 'styled-components';
// import { IconContext } from 'react-icons';
// import { FiPlus, FiMinus } from 'react-icons/fi';
import { Accordion, AccordionDetails, AccordionSummary, Typography, TextField } from '@material-ui/core';
//import { Endpoint } from '../pages/APIs';
import { Textarea } from 'evergreen-ui';
import 'bootstrap/dist/css/bootstrap.min.css';




// const AccordionSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   position: relative;
//   height: 100vh;
//   background: #fff;
// `;

// const Container = styled.div`
//   position: absolute;
//   top: 30%;
//   box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
// `;

// const Wrap = styled.div` 
//   background: #272727;
//   color: #fff;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
//   text-align: center;
//   cursor: pointer;

//   h1 {
//     padding: 2rem;
//     font-size: 1rem;
//   }

//   span {
//     margin-right: 1.5rem;
//   }
// `;

// const Dropdown = styled.div`
//   background: #1c1c1c;
//   color: #00ffb9;
//   width: 100%;
//   height: 100px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   border-bottom: 1px solid #00ffb9;
//   border-top: 1px solid #00ffb9;

//   p {
//     font-size: 1rem;
//   }
// `;

// const Accordion = () => {
//   const [clicked, setClicked] = useState(false);

//   const toggle = index => {
//     if (clicked === index) {
//       //if clicked method is already active, then close it
//       return setClicked(null);
//     }

//     setClicked(index);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
  
//     // get form data
//     const formData = new FormData(event.target);
//     const endpoint = formData.get('endpoint');
//     const httpMethod = formData.get('http method');
//     const description = `Hello,\n\nPlease find the below details for your reference:\n\nendpoint: ${endpoint}\n: ${httpMethod}\n\nThanks,\nYour Name`;
  
//     // send form data to remote API
//     fetch('https://example.com/api/submit-form', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ endpoint, httpMethod, description })
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Error submitting form');
//       }
//       // handle successful submission
//       console.log('Form submitted successfully');
//     })
//     .catch(error => {
//       // handle submission error
//       console.error(error);
//     });
//   }


  

//   return (
//     <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
//       <AccordionSection>
//         <Container>
//           {Method.map((item, index) => {
//             return (
//               <>
//                 <Wrap onClick={() => toggle(index)} key={index}>
//                   <h1>{item.method}</h1>
//                   <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
//                 </Wrap>
//                 {clicked === index ? (
//                   <Dropdown>
//                     {/* <p>{item.answer}</p>
//                     <div>
//                     <h6>Implementation Notes</h6>
//                     <p>This API will be used to search all endpoints</p>
//                     <textarea cols="50" rows="5" >
//                         request body
//                     </textarea> */}
//                     <div>
//                         <button onClick={toggle}>{clicked ? 'Hide' : 'Show'}</button>
//                         {clicked && (
//                             <div>
//                             <form onSubmit={handleSubmit}>
//                                 <label>
//                                 endpoint:
//                                 <input type="endpoint" name="endpoint" required />
//                                 </label>
//                                 <br />
//                                 <label>
//                                 http method:
//                                 <input type="text" name="httpMethod" required />
//                                 </label>
//                                 <br />
//                                 <label>
//                                 description:
//                                 <textarea value={`Hello,\n\nPlease find the below details for your reference:\n endpoint: \nhttp method: \n\nThanks,\nYour Name`} readOnly />
//                                 </label>
//                                 <br />
//                                 <button type="submit">Submit</button>
//                             </form>
//                             </div>
//                         )}
//                         </div>
//                    {/* </div> */}
//                   </Dropdown>
//                 ) : null}
//               </>
//             );
//           })}
//         </Container>
//       </AccordionSection>
//     </IconContext.Provider>
//   );
// };

 
const GetAccordion = () => {
  const [formTokenGET,setTokenGET] = useState('');
  const [responseGET, setResponseGET] = useState('');
  const [formDataGET, setFormDataGET] = useState('');

  const [responsePOST, setResponsePOST] = useState('');
  const [formDataPOST, setFormDataPOST] = useState({postBody:''});
  const [formTokenPOST,setTokenPOST] = useState('');

  const [responsePUT, setResponsePUT] = useState('');
  const [formDataPUT, setFormDataPUT] = useState({putBody:''});
  const [input,setInput]= useState('');
  const [formTokenPUT, setFormTokenPUT]= useState('');
  
  

  //const {getToken,getBody}= formDataGET;
  const onChangeTokenGET = e => {
    setTokenGET(e.target.value);
  };
   const onChangeGET = (e) => {
    setFormDataGET({ ...formDataGET, [e.target.name]: [e.target.value] });
  };
  

  const onChangeTokenPOST = e => {
    setTokenPOST(e.target.value);
  };
  
   const onChangePOST = (e) => {
    setFormDataPOST({ ...formDataPOST, [e.target.name]: [e.target.value] });
  };


  const onChangeInput = e => {
    setInput(e.target.value);
  };
  //const {input, putBody}= formDataPUT;
  const onChangeTokenPUT = (e) => { 
    setFormTokenPUT(e.target.value);
  };
   const onChangePUT = (e) => {
    setFormDataPUT({ ...formDataPUT, [e.target.name]: [e.target.value] });
  };

  const handleSubmitGET = async (e) => {
    e.preventDefault();
    const response = await fetch('s');
    const responseData = await response.json();
    const get = JSON.stringify(responseData);
    setResponseGET(get);
  };

  const handleSubmitPOST = async (e) => {
    e.preventDefault();
    try {
      
      const res = await fetch('http://localhost:9002/v1/endpoint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: (formDataPOST.postBody), 
      });
      
      console.log(formDataPOST.postBody);
      const data = await res.json();
      console.log(data);

      setResponsePOST(JSON.stringify(data)); 
    } catch (error) {
      console.error(error);
      setResponsePOST('An error occurred while submitting the form');
    }
  };
  

  const handleSubmitPUT = async (e) => {
    e.preventDefault();
    try{
        const res = await fetch(`http://localhost:9002/v1/endpoint/${input}`,{
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: (formDataPUT.putBody)
        });
        console.log(formDataPUT.putBody);
        const data = await res.json();
        console.log(data);
        setResponsePUT(JSON.stringify(data));
  } catch (error) { 
    console.error(error);
    setResponsePUT('An error occurred while submitting the form');
  }
};

//   function handleSubmit(e) {
//         e.preventDefault();
        
//         axios.post("localhost:9002/v1/endpoint",{ token,body
//         },{
//             headers: {
//               'Content-Type': 'application/json'
//             }
//         }).then((response)=>{
//             console.log('Data posted successfully:', response);
//         })
//         .catch((error)=>{
//             console.log(error);
//             console.error('There was an error posting data:', error);
//         })
//   }
        

//     }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await fetch(endpoint);
//     const data = await res.json();
//     setResponse(JSON.stringify(data));
//   }

 

// useEffect(() => {
//     console.log("useEffect fired");
//     const fetchData = async () => {
//       const responseGET = await fetch('http://localhost:9002/v1/endpoints');
//       const setResponseGET = await responseGET.json();
//       setFormDataGET(setResponseGET);
//     };
//     fetchData();
//   }, []);

  

  const jsonDataGET = `{
    "id": 1,
    "endpoint": "https://localhost/endpoint1",
    "method": "POST",
    "active": {
        "Bool": false,
        "Valid": true
    },
    "description": "creating user",
    "created_at": "2023-02-19T16:30:12.903443Z",
    "updated_at": "2023-02-19T16:30:12.903443Z",
    "deleted_at": {
        "Time": "0001-01-01T00:00:00Z",
        "Valid": false
    }
}`;

const jsonDataPOST = `{
    "endpoint":"https://localhost/endpoint5",
    "method":"POST",
    "description":"creating user"
}`

const jsonDataPUT = `{
    "method":"PUT",
    "active":1
}`

  return (
    <Fragment>
    <Accordion>
      <AccordionSummary>
        <Typography>GET</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div>
            <h4>
                <span>Implementation Notes</span>
            </h4>
            <div class="markdown">
                <p>This API will be used to search endpoints</p>
            </div>
            <h4>
                <span>Response Class (Status 200)</span>
            </h4>
            <div clas="markdown">
                <p>Successful retrieval of API Request</p>
            </div>

        <form onSubmit={handleSubmitGET}>
                <label>Enter your Token:
                    <input
                            type="text" 
                            name="formTokenGET"
                            value={formTokenGET} 
                            onChange={onChangeTokenGET}
                    />
                </label>
            <br />
            <div>
            <ul class="signature-nav">
            <li>
                <a class="description-link" href="!#" data-sw-translate>Model</a>
            </li>
            <li>
                <a class="snippet-link-selected" href="!#" data-sw-translate>Example Value</a>
            </li>
            </ul>
            <label>
              Message:
              <div id="summary-text-area" style={{ display: 'block' }}>
                <pre>{jsonDataGET}</pre>
              </div>
            </label>
            </div>
            <div style={{
      display: 'block', width: 700, paddingLeft: 30
    }}>
        
      {/* <h4>Request Body</h4>
      <Textarea 
        type="text"
        name="body"
        value={formData.body} 
        rows="6" 
        cols="50"
        onChange={onChangeGET}
        placeholder="Enter your Request body"
      /> <br></br>
      Summary: {summaryGET} */}
    </div>
          <br />
          <br />
        <div class="reponse-content-type">
            <div>
                <label data-sw-translateGET for="rct0.123">Response content Type</label>
                <select name="responseContentType" id="rct0.123">
                    <option value="application/json">application/json</option>
                </select>
            </div>
        </div>
        {/* <Button type="submit" className="btn btn-primary">Submit</Button> */}
        <a href="#!" className="btn btn-primary" onClick={handleSubmitGET}>submit</a>
        </form>
        <div>
            <p>Response Body</p>
        </div>
        <textarea value={responseGET} rows='6' cols='80' readOnly />
        </div>
      </AccordionDetails>
    </Accordion>
    <Accordion>
       <AccordionSummary>
        <Typography>POST</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div>
            <h4>
                <span>Implementation Notes</span>
            </h4>
            <div class="markdown">
            <p>This API will be used to insert endpoints</p>
            </div>
            <h4>
                <span>Response Class (Status 200)</span>
            </h4>
            <div clas="markdown">
            <p>Successful retrieval of API Request</p>
            </div>

        <form onSubmit={handleSubmitPOST}>
            <label>Enter your Token:
                    <input
                            type="text" 
                            name="formTokenPOST"
                            value={formTokenPOST} 
                            onChange={onChangeTokenPOST}
                    />
                </label>
                <br />
        <label >
              Message:
              <div id="summary-text-area" style={{ display: 'block' }}>
                <pre>{jsonDataPOST}</pre>
              </div>
        </label>
        
        <div style={{
      display: 'block', width: 700, paddingLeft: 30
    }}> 
        <h4>Body</h4>
      <Textarea
        type="text"  
        name="postBody"
        value={formDataPOST.postBody} 
        rows="6" 
        cols="50"
        onChange={onChangePOST}
        placeholder="Enter your body"
      /> <br />
      </div>
      <br />
      <div class="parameter-content-type">
            <div>
                <label data-sw-translatePOST for="rct0.1234">Parameter content Type</label>
                <select name="parameterContentType" id="rct0.1234">
                    <option value="application/json">application/json</option>
                </select>
            </div>
        </div>
          {/* <Button type="submit" className="btn btn-primary">Submit</Button> */}
          <a href="#!" className="btn btn-primary" onClick={handleSubmitPOST}>submit</a>
        </form>
        <div>
            <p>Response Body</p>
        </div>
        <textarea value={responsePOST} readOnly />
        </div>
      </AccordionDetails>
    </Accordion>
    <Accordion>
       <AccordionSummary>
        <Typography>PUT</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div>
            <h4>
                <span>Implementation Notes</span>
            </h4>
            <div class="markdown">
            <p>This API will be used to search endpoints</p>
            </div>
            <h4>
                <span>Response Class (Status 200)</span>
            </h4>
            <div clas="markdown">
            <p>Successful retrieval of API Request</p>
            </div>

        <form onSubmit={handleSubmitPUT}>
            <label>Enter your Token:
                    <input
                            type="text" 
                            name="formTokenPUT"
                            value={formTokenPUT}
                            onChange={onChangeTokenPUT}
                    />
            </label>
                <br />
        <label>
              Message:
              <div id="summary-text-area" style={{ display: 'block' }}>
                <pre>{jsonDataPUT}</pre>
              </div>
        </label>
        <div style={{
      display: 'block', width: 700, paddingLeft: 30
    }}>
        <label>Enter your EndpointID:
                    <input
                            type="number" 
                            name="input"
                            value={input}
                            onChange={onChangeInput}/>
        </label>
    <h4>Body</h4>
      <Textarea
        type="text"
        name="putBody"
        value={formDataPUT.putBody} 
        rows="6" 
        cols="50"
        onChange={onChangePUT}
        placeholder="Enter your body"
      /> <br />
      
      </div>
      <br />
      <div class="parameter-content-type">
            <div>
                <label dataPUT for="rct0.12345">Parameter content Type</label>
                <select name="parameterContentType" id="rct0.12345">
                    <option value="application/json">application/json</option>
                </select>
            </div>
        </div>
          {/* <Button type="submit" className="btn btn-primary">Submit</Button> */}
          <a href="#!" className="btn btn-primary" onClick={handleSubmitPUT}>submit</a>
        </form>
        <div>
            <p>Response Body</p>
        </div>
        <textarea value={responsePUT} readOnly />
        </div>
      </AccordionDetails>
    </Accordion>
    </Fragment>
  );
}
//export default GetAccordion;