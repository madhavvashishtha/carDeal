
 // import writable from 'svelte/store';
  import { writable, derived } from 'svelte/store';

  export const useEail      = writable('');
  export const useAuthState = writable('');
  export const useMeta      = writable('');
  export const useRole      = writable('');
