<template>
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
</template>

<script setup>
// Menetapkan Judul Halaman
useHead({
  title: 'Galeri'
})
</script>