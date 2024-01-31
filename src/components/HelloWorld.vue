<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col justify-center items-center logo-content">
    <svg class="background" viewBox="0 0 1531 891" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 182c144.327 47.973 534.462 219.712 440.509 369.87C346.555 702.028 79.877 662.846 0 638V182z"></path>
      <path d="M1405 848c-424.366 158.009-437-164-437-272s102-425 563-576v769c-21.333 29.333-63.333 55.667-126 79z"></path>
      <path d="M1531 162c-122.914-17.284-377.96 33.191-543.433 206.414C822.095 541.636 797.342 648.75 835.842 731.622c38.5 82.871 198.243 134.841 400.555 92.053C1438.71 780.886 1492.752 775.894 1531 768V162z"></path>
    </svg>
  </div>  
</template>

<style scoped>
.logo-content{
  width: 100%;
  height: 100%;
}

.box {
  position: relative;
}
.box:after {
   position: absolute;
   width: 64%;
   height: 12%;
   left: 18%;
   z-index: -1;
   bottom: 0%;
   content: "";
   box-shadow: 0 55px 33px rgba(0,0,0,0.24);
}

.background{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  path{
      fill: rgba(204, 204, 204, 0.308);
  }
}
</style>
