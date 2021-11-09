import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {Link, Route, Switch, useHistory} from "react-router-dom"
import axios from "axios";
import {modal} from "./API";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Modal as materialModal} from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const Modal = () => {

    const modalId = useSelector(state => state.modal.id);
    const modalProduct = useSelector(state => state.modal.product)
    const history = useHistory();

    const dispatch = useDispatch();

    useEffect(() => {
        modal(modalId).then(res => {
                dispatch({
                    type: "PRODUCT_FETCHED",
                    payload: res
                })
        }
        )
    }, [modalId])

    useEffect(() => {
        console.log(modalProduct)
        console.log(modalId)
    }, [modalProduct])

    return (
            <Switch>
                <Route exact path={`/${modalId}`}>
                    {
                        modalProduct &&
                        <div className={"modal"}>
                            <materialModal

                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        {modalProduct.title}
                                        {modalProduct.id}
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        {modalProduct.description}
                                    </Typography>
                                    <section onClick={() => {
                                        history.push("/")
                                        dispatch({
                                            type: "MODAL_CLOSED",
                                            payload: null,
                                        })
                                    }
                                    }>
                                        <span>XXX</span>
                                    </section>
                                </Box>
                            </materialModal>
                        </div>
                    }
                </Route>
            </Switch>
    );
};

export default Modal;