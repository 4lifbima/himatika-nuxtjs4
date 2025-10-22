<template>
  <section id="beranda" class="relative overflow-hidden pt-24 lg:pt-32">
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
          src="https://images.unsplash.com/photo-1596496181848-3013d4405a40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfGFsbHx8fHx8fHx8fDE3MzIzMzg3NDZ8&ixlib=rb-4.0.3&q=80&w=1080" 
          alt="Ilustrasi Matematika Abstrak" 
          class="h-full w-full rounded-3xl object-cover shadow-2xl shadow-primary/20"
        >
        
      </div>
    </div>
  </section>

  </template>

<script setup>
// Menetapkan Judul Halaman khusus untuk Beranda
useHead({
  title: 'Beranda' // Ini akan menjadi "Beranda - HMMatika"
})
</script>