<template>
  <div class="container mx-auto">
    <div class="mt-10">
      <form @submit.prevent="_submitNewBarang" class="max-w-sm mx-auto">
        <div class="mb-2">
          <label for="name" class="block text-sm font-medium text-gray-700">Nama barang</label>
          <input v-model="form.nama" type="text" name="price" id="name" class="border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full py-2 px-3 sm:text-sm border-gray-300 rounded-md" placeholder="Nama barang">
        </div>
        <div class="mb-2">
          <label for="kategori" class="block text-sm font-medium text-gray-700">Kategori</label>
          <input v-model="form.categori" type="text" name="price" id="kategori" class="border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full py-2 px-3 sm:text-sm border-gray-300 rounded-md" placeholder="Kategori">
        </div>
        <div class="mb-2">
          <label for="berat" class="block text-sm font-medium text-gray-700">Berat</label>
          <input v-model="form.berat" type="number" name="price" id="berat" class="border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full py-2 px-3 sm:text-sm border-gray-300 rounded-md" placeholder="Berat">
        </div>
        <div class="mt-2">
          <button type="submit" class="bg-gray-800 text-white block w-full py-2 rounded-md">Simpan</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "New",
  data() {
    return {
      form: {
        nama: '',
        categori: '',
        berat: 0
      }
    }
  },
  methods: {
    ...mapActions('barang', ['storeNewbarang']),
    async _submitNewBarang() {
      try {
        await this.storeNewbarang(this.form)
        await this.$router.replace({name: 'barang.index'})
      } catch (e) {
      }
    }
  }
}
</script>

<style scoped>

</style>