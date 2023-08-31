import {render,screen,within} from '@testing-library/react';
import UserList from './UserList';



function renderComponent(){
    const users = [
        { name: 'jane', email: 'jane@gmail.com' },
        { name: 'sam', email: 'sam@gmail.com' },
    ]
    render(<UserList users={users} />);

    return {
        users,
    };
}
// //beforeEach fun
// beforeEach(()=>{
// render(<UserList users={users} />);//not allowed to render compo incide it
// })/
test('render one row per user', () => {
    //render the components
    renderComponent();

    //find all the rows in table
    // screen.logTestingPlaygroundURL();//to select the element by going in to playground link
    //sometimes finding elements by just role doesnt works well
    //so we need to go with either 1.data-testid or 2.container.querySelector();
    //1. const rows = within(screen.getByTestId('users')).getAllByRole('row');
    //1. not a good idea because we need to do change in component html i.e. to add data-testid attribute

    //2.container.querySelector();
    //eslint-disable-next-line  //just ignore next line warning
    // const rows = container.querySelectorAll('tbody tr');
    
    const rows = within(screen.getByTestId('users')).getAllByRole('row');
    
    //Assertion correct number of rows in a table
    expect(rows).toHaveLength(2);

});

test('render the email and name of each user', () => {

   const {users}=renderComponent();
    // screen. logTestingPlaygroundURL(); 

    for (let user of users){
        const name=screen.getByRole('cell',{name:user.name});
        const email=screen.getByRole('cell',{name:user.email});
 
        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();
    }
});