<script>
// @ts-nocheck

        import dealMeta from '../initDeatStore';
        import { onMount } from 'svelte';
       // import{json} from "@sveltejs/kit";
        import { goto } from '$app/navigation';


        let offerarray={

    Model: '',
    Colour: '',
    VIN: '',
    Fuel: '',
    Manufacturer: '',
    urlImg: '',
      };
      /**
       * 
       *  Model: string;
    Colour: string;
    VIN: string;
    Fuel: string;
    Manufacturer: string;
    urlImg: string;
}>

	 */
    let loadedRrqBull;
      let price;

      onMount(async ()=>{
        console.log('dealMeat :'+dealMeta)
      //  offerarray=dealMeta.subscribe;

      dealMeta.subscribe((data) => {
            console.log(data);
            offerarray=data;
          });
           
          // console.log('cooking with :'+ localStorage.getItem('token')+'email:'+localStorage.getItem('email'))
          // getOffers();
        });

       dealMeta.subscribe((data) => {
            console.log(data);
            // @ts-ignore
            offerarray=data;
            });
          price=Math.floor(Math.random() * (30000000 - 50000 + 1)) + 50000;


      // @ts-ignore
      // @ts-ignore
      /**
	
	 */
   async  function dealApply(Model,Colour, VIN,Fuel,Manufacturer ,price ){
                         
        //pass api to admin rey deal finilize....

    console.log('email store : '+localStorage.getItem('email'))
        try {
        const passData = {
                "Email"       :localStorage.getItem('email'),
                "Model"       :Model,
                "Colour"      :Colour,
                "Fuel"        :Fuel,
                "Manufacturer":Manufacturer,
                "Vehicle"     : '',
                "VIN"         : VIN,
                "VRM"         : '',
                "urlImg"      :  '',
                "Price"       : price
        };

     //   let response = await  fetch('https://carbackerrender.onrender.com/api/purchageRqrInit', {
        console.log('paddind : '+passData+':'+price)
      
        let response =  await fetch('https://carbackerrender.onrender.com/api/purchageRqrInit', {
            method: 'POST',mode: 'cors',
            headers: {
                "Content-Type": "application/json",
              
            },
            body: JSON.stringify(passData)
        }).then(res=>res.json())
        .then(data1=>{
            console.log(JSON.stringify(data1.result)+'offerLength get : ')
            if(data1.result.acknowledged==true){

            }

           // reqLength=data1.result
;
          //  purchaseReq=data1.result
           loadedRrqBull=true;
           setTimeout(()=>{
            goto(`/purchaseReq`,  false )
           }, 3000)
          
          

 
                });

                let dt= await response;
                console.log('await respo : '+response)
    } catch (error) {
        console.log('Error: in create', error);
    }
      }


</script>


    <div class="bg-gray-100 p-4 grid " id="container" >

        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src={offerarray.urlImg}  style="margin: auto;" alt="Image" /> 
        <div class="grid justify-items-start ...">
<h1 style="font-size: x-large;">
        Model        :{offerarray.Model}<br>
        Manufacturer: {offerarray.Manufacturer}<br>
        Fuel        : {offerarray.Fuel}<br>
        VIN         : {offerarray.VIN}<br>

        <h1>


            <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            on:click={dealApply(offerarray.Model,offerarray.Colour,offerarray.VIN,offerarray.Fuel,offerarray.Manufacturer,price)}>Buy At Just :$ {price}</button>
    <!--
        click supposed to trigger payment window
    -->
        </div>

       
    </div>

{#if loadedRrqBull==true}

<div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg">
    <p class="text-lg font-semibold">Order Status: Confirmed</p>
  
    <p>Your order has been successfully placeed!<br>please wait while its being being confirmed .</p>
</div>

    
{/if}