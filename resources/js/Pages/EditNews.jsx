import { Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar';
import { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function EditNews(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = () => {
        const data = {
            id: props.news.id,title, description, category
        }
        Inertia.put('/news/update', data);
        setTitle('')
        setDescription('')
        setCategory('')
    }

    useEffect(() => {
        { !props.news && Inertia.get('/news/edit') }
    })
    return (
        <div className='min-h-screen bg-indigo-200'>
            <Head title={props.title}></Head>
            <Navbar user={props.auth.user} />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <input type="text" placeholder="Title" className="m-2 input input-bordered w-full " onChange={(title) => setTitle(title.target.value)} defaultValue={props.news.title} />
                <input type="text" placeholder="Description" className="m-2 input input-bordered w-full " defaultValue={props.news.description} onChange={(description) => setDescription(description.target.value)} />
                <input type="text" placeholder="Category" className="m-2 input input-bordered w-full " onChange={(category) => setCategory(category.target.value)} defaultValue={props.news.category} />
                <button className='m-2 btn btn-summary' onClick={() => handleSubmit()}>Udpdate</button>
            </div>
        </div>
    );
}
