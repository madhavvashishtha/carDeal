

<script>
// @ts-nocheck

	//import { email } from 'svelte-use-form@latest';
    import { useForm, validators, HintGroup, Hint, email, required, minLength } from "svelte-use-form";
    import{json} from "@sveltejs/kit";
    import useMeta  from '../store';
   // import axios from 'axios';

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
        const formData = {
            "username": $form.email.value,
            "password": $form.password.value,
            "areacode": $form.areacode.value,
            "role": selected
        };

        let response =  await fetch('https://carbackerrender.onrender.com/api/createUserpost', {
            method: 'POST',mode: 'cors',
            headers: {
                "Content-Type": "application/json",
              
            },
            body: JSON.stringify(formData)
        }).then(res=>res.json())
        .then(data1=>{
          console.log(json(data1)+'data get : '+data1.status+':;'+JSON.stringify(data1.tokenGet)+'email;:'+JSON.stringify(data1.email)  +'role;:'+JSON.stringify(data1.role))
   
            console.log('setting the store')

            localStorage.setItem('token',JSON.stringify(data1.tokenGet),'email',JSON.stringify(data1.email),'role',JSON.stringify(data1.roles),'areaCode',JSON.stringify(data1.areacode))
           

        //   useMeta.set({
        //    useAuthState:'true',
        //    useRole: JSON.stringify(data1.role),
        //    useEmail: JSON.stringify(data1.email),
        //    meta: JSON.stringify(data1.tokenGet),
        //   } )
      
                });

      const data = await response.json(); 
     console.log(response   +"res-"+data+':' + JSON.stringify(response));
    } catch (error) {
        console.error('Error: in create', error);
    }
   }

  </script>
  
  <form use:form>
    <div style="background-color: green;padding:10px; margin:auto;text-align: center;color:white">
        <h1>Welcome creat Account </h1>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label style="margin: 13px;">Email:     </label>
    <input style="color: black;" type="email" name="email" use:validators={[required, email]} />
    <HintGroup for="email">
      <Hint on="required">This is a mandatory field</Hint>
      <Hint on="email" hideWhenRequired>Email is not valid</Hint>
    </HintGroup>
    <br>
    <br>
    <!-- svelte-ignore a11y-label-has-associated-control -->

    <label  style="margin: 2px;">Areacode: </label>
    <input  style="color: black;"  type="number" name="areacode" use:validators={[required,minLength(6)]} />

    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label  style="margin: 2px;">Password: </label>
    <input  style="color: black;" type="password" name="password" use:validators={[required,minLength(5)]} />
    <Hint for="password" on="required">This is a mandatory field wit minimum of length 5</Hint>

    
  <br>
  
    <label>
        <input checked={selected==='customer'} on:click={onChange} type="radio" name="Role" value="customer" /> customer
    </label>
    <label>
        <input checked={selected==='dealer'}  on:click={onChange} type="radio" name="Role" value="dealer" /> dealer
    </label>
    <label>
        <input checked={selected==='admin'}  on:click={onChange} type="radio" name="Role" value="admin" /> admin (yes i know ...,will correct it)
    </label>

    <br>
    you selected role:{selected}
    <br>

    
  
    <button disabled={!$form.valid}   on:click={sendData} >creat account</button>
</div>
  </form>