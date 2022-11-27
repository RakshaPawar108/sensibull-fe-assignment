import { ArrowBackIos } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { notFoundImg } from "../../assets";
import "./NotFound.css";

export const NotFound = () => {
  return (
    <div className="notfound-wrapper">
      <h1 className="not-found-title">Something Went Wrong</h1>
      <img src={notFoundImg} alt="404" />
      <Button className="back-btn" startIcon={<ArrowBackIos />}>
        <Link to="/" className="back-link">
          Go Home
        </Link>
      </Button>
    </div>
  );
};
