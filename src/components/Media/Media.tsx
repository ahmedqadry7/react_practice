import { Link, Outlet } from "react-router-dom";

export default function Media() {
    return (
        <div className='container'>
                <div style={{ paddingLeft: "20px", paddingTop: "20px" }}>
                    <ul>
                        <li>
                            <button>
                                <Link to='movies'>Movies</Link>
                            </button>
                            <button>
                                <Link to='tv'>TV</Link>
                            </button>
                            <button>
                                <Link to='people'>People</Link>
                            </button>
                        </li>
                    </ul>
                </div>

                <div className='col-md-9'>
                    {/* This how to swap between Navigation inside projects */}
                    <Outlet></Outlet>
                </div>
        </div>
    )
}
