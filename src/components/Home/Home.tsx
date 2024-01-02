import "./Home.css";
import image1 from "../../assets/winnie2.png";
import { Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import image2 from "../../assets/winnie3.jpg";
import image4 from "../../assets/winnie7.jpg";
import image5 from "../../assets/winnie5.jpg";
import image6 from "../../assets/winnie9.jpg";
import {ReactComponent as Ebook} from "../../assets/ebook.svg"
import InterviewIcon from "../../assets/interview.png";
import ArticlesIcon from "../../assets/articles.png";
import PortfolioIcon from "../../assets/portfolio.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  // padding: theme.spacing(1),
  textAlign: "center",
  color: "#a6a6a7",
  fontFamily:" 'Work Sans', sans-serif",
  padding: 0
}));

const Home = () => {
  return (
    <section className="section">
      <div className="black"></div>
      <div className="picture"></div>
      <main className="main">
        <section className="heading">
          <h1 className="greet">Hi, I'm Omowunmi.</h1>
          <p className="plan">I Plan Events and Do Brand Promotion</p>
          <p className="sub">
            Event Coordination <span style={{fontWeight:"900"}}> | </span> Face Modeling <span style={{fontWeight:"900"}}> | </span> Brand Promotion
          </p>
        </section>

        <div className="image">
          <img src={image1} alt="Winnie" className="image1" />
          <p style={{color: "#a6a6a7"}}>Versatile professional with robust background in Event Management consulting, business development, and social media.</p>
        </div>

        <div className="grids">
          <Grid container spacing={2}>
         

            {/* Porfolio */}
            <Grid item xs={12} sm={6}>
              <Items style={{ color: "#a6a6a7" }}>
                <Link to="/" className="link">
                  {/* <FaTiktok /> */}
                  {/* <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="tumblr"
                    // class="svg-inline--fa fa-tumblr fa-w-10 "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    style={{
                      width: "25px",
                      height: "25px",
                      color: "#2c4762",
                      paddingInline: "1rem",
                    }}
                  >
                    <path
                      fill="currentColor"
                      d="M309.8 480.3c-13.6 14.5-50 31.7-97.4 31.7-120.8 0-147-88.8-147-140.6v-144H17.9c-5.5 0-10-4.5-10-10v-68c0-7.2 4.5-13.6 11.3-16 62-21.8 81.5-76 84.3-117.1.8-11 6.5-16.3 16.1-16.3h70.9c5.5 0 10 4.5 10 10v115.2h83c5.5 0 10 4.4 10 9.9v81.7c0 5.5-4.5 10-10 10h-83.4V360c0 34.2 23.7 53.6 68 35.8 4.8-1.9 9-3.2 12.7-2.2 3.5.9 5.8 3.4 7.4 7.9l22 64.3c1.8 5 3.3 10.6-.4 14.5z"
                    ></path>
                  </svg> */}
                    <img src={PortfolioIcon} alt="portfolio" style={{width: "35px", height: "35px",  paddingInline: "1rem",}}/>
                  <span className="social">
                    View my Portfolio Here
                  </span>{" "}
                </Link>
              </Items>
            </Grid>

  {/* E-book */}
  <Grid item xs={12} sm={6} spacing={10}>
              <Items style={{ color: "#a6a6a7" }}>
                <Link to="/e-book" className="link">
                 
                 <Ebook style={{paddingInline: "1rem"}}/>
                  <span className="social">
                  Shop my Ebook - My entrepreneur odyssey

                  </span>{" "}
                </Link>
              </Items>
            </Grid>
            {/* Tiktok */}
            <Grid item xs={12} sm={6}>
              <Items style={{ color: "#a6a6a7" }}>
                <Link to="https://vm.tiktok.com/ZMjaJeVHw/" className="link">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="tiktok"
                    className="svg-inline--fa fa-tiktok fa-w-14 "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    style={{
                      width: "25px",
                      height: "25px",
                      color: "#e71c50",
                      paddingInline: "1rem",
                    }}
                  >
                    <path
                      fill="currentColor"
                      d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                    ></path>
                  </svg>
                  <span className="social">
                    Find me on Tiktok
                  </span>{" "}
                </Link>
              </Items>
            </Grid>

            {/* Youtube */}
            <Grid item xs={12} sm={6}>
              <Items style={{ color: "#a6a6a7" }}>
                <Link to="https://youtube.com/@Distinct_winnie?si=wNHELFZEiRQZl-Ak" className="link">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="youtube"
                    
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    style={{
                      width: "25px",
                      height: "25px",
                      color: "red",
                      paddingInline: "1rem",
                    }}
                  >
                    <path
                      fill="currentColor"
                      d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                    ></path>
                  </svg>
                  
                  <span className="social">
                    Find me on Youtube
                  </span>{" "}
                </Link>
              </Items>
            </Grid>

            {/* Instagram */}
            <Grid item xs={12} sm={6}>
              <Items style={{ color: "#a6a6a7" }}>
                <Link
                  to="https://www.instagram.com/p/Cv66dVELcCF/?igshid=MzRlODBiNWFlZA=="
                  className="link"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="instagram"
                    className="svg-inline--fa fa-instagram fa-w-14 "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    style={{
                      width: "25px",
                      height: "25px",
                      color: "#bb299c",
                      paddingInline: "1rem",
                    }}
                  >
                    <path
                      fill="currentColor"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    ></path>
                  </svg>
                  <span className="social">
                    Find me on Instagram
                  </span>{" "}
                </Link>
              </Items>
            </Grid>

            {/* LinkedIn */}
            <Grid item xs={12} sm={6}>
              <Items style={{ color: "#a6a6a7" }}>
                <Link
                  to="https://www.linkedin.com/in/agbolade-temitope-35a424150"
                  className="link"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="linkedin-in"
                    className="svg-inline--fa fa-linkedin-in fa-w-14 "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    style={{
                      width: "25px",
                      height: "25px",
                      color: "#007bb5",
                      paddingInline: "1rem",
                    }}
                  >
                    <path
                      fill="currentColor"
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    ></path>
                  </svg>
                  <span className="social">
                    Connect on LinkedIn
                  </span>{" "}
                </Link>
              </Items>
            </Grid>


    {/* Interview */}
    <Grid item xs={12} sm={6}>
              <Items style={{ color: "#a6a6a7" }}>
                <Link
                  to=""
                  className="link"
                >
                  {/* <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="linkedin-in"
                    className="svg-inline--fa fa-linkedin-in fa-w-14 "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    style={{
                      width: "25px",
                      height: "25px",
                      color: "#007bb5",
                      paddingInline: "1rem",
                    }}
                  >
                    <path
                      fill="currentColor"
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    ></path>
                  </svg> */}
                  <img src={InterviewIcon} alt="interview" style={{width: "30px", height: "30px",  paddingInline: "1rem",}}/>
                  <span className="social">
                  Read my full interview with Roddie law production 
                  </span>{" "}
                </Link>
              </Items>
            </Grid>

                {/* Articles */}
                <Grid item xs={12} sm={6}>
              <Items style={{ color: "#a6a6a7" }}>
                <Link
                  to=""
                  className="link"
                >
                  {/* <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="linkedin-in"
                    className="svg-inline--fa fa-linkedin-in fa-w-14 "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    style={{
                      width: "25px",
                      height: "25px",
                      color: "#007bb5",
                      paddingInline: "1rem",
                    }}
                  >
                    <path
                      fill="currentColor"
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    ></path>
                  </svg> */}
                      <img src={ArticlesIcon} alt="interview" style={{width: "30px", height: "30px",  paddingInline: "1rem",}}/>
                  <span className="social">
                  Check out some of my articles
                  </span>{" "}
                </Link>
              </Items>
            </Grid>

                {/* Consulting Session */}
                <Grid item xs={12} sm={6}>
              <Items style={{ color: "#a6a6a7" }}>
                <Link
                  to=""
                  className="link"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="linkedin-in"
                    className="svg-inline--fa fa-linkedin-in fa-w-14 "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    style={{
                      width: "25px",
                      height: "25px",
                      color: "#007bb5",
                      paddingInline: "1rem",
                    }}
                  >
                    <path
                      fill="currentColor"
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    ></path>
                  </svg>
                  
                  <span className="social">
                  Book a one on one consulting session with me
                  </span>{" "}
                </Link>
              </Items>
            </Grid>



          </Grid>

          {/* <div className="grid2"> */}
          
            {/* <div>
              
              <img src={image2} alt="four" className="fourImages"></img>
              
            </div>

            <div>
             
              <img src={image4} alt="four" className="fourImages"></img>
          
            </div>

            <div>
             
              <img src={image5} alt="four" className="fourImages"></img>
            
            </div> */}

            <div>
              {/* <Item> */}
              {/* <img src={image6} alt="four" className="fourImages"></img> */}
              {/* </Item>  */}
            </div>
          {/* </div> */}
        </div>
      </main>
    </section>
  );
};

export default Home;

const Items = styled(Item)`
  background-color: #151515;
  border-radius: 10px;
  box-shadow: none;
  color: #a6a6a7 !important;
  border-style: solid;
  border-width: 0;
  border-color: #ffffff;
  // min-height: 83px;
  padding-block: 0.5rem;
  padding-inline: 1rem;
  
`;
