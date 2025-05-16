<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('products')->insert([
            [
                'category_id' => 1,
                'product_name' => 'Coffe Organic',
                'product_img' => json_encode([
                    'assets/img/product/1_p2_instan_coffe.png',
                    'assets/img/product/1_p1_instan_coffe.png',
                ]),
                'price' => 25000,
                'stock' => 50,
                'description' => 'Coffe Organic is the coffee of choice for those who prioritize authenticity and health in every sip. Made from organic coffee beans grown without chemicals, synthetic fertilizers, or pesticides, this coffee delivers a pure, natural taste with unique complexity. A gentle acidity blends with hints of nuttiness, caramel, and a hint of vanilla, giving the taste a delicate yet deep flavor. With environmentally friendly processing methods, each coffee bean is carefully processed to preserve its quality and freshness. Suitable to be enjoyed as pure black coffee or mixed with milk to create a creamier combination. For coffee lovers who are concerned about environmental sustainability and want to enjoy the taste of healthier coffee, Coffee Organic is the perfect choice.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'category_id' => 2,
                'product_name' => 'Portable Coffe maker',
                'product_img' => json_encode([
                    'assets/img/product/2_p1_coffe_maker.png',
                    'assets/img/product/2_p2_coffe_maker.png',
                    'assets/img/product/2_p3_coffe_maker.png',
                ]),
                'price' => 30000,
                'stock' => 40,
                'description' => 'Experience coffee on the go with this Portable Coffee Maker, the perfect solution for busy professionals, travelers, and outdoor adventurers. Designed for convenience and simplicity, this compact coffee maker lets you brew rich, flavorful coffee anytime, anywhere. Whether you’re at the office, hiking in nature, or on a road trip, this device ensures you never miss out on a perfect cup. Its lightweight build, easy-to-use mechanism, and efficient extraction technology bring out the best aromas and taste from your favorite coffee beans. Compact yet powerful, this coffee maker guarantees a fresh and energizing brew wherever life takes you.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'category_id' => 1,
                'product_name' => 'Cafe Direct',
                'product_img' => json_encode([
                    'assets/img/product/2_p1_instan_coffe.png',
                    'assets/img/product/2_p2_instan_coffe.png',
                ]),
                'price' => 25000,
                'stock' => 50,
                'description' => 'Cafe Direct is a specialty coffee sourced directly from the best coffee farmers, delivering rich flavors and a unique character. With transparent and sustainable processing, each coffee bean is selected with high quality standards to ensure perfection of aroma and flavor. Having a strong flavor profile with moderate acidity and a touch of natural sweetness from molasses and dark chocolate, this coffee provides a full-bodied sensation on the tongue that is suitable for true coffee connoisseurs. The direct relationship with farmers allows this product to come with maximum freshness and support the economy of local communities. Suitable for brewing with various methods such as pour-over, French press, or as an espresso to create a more intense experience. Cafe Direct is not just about enjoying coffee, but also about supporting the welfare of farmers and a sustainable coffee industry.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'category_id' => 2,
                'product_name' => 'Otten Coffe Maker',
                'product_img' => json_encode([
                    'assets/img/product/3_p1_coffe_maker.png',
                    'assets/img/product/3_p2_coffe_maker.png',
                ]),
                'price' => 30000,
                'stock' => 40,
                'description' => 'The Otten Coffee Maker redefines simplicity and elegance in home brewing. Crafted for coffee lovers who appreciate efficiency without compromising quality, this machine produces rich, aromatic coffee with every brew. Whether you prefer a bold espresso shot or a creamy latte, this coffee maker ensures a smooth, flavorful experience. Designed with ease of use in mind, it features a durable build, intuitive controls, and a stylish design that complements any kitchen space. Enjoy cafe-style coffee at home and indulge in the perfect balance of taste and convenience, making every cup a delightful moment.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'category_id' => 3,
                'product_name' => 'Moca Pot Expreso',
                'product_img' => json_encode([
                    'assets/img/product/2_p1_coffe_a.png',
                    'assets/img/product/2_p2_coffe_a.png',
                ]),
                'price' => 28000,
                'stock' => 45,
                'description' => 'Experience the timeless tradition of Italian coffee-making with the Moka Pot Espresso, a must-have for lovers of bold, aromatic espresso. Crafted for simplicity and efficiency, this classic stovetop coffee maker extracts deep, rich flavors from your favorite coffee grounds, ensuring a smooth, full-bodied brew every time. Its durable design and easy-to-use mechanism make it the perfect addition to any kitchen, allowing you to savor a barista-quality espresso at home without the need for complex machines. Whether you are starting your morning with a strong shot or enjoying a leisurely afternoon coffee, this moka pot delivers an authentic experience with every cup',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'category_id' => 4,
                'product_name' => '1 Set of Coffee Brewing Tools',
                'product_img' => json_encode([
                    'assets/img/product/1_p3_coffe_gift.png',
                    'assets/img/product/1_p2_coffe_gift.png',
                    'assets/img/product/1_p1_coffe_gift.png',
                ]),
                'price' => 28000,
                'stock' => 45,
                'description' => 'Craft the perfect cup of coffee with this premium 1 Set of Coffee Brewing Tools, designed for enthusiasts who appreciate precision and quality. This complete set includes essential brewing equipment to help you achieve rich, aromatic coffee with ease. Whether you prefer pour-over, French press, or manual espresso brewing, each tool is carefully selected to enhance your coffee-making experience. Made from durable materials and crafted for efficiency, this set is ideal for home baristas and professionals alike. Elevate your coffee rituals and enjoy a seamless brewing experience with this carefully curated collection',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'category_id' => 4,
                'product_name' => '1 Set Mug Coffe Premium',
                'product_img' => json_encode([
                    'assets/img/product/2_p1_coffe_gift.png',
                    'assets/img/product/2_p2_coffe_gift.png',
                    'assets/img/product/2_p3_coffe_gift.png',
                ]),
                'price' => 28000,
                'stock' => 45,
                'description' => 'Sip your favorite coffee in style with the 1 Set Mug Coffee Premium, a beautifully designed collection that adds elegance to every coffee moment. Crafted for comfort and aesthetics, these premium mugs provide the perfect balance of durability and sophistication, making them ideal for both casual and special occasions. Whether you are enjoying a smooth cappuccino, a rich espresso, or a creamy latte, these mugs enhance the experience with their high-quality build and stylish design. A great addition to any coffee lover’s collection, this set makes every cup feel extra special',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'category_id' => 2,
                'product_name' => 'BOLDE Expresso Coffee Maker G8 Coffee Machine',
                'product_img' => json_encode([
                    'assets/img/product/1_p1_coffe_maker.png',
                    'assets/img/product/1_p2_coffe_maker.png',
                    'assets/img/product/1_p3_coffe_maker.png',
                ]),
                'price' => 30000,
                'stock' => 40,
                'description' => 'Elevate your coffee experience with the BOLDE Expresso Coffee Maker G8—a powerful and stylish coffee machine designed for those who appreciate rich, aromatic espresso. Whether you’re a casual coffee lover or a devoted enthusiast, this machine delivers barista-quality coffee in the comfort of your home. Engineered with precision, it offers effortless brewing with a smooth, velvety crema that enhances every sip. Enjoy the convenience of easy operation, a sleek modern design, and high-performance technology that ensures consistent, flavorful results. Start your mornings right with a fresh, full-bodied cup of espresso, cappuccino, or latte—all at the press of a button.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'category_id' => 1,
                'product_name' => 'Coffe Arabica Region',
                'product_img' => json_encode([
                    'assets/img/product/3_p2_instan_coffe.png',
                    'assets/img/product/3_p1_instan_coffe.png',
                    'assets/img/product/3_p3_instan_coffe.png',
                ]),
                'price' => 25000,
                'stock' => 50,
                'description' => 'Coffe Arabica Region offers an authentic and rich coffee experience from the finest coffee-growing regions. With selectively chosen Arabica beans, this coffee presents the perfect balance of gentle acidity and distinctive floral aromas. Its complex flavor delivers a touch of natural sweetness with hints of chocolate and tropical fruits, making it an ideal choice for coffee lovers who want a smooth taste with a strong character. The precision roasting process ensures the best quality in every sip, making it suitable to be enjoyed as espresso, cappuccino, or manual brew. Sourced from the finest coffee plantations, every cup is a journey of flavor that brings you closer to the essence of real coffee from different parts of the world',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'category_id' => 3,
                'product_name' => 'Coffe Bar Syrup',
                'product_img' => json_encode([
                    'assets/img/product/1_p1_coffe_a.png',
                    'assets/img/product/1_p2_coffe_a.png',
                ]),
                'price' => 28000,
                'stock' => 45,
                'description' => 'Enhance your coffee creations with Coffee Bar Syrup, the ultimate choice for baristas and coffee enthusiasts alike. Designed to complement your favorite beverages, this syrup delivers a harmonious blend of sweetness and rich flavors, elevating every sip. Whether you’re crafting a velvety cappuccino, a classic latte, or an indulgent iced coffee, this syrup adds a sophisticated touch that transforms your drink into a café-quality masterpiece. Perfect for home use or professional coffee setups, its smooth consistency and delightful aroma capture the essence of an authentic coffee experience. Unleash your creativity and bring café-style drinks to life with this must-have coffee enhancer.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
