<template>

  <v-navigation-drawer v-model="$store.state.drawer" absolute temporary>
    <v-list>
      <v-list-item>
        <v-list-item-avatar>
          <img src="https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-0/p370x247/53450795_2257240901208028_5753426778269941760_n.jpg?_nc_cat=108&_nc_oc=AQnozklP1M8kxugdbi078l53V0Qe3myr54GDjWNvho8lcSfB-5dNpoFIx-y9DOHeAgSQVT28j95PNpsp1Bn2hwEn&_nc_ht=scontent-nrt1-1.xx&_nc_tp=1002&oh=6400de210c5bf3ae4fa3aaab6c064cc0&oe=5ED7A180">
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Daiki Morokoshi</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item v-for="(item, index) in items" :key="index">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { title: '連絡先一覧', icon: 'mdi-menu' }
      ]
    }
  }
}
</script>