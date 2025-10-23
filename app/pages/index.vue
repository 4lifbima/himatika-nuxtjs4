<template>
  <div>
    <!-- =============================== -->
    <!--          HERO SECTION           -->
    <!-- =============================== -->
    <!-- ... (KODE HERO SECTION ANDA, TIDAK BERUBAH) ... -->
    <section id="beranda" class="relative overflow-hidden pt-24 lg:pt-32">
      <!-- (Kode Hero Section Anda yang sudah ada... biarkan saja) -->
      <div class="absolute -top-1/4 left-0 -z-10 h-full w-full opacity-30 [mask-image:radial-gradient(circle_at_center,white,transparent)]">
        <div class="absolute inset-0 bg-gradient-to-br from-primary/30 via-white to-white"></div>
      </div>
      <div class="container mx-auto grid grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
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
            :src="icon" 
            alt="Ilustrasi Matematika Abstrak" 
            class="h-full w-full rounded-3xl object-cover"
          >
          
        </div>
      </div>
    </section>

    <!-- =============================== -->
    <!--     SAMBUTAN KETUA (BARU)       -->
    <!-- =============================== -->
    <!-- ... (KODE SAMBUTAN KETUA ANDA, TIDAK BERUBAH) ... -->
    <section id="sambutan" class="bg-slate-50 py-24 lg:py-32">
      <div class="container mx-auto grid grid-cols-1 gap-12 px-4 lg:grid-cols-2 lg:items-center lg:gap-24 lg:px-8">
        <!-- Kolom Gambar -->
        <div class="relative mx-auto w-full max-w-md">
          <div class="absolute -bottom-4 -right-4 h-full w-full rounded-3xl bg-primary"></div>
          <img 
            :src="ketum"
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
            "Matematika bukan hanya tentang angka, tetapi tentang pola, logika, dan keindahan struktur. Di HIMATIKA, kami membangun jembatan antara teori dan aplikasi nyata. Ini adalah bidang studi yang mengorganisir teori, metode, dan teorema untuk kebutuhan ilmu pengetahuan dan matematika itu sendiri, dengan dua cabang utama: matematika murni (konsep abstrak) dan matematika terapan (penerapan pada disiplin lain seperti fisika dan teknik). "
          </blockquote>
          <h4 class="mt-8 font-display text-xl font-semibold text-slate-900">
            Adriyan Pakaya
          </h4>
          <p class="text-base text-slate-500">Ketua Umum HIMATIKA Periode 2025/202</p>
        </div>
      </div>
    </section>

    <!-- =============================== -->
    <!--       ARTIKEL BLOG (UPDATED)    -->
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
          Kita ganti 'latestPosts' menjadi 'latestPostsFromAPI'
          untuk lebih jelas
        -->
        <div v-if="latestPostsFromAPI && latestPostsFromAPI.length > 0" class="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <!-- 
            Looping data dari API.
            Perhatikan perubahan 'post.post_image', 'post.post_title', dll.
          -->
          <div 
            v-for="post in latestPostsFromAPI" 
            :key="post.post_id"
            class="group transform overflow-hidden rounded-2xl border border-gray-200/70 bg-white shadow-md transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
          >
            <!-- 
              PENTING: :to link sekarang menggunakan 'post.post_name' (slug)
            -->
            <NuxtLink :to="`/blog/${post.post_name}`">
              <img 
                :src="post.post_image || 'https://placehold.co/600x400/5222e3/white?text=HIMATIKA'" 
                :alt="post.post_title"
                class="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              >
              
              <div class="p-6">
                <h3 class="font-display text-xl font-semibold text-slate-800 line-clamp-2">
                  {{ post.post_title }}
                </h3>
                <!-- Kita gunakan 'post_excerpt' untuk deskripsi singkat -->
                <p class="mt-2 text-sm text-slate-600 line-clamp-3" v-html="post.post_excerpt"></p>
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

    <section id="proker" class="bg-white py-24 lg:py-32">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <span class="font-semibold uppercase tracking-wider text-primary">Aktivitas Kami</span>
        <h2 class="mt-2 font-display text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
          Program Unggulan
        </h2>
        <p class="mt-4 text-lg text-slate-600">
          Beberapa program kerja utama kami yang dirancang untuk mengembangkan potensi mahasiswa.
        </p>
      </div>

      <div class="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div class="group transform overflow-hidden rounded-2xl border border-gray-200/70 bg-white shadow-md transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfGFsbHx8fHx8fHx8fDE3MzIzMzg4NTR8&ixlib=rb-4.0.3&q=80&w=1080" class="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105" alt="Pelatihan">
          
          <div class="p-6">
            <h3 class="font-display text-xl font-semibold text-slate-800">Mathematics Olympiad</h3>
            <p class="mt-2 text-sm text-slate-600">Kompetisi matematika tahunan tingkat regional untuk mengasah kemampuan analisis dan pemecahan masalah.</p>
            <span class="mt-4 inline-block text-sm font-semibold text-primary">Divisi Akademik</span>
          </div>
        </div>

        <div class="group transform overflow-hidden rounded-2xl border border-gray-200/70 bg-white shadow-md transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
          <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfGFsbHx8fHx8fHx8fDE3MzIzMzg4NzZ8&ixlib=rb-4.0.3&q=80&w=1080" class="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105" alt="Seminar">

          <div class="p-6">
            <h3 class="font-display text-xl font-semibold text-slate-800">Seminar Nasional "Data Science"</h3>
            <p class="mt-2 text-sm text-slate-600">Menghadirkan pakar industri untuk membahas tren terbaru di bidang data science dan big data.</p>
            <span class="mt-4 inline-block text-sm font-semibold text-primary">Divisi Humas</span>
          </div>
        </div>

        <div class="group transform overflow-hidden rounded-2xl border border-gray-200/70 bg-white shadow-md transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
          <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfGFsbHx8fHx8fHx8fDE3MzIzMzg5MDN8&ixlib=rb-4.0.3&q=80&w=1080" class="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105" alt="Pengabdian">
          
          <div class="p-6">
            <h3 class="font-display text-xl font-semibold text-slate-800">Bakti Sosial & Desa Binaan</h3>
            <p class="mt-2 text-sm text-slate-600">Program pengabdian masyarakat untuk mengaplikasikan ilmu matematika dalam kehidupan sehari-hari.</p>
            <span class="mt-4 inline-block text-sm font-semibold text-primary">Divisi Sosial</span>
          </div>
        </div>

        </div>
    </div>
  </section>
  <section id="galeri" class="bg-slate-900 py-24 lg:py-32">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="font-display text-4xl font-bold tracking-tight text-white lg:text-5xl">
          Galeri Kegiatan
        </h2>
        <p class="mt-4 text-lg text-slate-300">
          Momen-momen berharga yang terekam selama kegiatan kami.
        </p>
      </div>
      
      <div class="mt-16 grid grid-cols-2 grid-rows-2 gap-4 md:grid-cols-4">
        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfGFsbHx8fHx8fHx8fDE3MzIzMzg5Nzh8&ixlib=rb-4.0.3&q=80&w=1080" 
             alt="Foto Galeri 1" 
             class="col-span-2 row-span-2 h-full w-full rounded-2xl object-cover shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-primary/30">
        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfGFsbHx8fHx8fHx8fDE3MzIzMzg5Nzh8&ixlib=rb-4.0.3&q=80&w=1080" 
             alt="Foto Galeri 2" 
             class="h-full w-full rounded-2xl object-cover shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-primary/30">
        <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfGFsbHx8fHx8fHx8fDE3MzIzMzkwMDJ8&ixlib=rb-4.0.3&q=80&w=1080" 
             alt="Foto Galeri 3" 
             class="h-full w-full rounded-2xl object-cover shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-primary/30">
        <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfGFsbHx8fHx8fHx8fDE3MzIzMzkwMjR8&ixlib=rb-4.0.3&q=80&w=1080" 
             alt="Foto Galeri 4" 
             class="h-full w-full rounded-2xl object-cover shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-primary/30">
        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfGFsbHx8fHx8fHx8fDE3MzIzMzkwNDR8&ixlib=rb-4.0.3&q=80&w=1080" 
             alt="Foto Galeri 5" 
             class="h-full w-full rounded-2xl object-cover shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-primary/30">
        
        <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfGFsbHx8fHx8fHx8fDE3MzIzMzkxMTF8&ixlib=rb-4.0.3&q=80&w=1080" 
             alt="Foto Galeri 6" 
             class="h-full w-full rounded-2xl object-cover shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-primary/30">
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfGFsbHx8fHx8fHx8fDE3MzIzMzkxMzB8&ixlib-rb-4.0.3&q=80&w=1080" 
             alt="Foto Galeri 7" 
             class="col-span-2 h-full w-full rounded-2xl object-cover shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-primary/30">
      </div>
    </div>
  </section>
  </div>
</template>

<script setup>
import ketum from '/member/ketum.png'
import icon from '/icon-himatika.png'
useHead({
  title: 'Beranda',
  meta :[
    { property: 'og:title', content: 'Beranda' },
    { property: 'og:description', content: 'Selamat datang di website resmi Himpunan Mahasiswa Matematika. Eksplorasi Simetri Tak Terbatas.' },
    { property: 'og:image', content: 'https://himatika-nuxtjs.vercel.app/icon-himatika.png' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://himatika-nuxtjs.vercel.app' },
  ]
})

const { data: apiResponse } = await useFetch('https://gopos.id/wp-json/wp/v2/posts?_embed');

// Buat computed property untuk mengambil 3 post pertama saja
const latestPostsFromAPI = computed(() => {
  if (apiResponse.value && Array.isArray(apiResponse.value)) {
    return apiResponse.value.slice(0, 3).map(post => ({
      post_id: post.id,
      post_name: post.slug,
      post_title: post.title.rendered,
      post_excerpt: post.excerpt.rendered,
      post_image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null
    }));
  }
  return [];
});
</script>

