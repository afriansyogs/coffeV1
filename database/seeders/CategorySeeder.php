<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('categories')->insert([
            [
                'category_name' => 'Instant Coffe',
                'category_img' => 'assets/img/category/instan_coffe.png',
                'description' => 'Instant coffee with a strong and concentrated flavor, gives coffee lovers the practicality to enjoy a cup of coffee without the need for a complicated brewing process. Suitable to be enjoyed anytime and anywhere.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'category_name' => 'Coffe Makers',
                'category_img' => 'assets/img/category/coffe_maker.png',
                'description' => 'A variety of coffee makers designed to deliver the ultimate coffee brewing experience. From espresso machines to pour-overs, each method offers a unique way to enjoy high-quality coffee.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'category_name' => 'Coffe Accesories',
                'category_img' => 'assets/img/category/coffe_accesories.png',
                'description' => 'Coffee equipment and accessories that complete the brewing experience, such as specialty cups, filters, grinders, and milk frothing devices. Ideal for coffee lovers who want to perfect their brew.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'category_name' => 'Coffe Gift Set',
                'category_img' => 'assets/img/category/coffe_gift.png',
                'description' => 'The exclusive gift pack contains a selection of coffee products, ranging from coffee beans, brewing tools, to special accessories. The perfect gift for coffee lovers to enjoy special moments with premium flavors.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
