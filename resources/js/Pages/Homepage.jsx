import { Link, Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar';

export default function Homepage(props) {
    console.log(props);
    return (
        <div className='min-h-screen bg-indigo-200'>
            <Head title={props.title}></Head>
            <Navbar/>
            <div>
                {props.news ? props.news.map((data,i) =>{
                    <p>{props.description}</p>
                    return (
                        <div key={i} className="p-4 m-2 bg-white text-black shadow-md rounded-md">
                            <h1 className='text-3xl'>{data.title}</h1>
                            <p>{data.description}</p>
                            <h3 className='text-sm'>{data.category}</h3>
                            <h4 className='text-sm'>{data.author}</h4>
                        </div>
                    )
                }) : <p>No data found</p>}
            </div>
        </div>
    );
}
