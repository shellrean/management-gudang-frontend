<template>
<div class="container mx-auto">
    <div class="mt-10">
        <div class="max-w-3xl mx-auto">
            <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                      <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                          <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Nama
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Berat
                            </th>
                            <th scope="col" class="relative px-6 py-3">
                              <span class="sr-only">Edit</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                          <tr v-for="(barang, index) in barangs" :key="barang.id">
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-sm text-gray-900">{{  barang.nama }}</div>
                              <div class="text-sm text-gray-500">{{ barang.categori }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-sm text-gray-900">{{  barang.berat }} Kg</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="#" @click.prevent="_toEditBarang(index)" class="text-indigo-600 hover:text-indigo-900">Edit</a> |
                              <a href="#" @click.prevent="_deleteBarang(barang.id)" class="text-indigo-600 hover:text-indigo-900">Hapus</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            
        </div>
    
    </div>
    <div class="mt-2">
        <div class="max-w-3xl mx-auto">
            <router-link :to="{ name: 'barang.new' }" class="shadow bg-white border block border-gray-300 text-gray-900 py-2 text-center rounded-md text-sm font-medium">
                Tambah barang
            </router-link>
        </div>
    </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapState('barang', ['barangs'])
  },
  methods: {
    ...mapActions('barang', ['getAllBarang', 'deleteBarang']),
    async _getAllBarang() {
      try {
        await this.getAllBarang()
      } catch (e) {
      }
    },
    _toEditBarang(index) {
      this.$store.commit('barang/_assign_barang_form', this.barangs[index])
      this.$router.push({ name: 'barang.update' })
    },
    async _deleteBarang(id) {
      if(!confirm('Barang ini ingin dihapus?')) {
        return false;
      }
      try {
        await this.deleteBarang(id)
        this._getAllBarang()
      } catch (e) {
      }
    }
  },
  created() {
    this._getAllBarang()
  }
}
</script>