
  <template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="events_list" v-if="data">
            <div class="row _event" v-for="(value, key, index) in data" :key="index">
              <div class="col-sm-3 bimage">
                <img :src="getCoverImage(value.coverimage, value.categories[0])" />
              </div>
              <div class="col-sm-9 event-con">
                <div class="row">
                  <div class="col-sm-12">
                    <span class="date">
                      <i class="fa fa-calendar-o" aria-hidden="true"></i>
                      {{value.date}}
                    </span>
                  </div>
                </div>
                <hr>
                <div class="row" style="margin-top: 20px">
                  <div class="col-sm-12">
                    <b>Title:</b>
                    <br />
                    {{value.name}}
                    <br />
                    <span>
                      <b>Venue:</b>
                    </span>
                    <br />
                    {{value.venue}}
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-12">
                    <a
                      :href=" 'past-events/' + value.categories[0] + '/' + value.fileName"
                      class="btn"
                    >
                      Read More
                      <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import laravel from "../../../chapter/laravel.json";
import seo from "../../../chapter/seo.json";
import vue from "../../../chapter/vue.json";
import docker from "../../../chapter/docker.json";

export default {
  props: {
    name: {
      type: String,
      default: ""
    },
    data: {
      type: Array,
      default: []
    }
  },
  methods: {
    getImage(img) {
      return img.img_url
        ? img.img_url
        : require("../../../assets/images/person.png");
    },
    getCoverImage(img, category) {
      if (img === "") {
        switch (category) {
          case "laravel":
            return require(`../../../assets/images/` + laravel.default_img);
          case "vue":
            return require(`../../../assets/images/` + vue.default_img);
          case "docker":
            return require(`../../../assets/images/` + docker.default_img);
          case "seo":
            return require(`../../../assets/images/` + seo.default_img);
        }
      } else {
        return img;
      }
    }
  }
};
</script>
<style scoped >
.btn {
  color: #19294c;
  padding: 6px 8px 5px 8px;
  border: 1px solid #ccc9c5;
  font-weight: bold;
  margin-top: 12px;
  float: right;
}
.container {
  overflow: unset;
  margin-top: 180;
  padding-top: 159px;
  padding: 3px 30px;
  width: 100%;
  min-width: 100%;
}
.org {
  margin-bottom: 10px;
  margin-top: 10px;
  background: #e7ecef;
  border: 1px solid #d7d5cc;
  padding: 6px 10px 10px 10px;
}
.ag-icons {
  float: right;
  border: 1px solid #15192c;
  border-radius: 14px;
  color: white;
  padding: 0px 10px 0px 10px;
  font-weight: bold;
  background-color: #15192c;
}
.date {
 color: #ffffff;
    border: 1px solid #a29999;
    font-weight: bold;
    background: #233358;
    font-size: 19px;
    border-radius: 17px;
    padding: 5px 13px 7px 16px;
}
.header-txt {
  font-size: 31px;
  text-align: center;
  background: #bcd4e9;
  margin-top: 138px;
  margin-bottom: 20px;
  padding-bottom: 31px;
  padding-top: 31px;
}
.agenda {
  margin-bottom: 10px;
  margin-top: 10px;
  background: #e7ecef;
  border: 1px solid #d7d5cc;
  padding: 6px 10px 10px 10px;
}
.events_list {
  display: flex;
  flex-wrap: wrap;
}
._event {
  width: 47%;
  margin: 0.9375rem;
  /* text-align: center; */
  border-radius: 3px;
  font-size: 18px;
  background-color: #fff;
  border: 1px solid #f1e6e6;
}
.bimage {
  height: auto;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #efefef;
}
.bimage img {
  max-width: 100%;
  width: 150px;
  height: 150px;
}
._event .event_info {
  padding: 0.9375rem;
  text-align: left;
}
.event-con {
  padding: 16px;
}
</style>