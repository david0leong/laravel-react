<?php

namespace App\Http\Controllers;

use App\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    public function index()
    {
        $todos = Todo::orderBy('created_at', 'desc')->get();

        return $todos->toJson();
    }

    public function create(Request $request)
    {
        $data = $request->validate([
            'description' => 'required',
        ]);

        $todo = Todo::create([
            'description' => $data['description'],
        ]);

        return response()->json('Todo created!');
    }

    public function show($id)
    {
        $todo = Todo::find($id);

        return $todo->toJson();
    }

    public function update(Todo $todo)
    {
        $data = $request->validate([
            'description' => 'required',
        ]);

        $todo->description = $data['description'];
        $todo->update();

        return response()->json('Todo updated!');
    }

    public function complete(Todo $todo)
    {
        $todo->completed = true;
        $todo->update();

        return response()->json('Todo completed!');
    }
}
