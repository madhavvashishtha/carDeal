import { writable, derived } from 'svelte/store';

 const dealMeta      = writable(
    {
        Model       :'',
        Colour      :'',
        VIN         :'',
        Fuel        :'',
        Manufacturer:'',
        urlImg      :'',
     }
 );


export default  dealMeta     ;
