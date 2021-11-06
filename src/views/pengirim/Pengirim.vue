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
                            <th scope="col" class="relative px-6 py-3">
                              <span class="sr-only">Edit</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                          <tr v-for="(shipper, index) in shippers" :key="shipper.id">
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-sm text-gray-900">{{  shipper.nama }}</div>
                              <div class="text-sm text-gray-500">{{  shipper.codeShipper }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="#" @click.prevent="_showPengirimanShipper(shipper.id)" class="text-indigo-600 hover:text-indigo-900">Pengiriman</a> |
                              <a href="#" @click.prevent="_editShipper(index)" class="text-indigo-600 hover:text-indigo-900">Edit</a> |
                              <a href="#" @click.prevent="_deleteShipper(shipper.id)" class="text-indigo-600 hover:text-indigo-900">Hapus</a>
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
            <router-link :to="{ name: 'pengirim.new' }" class="shadow bg-white border block border-gray-300 text-gray-900 py-2 text-center rounded-md text-sm font-medium">
                Tambah pengirim
            </router-link>
        </div>
    </div>
</div>
</template>
<script>
import {mapActions, mapState} from "vuex";

export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapState('pengirim', ['shippers'])
  },
  methods: {
    ...mapActions('pengirim', ['getAllShipper', 'deleteShipper']),
    async _getAllShipper() {
      try {
        await this.getAllShipper()
      } catch (e) {
        alert(e.message)
      }
    },
    _editShipper(index) {
      this.$store.state.pengirim.shipper = this.shippers[index]
      this.$router.push({ name: 'pengirim.update' })
    },
    _showPengirimanShipper(id) {
      this.$router.push({ name: 'pengirim.shipping', params: { id: id }})
    },
    async _deleteShipper(id) {
      if(!confirm("Apakah anda yakin?")) {
        return false;
      }
      try {
        await this.deleteShipper(id)
        this._getAllShipper()
      } catch (e) {
        alert(e.message)
      }
    }
  },
  created() {
    this._getAllShipper()
  }
}
</script>