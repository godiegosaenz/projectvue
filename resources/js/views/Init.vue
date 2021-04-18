<template>
        <div>
          <v-row heigth="100%">
            <v-col>
              <v-sheet
                min-height="auto"
                rounded="lg"
              >
                <v-carousel
                  cycle
                  height="400"
                  hide-delimiter-background
                  show-arrows-on-hover
                >
                  <v-carousel-item
                    v-for="(slide, i) in slides"
                    :key="i"
                  >
                    <v-sheet
                      :color="colors[i]"
                      height="100%"
                    >
                      <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                      >
                        <div class="display-3">
                          {{ slide }} Slide
                        </div>
                      </v-row>
                    </v-sheet>
                  </v-carousel-item>
                </v-carousel>
                <!--  -->
                <router-view> </router-view>
              </v-sheet>
            </v-col>
          </v-row>
           <v-row >
            <v-col cols="3">
              <v-sheet  rounded="lg">
                <v-img
                lazy-src="https://picsum.photos/id/11/10/6"
                max-height="150"
                max-width="250"
                src="https://picsum.photos/id/11/500/300"
                ></v-img>
              </v-sheet>
              <v-sheet class="mt-6" rounded="lg">
                <v-img
                lazy-src="https://picsum.photos/id/11/10/6"
                max-height="150"
                max-width="250"
                src="https://picsum.photos/id/11/500/300"
                ></v-img>
              </v-sheet>
              <v-sheet class="mt-6" rounded="lg">
                <v-img
                lazy-src="https://picsum.photos/id/11/10/6"
                max-height="150"
                max-width="250"
                src="https://picsum.photos/id/11/500/300"
                ></v-img>
              </v-sheet>
            </v-col>
            <v-col cols="9">
              <v-sheet
                min-height="70vh"
                rounded="lg"
              >
                
              </v-sheet>
            </v-col>
          </v-row>
          <v-row>
              <v-col>
                   <v-sheet color="grey darken-2" height="50"  rounded="lg">
                      
                   </v-sheet>
              </v-col>
          </v-row>
        </div>
</template>
<script>
    export default {
        data: () => ({
            colors: [
                'indigo',
                'warning',
                'pink darken-2',
                'red lighten-1',
                'deep-purple accent-4',
                ],
                slides: [
                'First',
                'Second',
                'Third',
                'Fourth',
                'Fifth',
                ],
            links: {
                
            },
        }),
    }
</script>