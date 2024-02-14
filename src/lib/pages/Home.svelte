<script>
    import Button from '../Button.svelte';
    import { Field, Form } from '../Form';
    import { validateRequiredField, validateEmail } from '../../lib/utils/validation';

    let values = { username: '', email: '', password: '' };
    let errors = {};
    let isSubmitting = false;
</script>

<h2>Home</h2>

<!--
<form
    on:submit|preventDefault={() => {
        errors = validate();

        if (Object.keys(errors).length === 0) {
            console.log(values);
            isSubmitting = true;
            setTimeout(() => {
                isSubmitting = false;
            }, 1000);
        }
    }}
>
    <label for="username">Username:</label><br />
    <input id="username" name="username" type="text" bind:value={values.username} /><br />
    {#if errors.username}<p>{errors.username}</p>{/if}

    <label for="email">Email:</label><br />
    <input id="email" name="email" type="email" bind:value={values.email} /><br />
    {#if errors.email}<p>{errors.email}</p>{/if}

    <label for="password">Password:</label><br />
    <input id="password" name="password" type="password" bind:value={values.password} /><br />
    {#if errors.password}<p>{errors.password}</p>{/if}

    <Button type="submit" disabled={isSubmitting}>Submit</Button>
</form>
-->
<Form
    on:submit={(e) => {
        console.log(e.detail);
    }}
    initialValues={{ username: 'Test' }}
>
    <Field label="Username" name="username" type="text" validate={validateRequiredField}></Field>
    <Field
        label="Email"
        name="email"
        type="email"
        validate={(value, label) => {
            return validateRequiredField(value, label) || validateEmail(value, label);
        }}
    ></Field>
    <Field label="Password" name="password" type="password" validate={validateRequiredField}
    ></Field>
    <Button type="submit">Submit</Button>
</Form>
