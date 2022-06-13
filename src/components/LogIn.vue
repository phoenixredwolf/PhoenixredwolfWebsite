<script setup>
  import { Authenticator } from "@aws-amplify/ui-vue"
  import "@aws-amplify/ui-vue/styles.css"
  import Amplify from 'aws-amplify'
  import awsconfig from '../aws-exports'

  Amplify.configure(awsconfig)

  const formFields = {
    signIn: {
      username: {
        labelHidden: true,
        placeholder: 'Enter your email',
      },
      password: {
        labelHidden: true,
        placeholder: 'Enter your password',
      },
    },
    forceNewPassword: {
      password: {
        labelHidden: false,
        placeholder: 'Enter your Password:',
      },
    },
    resetPassword: {
      username: {
        labelHidden: false,
        placeholder: 'Enter your email:',
      },
    },
    confirmResetPassword: {
      confirmation_code: {
        labelHidden: false,
        placeholder: 'Enter your Confirmation Code:',
        label: 'New Label',
        isRequired: false,
      },
      confirm_password: {
        labelHidden: false,
        placeholder: 'Enter your Password Please:',
      },
    },
    confirmSignIn: {
      confirmation_code: {
        labelHidden: false,
        label: 'New Label',
        placeholder: 'Enter your Confirmation Code:',
        isRequired: false,
      },
    },
  }
</script>
<template>
  <authenticator :hide-sign-up="true" :form-fields="formFields">
    <template v-slot:header>
      <div style="padding: var(--amplify-space-large); text-align: left">
        <img
            class="amplify-image"
            alt="Blue Moon logo"
            src="../assets/logo.png"
        />
      </div>
    </template>

    <template v-slot:sign-in-header>
      <h3 class="amplify-heading" style="padding: var(--amplify-space-xl) 0 0 var(--amplify-space-xl)">
        Sign in to your account
      </h3>
    </template>

    <template v-slot:sign-in-footer>
      <div style="text-align: center">
        <button
            @click="toResetPassword"
            class="amplify-button amplify-field-group__control"
            data-fullwidth="false"
            data-size="small"
            data-variation="link"
            type="button"
            style="font-weight: normal"
        >
          Reset Password
        </button>
      </div>
      <div></div>
    </template>

    <template v-slot:reset-password-header>
      <h3 class="amplify-heading" style="padding: var(--amplify-space-xl) 0 0 var(--amplify-space-xl)">
        Enter Information:
      </h3>
    </template>

    <template v-slot:reset-password-footer>
      <div>Footer Information</div>
    </template>

    <template v-slot:confirm-reset-password-header>
      <h3 class="amplify-heading" style="padding: var(--amplify-space-xl) 0 0 var(--amplify-space-xl)">
        Enter Information:
      </h3>
    </template>

    <template v-slot:confirm-reset-password-footer>
      <div>Footer Information</div>
    </template>

    <template v-slot="{ user, signOut }">
      <h1>Hello {{ user.name }}</h1>
      <button @click="signOut">Sign Out</button>
    </template>

    <template v-slot:footer>
      <div style="padding: var(--amplify-space-large); text-align: center">
        <p class="amplify-text" style="color: var(--amplify-colors-neutral-80)">
          © All Rights Reserved
        </p>
      </div>
    </template>
  </authenticator>
</template>

<script>
export default {
  name: "LogIn"
}
</script>

<style scoped>


.amplify-button {
  border: none;
}
</style>