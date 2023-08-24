import {render,screen} from '@testing-library/react'
import user from '@testing-library/user-event'
import UserForm from './UserForm'

test('user form shows two inputs and a button',()=>{
    //1. render a component
    render(<UserForm/>);

    //2. Manipulate the component or find an element in it
    const inputs =screen.getAllByRole('textbox');
    const button=screen.getByRole('button');
    
    //3. Assertion-make sure the compo what expected to do
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
});