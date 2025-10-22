<template>
  <div>
    <!-- =============================== -->
    <!--          HERO SECTION           -->
    <!-- =============================== -->
    <section id="beranda" class="relative overflow-hidden pt-24 lg:pt-32">
      <!-- (Kode Hero Section Anda yang sudah ada... biarkan saja) -->
      <div class="absolute -top-1/4 left-0 -z-10 h-full w-full opacity-30 [mask-image:radial-gradient(circle_at_center,white,transparent)]">
        <div class="absolute inset-0 bg-gradient-to-br from-primary/30 via-white to-white"></div>
      </div>
      <div class="container mx-auto grid grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:px-8 mb-6">
        <div class="py-12 text-center lg:text-left">
          <h1 class="font-display text-5xl font-extrabold tracking-tighter text-slate-900 md:text-6xl lg:text-7xl">
            Eksplorasi
            <span class="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Simetri
            </span>
            Tak Terbatas.
          </h1>
          <p class="mt-6 text-lg leading-relaxed text-slate-600 md:text-xl">
            Selamat datang di Himpunan Mahasiswa Matematika. Wadah bagi para pemikir logis, pemecah masalah, dan penjelajah angka untuk berkolaborasi dan berinovasi.
          </p>
          <div class="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <NuxtLink to="/program-kerja" class="w-full transform rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-opacity-90 hover:shadow-primary/50 sm:w-auto">
              Lihat Program Kami
            </NuxtLink>
            <NuxtLink to="/tentang" class="w-full transform rounded-full border-2 border-slate-300 px-8 py-3.5 text-base font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary sm:w-auto">
              Pelajari Lebih
            </NuxtLink>
          </div>
        </div>
        <div class="hidden lg:block">
          <img 
            src="/icon-himatika.png" 
            alt="Ilustrasi Matematika Abstrak" 
            class="h-full w-full rounded-3xl object-cover shadow-2xl shadow-primary/20"
          >
          
        </div>
      </div>
    </section>

    <!-- =============================== -->
    <!--     SAMBUTAN KETUA (BARU)       -->
    <!-- =============================== -->
    <section id="sambutan" class="bg-slate-50 py-24 lg:py-32">
      <div class="container mx-auto grid grid-cols-1 gap-12 px-4 lg:grid-cols-2 lg:items-center lg:gap-24 lg:px-8">
        <!-- Kolom Gambar -->
        <div class="relative mx-auto w-full max-w-md">
          <div class="absolute -bottom-4 -right-4 h-full w-full rounded-3xl bg-primary"></div>
          <img 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfGFsbHx8fHx8fHx8fDE3MzIzOTcyMjJ8&ixlib=rb-4.0.3&q=80&w=1080" 
            alt="Foto Ketua Umum HMMatika"
            class="relative h-full w-full rounded-3xl object-cover shadow-2xl"
          >
          
        </div>
        
        <!-- Kolom Teks Sambutan -->
        <div class="text-center lg:text-left">
          <span class="font-semibold uppercase tracking-wider text-primary">Sambutan</span>
          <h2 class="mt-2 font-display text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
            Dari Ketua Umum
          </h2>
          <blockquote class="mt-6 border-l-4 border-primary pl-6 text-lg italic leading-relaxed text-slate-600 md:text-xl">
            "Matematika bukan hanya tentang angka, tetapi tentang pola, logika, dan keindahan struktur. Di HIMATIKA, kami membangun jembatan antara teori dan aplikasi nyata."
          </blockquote>
          <h4 class="mt-8 font-display text-xl font-semibold text-slate-900">
            [Nama Ketua Umum Anda]
          </h4>
          <p class="text-base text-slate-500">Ketua Umum HIMATIKA Periode 2024/2025</p>
        </div>
      </div>
    </section>

    <!-- =============================== -->
    <!--       ARTIKEL BLOG (BARU)       -->
    <!-- =============================== -->
    <section id="blog-home" class="bg-white py-24 lg:py-32">
      <div class="container mx-auto px-4 lg:px-8">
        <!-- Judul Section -->
        <div class="mx-auto max-w-3xl text-center">
          <span class="font-semibold uppercase tracking-wider text-primary">Blog</span>
          <h2 class="mt-2 font-display text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
            Artikel & Wawasan Terbaru
          </h2>
          <p class="mt-4 text-lg text-slate-600">
            Ikuti terus perkembangan, riset, dan cerita terbaru dari dunia matematika dan himpunan kami.
          </p>
        </div>

        <!-- Grid Blog Card -->
        <!-- 
          Kita gunakan v-if="latestPosts" untuk memastikan data sudah ada
          sebelum mencoba menampilkannya.
        -->
        <div v-if="latestPosts && latestPosts.length > 0" class="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <!-- 
            Kita looping (v-for) data 'latestPosts' yang kita ambil
            dari <script setup> di bawah.
          -->
          <div 
            v-for="post in latestPosts" 
            :key="post._path"
            class="group transform overflow-hidden rounded-2xl border border-gray-200/70 bg-white shadow-md transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
          >
            <!-- 
              Gunakan NuxtLink untuk mengarahkan ke halaman detail artikel
              :to="post._path" akan otomatis mengarah ke /blog/nama-artikel-anda
            -->
            <NuxtLink :to="post._path">
              <img 
                :src="post.image || 'https://placehold.co/600x400/5222e3/white?text=HMMatika'" 
                :alt="post.title"
                class="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              >
              
              <div class="p-6">
                <h3 class="font-display text-xl font-semibold text-slate-800 line-clamp-2">
                  {{ post.title }}
                </h3>
                <p class="mt-2 text-sm text-slate-600 line-clamp-3">
                  {{ post.description }}
                </p>
                <span class="mt-4 inline-block text-sm font-semibold text-primary">
                  Baca Selengkapnya &rarr;
                </span>
              </div>
            </NuxtLink>
          </div>
        </div>
        
        <!-- Tombol "Lihat Semua" -->
        <div class="mt-16 text-center">
          <NuxtLink to="/blog" class="transform rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-opacity-90 hover:shadow-primary/50">
            Lihat Semua Artikel
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
// Menetapkan Judul Halaman khusus untuk Beranda
useHead({
  title: 'Beranda' // Ini akan menjadi "Beranda - HMMatika"
})

// Mengambil 3 artikel terbaru dari folder /content/blog
// 'sort' diurutkan berdasarkan tanggal 'desc' (terbaru dulu)
const { data: latestPosts } = await useAsyncData('latest-posts', () => 
  queryContent('/blog')
    .sort({ date: -1 }) // -1 = descending (terbaru)
    .limit(3)
    .find()
)
</script>
