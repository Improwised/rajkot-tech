
  <template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 back-btn">
          <a><nuxt-link
                    :to="{
            name: 'past-events-type',
            params: { type: $route.params.type}
          }"
                  >Back</nuxt-link></a>
        </div>
        <div class="col-sm-12">
          <div class="events_list" v-if="data">
            <div class="_event" v-for="(value, key, index) in data" :key="index">
              <div class="bimage">
                <img src="https://picsum.photos/300/300/?image=41" />
              </div>
              <div class="event-con">
                <span>
                  <b>Title:</b>
                </span>
                <a>
                  <nuxt-link
                    :to="{
            name: 'past-events-type-id',
            params: { type: $route.params.type, id: value.fileName }
          }"
                  >{{value.name}}</nuxt-link>
                </a>
                <span class="date">{{$moment(new Date(value.date)).format('Do MMMM YYYY')}}</span>
                <br />
                <span>
                  <b>Venue:</b>
                </span>
                {{value.venue}}
                <span>
                  <b>Agenda :</b>
                </span>
                <ul>
                  <li v-for="(a, key, index) in value.agenda" :key="index">
                    <div class="agenda">
                      <b>Title:</b>
                      {{a.title}}
                      <br />
                      <b>Speaker:</b>
                      {{a.speaker}}
                      <span class="ag-icons">{{a.type}}</span>
                    </div>
                  </li>
                </ul>
                <span>
                  <b>Organizers :</b>
                </span>
                <div
                  class="org"
                  v-for="(s, key, index) in value.organizers"
                  :key="index"
                >{{key + 1 }}. {{s}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
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
};
</script>
<style scoped>
.back-btn {
  background: #e7e7ed;
    padding: -2px;
    margin: -2px;
    margin-left: -14px;
    margin-right: 2px;
    font-size: 18px;
    font-style: unset;
    font-weight: bold;
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
  border: 1px solid #15192c;
  color: #fff;
  background: #15192c;
  font-weight: bold;
  border-radius: 12px;
  padding: 2px 10px 1px 9px;
  float: right;
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
  width: 30.33%;
  margin: 0.9375rem;
  /* text-align: center; */
  border-radius: 3px;
  background-color: #fff;
  border: 1px solid #e2e1e1;
  border-bottom: 3px solid #00cdc1;
}
.bimage {
  height: auto;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #efefef;
}
.img {
  max-width: 100%;
  width: 100%;
  height: 200px;
}
._event .event_info {
  padding: 0.9375rem;
  text-align: left;
}
.event-con {
  padding: 16px;
}
</style>