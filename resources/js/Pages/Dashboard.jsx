import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Inertia } from '@inertiajs/inertia';
import { Head, Link } from '@inertiajs/inertia-react';
import { useState, useEffect } from 'react';

export default function Dashboard(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [isNotif, SetIsNotif] = useState(false);

    const handleSubmit = () => {
        const data = {
            title, description, category
        }
        Inertia.post('/news', data);
        SetIsNotif(true)
        setTitle('')
        setDescription('')
        setCategory('')
    }

    useEffect(() => {
        { !props.news && Inertia.get('/news') }
    })
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">My News</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div>{isNotif &&
                        <div className="m-2 alert alert-success shadow-lg">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>{props.flash.message}</span>
                            </div>
                        </div>}
                    </div>
                    <input type="text" placeholder="Title" className="m-2 input input-bordered w-full " onChange={(title) => setTitle(title.target.value)} value={title} />
                    <input type="text" placeholder="Description" className="m-2 input input-bordered w-full " onChange={(description) => setDescription(description.target.value)} value={description} />
                    <input type="text" placeholder="Category" className="m-2 input input-bordered w-full " onChange={(category) => setCategory(category.target.value)} value={category} />
                    <button className='m-2 btn btn-summary' onClick={() => handleSubmit()}>Submit</button>
                </div>
                <div className='p-4'>
                    {props.news && props.news.length > 0 ? props.news.map((news, i) => {
                        return (
                            <div key={i} className="m-2 card w-full bg-base-100 shadow-xl" >
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {news.title}
                                        <div className="badge badge-secondary">NEW</div>
                                    </h2>
                                    <p>{news.description}</p>
                                        <div className="badge badge-inline">{news.category}</div>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-info">
                                            <Link href={route('edit.news')} data={{ id: news.id }} as="button">Edit</Link>
                                        </div>
                                        <div className="badge badge-error">
                                            <Link href={route('delete.news')} data={{ id: news.id }} method="delete" as="button">Delete</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                    }) :
                        <div className="flex justify-center alert alert-error shadow-lg">
                            <div>
                                <span>You don't have a news</span>
                            </div>
                        </div>
                    }


                </div>
            </div>
        </AuthenticatedLayout>
    );
}
