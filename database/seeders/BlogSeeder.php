<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('blogs')->insert([
            [
                'title' => 'The Fascinating History of Coffee: A Journey Through Time',
                'blog_img' => 'assets/img/blog/history_coffe.jpeg',
                'description' => 'Coffee has played a remarkable role in human history for centuries, evolving from a simple brewed beverage into a global phenomenon. Originating in Ethiopia, coffee was first discovered by a goat herder named Kaldi who noticed his goats becoming unusually energetic after eating coffee cherries. The knowledge of coffee spread across the Arabian Peninsula, leading to the establishment of coffee houses known as "qahveh khaneh," which became centers for intellectual discussion. By the 17th century, coffee had reached Europe, where it was embraced as a sophisticated beverage, often replacing alcoholic drinks during morning routines. Today, coffee remains a staple in cultures worldwide, with different brewing techniques and traditions reflecting diverse heritage and artistry.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'title' => 'Exploring the Diverse World of Coffee Varieties',
                'blog_img' => 'assets/img/blog/varietes_coffe.jpeg',
                'description' => 'Coffee is not just one singular entity; it exists in a multitude of varieties, each with distinct flavors, growing conditions, and processing methods. The two most widely consumed species are Arabica and Robusta. Arabica beans, known for their delicate and nuanced flavors, grow in higher altitudes and are celebrated for their smooth and slightly acidic taste. On the other hand, Robusta beans, cultivated at lower elevations, have a stronger, bolder flavor with a higher caffeine content. Beyond these two, lesser-known coffee varieties like Liberica and Excelsa offer unique taste profiles, contributing to the rich diversity of the coffee world. Additionally, geographical influences play a significant role, as beans grown in Ethiopia may feature floral and citrus notes, while those from Sumatra tend to have deep, earthy characteristics. Understanding coffee varieties allows enthusiasts to appreciate the depth and complexity of this beloved drink.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'title' => 'From Bean to Cup: The Intricate Process of Coffee Production',
                'blog_img' => 'assets/img/blog/production_coffe.jpeg',
                'description' => 'The journey of coffee from a simple bean to a perfectly brewed cup involves multiple meticulous stages, each influencing the final taste. It all begins with coffee cherries being harvested, often by hand, to ensure only ripe cherries are collected. After harvesting, beans undergo either a washed (wet) or natural (dry) process, impacting their flavor profile. Following fermentation and drying, the beans are roasted, a crucial step that enhances their aromatic compounds and transforms them into rich, flavorful coffee. The roasting level—light, medium, or dark—plays a significant role in defining the final taste. Grinding the beans to the appropriate texture based on the brewing method further dictates the extraction quality. Whether brewed through a traditional espresso machine, pour-over technique, or cold brew method, each step in the coffee-making process affects the balance of acidity, bitterness, and sweetness, creating a complex yet delightful experience.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'title' => 'The Health Benefits and Risks of Coffee Consumption',
                'blog_img' => 'assets/img/blog/health_coffe.jpeg',
                'description' => 'Coffee is more than just a morning pick-me-up—it boasts numerous health benefits that can positively impact overall well-being. It is a powerful source of antioxidants, which help combat free radicals and reduce the risk of chronic diseases. Studies suggest that regular coffee consumption may lower the chances of developing neurodegenerative disorders such as Alzheimer’s and Parkinson’s disease. Additionally, coffee enhances cognitive function, boosts alertness, and improves mood due to its caffeine content. However, moderation is key, as excessive intake can lead to adverse effects such as increased heart rate, digestive issues, and insomnia. Those sensitive to caffeine should consider limiting their intake, opting for decaffeinated versions, or consuming coffee strategically throughout the day to prevent disruption of sleep patterns. Ultimately, when consumed mindfully, coffee can be a flavorful and beneficial addition to a balanced diet.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'title' => 'The Art of Brewing Coffee: Methods for the Perfect Cup',
                'blog_img' => 'assets/img/blog/brew_coffe.jpeg',
                'description' => 'Brewing coffee is both a science and an art, requiring precise measurements and careful attention to detail to achieve the perfect cup. Different brewing methods yield varying flavors and intensities. The pour-over technique, using tools like V60 or Chemex, produces a clean and bright taste by allowing the coffee to steep gradually. The French press, a more immersion-based method, creates a fuller-bodied, rich brew with its longer steeping process. Espresso machines apply high pressure, extracting concentrated and bold coffee that serves as the base for drinks like lattes and cappuccinos. Cold brew, steeped over several hours at a lower temperature, results in a smooth, naturally sweet beverage. Factors such as grind size, water temperature, and brewing time all contribute to the final taste, making coffee preparation an intricate yet rewarding experience for enthusiasts.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
