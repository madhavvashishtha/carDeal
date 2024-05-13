//

<script>
// @ts-nocheck

    import dealMeta from '../initDeatStore';
    import { goto } from '$app/navigation';
	import { onMount } from 'svelte';;
	import { json } from '@sveltejs/kit';
 
      let loadedRrqBull=false;
      let reqLength=0;

      let imgDeal=null;
  
      let purchaseReq=[{
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
       try {
        const passData = {
          email:localStorage.getItem('email'),
            areaCode:12121,//localStorage.getItem('areaCode'),
            //reqNo:8,
          
        };

        console.log('req For '+localStorage.getItem('email'));
        let response =  await fetch('https://carbackerrender.onrender.com/api/bounceThPruchReqList', {
            method: 'POST',mode: 'cors',
            headers: {
                "Content-Type": "application/json",
              
            },
            body: JSON.stringify(passData)
        }).then(res=>res.json())
        .then(data1=>{
            reqLength= data1.result.purchaseReqLis.length;
            purchaseReq=data1.result.purchaseReqLis

          console.log(json(data1)+'reqLength get : '+reqLength+':'+JSON.stringify(data1.result));
          loadedRrqBull=true
     
                });
    } catch (error) {
        console.error('Error: in create', error);
    }
        });
</script>



{#each { length: reqLength } as _, i}
<div class="bg-gray-100 p-4" id="container" >
   
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img src={imgDeal} alt="Image" />
    <h1>             {purchaseReq[i].model}</h1>
    <p> Colour      :{purchaseReq[i].colour}       <br>
        VIN         :{purchaseReq[i].vin}          <br>
        Fuel        :{purchaseReq[i].fuel}         <br>
        Manufacturer:{purchaseReq[i].manufacturer} <br></p>
        <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
       >let's see</button>

</div>
{/each}