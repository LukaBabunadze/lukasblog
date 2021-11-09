

const SingleProduct = ({img, name, desc, id}) => {

    return (
        <>
            <div key={id} className="single__blog">
                <div className="single__blog-img--wrapper">
                    <img className="single__blog-image" src={img}/>
                </div>
                <div>
                    <h3 className="single__blog-name">{name}</h3>
                    <div className="single__blog-span--wrapper">
                        <span className="single__blog-span">
                            {desc}
                        </span>
                    </div>
                    <div>
                        <span>Time - 15:30</span>
                        <a href="facebook.com">{id}</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProduct;