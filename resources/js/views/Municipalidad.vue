<template>
        <div>
          <v-row heigth="100%">
            <v-col>
              <v-sheet
                min-height="auto"
                rounded="lg"
              >
              </v-sheet>
            </v-col>
          </v-row>
           <v-row heigth="100%">
            <v-col cols="3">
              <v-sheet min-height="auto" rounded="lg">
                <v-list color="transparent">
                  <v-list-item
                    v-for="n in 5"
                    :key="n"
                    link
                  >
                    <v-list-item-content>
                      <v-list-item-title>
                        List Item {{ n }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider class="my-2"></v-divider>

                  <v-list-item
                    link
                    color="grey lighten-4"
                  >
                    <v-list-item-content>
                      <v-list-item-title>
                        Refresh
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-sheet>
            </v-col>

            <v-col>
              <v-sheet
                min-height="70vh"
                rounded="lg"
              >
                
                <!--  -->
                <router-view> </router-view>
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