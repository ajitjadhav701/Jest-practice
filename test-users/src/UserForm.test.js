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

test('when form is submitted it calls onUserAdd',()=>{
    //not a best implementation
    const argList=[];
    const callBack=(...args) =>{
        argList.push(args);
    }
    //try to render component
    render(<UserForm onUserAdd={callBack}/>);

    //find two inputsw
    const [nameInput,emailinput] = screen.getAllByRole('textbox');

    //Simulate typing in a name field
    user.click(nameInput);
    user.keyboard('Jane');

    //Simulate typing in a email field
    user.click(emailinput);
    user.keyboard('jane123@gmail.com');

    //find the button
    const button=screen.getByRole('button');

    //Simulate clicking a button
    user.click(button);

    //Assertion to make sure 'onUserAdd' is called with name/email
    expect(argList).toHaveLength(1);
    expect(argList[0][0]).toEqual({name:'Jane',email:'jane123@gmail.com'});
})