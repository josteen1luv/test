import {Link} from "react-router-dom";

const Test = () => {
    return (
        <>
            <div className="card">
                <Link to={'/test2'}>
                    <button>
                        Props
                    </button>
                </Link>
                <Link to={'/test1'}>
                    <button>
                        State and Hooks
                    </button>
                </Link>
            </div>
        </>
    );
};

export default Test;