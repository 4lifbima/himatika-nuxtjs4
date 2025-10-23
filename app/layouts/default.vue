<template>
  <div class="bg-white text-slate-900 font-sans antialiased">
    
    <!-- =============================== -->
    <!--          HEADER / NAVBAR          -->
    <!-- =============================== -->
    <header class="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/80 backdrop-blur-md">
      <nav class="container mx-auto flex items-center justify-between p-4 lg:px-8">
        <!-- Logo -->
        <NuxtLink to="/" class="text-2xl font-bold font-display text-primary">
          <img src="/horizontal.png" class="w-52" alt="">
        </NuxtLink>
        
        <!-- Navigasi Desktop -->
        <ul class="hidden items-center space-x-8 lg:flex">
          <li><NuxtLink to="/" class="text-sm font-medium text-slate-700 transition-colors hover:text-primary" active-class="text-primary">Beranda</NuxtLink></li>
          <li><NuxtLink to="/tentang" class="text-sm font-medium text-slate-700 transition-colors hover:text-primary" active-class="text-primary">Tentang Kami</NuxtLink></li>
          <li><NuxtLink to="/struktur-organisasi" class="text-sm font-medium text-slate-700 transition-colors hover:text-primary" active-class="text-primary">Struktur</NuxtLink></li>
          <li><NuxtLink to="/program-kerja" class="text-sm font-medium text-slate-700 transition-colors hover:text-primary" active-class="text-primary">Program Kerja</NuxtLink></li>
          <li><NuxtLink to="/galeri" class="text-sm font-medium text-slate-700 transition-colors hover:text-primary" active-class="text-primary">Galeri</NuxtLink></li>
          <li><NuxtLink to="/blog" class="text-sm font-medium text-slate-700 transition-colors hover:text-primary" active-class="text-primary">Blog</NuxtLink></li>
        </ul>
        
        <!-- Tombol CTA -->
        <a href="#" class="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-opacity-90 hover:shadow-primary/40 lg:block">
          Gabung Sekarang
        </a>

        <!-- Tombol Mobile (Hamburger) -->
        <!-- Tambahkan @click event di sini -->
        <button @click="isMobileMenuOpen = true" class="rounded-lg p-2 text-slate-700 hover:bg-gray-100 lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </nav>
    </header>

    <!-- =============================== -->
    <!--       MENU MOBILE (BARU)        -->
    <!-- =============================== -->
    <!-- Tampilkan menu ini jika isMobileMenuOpen adalah true -->
    <!-- 
      Kita gunakan transisi untuk efek 'mewah'
      'v-if' akan menambah/menghapus elemen dari DOM
    -->
    <Transition
      enter-active-class="transition-opacity ease-out duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isMobileMenuOpen" class="fixed inset-0 z-[100] h-screen w-full bg-white lg:hidden">
        <div class="flex h-full w-full flex-col p-6">
          <!-- Header Menu Mobile (Logo & Tombol Close) -->
          <div class="flex items-center justify-between">
            <NuxtLink to="/" @click="isMobileMenuOpen = false" class="text-2xl font-bold font-display text-primary">
              HIMATIKA
            </NuxtLink>
            <!-- Tombol Close (X) -->
            <button @click="isMobileMenuOpen = false" class="rounded-lg p-2 text-slate-700 hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- List Link Navigasi Mobile -->
          <ul class="mt-16 flex flex-col space-y-6">
            <!-- 
              Tambahkan @click="isMobileMenuOpen = false" di setiap link
              agar menu otomatis tertutup saat link di-klik.
            -->
            <li><NuxtLink to="/" @click="isMobileMenuOpen = false" class="block py-2 text-xl font-semibold text-slate-700" active-class="text-primary">Beranda</NuxtLink></li>
            <li><NuxtLink to="/tentang" @click="isMobileMenuOpen = false" class="block py-2 text-xl font-semibold text-slate-700" active-class="text-primary">Tentang Kami</NuxtLink></li>
            <li><NuxtLink to="/struktur-organisasi" @click="isMobileMenuOpen = false" class="block py-2 text-xl font-semibold text-slate-700" active-class="text-primary">Struktur</NuxtLink></li>
            <li><NuxtLink to="/program-kerja" @click="isMobileMenuOpen = false" class="block py-2 text-xl font-semibold text-slate-700" active-class="text-primary">Program Kerja</NuxtLink></li>
            <li><NuxtLink to="/galeri" @click="isMobileMenuOpen = false" class="block py-2 text-xl font-semibold text-slate-700" active-class="text-primary">Galeri</NuxtLink></li>
            <li><NuxtLink to="/blog" @click="isMobileMenuOpen = false" class="block py-2 text-xl font-semibold text-slate-700" active-class="text-primary">Blog</NuxtLink></li>
          </ul>

          <a href="#" class="mt-12 w-full rounded-full bg-primary px-5 py-3 text-center text-base font-semibold text-white shadow-lg shadow-primary/40">
            Gabung Sekarang
          </a>
        </div>
      </div>
    </Transition>


    <!-- Wrapper Konten Utama -->
    <main>
      <slot />
    </main>

    <!-- =============================== -->
    <!--            FOOTER               -->
    <!-- =============================== -->
    <footer id="kontak" class="border-t border-gray-200/70 bg-white">
      <div class="container mx-auto grid grid-cols-1 gap-12 px-4 py-16 lg:grid-cols-4 lg:px-8">
        
        <!-- Kolom 1: Logo & Deskripsi -->
        <div>
          <NuxtLink to="/" class="text-xl font-display text-primary">
            <img src="/horizontal.png" class="w-52" alt="">
          </NuxtLink>
          <p class="mt-3 text-sm text-slate-600">
            Himpunan Mahasiswa Matematika.
            <br>
            Universitas Negeri Gorontalo
          </p>
          <p class="mt-2 text-sm text-slate-600">
            [Alamat Sekretariat Anda]
          </p>
        </div>

        <!-- Kolom 2: Navigasi Cepat -->
        <div>
          <h4 class="font-display text-sm font-semibold uppercase tracking-wider text-slate-800">Navigasi</h4>
          <ul class="mt-4 space-y-2">
            <li><NuxtLink to="/tentang" class="text-sm text-slate-600 transition-colors hover:text-primary">Tentang Kami</NuxtLink></li>
            <li><NuxtLink to="/struktur-organisasi" class="text-sm text-slate-600 transition-colors hover:text-primary">Struktur</NuxtLink></li>
            <li><NuxtLink to="/program-kerja" class="text-sm text-slate-600 transition-colors hover:text-primary">Program Kerja</NuxtLink></li>
            <li><NuxtLink to="/galeri" class="text-sm text-slate-600 transition-colors hover:text-primary">Galeri</NuxtLink></li>
            <li><NuxtLink to="/blog" class="text-sm text-slate-600 transition-colors hover:text-primary">Blog</NuxtLink></li>
          </ul>
        </div>

        <!-- Kolom 3: Kontak -->
        <div>
          <h4 class="font-display text-sm font-semibold uppercase tracking-wider text-slate-800">Kontak Kami</h4>
          <ul class="mt-4 space-y-2">
            <li><a href="mailto:info@himatika.id" class="text-sm text-slate-600 transition-colors hover:text-primary">info@himatika.id</a></li>
            <li><a href="tel:+62123456789" class="text-sm text-slate-600 transition-colors hover:text-primary">+62 123 456 789</a></li>
          </ul>
        </div>
        
        <!-- Kolom 4: Media Sosial -->
        <div>
          <h4 class="font-display text-sm font-semibold uppercase tracking-wider text-slate-800">Ikuti Kami</h4>
          <div class="mt-4 flex space-x-4">
                <GlobeAltIcon class="h-6 w-6 text-gray-600 hover:text-primary" />
                <EnvelopeIcon class="h-6 w-6 text-gray-600 hover:text-primary" />
                <HeartIcon class="h-6 w-6 text-gray-600 hover:text-primary" />
          </div>
        </div>
        
      </div>

      <!-- Copyright Bar -->
      <div class="border-t border-gray-200/70 bg-white">
        <div class="container mx-auto px-4 py-6 text-center text-sm text-slate-500 lg:px-8">
          &copy; {{ new Date().getFullYear() }} Himpunan Mahasiswa Matematika. Dibuat dengan <span class="text-red-500">❤</span> menggunakan Nuxt & Tailwind.
        </div>
      </div>
    </footer>
    
  </div>
</template>

<script setup>
import { GlobeAltIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'
import { HeartIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'

// Ini adalah state untuk mengontrol menu mobile
const isMobileMenuOpen = ref(false)
</script>
