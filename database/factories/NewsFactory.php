<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\News>
 */
class NewsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => fake()->words(rand(3,6), true),
            'description' => fake()->paragraph(2, true),
            'category' => fake()->words(rand(1,2),true),
            'author' => fake()->name(),
        ];
    }
}
