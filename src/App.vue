<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-avatar size="40px">
          <img
            :src="picture"
          >
        </v-avatar>
        <h3 class="ml-3">{{ name }}</h3>
        
      </div>
    </v-app-bar>

    <v-content>
      <router-view :userId=userId />
    </v-content>
  </v-app>
</template>

<script>
/*globals liff */
export default {
  name: 'App',
  data: () => ({
    userId: null,
    name: null,
    picture: null,
  }),
  created : function() {
    let id = this.$route.query.id
    liff
        .init({
            liffId: '1654022080-7DwzQZwY'
        })
        .then(() => {
            // start to use LIFF's api
            // initializeApp();
            console.log('LIFF initialization successed')

            if (id != null) {
              liff.openWindow({
                url: "mercari://item/openDetail?id="+id
              })
              liff.closeWindow()
            }
            liff.getProfile().then(profile => {
              this.userId = profile.userId
              this.name = profile.displayName
              this.picture = profile.pictureUrl
            })

        })
        .catch((err) => {
            console.log('LIFF initialization failed', err)
        });

  },
};
</script>
