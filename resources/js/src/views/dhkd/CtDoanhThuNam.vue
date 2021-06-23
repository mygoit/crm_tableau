<template>
    <b-card>
        <!-- <b-button type="button" @click.prevent="getTicket()">Click me</b-button> -->
        <object class="tableauViz" width="100%" height="600" style="display:none;" v-if="ticket!=''&&ticket!=-1">
            <param name="name" value="TiendodoanhthuTCT/Chitittindoanhthu" />
            <param name="ticket" :value="ticket" />
        </object>
        <!-- <object class="tableauViz" width="100%" height="700" style="display:none;">
            <param name="path" :value="path" />
        </object> -->
    </b-card>
</template>
<script>
import Repository from "../../repository";
export default {
    data(){
        return {
            ticket: '',
            url_view: '',
            path: ''
        }
    },
    computed: {

    },
    created() {
        this.getTicket()
    },
    methods: {
        async getTicket() {
            let params = {
                client_ip: '',
                target_site: ''
            }
            const response = await Repository.post('/api/ticket',params)
            if(response && response!=-1){
                this.ticket = response
                this.url_view = 'http://171.244.2.102:8851/trusted/'+response+'/views/TiendodoanhthuBC/Chitittindoanhthu?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no&:origin=viz_share_link'
                this.path = 'trusted/'+response+'/t/1/views/test123/Sheet1'
            }
            console.log(response);
        },
    }
}
</script>
<style lang="scss" scoped>
</style>
