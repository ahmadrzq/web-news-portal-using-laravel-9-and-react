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

    public function edit(News $news, Request $request)
    {
        return Inertia::render('EditNews', [
            'news' => $news->find($request->id)
        ]);
    }

    public function update(Request $request)
    {
        News::where('id', $request->id)->update(
            [
                'title' => $request->title,
                'description' => $request->description,
                'category' => $request->category,
            ]
        );
        return to_route('dashboard');
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

    public function destroy(Request $request){
        $news = News::find($request->id);
        $news->delete();
        return redirect()->back()->with('message', 'News has been Deleted');
    }
}
