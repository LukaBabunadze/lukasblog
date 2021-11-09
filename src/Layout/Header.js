import { makeStyles } from "@material-ui/core/styles";
import {NightlightRoundOutlined} from "@mui/icons-material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import {useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const useStyles = makeStyles( {
    navIcon: {
        width: 40,
        height: 50,
        color: "#EF9D87",
    },
})

const Header = () => {

    const classes = useStyles();
    const count = useSelector(state => state.counter.clickCount)

    const dispatch = useDispatch();

    console.log(count)

    return(
        <>
            <header className="header">
                <div className="header__logo-icon">
                    <h1 className="logo">Luka's Blog</h1>
                    <Link to={"/menu"}>
                        <MenuRoundedIcon
                            className={"header__nav-icon"}
                            onClick={() => {
                                dispatch({
                                    type: "COUNTER_INCREASED",
                                    payload: true,
                                })
                            }}
                        />
                    </Link>
                </div>
                <div className="header__blog-text">
                    <h2 className="header__blog">Blog</h2>
                    <p className="header__slogan">
                        Our everyday thoughts are presented here Music, video presentations, photo-shootings and more.
                    </p>
                </div>
            </header>
        </>
    )
};

export default Header;