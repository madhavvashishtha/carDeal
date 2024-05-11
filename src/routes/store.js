import { writable, derived } from 'svelte/store';

 const useMeta      = writable(
    {
        useAuthState :'null',
        useRole:'',
        useEmail:'',
        meta:'',

     }
 );


export default  useMeta     ;

