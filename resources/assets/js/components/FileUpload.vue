<template>
  <div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="col-md-2">
              <h2>Images:</h2>
              <li v-for="image in images">
                <img :src="image" class="img-responsive">
              </li>
            </div>
            <div class="col-md-8">
                <input type="file" multiple v-on:change="onFileChange" class="form-control">
            </div>
            <div class="col-md-2">
                <button class="btn btn-success btn-block" @click="upload">Upload</button>
            </div>
        </div>
    </div>
  </div>
</template>
<style scoped>
  img{
      max-height: 16em;
  }
  li {
    list-style-type: none;
  }
</style>
<script>
export default{
  data(){
    return {
        images: []
    }
  },
  methods: {
    onFileChange(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length)
            return;
        for (var i = 0; i <files.length; i++) {
          this.createImage(files[i]);
        };
    },
    createImage(file) {
        let reader = new FileReader();
        let vm = this;
        reader.onload = (e) => {
            vm.images.push(e.target.result);
        };
        reader.readAsDataURL(file);
    },
    upload(){
      console.log("Uploaded!!");
        // axios.post('/api/upload',{image: this.image}).then(response => {
        //
        // });
    }
  }
}
</script>
