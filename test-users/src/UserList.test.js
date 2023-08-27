import {render,screen,within} from '@testing-library/react';
import UserList from './UserList';

test('render one row per user', () => {
    //render the components
    const users=[
        {name: 'jane',email:'jane@gmail.com'},
        {name: 'sam',email:'sam@gmail.com'},
    ]
    const {container}=render(<UserList users={users}/>);

    //find all the rows in table
    // screen.logTestingPlaygroundURL();//to select the element by going in to playground link
    //sometimes finding elements by just role doesnt works well
    //so we need to go with either 1.data-testid or 2.container.querySelector();
    //1. const rows = within(screen.getByTestId('users')).getAllByRole('row');
    //1. not a good idea because we need to do change in component html i.e. to add data-testid attribute

    //2.container.querySelector();
    //eslint-disable-next-line  //just ignore next line warning
    const rows = container.querySelectorAll('tbody tr');
    
    //Assertion correct number of rows in a table
    expect(rows).toHaveLength(2);

    
});

test('render the email and name of each user', () => {

});