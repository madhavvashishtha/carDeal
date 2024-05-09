

<script>
// @ts-nocheck

	//import { email } from 'svelte-use-form@latest';
    import { useForm, validators, HintGroup, Hint, email, required, minLength } from "svelte-use-form";
    import{json} from "@sveltejs/kit";
  

        let selected = 'customer'; //defultRole pass 
        const form = useForm();

        /**
	 * @param {{ currentTarget: { value: string; }; }} event
	 */
        function onChange(event) {
            selected = event.currentTarget.value;
       }

       const sendData=async()=>{
        try {
            console.log($form.password.value+'::'+$form.email.value+':'+selected)
            const formData = {
   "username": $form.email.value+'',
   "password": $form.password.value+'',
   "role": selected
 };
   const response = await fetch('https://carbackerrender.onrender.com/api/createUserpost', {
     method: 'post', mode: "no-cors" ,
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(formData)
   }) 
  .then(response_ => json(response_))
  .then(data => {
		console.log(data +':'+data.message+':'+ JSON.stringify(data));;
   console.log('here:'+response)})

   if (response.ok) {
     console.log('successCreqat'+response)
     // Handle success response
   } else {
     console.error('Error: not ok creat Responce ');
     // Handle error response
   }
 } catch (error) {
   console.error('Error: in creat', error);
 }
;
       }

  </script>
  
  <form use:form>
    <div style="background-color: green;padding:10px; margin:auto;text-align: center;color:white">
        <h1>Welcome creat Account </h1>
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
        <input checked={selected==='customer'} on:click={onChange} type="radio" name="Role" value="customer" /> customer
    </label>
    <label>
        <input checked={selected==='dealer'}  on:click={onChange} type="radio" name="Role" value="dealer" /> dealer
    </label>
    <label>
        <input checked={selected==='admin'}  on:click={onChange} type="radio" name="Role" value="admin" /> admin
    </label>

    <br>
    you selected role:{selected}
    <br>

    
  
    <button disabled={!$form.valid}   on:click={sendData} >creat account</button>
</div>
  </form>