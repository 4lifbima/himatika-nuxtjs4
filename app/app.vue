<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// Kita pindahkan Head global ke sini
useHead({
  titleTemplate: (titleChunk) => {
    // Ini akan membuat judul halaman dinamis
    // Contoh: "Tentang Kami - HMMatika"
    return titleChunk ? `${titleChunk} - HIMATIKA` : 'HIMATIKA - Himpunan Mahasiswa Matematika';
  },
  meta: [
    { name: 'description', content: 'Website resmi Himpunan Mahasiswa Matematika. Eksplorasi Simetri Tak Terbatas.' }
  ],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap' }
  ]
})
</script>

<style>
/* Global style tetap di sini.
  Tapi kita HAPUS `scroll-behavior: smooth;` 
  karena NuxtLink sudah menanganinya.
*/
</style>