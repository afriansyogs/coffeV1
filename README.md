# CoffeV1

## Catatan Teknis:
Project ini menggunakan Laravel 12, inertia.js, react.js, tailwind, daisyUi.
Untuk img dari databse jika menggunakan best practice di simpan di storage milik laravel, namun file yang saya simpan storage tidak akan ter-upload di github sehingga saya menaruhnya di file assets yang bertujuan agar tidak menyulitkan Reviewer, walaupun itu bukan best practice.

## Cara Menjalankan
1. Clone Project
2. composer install
3. cp .env.example .env
4. php artisan key:generate
5. sesuaikan nama DB, username, dan password di .env
6. php artisan migrate
7. php artisan db:seed

## Catatan kecil
"Saya ingin menyampaikan permohonan maaf karena proyek ini belum sepenuhnya selesai. Saya sempat sakit beberapa hari, sehingga ada keterlambatan dalam pengerjaan. Namun, Saya berkomitmen untuk menyelesaikannya paling lambat hari Minggu sebelum weekdays. Saat ini, saya masih dalam proses pemulihan setelah sakit, sehingga membutuhkan sedikit waktu tambahan agar bisa bekerja dengan fokus dan maksimal. Saya sangat berharap dapat memperoleh pengertian dari Anda atas kondisi ini, dan saya sangat menghargai waktu serta kesabaran yang telah diberikan. Terima kasih banyak atas perhatian dan kesempatannya."