import { useState, useEffect } from 'react';
import { signupFields } from "../constants/formFields"
import FormAction from "./FormAction";
import Input from "./Input";


export default function SignUp() {
  const fields = signupFields;
  let fieldsState = {};

  fields.forEach(field => fieldsState[field.id] = '');

  const [signupState, setSignupState] = useState(fieldsState);

  const handleChange = (e) => setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupState);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          username: signupState.username,
          email: signupState.email,
          password: signupState.password,
          password_confirmation: signupState.password_confirmation,
        }),
        // credentials: 'include',
      };
      fetch('http://localhost:3000/users', requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));
    }, 3000); // Wait for 2 seconds after the last change
  
    return () => clearTimeout(timeoutId); // Clear the timeout if the component unmounts or the state changes
  }, [signupState]);
  

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {fields.map(field =>
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        )}
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
  );
}
