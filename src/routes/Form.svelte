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
    {#if firstNameError}
      <p class="error">{firstNameError}</p>
    {/if}
  </label>

  <label>
    Last Name:
    <input
      type="text"
      bind:value={lastName}
      on:input={() => (lastNameError = validateLastName(lastName))}
    />
    {#if lastNameError}
      <p class="error">{lastNameError}</p>
    {/if}
  </label>

  <label>
    Email:
    <input
      type="text"
      bind:value={email}
      on:input={() => (emailError = validateEmail(email))}
    />
    {#if emailError}
      <p class="error">{emailError}</p>
    {/if}
  </label>

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
    {#if phoneError}
      <p class="error">{phoneError}</p>
    {/if}
  </label>

  <label>
    Password:
    <input
      type="password"
      bind:value={password}
      on:input={() => (passwordError = validatePassword(password))}
    />
    {#if passwordError}
      <p class="error">{passwordError}</p>
    {/if}
  </label>

  <button type="submit">Submit</button>
</form>

<style>
  .error {
    color: red;
  }
</style>
