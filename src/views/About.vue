<template>
  <div class="about">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="word"
        label="検索ワード"
        :rules="[v => !!v || '必須項目です．']"
        required
      ></v-text-field>
      <v-text-field
        v-model="price_min"
        :rules="numRules"
        label="最低価格(円)"
        required
      ></v-text-field>
      <v-text-field
        v-model="price_max"
        :rules="numRules"
        label="最高価格(円)"
        required
      ></v-text-field>
      <v-btn
        :disabled="!valid"
        @click="submit"
      >
        保存
      </v-btn>
      <v-btn @click="clear">削除</v-btn>
    </v-form>
  </div>
</template>

<script>
  export default {
    name: 'About',

    data: () => ({
        info: null,
        search: null,
        word: null,
        price_min: null,
        price_max: null,
        valid: false,
        numRules: [
          v => /[0-9]*/.test(v) || '数値を入力してください'
        ]
    }),

    props: {
      userId: String,
      searchId: String,
      isUpdate: Boolean
    },

    methods: {

      submit () {
        if (this.$refs.form.validate()){
          var url = ""
          var data = {}
          var me = this
          if (this.isUpdate){
            url = "/search/update"
            data = {
              "user_id": this.userId,
              "search_id": this.searchId,
              "search_word": this.word,
              "price_min": this.price_min,
              "price_max": this.price_max
            }
          }else{
            url = "/search/insert"
            data = {
              "user_id": this.userId,
              "search_word": this.word,
              "price_min": this.price_min,
              "price_max": this.price_max
            }
          }
          this.$axios.post(url, data).then(function(){
            me.$router.push("/")
          })
        }
      },

      clear () {
        this.$refs.form.reset()
      }
    },

    created: function(){
      var data = {
        "user_id": this.userId,
        "search_id": this.searchId
      }
      this.$axios
      .post("/search/", data)
      .then(response => {
        this.search = response.data
        this.word = this.search.search_word
        this.price_min = this.search.price_min
        this.price_max = this.search.price_max
      })
    }

  }
</script>
