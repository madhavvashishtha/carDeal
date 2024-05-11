<script>
        import dealMeta from '../initDeatStore';
        import { onMount } from 'svelte';


        let offerarray=[{
        Model       :'',
        colour      :'',
        fuel        :'',
        manufacturer:'',
        model       :'',
        vehicle     :'',
        vin         :'',
        vrm         :'',
      }];
      let price=null;

      onMount(async ()=>{
        console.log('dealMeat :'+dealMeta)
       // offerarray=dealMeta;

       dealMeta.subscribe((data) => {
            console.log(data);
            offerarray=data;
            });
           price=Math.floor(Math.random() * (30000000 - 50000 + 1)) + 50000;


      });

      function dealApply(Model,
                        Colour      ,
                        VIN         ,
                        Fuel        ,
                        Manufacturer ,
                        price        ){
        //pass api to admin rey deal finilize....
      }


</script>


    <div class="bg-gray-100 p-4 grid " id="container" >

        <img src={offerarray.urlImg}  style="margin: auto;" alt="Image" /> 
        <div class="grid justify-items-start ...">
<h1 style="font-size: x-large;">
        Model       :{offerarray.Model}<br>
        Manufacturer: {offerarray.Manufacturer}<br>
        Fuel        : {offerarray.Fuel}<br>
        VIN         : {offerarray.VIN}<br>

        <h1>

            <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            on:click={dealApply(offerarray[i].model,offerarray[i].colour,offerarray[i].vin,offerarray[i].fuel,offerarray[i].manufacturer,{price})}>Buy At Just :$ {price}</button>
    
        </div>

       
    </div>


