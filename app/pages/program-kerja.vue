<template>
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
</template>

<script setup>
// Menetapkan Judul Halaman
useHead({
  title: 'Program Kerja',
  meta :[
    { property: 'og:title', content: 'Program Kerja' },
    { property: 'og:description', content: 'Proker proker yang akan di laksanakan di HIMATIKA periode 2025/2026' },
    { property: 'og:image', content: 'https://himatika-nuxtjs.vercel.app/icon-himatika.png' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://himatika-nuxtjs.vercel.app' },
  ]
})
</script>