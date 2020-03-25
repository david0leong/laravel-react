<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::get();

        return $products->toJson();
    }

    public function delete(Product $product)
    {
        $product->delete();
    }
}
