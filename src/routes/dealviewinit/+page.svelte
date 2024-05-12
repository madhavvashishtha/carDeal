<script>
        import dealMeta from '../initDeatStore';
        import { onMount } from 'svelte';


        let offerarray={
        Model       :'',
        Colour      :'',
        Fuel        :'',
        Manufacturer:'',
        Vehicle     :'',
        VIN         :'',
        VRM         :'',
        urlImg      :''
      };
      /**
	 * @type {number | null}
	 */
      let price=null;

      onMount(async ()=>{
        console.log('dealMeat :'+dealMeta)
       // offerarray=dealMeta;

       dealMeta.subscribe((data) => {
            console.log(data);
            // @ts-ignore
            offerarray=data;
            });
           price=Math.floor(Math.random() * (30000000 - 50000 + 1)) + 50000;


      });

      // @ts-ignore
      function dealApply(Model       ,
                        // @ts-ignore
                        Colour       ,
                        // @ts-ignore
                        VIN          ,
                        // @ts-ignore
                        Fuel         ,
                        // @ts-ignore
                        Manufacturer ,
                        // @ts-ignore
                        price        ){
                         
        //pass api to admin rey deal finilize....
      }


</script>


    <div class="bg-gray-100 p-4 grid " id="container" >

        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src={offerarray.urlImg}  style="margin: auto;" alt="Image" /> 
        <div class="grid justify-items-start ...">
<h1 style="font-size: x-large;">
        Model       :{offerarray.Model}<br>
        Manufacturer: {offerarray.Manufacturer}<br>
        Fuel        : {offerarray.Fuel}<br>
        VIN         : {offerarray.VIN}<br>

        <h1>

            <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            on:click={dealApply(offerarray.Model,offerarray.Colour,offerarray.VIN,offerarray.Fuel,offerarray.Manufacturer,{price})}>Buy At Just :$ {price}</button>
    
        </div>

       
    </div>


