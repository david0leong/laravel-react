<?php

use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert([
            'name' => Str::random(10),
            'description' => Str::random(50),
            'price' => 10.99
        ]);

        DB::table('products')->insert([
            'name' => Str::random(10),
            'description' => Str::random(50),
            'price' => 99.99
        ]);

        DB::table('products')->insert([
            'name' => Str::random(10),
            'description' => Str::random(50),
            'price' => 200
        ]);

        DB::table('products')->insert([
            'name' => Str::random(10),
            'description' => Str::random(50),
            'price' => 59
        ]);
    }
}
