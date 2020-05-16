<template>
    <div>
        <div class="header">
    <div class="header-div">
      <div class="header-title">
        <nuxt-link to="/" style="    font-size: 2rem;
    color: #ffffff;
    font-weight: 700;
    color: #fff !important;
" >
          <span class="text-laracolor">Rajkot</span> Tech
        </nuxt-link>
      </div>
      <div id="menu">
        <nav>
          <ul>
            <li><a  href="/home">Home</a></li>
            <li><a  href="/home/past-events">Past Events</a></li>
            <li><a  href="https://forms.gle/DHHBgtPjTd5Gm4hL6" target="_blank">Submit a Talk</a></li>
            <li><a  href="https://forms.gle/R1P5nUsSZVWVThwx7" target="_blank">Request a Talk / Workshop</a></li>
            <li><a  href="/home/faqs">Faqs</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.header-title {
  width: auto;
    justify-content: space-between;
    align-items: center;
    display: flex;
}
.header .header-div {
width: 100%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 1.5rem !important;
    padding-top: 1.5rem !important;
    flex-wrap: wrap !important;
}
ul {
  list-style: none;
    margin: 0;
    padding: 0;
    padding-top: 0;
    display: flex;
    font-size: 1rem;
    justify-content: space-between;
    padding-top: 1rem;
    align-items: center;
    padding-top: 1.5rem !important;
}
li a {
  padding: 0.75rem;
    color: #ffffff;
    opacity: 0.75;
    font-weight: bold;
    font-size: 19px;
    color: #fff !important;
    color: inherit;
    text-decoration: inherit;
}
.header {
    z-index: 50;
    width: 100%;
    left: 0;
    padding-right: 1.5rem !important;
    padding-right: 1.5rem !important;
    position: absolute;
    padding-left: 1.5rem !important;
    background-color: #070709;
    top: 0;
}
  </style>