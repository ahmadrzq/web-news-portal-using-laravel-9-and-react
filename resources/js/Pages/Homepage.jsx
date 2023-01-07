import { Link, Head } from '@inertiajs/inertia-react';

export default function Homepage(props) {
    console.log(props);
    return (
        <div className='flex justify-center items-center min-h-screen bg-indigo-900 text-white text-2xl'>
            <Head title={props.title}></Head>
            <p>{props.description}</p>
        </div>
    );
}
