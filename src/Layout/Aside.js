import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import React from "react";
import {Button} from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    buttons: {
        color: "#343434",
        textTransform: "lowercase",
        margin: 3,
        fontSize: 12,
        "&:hover": {
            color: "white",
            backgroundColor: "#BCBCBC"
        }
    }
})


const Aside = ({searchInput, searchValue, setBlogList}) => {

    const classes = useStyles();

    return(
        <aside className="main__aside">
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "auto", marginLeft: "10px" }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="search..."
                    onChange={(e) => searchInput(e)}
                />
                <IconButton
                    type="text"
                    sx={{ p: '10px' }}
                    aria-label="search"
                    onClick={() =>
                        setBlogList(JSON.parse(localStorage.getItem("blogs")).filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())))}
                >
                    <SearchIcon/>
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            </Paper>
            <Paper className="about_me">
                <div>
                    <img className="about_me-img" src="https://scontent.ftbs3-2.fna.fbcdn.net/v/t1.6435-9/210928619_2829105544011121_3005400073657921672_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeE55s3Gq_q23SYcShMDPRtIUf3iiomM2qtR_eKKiYzaq5nkbv5rISXfzjE18jR4va1r6K7ZFa1wAtkNvMKXh6_g&_nc_ohc=gvCz8MHADtYAX-Ma0-N&_nc_ht=scontent.ftbs3-2.fna&oh=5d453d37a6a7c27c52da4dd512d97919&oe=61928249"/>
                </div>
                <div>
                    <h3 className="about_me-name">About Me</h3>
                    <p className="about_me-info">
                        Hello, I'm Luka. Front-End Developer at Webiz Georgia.
                        If you're interested in please contact me on Facebook.com/lukababunadze
                    </p>
                </div>
            </Paper>
            <Paper className="follow_me">
                <section className="follow_me-section">
                    <h3>Follow Me</h3>
                    <div className="follow_me-wrapper">
                        <a href={"https://www.facebook.com/luka.babunadze/"} target={"_blank"}>
                            <FacebookTwoToneIcon
                                style={{width: "65%", height: "70%"}}
                            />
                        </a>
                        <a href={"https://www.facebook.com/luka.babunadze/"} target={"_blank"}>
                            <img className="follow_me-icons" src={"https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"}/>
                        </a>
                        <a href={"https://www.facebook.com/luka.babunadze/"} target={"_blank"}>
                            <img className="follow_me-icons" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Pinterest_colored_svg-512.png"/>
                        </a>
                        <a href={"https://www.facebook.com/luka.babunadze/"} target={"_blank"}>
                            <img className="follow_me-icons" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-512.png"/>
                        </a>
                    </div>
                </section>
            </Paper>
            <Paper className="aside__gallery">
                <section>
                    <h3>Gallery</h3>
                    <div className="gallery__grid-container">
                        <a href="#" className="gallery__grid-item">
                            <img
                                src="https://demo.kaliumtheme.com/blogging/wp-content/uploads/2015/03/photo-1421986527537-888d998adb74-150x150.jpg"
                                className="gallery__img"
                            />
                        </a>
                        <a href="#" className="gallery__grid-item">
                            <img
                                className="gallery__img"
                                src="https://demo.kaliumtheme.com/blogging/wp-content/uploads/2015/03/QTrNn7DETWGsjyS5L2n5__MG_8345-220x220.jpg"
                            />
                        </a>
                        <a href="#" className="gallery__grid-item">
                            <img
                                src="https://demo.kaliumtheme.com/blogging/wp-content/uploads/2015/03/photo-1424896041628-083a222840f6-150x150.jpg"
                                className="gallery__img"
                            />
                        </a>
                        <a href="#" className="gallery__grid-item">
                            <img
                                src="https://demo.kaliumtheme.com/blogging/wp-content/uploads/2015/03/photo-1420819725583-a94fb85c0704-150x150.jpg"
                                className="gallery__img"
                            />
                        </a>
                        <a href="#" className="gallery__grid-item">
                            <img
                                src="https://demo.kaliumtheme.com/blogging/wp-content/uploads/2015/03/photo-1424593090902-a67b5ab57b89-220x220.jpg"
                                className="gallery__img"
                            />
                        </a>
                        <a href="#" className="gallery__grid-item">
                            <img
                                src="https://demo.kaliumtheme.com/blogging/wp-content/uploads/2015/03/photo-1421862663573-35135db83c30-220x220.jpg"
                                className="gallery__img"
                            />
                        </a>
                        <a href="#" className="gallery__grid-item">
                            <img
                                src="https://demo.kaliumtheme.com/blogging/wp-content/uploads/2015/03/devorm_craft_fabrics5-LRG-150x150.jpg"
                                className="gallery__img"
                            />
                        </a>
                        <a href="#" className="gallery__grid-item">
                            <img
                                src="https://demo.kaliumtheme.com/blogging/wp-content/uploads/2015/03/photo-1414604582943-2fd913b3cb17-220x220.jpg"
                                className="gallery__img"
                            />
                        </a>
                        <a href="#" className="gallery__grid-item">
                            <img
                                src="https://demo.kaliumtheme.com/blogging/wp-content/uploads/2015/03/photo-1416838375725-e834a83f62b7-150x150.jpg"
                                className="gallery__img"
                            />
                        </a>
                    </div>
                </section>
            </Paper>
            <Paper className="aside__sponsor">
                <section>
                    <h3>Out Sponsor</h3>
                    <div className="sponsor__img--wrapper">
                        <img className="sponsor__img" src="https://documentation.laborator.co/wp-content/uploads/2020/01/banner-kalium.jpg"/>
                    </div>
                </section>
            </Paper>
            <Paper className="aside__tags">
                <section>
                    <h3>Tags</h3>
                    <div className="tags__wrapper">
                        <Button className={classes.buttons}>
                            blogger
                        </Button>
                        <Button className={classes.buttons}>
                            design
                        </Button>
                        <Button className={classes.buttons}>
                            fashion
                        </Button>
                        <Button className={classes.buttons}>
                            instagram
                        </Button>
                        <Button className={classes.buttons}>
                            laborator
                        </Button>
                        <Button className={classes.buttons}>
                            lifestyle
                        </Button>
                        <Button className={classes.buttons}>
                            magazine
                        </Button>
                        <Button className={classes.buttons}>
                            milano
                        </Button>
                        <Button className={classes.buttons}>
                            music
                        </Button>
                        <Button className={classes.buttons}>
                            nature
                        </Button>
                        <Button className={classes.buttons}>
                            nightlife
                        </Button>
                        <Button className={classes.buttons}>
                            paris
                        </Button>
                    </div>
                </section>
            </Paper>
            <Paper className="aside__categories">
                <section>
                    <h3>Categories</h3>
                    <div className="categories__wrapper">
                        <span className="categories__list-item">General</span>
                        <hr className="categories__line"/>
                        <span className="categories__list-item">Lifestyle</span>
                        <hr className="categories__line"/>
                        <span className="categories__list-item">Magazine</span>
                        <hr className="categories__line"/>
                        <span className="categories__list-item">Travel</span>
                    </div>
                </section>
            </Paper>
        </aside>
    );
};

export default Aside;