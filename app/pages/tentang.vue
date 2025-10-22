<template>
  <section id="tentang" class="py-24 lg:py-32">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <span class="font-semibold uppercase tracking-wider text-primary">Tentang Kami</span>
        <h2 class="mt-2 font-display text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
          Visi & Misi Organisasi
        </h2>
        <p class="mt-4 text-lg text-slate-600">
          Membentuk insan matematis yang berintegritas, inovatif, dan berdampak bagi masyarakat.
        </p>
      </div>

      <div class="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div class="transform rounded-2xl bg-slate-50 p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 lg:p-12">
          <div class="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </div>
          <h3 class="mt-6 font-display text-2xl font-semibold">Visi</h3>
          <p class="mt-3 text-base text-slate-600">
            Menjadi himpunan mahasiswa yang unggul dalam pengembangan keilmuan matematika dan aplikasinya, serta menciptakan ekosistem yang kolaboratif dan suportif.
          </p>
        </div>
        
        <div class="transform rounded-2xl bg-slate-50 p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 lg:p-12">
          <div class="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <h3 class="mt-6 font-display text-2xl font-semibold">Misi</h3>
          <ul class="mt-3 list-inside list-disc space-y-2 text-base text-slate-600">
            <li>Menyelenggarakan kegiatan akademik dan non-akademik.</li>
            <li>Membangun jaringan dengan alumni dan profesional.</li>
            <li>Melakukan pengabdian masyarakat berbasis matematika.</li>
            <li>Mengembangkan bakat dan minat anggota.</li>
          </ul>
        </div>
      </div>
      
      </div>
  </section>
</template>

<script setup>
// Menetapkan Judul Halaman
useHead({
  title: 'Tentang Kami'
})
</script>