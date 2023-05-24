<script>
  import {
    validateFirstName,
    validateLastName,
    validateEmail,
    validatePhoneNumber,
    validatePassword,
  } from "./validation";

  let firstName = "";
  let lastName = "";
  let email = "";
  let phonePrefix = "050";
  let phoneNumber = "";
  let password = "";

  let firstNameError = "";
  let lastNameError = "";
  let emailError = "";
  let phoneError = "";
  let passwordError = "";

  function handleSubmit() {
    // Validate all fields before submitting
    firstNameError = validateFirstName(firstName);
    lastNameError = validateLastName(lastName);
    emailError = validateEmail(email);
    phoneError = validatePhoneNumber(phoneNumber);
    passwordError = validatePassword(password);

    if (
      firstNameError ||
      lastNameError ||
      emailError ||
      phoneError ||
      passwordError
    ) {
      return; // Do not submit if there are validation errors
    }

    const formObject = {
      firstName,
      lastName,
      email,
      phone: phonePrefix + phoneNumber,
      password,
    };
    console.log(formObject);
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <label>
    First Name:
    <input
      type="text"
      bind:value={firstName}
      on:input={() => (firstNameError = validateFirstName(firstName))}
    />
  </label>
  {#if firstNameError}
    <p class="error">{firstNameError}</p>
  {/if}

  <label>
    Last Name:
    <input
      type="text"
      bind:value={lastName}
      on:input={() => (lastNameError = validateLastName(lastName))}
    />
  </label>
  {#if lastNameError}
    <p class="error">{lastNameError}</p>
  {/if}

  <label>
    Email:
    <input
      type="text"
      bind:value={email}
      on:input={() => (emailError = validateEmail(email))}
    />
  </label>
  {#if emailError}
    <p class="error">{emailError}</p>
  {/if}

  <label>
    Phone:
    <select bind:value={phonePrefix}>
      <option value="050">050</option>
      <option value="052">052</option>
      <option value="054">054</option>
      <!-- Add more options as needed -->
    </select>
    <input
      type="text"
      bind:value={phoneNumber}
      on:input={() => (phoneError = validatePhoneNumber(phoneNumber))}
    />
  </label>
  {#if phoneError}
    <p class="error">{phoneError}</p>
  {/if}

  <label>
    Password:
    <input
      type="password"
      bind:value={password}
      on:input={() => (passwordError = validatePassword(password))}
    />
  </label>
  {#if passwordError}
    <p class="error">{passwordError}</p>
  {/if}

  <button type="submit">Submit</button>
</form>

<style>
  p {
    height: 1px;
    font-size: 15px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  label {
    min-width: 350px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }

  button {
    background-color: aqua;
    border: 3px;
    width: 150px;
    border-radius: 7px;
    margin-top: 10px;
    cursor: pointer;
  }
  button:hover {
    background-color: rgb(5, 212, 212);
  }

  .error {
    color: red;
  }
</style>
