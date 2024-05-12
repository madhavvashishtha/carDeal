<script>
// @ts-nocheck

	import { onMount } from 'svelte';
        import useMeta  from '../store';
        import img from './imgs/carDeal05.jpg';
        import img0 from './imgs/carDeal00.jpg';
        import img1 from './imgs/carDeal04.jpg';
        import{json} from "@sveltejs/kit";
        import imgDeal from './imgs/dealsOdderCar.jpg';
        import dealMeta from '../initDeatStore';
        import { goto } from '$app/navigation';
;
      // import { cookies } from 'cookies';
      let loadedOffer=false;
      let offerLength=0;
  
      let offerarray=[{
        colour      :'',
        fuel        :'',
        manufacturer:'',
        model       :'',
        vehicle     :'',
        vin         :'',
        vrm         :'',
      }];
      onMount(async ()=>{
       // console.log('home mount : '+JSON.stringify(useMeta) );
       useMeta.subscribe((data) => {
            console.log(data);
            });
           
           console.log('cooking with :'+ localStorage.getItem('token')+'email:'+localStorage.getItem('email'))
           getOffers();
        });



      const getOffers=async()=>{
        try {
        const passData = {
          email:localStorage.getItem('email'),
            areaCode:12121,//localStorage.getItem('areaCode'),
            reqNo:8,
          
        };

        let response =  await fetch('https://carbackerrender.onrender.com/api/hotDeals', {
            method: 'POST',mode: 'cors',
            headers: {
                "Content-Type": "application/json",
              
            },
            body: JSON.stringify(passData)
        }).then(res=>res.json())
        .then(data1=>{
            offerLength= data1.dealsToOffer.length;
            offerarray=data1.dealsToOffer
          console.log(json(data1)+'offerLength get : '+offerLength+'offers:;'+JSON.stringify(data1.dealsToOffer));
          loadedOffer=true
       //   const offerContainer = document.getElementById("container");

      
      
                });
    } catch (error) {
        console.error('Error: in create', error);
    }
   }

     function setStoreNrunRout(Model,
                               Colour      ,
                               VIN         ,
                               Fuel        ,
                               Manufacturer ){

        dealMeta.set(  {
        Model       :Model       ,
        Colour      :Colour      ,
        VIN         :VIN         ,
        Fuel        :Fuel        ,
        Manufacturer:Manufacturer,
        urlImg      :'https://static.abplive.com/wp-content/uploads/2020/09/10182726/WhatsApp-Image-2020-09-10-at-12.46.07-PM-1.jpeg'
     })
        
     goto(`/dealviewinit`,  true )
    


//  goto(`/${route}`, { replaceState }) 

     }
</script>

<h1 style="font-size: xx-large;">Path to your dream car !</h1>
<div style="margin:auto;">



<div class="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
  


    <!-- svelte-ignore a11y-img-redundant-alt -->
    <div class="bg-gray-100 p-4"><img src={img} alt="Image" />
    <h2 style="font-size: x-large;">lets talk about it together</h2> </div>

    <!-- svelte-ignore a11y-img-redundant-alt -->
    <div class="bg-gray-100 p-4"><img src={img0} alt="Image" />
        <h2  style="font-size: x-large;">finalize it</h2> </div>
  
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <div class="bg-gray-100 p-4"><img src={img1} alt="Image" />
        <h2  style="font-size: x-large;">Done. just enjoy it! </h2> </div>
   
</div>
    
</div>

<h1 style="font-size: xx-large;">Deals Just For You ! make it now</h1>

{#if loadedOffer!=true}


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
    {#each { length: offerLength } as _, i}
    <div class="bg-gray-100 p-4" id="container" >
       
        <img src={imgDeal} alt="Image" />
        <h1>             {offerarray[i].model}</h1>
        <p> Colour      :{offerarray[i].colour}       <br>
            VIN         :{offerarray[i].vin}          <br>
            Fuel        :{offerarray[i].fuel}         <br>
            Manufacturer:{offerarray[i].manufacturer} <br></p>
            <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            on:click={setStoreNrunRout(offerarray[i].model,offerarray[i].colour,offerarray[i].vin,offerarray[i].fuel,offerarray[i].manufacturer)}>let's see</button>
    
    </div>
    {/each}
    </div>


<!-- svelte-ignore a11y-img-redundant-alt -->
