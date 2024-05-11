<script>



    import { onMount } from "svelte";
   // import { apiData, drinkNames } from './store.js';

onMount(async () => {
  localStorage.clear(); //ping aattach needed
  });

    import { useForm, validators, HintGroup, Hint, email, required, minLength } from "svelte-use-form";
  

        let selected = 'customer'; //defultRole pass 
        const form = useForm();

        /**
	 * @param {{ currentTarget: { value: string; }; }} event
	 */
        function onChange(event) {
            selected = event.currentTarget.value;
        }

  </script>
  
  <form use:form>
    <div style="background-color: aqua;padding:10px; margin:auto;text-align: center;">
    <h1>Login</h1>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label style="margin: 13px;">Email:     </label>
    <input type="email" name="email" use:validators={[required, email]} />
    <HintGroup for="email">
      <Hint on="required">This is a mandatory field</Hint>
      <Hint on="email" hideWhenRequired>Email is not valid</Hint>
    </HintGroup>
    <br>
    <br>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label  style="margin: 2px;">Password: </label>
    <input style="" type="password" name="password" use:validators={[required,minLength(5)]} />
    <Hint for="password" on="required">This is a mandatory field wit minimum of length 5</Hint>

    
  <br>
  
    <label>
        <input checked={selected==='customer'} on:change={onChange} type="radio" name="Role" value="customer" /> customer
    </label>
    <label>
        <input checked={selected==='dealer'} on:change={onChange} type="radio" name="Role" value="dealer" /> dealer
    </label>
    <label>
        <input checked={selected==='admin'} on:change={onChange} type="radio" name="Role" value="admin" /> admin
    </label>

    <br>
    you selected role:{selected}
    <br>

    
  
    <button disabled={!$form.valid}>Login</button>
</div>
  </form>

  <h2 style="text-align: center;">Don't have account ?   <a href="/creataccount">Creat Account Now</a></h2>
  <pre>
  <!--
  {JSON.stringify($form, null, " ")}-->
  </pre>
  
  <style>
      :global(.touched:invalid) {
          border-color: red;
          outline-color: red;
      }
  </style>