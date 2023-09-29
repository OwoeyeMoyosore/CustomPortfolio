import "./Home.css";
import image1 from "../../assets/winnie2.png";
import { Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { FaTiktok } from "react-icons/fa";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "#a6a6a7",
  // color: theme.palette.text.secondary,
}));

const Home = () => {
  return (
    <section className="section">
      <div className="black"></div>
      <div className="picture"></div>
      <main className="main">
        <section className="heading">
          <h1 className="greet">Hi, I'm Omowunmi.</h1>
          <h1 className="plan">I Plan Events and Do Brand Promotion</h1>
          <h1 className="sub">
            Event Coordination | Face Modeling | Brand Promotion
          </h1>
        </section>

        <div className="image">
          <img src={image1} alt="Winnie" className="image1" />
        </div>

<div className="grids">
<Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Items style={{ color: "#a6a6a7" }}>
              <Link to="/">
                <FaTiktok />
                <span>
                  Shop my E-book - Best Instagram Hashtag Strategies
                </span>{" "}
              </Link>
            </Items>
          </Grid>

          <Grid item xs={12} sm={6}>
          <Items style={{ color: "#a6a6a7" }}>
              <Link to="/">
                <FaTiktok />
                <span>
                  Shop my E-book - Best Instagram Hashtag Strategies
                </span>{" "}
              </Link>
            </Items>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Items style={{ color: "#a6a6a7" }}>
              <Link to="/">
                <FaTiktok />
                <span>
                  Shop my E-book - Best Instagram Hashtag Strategies
                </span>{" "}
              </Link>
            </Items>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Items style={{ color: "#a6a6a7" }}>
              <Link to="/">
                <FaTiktok />
                <span>
                  Shop my E-book - Best Instagram Hashtag Strategies
                </span>{" "}
              </Link>
            </Items>
          </Grid>

          <Grid item xs={12} sm={6}>
          <Items style={{ color: "#a6a6a7" }}>
              <Link to="/">
                <FaTiktok />
                <span>
                  Shop my E-book - Best Instagram Hashtag Strategies
                </span>{" "}
              </Link>
            </Items>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Items style={{ color: "#a6a6a7" }}>
              <Link to="/">
                <FaTiktok />
                <span>
                  Shop my E-book - Best Instagram Hashtag Strategies
                </span>{" "}
              </Link>
            </Items>
          </Grid>

          <Grid item xs={12} sm={6}>
          <Items style={{ color: "#a6a6a7" }}>
              <Link to="/">
                <FaTiktok />
                <span>
                  Shop my E-book - Best Instagram Hashtag Strategies
                </span>{" "}
              </Link>
            </Items>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Items style={{ color: "#a6a6a7" }}>
              <Link to="/">
                <FaTiktok />
                <span>
                  Shop my E-book - Best Instagram Hashtag Strategies
                </span>{" "}
              </Link>
            </Items>
          </Grid>

          
        </Grid>

    <Grid container spacing={2} sx={{marginTop: "2rem"}}>
      <Grid xs={6}>
        {/* <Item> */}
             <img src={image1} alt="four" className="fourImages"></img>
        {/* </Item>  */}
      </Grid>

      <Grid xs={6}>
        {/* <Item> */}
             <img src={image1} alt="four" className="fourImages"></img>
        {/* </Item>  */}
      </Grid>

      <Grid xs={6}>
        {/* <Item> */}
             <img src={image1} alt="four" className="fourImages"></img>
        {/* </Item>  */}
      </Grid>

      <Grid xs={6}>
        {/* <Item> */}
             <img src={image1} alt="four" className="fourImages"></img>
        {/* </Item>  */}
      </Grid>

      {/* <Grid xs={6}>
        <Item>
             <img src={image1} alt="four"></img>
        </Item> 
      </Grid>

      <Grid xs={6}>
        <Item>
             <img src={image1} alt="four"></img>
        </Item> 
      </Grid>

      <Grid xs={6}>
        <Item>
             <img src={image1} alt="four"></img>
        </Item> 
      </Grid> */}
    </Grid>
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
  padding-block: 2rem;
`;
