
<script>
 
	import { onMount } from 'svelte';
	import { json } from '@sveltejs/kit';
 
      let loadedRrqBull=false;
      let reqLength=0;

      let imgDeal='https://static.abplive.com/wp-content/uploads/2020/09/10182726/WhatsApp-Image-2020-09-10-at-12.46.07-PM-1.jpeg';
  
      let purchaseReq=[{
        Colour      :'',
        Fuel        :'',
        Manufacturer:'',
        Model       :'',
        Vehicle     :'',
        VIN         :'',
        VRM         :'',
        Price       :'',
        Note        :''
      }];
      onMount(async ()=>{
        console.log('pur list mount email : '+localStorage.getItem('email'));
       try {
        const passData = {
          Email:localStorage.getItem('email'),
          
          
        };

        let response =  await fetch('https://carbackerrender.onrender.com/api/bounceThPruchReqList', {
            method: 'POST',mode: 'cors',
            headers: {
                "Content-Type": "application/json",
              
            },
            body: JSON.stringify(passData)
        }).then(res=>res.json())
        .then(data1=>{
            console.log(JSON.stringify(data1.result[0].purchaseReqLis)+'offerLength get : '+data1.result[0].purchaseReqLis.length)

            reqLength=data1.result[0].purchaseReqLis.length
;
            purchaseReq=data1.result[0].purchaseReqLis
            loadedRrqBull=true;

 
                });

                let dt= await response;
                console.log('await respo : '+response)
    } catch (error) {
        console.error('Error: in create', error);
    }
        });
</script>



<h1 style="font-size: xx-large;">Deals Just For You ! make it now</h1>

{#if loadedRrqBull!=true}


<div class='flex space-x-2 justify-center items-center bg-white h-screen dark:invert'>

  <span class='sr-only'>Loading...</span>
  <br>
  
    <br>
   <div class='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
 <div class='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
 <div class='h-8 w-8 bg-black rounded-full animate-bounce'></div>

</div>

{/if}

<div class="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4" >

    <!-- svelte-ignore a11y-img-redundant-alt -->
    <!-- even not login-->
    {#each { length: reqLength } as _, i}
    <div class="bg-gray-100 p-4" id="container" >
       
        <img src={imgDeal} alt="Image" />
        <h1 style="font-size: x-large;"> 
                         {purchaseReq[i].Model}   </h1>
        <p> Colour      :{purchaseReq[i].Colour}       <br>
            VIN         :{purchaseReq[i].VIN}          <br>
            Fuel        :{purchaseReq[i].Fuel}         <br>
            Manufacturer:{purchaseReq[i].Manufacturer} <br>
            Price       :{purchaseReq[i].Price}        <br>
            Order State :{purchaseReq[i].Note}         <br>
          </p>
        
    
    </div>
    {/each}
    </div>