import {useSelector, useDispatch} from "react-redux"
import {useEffect, useState} from "react";
import {Switch, useHistory, Route, Link} from "react-router-dom";

const Menu = () => {

    const count = useSelector(state => state.counter.clickCount)
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch();
    const history = useHistory();



    const exit = () => {
        history.push("/")
        dispatch({
            type: "COUNTER_DECREASED",
            payload: false,
        })
    }
    return(
        <Switch>
            <Route path={"/menu"}>
                <>
                    {count &&
                    <div className="menu">
                        <aside className="menu__aside" style={count && {width: "20%", left: "80%"}}>
                            <section className="menu__aside--nav">
                                <nav>
                                    <ul>
                                        <div onMouseOver={() => setOpen(true)}
                                             onMouseLeave={() => setOpen(false)}>
                                            <li
                                                className="menu__blog"
                                            >
                                                Blog
                                            </li>
                                            {open && <div className="menu__blog-list" >
                                                <span>1</span>
                                                <span>2</span>
                                                <span>3</span>
                                            </div>}
                                        </div>
                                        <li></li>
                                    </ul>
                                </nav>
                                <p onClick={exit}>XXX</p>
                            </section>
                            <section>
                                2
                            </section>
                            <section>
                                3
                            </section>
                        </aside>
                    </div>}
                </>
            </Route>
        </Switch>
    );
};

export default Menu;




