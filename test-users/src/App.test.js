import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event'
import App from './App';

test('can receive new user and show on a list',()=>{
  //render component
    render(<App/>);

    // const nameInput=screen.getByRole('textbox',{name: /name/i,});
    // const emailInput=screen.getByRole('textbox',{email: /email/i,});
  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailinput = screen.getByRole('textbox', { name: /email/i });
    const button=screen.getByRole('button');

    user.click(nameInput);
    user.keyboard('Jane');
    user.click(emailinput);
    user.keyboard('jane123@gmail.com');
    
    user.click(button);

    // screen.debug();

    const email = screen.getByRole('cell', { email:'jane123@gmail.com'});
    const name = screen.getByRole('cell', { name: 'Jane'});

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
})