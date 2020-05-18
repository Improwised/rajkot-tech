<template>
  <b-navbar
    toggleable="lg"
    sticky
    type="light"
    variant="light"
    class="border-bottom"
  >
    <b-navbar-brand href="/">
      <!-- <img
        src="https://laravel.com/img/logomark.min.svg"
        class="d-inline-block align-top"
        alt="Kitten"
        style="max-height: 30px;max-width: 30px;"
      /> -->
      Rajkot Tech
    </b-navbar-brand>

    <!-- <b-navbar-brand href="#">RT</b-navbar-brand> -->

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <!-- <b-nav-text>Navbar text</b-nav-text> -->
        <!-- <b-nav-item href="#">Past Events</b-nav-item> -->
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="/" class="ml-3">Home</b-nav-item>
        <b-nav-item href="/past-meetup" class="ml-3">Past Meetup</b-nav-item>
        <b-nav-item
          href="https://forms.gle/DHHBgtPjTd5Gm4hL6"
          class="ml-3"
          target="_black"
          >Submit a Talk</b-nav-item
        >
        <b-nav-item
          href="https://forms.gle/R1P5nUsSZVWVThwx7"
          class="ml-3"
          target="_black"
        >
          Request a Talk / Workshop
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
