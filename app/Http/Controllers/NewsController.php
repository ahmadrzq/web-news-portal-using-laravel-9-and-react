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
        $news = new NewsCollection(News::paginate(20));
        return Inertia::render('Homepage', [
            'title' => "AOVerse",
            'description' => "AOV Universe Has Arrived hahahahaha",
            'news' => $news
        ]);
    }
}
