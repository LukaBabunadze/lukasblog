import SingleProduct from "../Common/SingleProduct";
import React, {useEffect, useState} from 'react';
import {blogs} from "../Common/API";
import Aside from "./Aside";
import Menu from "./Menu";
import Modal from "../Common/Modal";
import {Link, useParams} from "react-router-dom"
import {useDispatch} from "react-redux";


const Main = () => {

    const [blogList, setBlogList] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const dispatch = useDispatch();

    console.log(searchValue);

    useEffect(() => {
        blogs().then(res => {
            localStorage.setItem("blogs", JSON.stringify(res))
        })
        setBlogList(JSON.parse(localStorage.getItem(("blogs"))));
    }, [])


    /*Search*/
    const searchInput = (e) => {
        setSearchValue(e.target.value)
    }

    /*modalId*/
    const {id} = useParams()

    useEffect(() => {
        dispatch({
            type: "ID_RECIEVED",
            payload: id
        })
    }, [id])

    return (
        <>
            <main className="main">
                <div className="main__section-wrapper">
                    <section className="main__section-products">
                        {
                            blogList.map(singleBlog => {
                                return(
                                    <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/${singleBlog.id}`}>
                                        <SingleProduct
                                            img={singleBlog.image}
                                            name={singleBlog.title}
                                            desc={singleBlog.description}
                                            id={singleBlog.id}
                                        />
                                    </Link>
                                )
                            })
                        }
                    </section>
                </div>
                <Aside searchInput={searchInput} searchValue={searchValue} setBlogList={setBlogList}/>
            </main>
            <Menu/>
        </>
    );
}

export default Main;