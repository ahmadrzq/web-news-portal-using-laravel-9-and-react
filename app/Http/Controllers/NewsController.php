<?php

namespace App\Http\Controllers;

use App\Http\Resources\NewsCollection;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    public function index()
    {
        $news = new NewsCollection(News::OrderByDesc('id')->paginate(10));
        return Inertia::render('Homepage', [
            'title' => "AOVerse",
            'description' => "AOV Universe Has Arrived hahahahaha",
            'news' => $news
        ]);
    }

    public function show(News $news)
    {
        $news = News::where('author', auth()->user()->name)->get();
        return Inertia::render('Dashboard', [
            'news' => $news
        ]);
    }

    public function store(Request $request)
    {
        $news = new News();
        $news->title = $request->title;
        $news->description = $request->description;
        $news->category = $request->category;
        $news->author = auth()->user()->name;
        $news->save();
        return redirect()->back()->with('message', 'News has been Added');
    }
}
