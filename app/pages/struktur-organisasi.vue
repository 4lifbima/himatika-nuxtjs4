<template>
  <section id="struktur" class="bg-white py-24 lg:py-32">
    <div class="container mx-auto px-4 lg:px-8">
      <!-- Judul Section -->
      <div class="mx-auto max-w-3xl text-center">
        <span class="font-semibold uppercase tracking-wider text-primary">Organisasi</span>
        <h2 class="mt-2 font-display text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
          Struktur Organisasi
        </h2>
        <p class="mt-4 text-lg text-slate-600">
          Kenali tim yang berdedikasi di balik layar HIMATIKA.
        </p>
      </div>

      <!-- Wrapper Bagan -->
      <div class="mt-20 flex flex-col items-center gap-12">

        <!-- Tingkat 1: BPH Inti (Ketua & Wakil) -->
        <div class="flex flex-col gap-8 text-center md:flex-row md:gap-12">
          <!-- Card Anggota -->
          <div class="flex flex-col items-center border border-primary py-6 px-4 rounded-xl">
            <img class="h-32 w-32 rounded-full object-cover shadow-lg" src="https://placehold.co/200x200/5222e3/white?text=AP" alt="Foto Ketua Umum">
            
            <h3 class="mt-4 font-display text-xl font-semibold text-slate-900">Adriyan Pakaya</h3>
            <p class="text-sm font-medium text-primary">Ketua Umum</p>
          </div>
          <div class="flex flex-col items-center border border-primary py-6 px-4 rounded-xl">
            <img class="h-32 w-32 rounded-full object-cover shadow-lg" src="https://placehold.co/200x200/a894f4/white?text=MRD" alt="Foto Wakil Ketua">
            
            <h3 class="mt-4 font-display text-xl font-semibold text-slate-900">Moh. Raihan Daud</h3>
            <p class="text-sm font-medium text-primary">Sekretaris Umum</p>
          </div>
          <div class="flex flex-col items-center border border-primary py-6 px-4 rounded-xl">
            <img class="h-32 w-32 rounded-full object-cover shadow-lg" src="https://placehold.co/200x200/5222e3/white?text=SRA" alt="Foto Wakil Ketua">
            
            <h3 class="mt-4 font-display text-xl font-semibold text-slate-900">Siti Rahmatia Anu</h3>
            <p class="text-sm font-medium text-primary">Bendahara Umum</p>
          </div>
        </div>
        

        <!-- Garis Penghubung (Visual) -->
        <div class="h-16 w-0.5 bg-slate-300"></div>

        <!-- Tingkat 3: Kepala Divisi -->
        <div class="w-full max-w-5xl">
          <h3 class="mb-10 text-center font-display text-2xl font-semibold text-slate-900">
            Divisi & Departemen
          </h3>
          <div class="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
            <!-- Contoh Divisi 1 -->
            <div class="flex flex-col items-center text-center border border-primary py-6 px-4 rounded-xl">
              <img class="h-28 w-28 rounded-full object-cover shadow-lg" src="https://placehold.co/200x200/ededed/555?text=Foto" alt="Foto Kadiv">
              <h3 class="mt-4 font-display text-lg font-semibold text-slate-900">Nama Kepala Divisi</h3>
              <p class="text-sm font-medium text-primary">Kabid. Akademik</p>
            </div>
            <!-- Contoh Divisi 2 -->
            <div class="flex flex-col items-center text-center border border-primary py-6 px-4 rounded-xl">
              <img class="h-28 w-28 rounded-full object-cover shadow-lg" src="https://placehold.co/200x200/ededed/555?text=Foto" alt="Foto Kadiv">
              <h3 class="mt-4 font-display text-lg font-semibold text-slate-900">Nama Kepala Divisi</h3>
              <p class="text-sm font-medium text-primary">Kabid. Humas</p>
            </div>
            <!-- Contoh Divisi 3 -->
            <div class="flex flex-col items-center text-center border border-primary py-6 px-4 rounded-xl">
              <img class="h-28 w-28 rounded-full object-cover shadow-lg" src="https://placehold.co/200x200/ededed/555?text=Foto" alt="Foto Kadiv">
              <h3 class="mt-4 font-display text-lg font-semibold text-slate-900">Nama Kepala Divisi</h3>
              <p class="text-sm font-medium text-primary">Kabid. Sosial</p>
            </div>
            <!-- Contoh Divisi 4 -->
            <div class="flex flex-col items-center text-center border border-primary py-6 px-4 rounded-xl">
              <img class="h-28 w-28 rounded-full object-cover shadow-lg" src="https://placehold.co/200x200/ededed/555?text=Foto" alt="Foto Kadiv">
              <h3 class="mt-4 font-display text-lg font-semibold text-slate-900">Nama Kepala Divisi</h3>
              <p class="text-sm font-medium text-primary">Kabid. PSDM</p>
            </div>
            <!-- Tambahkan divisi lain di sini -->
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
useHead({
  title: 'Struktur Organisasi'
})
</script>
