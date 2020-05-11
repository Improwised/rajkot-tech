
  <template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="_event">
            <b-carousel
              id="carousel-1"
              v-model="slide"
              :interval="4000"
              controls
              indicators
              background="#ababab"
              img-width="1024"
              img-height="100"
              style="text-shadow: 1px 1px 2px #333;"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>
            </b-carousel>
            <div class="event-con" v-for="(value, key, index) in data" :key="index">
              <div class="col-sm-12 title">
                <h6>{{value.name}}</h6>
              </div>
              <div class="row body">
                <div class="col-sm-12">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                  <label>{{value.venue}}</label>
                </div>
                <div class="col-sm-12">
                  <i class="fa fa-calendar" aria-hidden="true"></i>
                  <label>{{value.date}}</label>
                </div>
                <div class="col-sm-12">
                  <i class="fa fa-address-book" aria-hidden="true"></i>
                  <label>{{value.registrations}}</label>
                </div>
                <div class="col-sm-12">
                  <i class="fa fa-street-view" aria-hidden="true"></i>
                  <label>{{value.attendies}}</label>
                </div>
                <div class="col-sm-12 agendas" v-if="value.agenda">
                  <label class="a-title">Agenda:</label>
                  <div class="row">
                    <div
                      class="col-sm-6 agenda"
                      v-for="(a, key, index) in value.agenda"
                      :key="index"
                    >
                      <div class="row">
                        <div class="col-sm-2">
                          <img :src="getImage(a)" />
                        </div>
                        <div class="col-sm-8">
                          <div>
                            <label>
                              <b>Title:</b>
                            </label>
                            <span>{{a.title}}</span>
                            <br />
                          </div>
                          <div>
                            <label>
                              <b>Speaker</b>
                            </label>
                            <span>{{a.speaker}}</span>
                          </div>
                        </div>
                        <div class="col-sm-2">
                          <label class="type">{{a.type}}</label>
                        </div>
                      </div>
                    </div>
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
import { getPastEvents, getRoutes } from "~/static/js/events.js";

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
      if (img.img_url) {
      return img.img_url;
      } else {
        return require('../../../assets/images/person.png')
      }
    }
  }
};
</script>
<style scoped>
.fa {
  font-size: 19px;
  font-weight: bold;
  padding: 6px 12px 4px 7px;
}
.container {
  overflow: unset;
  margin-top: 180;
  padding-top: 159px;
  padding: 3px 30px;
  width: 100%;
  min-width: 100%;
}
.type {
  text-transform: capitalize;
  border: 1px solid #000;
  border-radius: 20px;
  background: #565d5d;
  color: #fff;
  padding: 2px 9px 1px 9px;
  font-weight: bold;
}
.org {
  margin-bottom: 10px;
  margin-top: 10px;
  background: #e7ecef;
  border: 1px solid #d7d5cc;
  padding: 6px 10px 10px 10px;
}

.agenda {
  border: 1px solid #e2d8d8;
  padding: 10px 7px 0px 10px;
  background: #f7f5f4;
  margin: 8px;
}
.agendas {
  padding: 15px 40px 0px 40px;
}
.a-title {
  margin-left: -14px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 0px;
}
._event {
  width: 100%;
  height: 100%;
  margin-top: 10px;
  border-radius: 3px;
  background-color: #fff;
  border: 1px solid #e2e1e1;
  min-height: 100vh;
}

.title {
  padding: 14px;
  font-size: 25px;
      text-transform: capitalize;
  text-align: center;
  font-weight: bold;
  border-bottom: 2px solid #e2dfdb;
}
.body {
  padding: 18px;
}
label {
  font-size: 19px;
}
img {
      height: 86px;
    border-radius: 62px;
}
</style>