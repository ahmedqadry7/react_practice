import { Link, Outlet } from 'react-router-dom'

export default function Projects() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-1'>
                    <ul>
                        <li>
                            <Link to='web'>Web</Link>
                        </li>
                        <li>
                            <Link to='mobile'>Mobile</Link>
                        </li>
                    </ul>
                </div>

                <div className='col-md-9'>
                    {/* This how to swap between Navigation inside projects */}
                    <Outlet></Outlet>
                </div>

                <div className='col-md-2' style={{textAlign:'center' , marginTop:'200px'}}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, est? Ex, quis error ab labore voluptas quasi tenetur sequi quo dicta ipsum nam beatae iure cupiditate cumque reprehenderit obcaecati itaque.</p>
                </div>
            </div>
        </div>
    )
}
